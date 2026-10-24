// Next Imports
import type { Metadata } from 'next'

// Component Imports
import ReactLibraryClient from './ReactLibraryClient'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: `React Component Library - ${siteConfig.name}`,
  description:
    'Explore the complete Untitled UI React 19 component library integrated with Funui Studio. Accessible components, live interactive explorer, and copy-ready code snippets.'
}

export default function ReactLibraryPage() {
  return <ReactLibraryClient />
}
