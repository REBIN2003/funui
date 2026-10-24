export const siteConfig = {
  name: 'Funui Studio',
  shortName: 'Funui Studio',
  description:
    'Accelerate your project development with ready-to-use, customizable Funui Studio components, blocks, and templates paired with a powerful theme generator.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://funui1.netlify.app',
  ogImage: '/og.png',
  links: {
    github: 'https://github.com/REBIN2003/funui',
    twitter: 'https://x.com/',
    discord: 'https://discord.com/'
  },
  creator: {
    name: 'Funui Studio Team',
    url: 'https://funui1.netlify.app'
  }
}

export type SiteConfig = typeof siteConfig
