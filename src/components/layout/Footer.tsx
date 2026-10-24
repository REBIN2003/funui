// Next Imports
import Link from 'next/link'

// Third-party Imports
import { Github } from 'lucide-react'

// Component Imports
import Logo from '@/components/layout/logo'

// Config Imports
import { siteConfig } from '@/config/site'

// SVG Imports
import X from '@/assets/svg/X'
import Discord from '@/assets/svg/Discord'

const Footer = () => {
  return (
    <footer className='flex w-full flex-col'>
      <div className='mx-auto w-full max-w-[1400px] border-t border-dashed px-4 py-9 min-[1400px]:border-x min-[1800px]:max-w-[1536px] sm:px-8 sm:py-16'>
        <div className='grid grid-cols-5 gap-6 sm:gap-8'>
          <div className='col-span-full flex flex-col items-start gap-4 lg:col-span-2'>
            <Link href='/'>
              <Logo />
            </Link>
            <p className='text-muted-foreground text-sm max-w-sm'>
              {siteConfig.description}
            </p>
            <div className='flex items-center gap-4'>
              <Link href={siteConfig.links.github} target='_blank' rel='noopener noreferrer'>
                <Github className='size-5' />
                <span className='sr-only'>Github</span>
              </Link>
              <Link href={siteConfig.links.discord} target='_blank' rel='noopener noreferrer'>
                <Discord className='size-5' />
                <span className='sr-only'>Discord</span>
              </Link>
              <Link href={siteConfig.links.twitter} target='_blank' rel='noopener noreferrer'>
                <X className='size-5' />
                <span className='sr-only'>X</span>
              </Link>
            </div>
            <p className='text-muted-foreground text-xs'>
              Independent open-source UI ecosystem.
            </p>
          </div>
          <div className='col-span-full grid gap-6 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:col-span-3 lg:gap-8'>
            <div className='flex flex-col gap-5'>
              <div className='text-lg font-semibold'>Components & Tools</div>
              <ul className='space-y-3 text-sm text-muted-foreground'>
                <li>
                  <Link href='/components' className='hover:text-foreground transition-colors'>
                    Components
                  </Link>
                </li>
                <li>
                  <Link href='/blocks' className='hover:text-foreground transition-colors'>
                    Blocks
                  </Link>
                </li>
                <li>
                  <Link href='/theme-generator' className='hover:text-foreground transition-colors'>
                    Theme Generator
                  </Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='text-lg font-semibold'>Resources</div>
              <ul className='space-y-3 text-sm text-muted-foreground'>
                <li>
                  <Link href='/docs/getting-started/introduction' className='hover:text-foreground transition-colors'>
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href={siteConfig.links.github} target='_blank' rel='noopener noreferrer' className='hover:text-foreground transition-colors'>
                    GitHub Repository
                  </Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='text-lg font-semibold'>Community</div>
              <ul className='space-y-3 text-sm text-muted-foreground'>
                <li>
                  <Link href={siteConfig.links.github} target='_blank' rel='noopener noreferrer' className='hover:text-foreground transition-colors'>
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link href={siteConfig.links.discord} target='_blank' rel='noopener noreferrer' className='hover:text-foreground transition-colors'>
                    Discord Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full border-t border-dashed'>
        <div className='text-muted-foreground mx-auto flex w-full max-w-[1400px] items-center justify-between gap-5 border-dashed px-8 py-6 text-center text-sm max-lg:flex-col min-[1400px]:border-x min-[1800px]:max-w-[1536px]'>
          <p>
            {`© ${new Date().getFullYear()}`}{' '}
            <Link href='/' className='text-foreground font-medium'>
              {siteConfig.name}
            </Link>
            . All rights reserved.
          </p>
          <p>
            Crafted for developers & creators. Hosted on Netlify.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
