# White-Labeling & Netlify Fixes Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** White-label both shadcn-studio and Untitled UI with custom brand name and logo JSX, fix the TypeScript/Netlify build boundary, and clean up external ecosystem references.

**Architecture:** Centralize site branding configuration into `src/config/site.ts`, replace the Logo JSX components in both projects, configure `tsconfig.json` to exclude `react/` during root Next.js build, update headers/footers/metadata, and rebuild registry manifests.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn CLI.

---

### Task 1: Fix Netlify TypeScript Build Boundary

**Files:**
- Modify: `tsconfig.json:43-46`

**Problem:**
The root Next.js build invokes `tsc --noEmit`. Because `tsconfig.json` includes `**/*.ts` and `**/*.tsx` without excluding `react/`, TypeScript attempts to compile `react/` using root's path aliases and missing packages, failing the Netlify deployment.

**Step 1: Update `tsconfig.json` to exclude `react/`**
In `tsconfig.json`:
```json
  "exclude": [
    "node_modules",
    ".next",
    "react"
  ]
```

**Step 2: Verify fix**
Run: `npm.cmd run check-types`
Expected: 0 errors in root app.

---

### Task 2: Create Centralized Site Branding Configuration

**Files:**
- Create: `src/config/site.ts`

**Architecture:**
Rather than hardcoding the brand name and links across multiple components, centralize all brand metadata in a single config file that components import.

**Code:**
```typescript
export const siteConfig = {
  name: "FunUI", // Replace with your desired brand name
  shortName: "FunUI",
  description: "A modern collection of customizable UI components, blocks, and templates paired with a powerful theme generator.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://funui1.netlify.app",
  ogImage: "/og.png",
  links: {
    github: "https://github.com/REBIN2003/funui",
    twitter: "https://twitter.com/",
    discord: "https://discord.com/"
  },
  creator: {
    name: "FunUI Team",
    url: "https://funui1.netlify.app"
  }
}
```

---

### Task 3: Replace Root Application Logo JSX

**Files:**
- Modify: `src/assets/svg/logo.tsx`
- Modify: `src/components/layout/logo.tsx`

**Step 1: Replace SVG Mark in `src/assets/svg/logo.tsx`**
Plug in your custom SVG or icon JSX:
```tsx
import type { SVGAttributes } from 'react'

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    // Insert your custom Logo SVG / JSX here
    <svg width='1em' height='1em' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect width='32' height='32' rx='8' className='fill-primary' />
      <path d='M8 16h16M16 8v16' stroke='currentColor' strokeWidth='3' strokeLinecap='round' className='stroke-primary-foreground' />
    </svg>
  )
}

export default Logo
```

**Step 2: Update `src/components/layout/logo.tsx`**
Import `siteConfig` to dynamically display the brand name:
```tsx
import LogoSvg from '@/assets/svg/logo'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <LogoSvg className='size-8.5' />
      <span className='text-xl font-semibold'>{siteConfig.name}</span>
    </div>
  )
}

export default Logo
```

---

### Task 4: Replace Untitled UI Logo in `react/`

**Files:**
- Modify: `react/components/foundations/logo/untitledui-logo-minimal.tsx`
- Modify: `react/components/foundations/logo/untitledui-logo.tsx`

**Step 1: Update `untitledui-logo-minimal.tsx`**
Replace the internal Untitled UI geometric mark with your standalone icon mark.

**Step 2: Update `untitledui-logo.tsx`**
Replace the letter paths with your brand text or compound logo JSX:
```tsx
"use client";

import type { HTMLAttributes } from "react";
import { cx } from "@/utils/cx";
import { UntitledLogoMinimal } from "./untitledui-logo-minimal";

export const UntitledLogo = (props: HTMLAttributes<HTMLOrSVGElement>) => {
    return (
        <div {...props} className={cx("flex h-8 w-max items-center justify-start gap-2.5", props.className)}>
            <UntitledLogoMinimal className="aspect-square h-full w-auto shrink-0" />
            <span className="text-xl font-bold tracking-tight text-fg-primary">FunUI</span>
        </div>
    );
};
```
*(All 7 navigation components across `react/` immediately inherit this updated branding.)*

---

### Task 5: Update Root Metadata, Titles, and Favicons

**Files:**
- Modify: `src/app/layout.tsx`

**Changes:**
1. Update `metadata.title` to use `siteConfig.name`:
   ```typescript
   title: {
     template: `%s - ${siteConfig.name}`,
     default: `${siteConfig.name} - UI Components, Blocks & Templates`
   }
   ```
2. Replace hardcoded `cdn.shadcnstudio.com` favicon URLs with local `/favicon.ico` and `/apple-touch-icon.png` in `/public`.
3. Update OpenGraph site name, URL, and Twitter cards.

---

### Task 6: Clean Up Header, Footer, and Navigation Links

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/components/layout/Sidebar.tsx`

**Changes:**
1. **`Header.tsx`:** Remove ThemeSelection roadmap/changelog external links or point them to your repository (`https://github.com/REBIN2003/funui`). Update GitHub, Discord, and X links.
2. **`Footer.tsx`:**
   - Remove ThemeSelection ecosystem links (FlyonUI, PixInvent, AllShadCN, JetShip).
   - Update copyright text: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`
   - Point product links (blocks, components, theme-generator) to internal routes.
3. **`Sidebar.tsx`:** Remove or point external promotional links (`shadcnstudio.com/templates`, `/figma`, `/mcp`) to internal pages.

---

### Task 7: Update Documentation and FAQ Text

**Files:**
- Modify: `src/assets/data/faqs.ts`
- Modify: `src/app/(pages)/docs/getting-started/introduction/page.tsx`

**Changes:**
Replace occurrences of `"shadcn/studio"` with your brand name in questions, answers, and intro documentation.

---

### Task 8: Update Registry Configuration & Rebuild Manifests

**Files:**
- Modify: `registry.json:3-4`
- Run: `npm run registry:build`

**Changes:**
1. In `registry.json`, change:
   ```json
   "name": "funui",
   "homepage": "https://funui1.netlify.app"
   ```
2. Run `npm.cmd run registry:build` to rebuild all 660 component manifests in `public/r/*.json` with your registry URL and namespace.

---

### Task 9: Verification & Netlify Deployment Readiness

**Step 1:** Run `npm.cmd run check-types` to ensure zero TypeScript errors.
**Step 2:** Run `npm.cmd run build` to ensure the Next.js production build completes cleanly.
**Step 3:** Commit all changes:
```bash
git add .
git commit -m "feat(branding): white-label application and fix Netlify build boundary"
git push origin main
```
Netlify will automatically build and deploy the cleanly white-labeled application.

