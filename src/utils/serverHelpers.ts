// Node Imports
import path from 'path'
import { promises as fs } from 'fs'

// Next Imports
import { cookies } from 'next/headers'

// Third-party Imports
import 'server-only'
import type { RegistryItem } from 'shadcn/schema'

// Type Imports
import type { ModeSettings } from '@/contexts/settingsContext'
import type { FileTree } from '@/types/components'

export const getSettingsFromCookie = async (): Promise<ModeSettings> => {
  try {
    const cookieStore = await cookies()
    const settings = cookieStore.get('shadcn-studio-mode')

    if (!settings?.value) {
      return {
        mode: 'light'
      }
    }

    try {
      return JSON.parse(settings.value) as ModeSettings
    } catch {
      return {
        mode: 'light'
      }
    }
  } catch {
    return {
      mode: 'light'
    }
  }
}

// Shared by utils/components.ts (registry:component items) and utils/blocks.ts (registry:block
// items) to read a registry file's content from disk. Lives here, behind the `server-only`
// import above, so that neither of those two files needs to import `fs`/`path` directly — both
// are also imported by client components (e.g. BlocksIndexContent) for their non-fs helpers, and
// a stray `fs` import anywhere in that chain breaks the client bundle.
export async function getFileContent(file: NonNullable<RegistryItem['files']>[number]): Promise<string> {
  try {
    // file.path always comes from our own registry.json (files under src/), never from user
    // input, so this is safe. The ignore comment stops Turbopack from tracing/bundling the
    // whole project just because it sees a dynamic fs read.
    return await fs.readFile(path.join(/* turbopackIgnore: true */ process.cwd(), file.path), 'utf-8')
  } catch (error) {
    console.error(`Error reading file content for ${file.path}:`, error)

    return ''
  }
}

export function createFileTreeForComponentItemFiles(files: Array<{ path: string; target?: string }>) {
  const root: FileTree[] = []

  for (const file of files) {
    const filePath = file.target ?? file.path.replace('src/', '')
    const parts = filePath.split('/')
    let currentLevel = root

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isFile = i === parts.length - 1
      const existingNode = currentLevel.find(node => node.name === part)

      if (existingNode) {
        if (isFile) {
          // Update existing file node with full path
          existingNode.path = filePath
        } else {
          // Move to next level in the tree
          currentLevel = existingNode.children!
        }
      } else {
        const newNode: FileTree = isFile ? { name: part, path: filePath } : { name: part, children: [] }

        currentLevel.push(newNode)

        if (!isFile) {
          currentLevel = newNode.children!
        }
      }
    }
  }

  return root
}
