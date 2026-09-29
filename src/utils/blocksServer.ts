// React Imports
import { cache } from 'react'

// Third-party Imports
import 'server-only'
import type { RegistryItem } from 'shadcn/schema'

// Registry Imports
import registry from '@/../registry.json'

// Util Imports
import { getFileContent, createFileTreeForComponentItemFiles } from '@/utils/serverHelpers'

// Server-only: reads block source files from disk. Kept separate from utils/blocks.ts, which
// is also imported by client components (e.g. BlocksIndexContent) — importing `fs`/`server-only`
// there would break the client bundle for everyone using that file, not just this feature.
const blocks: RegistryItem[] = registry.items.filter(item => item.type === 'registry:block') as RegistryItem[]

// Loads a block's full source (every file it's made of, with content read from disk) so the
// "View code" dialog has something to show and copy — mirrors getComponentItem in
// utils/components.ts, since blocks (registry:block) and components (registry:component) are
// separate item types in registry.json and were never wired up to share this before.
export async function getBlockItem(name: string) {
  const item = blocks.find(block => block.name === name)

  if (!item || !item.files) {
    return null
  }

  const files: RegistryItem['files'] = await Promise.all(
    item.files.map(async file => ({
      ...file,
      path: file.path.replace('src/', ''),
      content: await getFileContent(file)
    }))
  )

  return {
    ...item,
    files
  } as RegistryItem
}

export const getCachedBlockItem = cache(async (name: string) => {
  return await getBlockItem(name)
})

export const getCachedBlockFileTree = cache((files: Array<{ path: string; target?: string }>) => {
  if (!files) {
    return null
  }

  return createFileTreeForComponentItemFiles(files)
})
