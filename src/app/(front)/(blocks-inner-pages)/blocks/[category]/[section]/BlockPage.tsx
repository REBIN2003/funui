'use client'

// React Imports
import type { MouseEvent } from 'react'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import { CheckIcon, TerminalIcon } from 'lucide-react'

// Type Imports
import type { BlockType, SectionType } from '@/types/blocks'
import type { ProcessedComponentsData } from '@/types/components'

// Component Imports
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import ComponentDetails from '@/components/ComponentDetails'

// Hook Imports
import { useCopy } from '@/hooks/useCopy'

type Props = {
  sectionBlockData: SectionType
  sectionBlocksData: BlockType[]
  index: number
  section: string
  category: string
  // The block's source files + file tree, used by the "View code" dialog. Undefined when the
  // block's files couldn't be resolved (falls back to just showing the CLI command).
  componentsData?: ProcessedComponentsData
}

const BlockPage = ({ index, sectionBlockData, sectionBlocksData, section, category, componentsData }: Props) => {
  // Hooks
  const { copied, copy } = useCopy(1000)

  const block = sectionBlocksData[index]

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>, blockSlug: string) => {
    e.preventDefault()

    // Fall back to the current origin if NEXT_PUBLIC_APP_URL wasn't set at build time, so the
    // copied command never contains the literal string "undefined" as its host.
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin

    copy(`npx shadcn@latest add ${appUrl}/r/${blockSlug}.json`)
  }

  return (
    <Card className='gap-0 overflow-hidden p-0 shadow-none'>
      {/* Only the thumbnail navigates to the full preview — the CLI/code buttons below live
          outside this link so they don't need click-hijacking tricks to stay clickable. */}
      <Link href={`/preview/${category}/${section}/${block.slug}`} target='_blank'>
        <CardContent className='bg-muted flex h-[208px] items-center justify-center border-b p-6'>
          {/* Light mode image */}
          <img
            src={`${sectionBlockData.imgSrc.substring(0, sectionBlockData.imgSrc.lastIndexOf('/'))}/${section}/${block.slug}.png?height=159&format=auto`}
            alt={`${sectionBlockData.imgAlt.replace('Blocks', 'Block')} ${index + 1}`}
            className='max-h-full dark:hidden'
          />
          {/* Dark mode image */}
          <img
            src={`${sectionBlockData.imgSrc.substring(0, sectionBlockData.imgSrc.lastIndexOf('/'))}/${section}/${block.slug}-dark.png?height=159&format=auto`}
            alt={`${sectionBlockData.imgAlt.replace('Blocks', 'Block')} ${index + 1}`}
            className='hidden max-h-full dark:inline-block'
          />
        </CardContent>
      </Link>

      <CardContent className='flex items-center justify-between gap-4 py-3.5'>
        <div className='flex flex-col gap-1.5'>
          <CardTitle className='flex items-center gap-2 text-lg'>
            {block.title}
            {block.isNew && <Badge className='bg-primary/10 text-primary rounded-full'>New</Badge>}
          </CardTitle>
        </div>
        <div className='flex items-center gap-1'>
          {/* ComponentDetails renders its own Tooltip + Dialog with the "View code" trigger */}
          <ComponentDetails componentsData={componentsData} variant='inline' />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='size-7 rounded-sm'
                onClick={e => handleButtonClick(e, block.slug)}
                disabled={copied}
              >
                {copied ? <CheckIcon className='text-green-500' /> : <TerminalIcon />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{copied ? 'Copied!' : 'Copy CLI'}</TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  )
}

export default BlockPage
