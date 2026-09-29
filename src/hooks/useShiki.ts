'use client'

// React Imports
import { useState, useEffect, useCallback } from 'react'

// Third-party Imports
import { codeToHtml, createHighlighter } from 'shiki'
import type { BundledLanguage, Highlighter } from 'shiki'

let highlighterPromise: Promise<Highlighter> | null = null

// Module-level cache shared by every CodeBlock, so re-opening a dialog is instant
const highlightedCache = new Map<string, string>()

// Initialize the highlighter once for the entire application
const getHighlighter = () => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-light', 'github-dark'],
      langs: ['html', 'css', 'js', 'ts', 'tsx', 'json']
    }).catch(error => {
      // Allow a retry on the next call instead of caching the rejection forever
      highlighterPromise = null
      throw error
    })
  }

  return highlighterPromise
}

// Start loading the highlighter as soon as possible
if (typeof window !== 'undefined') {
  getHighlighter().catch(error => {
    console.error('Failed to initialize Shiki highlighter:', error)
  })
}

export const useShiki = () => {
  // States
  const [isHighlighterReady, setIsHighlighterReady] = useState(false)

  useEffect(() => {
    let active = true

    getHighlighter()
      .then(() => {
        if (active) setIsHighlighterReady(true)
      })
      .catch(error => {
        console.error('Failed to initialize syntax highlighter:', error)
      })

    return () => {
      active = false
    }
  }, [])

  // Stable callback. Returns highlighted HTML, or null when highlighting fails —
  // never raw source, since callers render the result as HTML.
  const highlightCode = useCallback(async (code: string, lang: string): Promise<string | null> => {
    const cacheKey = `${lang}:${code}`
    const cached = highlightedCache.get(cacheKey)

    if (cached) return cached

    try {
      const highlighted = await codeToHtml(code, {
        lang: lang as BundledLanguage,
        themes: {
          light: 'github-light',
          dark: 'github-dark'
        }
      })

      highlightedCache.set(cacheKey, highlighted)

      return highlighted
    } catch (error) {
      console.error(`Error highlighting code with language ${lang}:`, error)

      return null
    }
  }, [])

  return {
    highlightCode,
    isHighlighterReady
  }
}
