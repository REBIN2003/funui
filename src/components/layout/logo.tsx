// SVG Imports
import LogoSvg from '@/assets/svg/logo'

// Config Imports
import { siteConfig } from '@/config/site'

// Util Imports
import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <LogoSvg className='size-8.5 shrink-0' />
      <span className='text-xl font-semibold tracking-tight'>{siteConfig.name}</span>
    </div>
  )
}

export default Logo
