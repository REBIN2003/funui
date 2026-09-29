// Node Imports
import path from 'path'
import { promises as fs } from 'fs'

// Next Imports
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const filePath = request.nextUrl.searchParams.get('path')

  if (!filePath) {
    return NextResponse.json({ error: 'No file path provided' }, { status: 400 })
  }

  // Only allow reading files inside src/ to prevent path traversal (e.g. ?path=../../.env)
  const allowedRoot = path.join(process.cwd(), 'src')
  const fullPath = path.resolve(process.cwd(), filePath)

  if (!fullPath.startsWith(allowedRoot + path.sep)) {
    return NextResponse.json({ error: 'Invalid file path' }, { status: 400 })
  }

  try {
    const fileContent = await fs.readFile(fullPath, 'utf-8')

    return NextResponse.json({ content: fileContent })
  } catch {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }
}
