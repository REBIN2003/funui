// Next Imports
import type { MetadataRoute } from 'next'

// Config Imports
import { categories } from '@/config/components'
import { siteConfig } from '@/config/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || siteConfig.url || 'https://funui1.netlify.app'

  const routes = [
    '',
    '/theme-generator',
    '/components',
    '/blocks',
    '/react-library',
    '/docs/getting-started/introduction',
    ...categories.filter(category => !category.isComingSoon).map(category => `/docs/components/${category.slug}`)
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/docs') ? 0.8 : 0.9
  }))

  return routes
}
