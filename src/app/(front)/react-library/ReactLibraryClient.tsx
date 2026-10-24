'use client'

// React Imports
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

// Third-party Imports
import {
  Atom,
  Boxes,
  Code2,
  Component,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Layers,
  LayoutGrid,
  Maximize2,
  Play,
  RefreshCw,
  Search,
  Sparkles,
  Sliders,
  TableProperties,
  ArrowUpRight,
  Eye,
  BookOpen,
  FileCode
} from 'lucide-react'

// Component Imports
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { siteConfig } from '@/config/site'
import { getStoryInfo, storyCatalog, type StoryInfo } from './storyRegistry'

export interface ComponentFamily {
  id: string
  name: string
  category: 'base' | 'application' | 'foundations'
  description: string
  subcomponents: string[]
  storyId: string
  filePath: string
  sampleCode: string
  importCode: string
  badge?: string
}

const componentFamilies: ComponentFamily[] = [
  {
    id: 'navigation',
    name: 'Application Navigation',
    category: 'application',
    description: 'Header navigation, dual-tier sidebars, slim rails, breadcrumbs, and responsive mobile headers.',
    subcomponents: ['HeaderNavigation', 'SidebarDualTier', 'SidebarSlim', 'MobileHeader'],
    storyId: 'application-application-navigation--header-navigation-simple-demo',
    filePath: 'react/components/application/app-navigation/header-navigation.tsx',
    badge: 'Popular',
    importCode: `import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";`,
    sampleCode: `"use client";

import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projects", href: "/projects" },
  { label: "Tasks", href: "/tasks" },
  { label: "Reporting", href: "/reporting" },
  { label: "Users", href: "/users" },
];

export function HeaderNavigationDemo() {
  return (
    <HeaderNavigationBase
      activeUrl="/dashboard"
      items={navigationItems}
    />
  );
}`
  },
  {
    id: 'buttons',
    name: 'Buttons & Action Groups',
    category: 'base',
    description: 'Primary, secondary, tertiary, destructive, and icon button variations with full keyboard accessibility.',
    subcomponents: ['Button', 'ButtonGroup', 'SocialButton', 'CloseButton', 'AppStoreButtons'],
    storyId: 'base-components-buttons--primary',
    filePath: 'react/components/base/buttons/button.tsx',
    badge: 'Core',
    importCode: `import { Button } from "@/components/base/buttons/button";\nimport { ButtonGroup } from "@/components/base/button-groups/button-group";`,
    sampleCode: `"use client";

import { Button } from "@/components/base/buttons/button";
import { Check, Edit02, Trash02 } from "@untitledui/icons";

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button color="primary" size="md" iconLeading={Check}>
        Save Changes
      </Button>
      <Button color="secondary" size="md" iconLeading={Edit02}>
        Edit Details
      </Button>
      <Button color="primary-destructive" size="md" iconLeading={Trash02}>
        Delete Account
      </Button>
    </div>
  );
}`
  },
  {
    id: 'badges',
    name: 'Badges & Status Pills',
    category: 'base',
    description: 'Pills, badges, and removable tag components in subtle, modern, and outline styles with leading dots.',
    subcomponents: ['Badge', 'BadgeGroup', 'Tag', 'TagGroup'],
    storyId: 'base-components-badges--pill-color',
    filePath: 'react/components/base/badges/badges.tsx',
    importCode: `import { Badge, BadgeWithDot } from "@/components/base/badges/badges";`,
    sampleCode: `"use client";

import { Badge, BadgeWithDot } from "@/components/base/badges/badges";

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge color="brand" size="md" type="pill-color">Active</Badge>
      <BadgeWithDot color="success" size="md" type="pill-color">Completed</BadgeWithDot>
      <Badge color="warning" size="md" type="color">Pending Review</Badge>
      <Badge color="error" size="md" type="color">Declined</Badge>
    </div>
  );
}`
  },
  {
    id: 'inputs',
    name: 'Form Inputs & Fields',
    category: 'base',
    description: 'Accessible text inputs, search inputs, input groups, and textareas with prefix/suffix addons and validation.',
    subcomponents: ['Input', 'InputGroup', 'TextArea', 'SearchInput', 'HintText'],
    storyId: 'base-components-inputs--default',
    filePath: 'react/components/base/input/input.tsx',
    badge: 'Core',
    importCode: `import { Input } from "@/components/base/input/input";`,
    sampleCode: `"use client";

import { Input } from "@/components/base/input/input";
import { Mail01 } from "@untitledui/icons";

export function InputDemo() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <Input
        label="Email address"
        placeholder="olivia@untitledui.com"
        iconLeading={Mail01}
        hint="We will only send critical account security alerts."
      />
    </div>
  );
}`
  },
  {
    id: 'selection',
    name: 'Checkboxes, Radios & Toggles',
    category: 'base',
    description: 'Custom checkboxes, radio groups, and switch toggles built on React Aria for flawless accessibility.',
    subcomponents: ['Checkbox', 'CheckboxGroup', 'Radio', 'RadioGroup', 'Toggle'],
    storyId: 'base-components-checkboxes--checkboxes',
    filePath: 'react/components/base/checkbox/checkbox.tsx',
    importCode: `import { Checkbox } from "@/components/base/checkbox/checkbox";\nimport { Toggle } from "@/components/base/toggle/toggle";`,
    sampleCode: `"use client";

import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Toggle } from "@/components/base/toggle/toggle";

export function SelectionDemo() {
  return (
    <div className="space-y-4">
      <Checkbox isSelected={true}>Subscribe to weekly release notes</Checkbox>
      <Toggle label="Enable two-factor authentication" defaultSelected={true} />
    </div>
  );
}`
  },
  {
    id: 'select',
    name: 'Select & Dropdown Menus',
    category: 'base',
    description: 'Single/multi select dropdowns, action menus, and cascaded menus with keyboard focus management.',
    subcomponents: ['Select', 'ComboBox', 'Dropdown', 'Menu', 'MenuItem'],
    storyId: 'base-components-select--default',
    filePath: 'react/components/base/select/select.tsx',
    importCode: `import { Select } from "@/components/base/select/select";`,
    sampleCode: `"use client";

import { Select } from "@/components/base/select/select";

export function SelectDemo() {
  return (
    <div className="w-full max-w-sm">
      <Select label="Project status" placeholder="Choose a status">
        <Select.Item id="planning">Planning</Select.Item>
        <Select.Item id="progress">In Progress</Select.Item>
        <Select.Item id="review">Under Review</Select.Item>
        <Select.Item id="completed">Completed</Select.Item>
      </Select>
    </div>
  );
}`
  },
  {
    id: 'avatars',
    name: 'Avatars & User Profiles',
    category: 'base',
    description: 'Individual avatars, stacked avatar groups with overflow counts, status indicators, and verified badges.',
    subcomponents: ['Avatar', 'AvatarGroup', 'AvatarWithText', 'AvatarOnlineIndicator'],
    storyId: 'base-components-avatars--group',
    filePath: 'react/components/base/avatar/avatar.tsx',
    importCode: `import { Avatar, AvatarGroup } from "@/components/base/avatar/avatar";`,
    sampleCode: `"use client";

import { Avatar, AvatarGroup } from "@/components/base/avatar/avatar";

export function AvatarDemo() {
  return (
    <AvatarGroup size="md">
      <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="Olivia" />
      <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="Phoenix" />
      <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Lana" />
    </AvatarGroup>
  );
}`
  },
  {
    id: 'tables',
    name: 'Enterprise Data Tables',
    category: 'application',
    description: 'Data tables with sortable column headers, pagination controls, row selection checkboxes, and action menus.',
    subcomponents: ['Table', 'TableHeader', 'TableBody', 'Pagination', 'TableActionMenu'],
    storyId: 'application-tables--table-01-divider-line',
    filePath: 'react/components/application/table/table.tsx',
    badge: 'Enterprise',
    importCode: `import { Table, TableHeader, TableBody } from "@/components/application/table/table";`,
    sampleCode: `"use client";

import { Table, TableHeader, TableBody } from "@/components/application/table/table";

export function TableDemo() {
  return (
    <Table className="w-full">
      <TableHeader>
        <tr>
          <th>User</th>
          <th>Status</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </TableHeader>
      <TableBody>
        <tr>
          <td>Olivia Rhye</td>
          <td>Active</td>
          <td>Product Designer</td>
          <td>Edit</td>
        </tr>
      </TableBody>
    </Table>
  );
}`
  },
  {
    id: 'calendars',
    name: 'Calendars & Date Pickers',
    category: 'application',
    description: 'Single-date, multi-date, and date range pickers with calendar presets, month/year selectors, and localized formatting.',
    subcomponents: ['DatePicker', 'DateRangePicker', 'Calendar', 'MonthPicker'],
    storyId: 'application-date-pickers--calendar-demo',
    filePath: 'react/components/application/date-picker/date-picker.tsx',
    importCode: `import { DatePicker, Calendar } from "@/components/application/date-picker/date-picker";`,
    sampleCode: `"use client";

import { DatePicker } from "@/components/application/date-picker/date-picker";

export function DatePickerDemo() {
  return (
    <div className="w-full max-w-sm">
      <DatePicker label="Schedule sprint planning" />
    </div>
  );
}`
  },
  {
    id: 'tooltips',
    name: 'Tooltips & Popovers',
    category: 'base',
    description: 'Hover and focus triggered informative popovers with supporting arrow pointers and smooth transitions.',
    subcomponents: ['Tooltip', 'TooltipTrigger', 'Popover', 'HoverCard'],
    storyId: 'base-components-tooltips--tooltip',
    filePath: 'react/components/base/tooltip/tooltip.tsx',
    importCode: `import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";\nimport { Button } from "@/components/base/buttons/button";`,
    sampleCode: `"use client";

import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { Button } from "@/components/base/buttons/button";

export function TooltipDemo() {
  return (
    <TooltipTrigger>
      <Button color="secondary">Hover for details</Button>
      <Tooltip>Real-time analytics updated every 60 seconds</Tooltip>
    </TooltipTrigger>
  );
}`
  },
  {
    id: 'sliders',
    name: 'Sliders & Progress Gauges',
    category: 'base',
    description: 'Single and dual-handle range sliders, linear progress bars, and circular percentage indicators.',
    subcomponents: ['Slider', 'RangeSlider', 'ProgressBar', 'ProgressCircle'],
    storyId: 'base-components-sliders--default',
    filePath: 'react/components/base/slider/slider.tsx',
    importCode: `import { Slider } from "@/components/base/slider/slider";`,
    sampleCode: `"use client";

import { Slider } from "@/components/base/slider/slider";

export function SliderDemo() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <Slider label="Team seat allocation" defaultValue={25} />
    </div>
  );
}`
  },
  {
    id: 'charts',
    name: 'Charts & Activity Gauges',
    category: 'application',
    description: 'Recharts-powered responsive bar charts, line graphs, activity gauges, and circular progress rings.',
    subcomponents: ['ActivityGauge', 'BarChart', 'LineChart', 'PieChart', 'ProgressCircle'],
    storyId: 'application-charts--activity-gauge-xs',
    filePath: 'react/components/application/charts/charts-base.tsx',
    importCode: `import { ActivityGauge, BarChart } from "@/components/application/charts/charts-base";`,
    sampleCode: `"use client";

import { ActivityGauge } from "@/components/application/charts/charts-base";

export function GaugeDemo() {
  return (
    <div className="flex items-center gap-6">
      <ActivityGauge value={78} title="Monthly Quota" />
      <ActivityGauge value={42} title="Storage Used" />
    </div>
  );
}`
  },
  {
    id: 'carousels',
    name: 'Carousels & Media Sliders',
    category: 'application',
    description: 'Embla-powered touch-friendly carousels for media cards, testimonial sliders, and feature showcases.',
    subcomponents: ['Carousel', 'CarouselSlide', 'CarouselPagination', 'CarouselArrow'],
    storyId: 'application-carousels--carousel-md',
    filePath: 'react/components/application/carousel/carousel-base.tsx',
    importCode: `import { Carousel, CarouselSlide } from "@/components/application/carousel/carousel-base";`,
    sampleCode: `"use client";

import { Carousel, CarouselSlide } from "@/components/application/carousel/carousel-base";

export function CarouselDemo() {
  return (
    <Carousel>
      <CarouselSlide>
        <div className="p-8 rounded-xl bg-card border text-center">Feature Highlight 1</div>
      </CarouselSlide>
      <CarouselSlide>
        <div className="p-8 rounded-xl bg-card border text-center">Feature Highlight 2</div>
      </CarouselSlide>
    </Carousel>
  );
}`
  },
  {
    id: 'fileupload',
    name: 'File Upload & Dropzones',
    category: 'application',
    description: 'Drag-and-drop file upload zones with preview thumbnails, progress meters, validation, and cancel actions.',
    subcomponents: ['FileUpload', 'Dropzone', 'FileItem', 'FileUploadTrigger'],
    storyId: 'application-file-upload--file-upload-progress-bar',
    filePath: 'react/components/application/file-upload/file-upload-base.tsx',
    importCode: `import { FileUpload } from "@/components/application/file-upload/file-upload-base";`,
    sampleCode: `"use client";

import { FileUpload } from "@/components/application/file-upload/file-upload-base";

export function UploadDemo() {
  return (
    <FileUpload
      label="Upload organization logo"
      hint="Supports PNG, JPG, or SVG up to 10MB."
    />
  );
}`
  },
  {
    id: 'creditcard',
    name: 'Credit Card & Assets',
    category: 'foundations',
    description: 'Interactive credit card preview with brand recognition, chip render, and dynamic numbering.',
    subcomponents: ['CreditCard', 'PaymentIcons', 'CardChip', 'BackgroundPatterns'],
    storyId: 'shared-assets-miscellaneous-assets-credit-card--credit-card-story',
    filePath: 'react/components/shared-assets/credit-card/credit-card.tsx',
    importCode: `import { CreditCard } from "@/components/shared-assets/credit-card/credit-card";`,
    sampleCode: `"use client";

import { CreditCard } from "@/components/shared-assets/credit-card/credit-card";

export function CardDemo() {
  return (
    <CreditCard
      number="4242 4242 4242 4242"
      holder="Olivia Rhye"
      expiry="12/28"
    />
  );
}`
  },
  {
    id: 'logos',
    name: 'Brand Foundations & Logos',
    category: 'foundations',
    description: 'White-labeled Funui Studio vector logo marks, wordmarks, social icons, and payment brand vectors.',
    subcomponents: ['UntitledLogo', 'UntitledLogoMinimal', 'IntegrationIcons', 'SocialIcons'],
    storyId: 'foundations-integration-icons--integration-icons',
    filePath: 'react/components/foundations/logo/untitledui-logo.tsx',
    badge: 'White-Labeled',
    importCode: `import { UntitledLogo, UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo";`,
    sampleCode: `"use client";

import { UntitledLogo, UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo";

export function LogoDemo() {
  return (
    <div className="flex items-center gap-4">
      <UntitledLogo className="h-8 w-auto text-primary" />
      <UntitledLogoMinimal className="size-8 text-primary" />
    </div>
  );
}`
  }
]

export default function ReactLibraryClient() {
  const [activeTab, setActiveTab] = useState<'explorer' | 'catalog' | 'guide'>('explorer')
  const [selectedStory, setSelectedStory] = useState<string>('application-application-navigation--header-navigation-simple-demo')
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'base' | 'application' | 'foundations'>('all')
  const [copiedType, setCopiedType] = useState<'code' | 'import' | null>(null)
  const [copiedCatalogId, setCopiedCatalogId] = useState<string | null>(null)
  const [isCodeDrawerOpen, setIsCodeDrawerOpen] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Get active story info from the registry
  const activeStoryInfo: StoryInfo = getStoryInfo(selectedStory)

  // Synchronize when the user clicks a story inside the Storybook iframe (same-origin iframe)
  useEffect(() => {
    const syncIframeUrl = () => {
      try {
        if (iframeRef.current?.contentWindow) {
          const currentHref = iframeRef.current.contentWindow.location.href
          if (currentHref) {
            const urlObj = new URL(currentHref, window.location.origin)
            const pathParam = urlObj.searchParams.get('path')
            if (pathParam) {
              const match = pathParam.match(/\/(?:story|docs)\/([^&?]+)/)
              if (match && match[1] && match[1] !== selectedStory) {
                setSelectedStory(match[1])
              }
            }
          }
        }
      } catch {
        // Fallback in case of navigation events
      }
    }

    const interval = setInterval(syncIframeUrl, 700)
    return () => clearInterval(interval)
  }, [selectedStory])

  // Also listen to postMessage from Storybook channel if dispatched
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const payload = typeof event.data === 'string' ? JSON.parse(event.data) : event.data
        if (payload?.event?.type === 'selectStory' || payload?.event?.type === 'setCurrentStory') {
          const storyId = payload.event.args?.[0]?.storyId || payload.event.args?.[0]
          if (typeof storyId === 'string' && storyId.length > 2) {
            setSelectedStory(storyId)
          }
        }
      } catch {}
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeStoryInfo.sampleCode)
    setCopiedType('code')
    setTimeout(() => setCopiedType(null), 2500)
  }

  const handleCopyImport = () => {
    navigator.clipboard.writeText(activeStoryInfo.importCode)
    setCopiedType('import')
    setTimeout(() => setCopiedType(null), 2500)
  }

  const handleCopyCatalogSnippet = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCatalogId(id)
    setTimeout(() => setCopiedCatalogId(null), 2000)
  }

  const handleStorySelect = (storyId: string) => {
    setSelectedStory(storyId)
    setActiveTab('explorer')
    if (iframeRef.current) {
      iframeRef.current.src = `/storybook/index.html?path=/story/${storyId}`
    }
  }

  const handleReloadIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src = `/storybook/index.html?path=/story/${selectedStory}`
    }
  }

  const filteredFamilies = componentFamilies.filter(item => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subcomponents.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className='flex w-full flex-col items-start justify-center space-y-6 p-4 sm:space-y-8 sm:p-8'>
      {/* Top Banner */}
      <div className='flex w-full flex-col justify-between gap-4 border-b pb-8 lg:flex-row lg:items-center'>
        <div className='space-y-3'>
          <div className='flex items-center gap-2'>
            <Badge variant='outline' className='bg-primary/5 text-primary border-primary/20 gap-1.5 px-3 py-1 font-medium'>
              <Atom className='size-3.5 animate-spin-slow' /> React 19 + React Aria
            </Badge>
            <Badge variant='secondary' className='font-normal'>
              {siteConfig.name} Integrated
            </Badge>
            <Badge className='bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 font-normal'>
              Interactive Storybook Live
            </Badge>
          </div>
          <h1 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>React Component Library</h1>
          <p className='text-muted-foreground max-w-3xl text-base sm:text-lg'>
            Explore and interact with the complete <strong>Untitled UI React 19</strong> component ecosystem directly inside {siteConfig.name}.
            Test states, preview live components, view code, and copy production-ready primitives.
          </p>
        </div>

        <div className='flex flex-wrap items-center gap-3'>
          <Button variant='outline' size='sm' asChild>
            <Link href='/storybook/index.html' target='_blank' rel='noopener noreferrer' className='gap-2'>
              <Maximize2 className='size-4' /> Open Fullscreen Studio
            </Link>
          </Button>
          <Button size='sm' asChild>
            <Link href='/components' className='gap-2'>
              <Component className='size-4' /> Shadcn Catalog
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Tabs */}
      <Tabs value={activeTab} onValueChange={v => setActiveTab(v as any)} className='w-full space-y-6'>
        <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
          <TabsList className='grid w-full grid-cols-3 sm:w-auto'>
            <TabsTrigger value='explorer' className='gap-2'>
              <Play className='size-4' /> Interactive Explorer
            </TabsTrigger>
            <TabsTrigger value='catalog' className='gap-2'>
              <LayoutGrid className='size-4' /> Component Catalog
            </TabsTrigger>
            <TabsTrigger value='guide' className='gap-2'>
              <BookOpen className='size-4' /> Integration Guide
            </TabsTrigger>
          </TabsList>

          {activeTab === 'explorer' && (
            <div className='flex flex-wrap items-center gap-2'>
              {/* PRIMARY COPY CODE BUTTON IN TAB TOOLBAR */}
              <Button
                variant='default'
                size='sm'
                onClick={handleCopyCode}
                className='gap-2 text-xs font-semibold shadow-sm transition-all cursor-pointer'
              >
                {copiedType === 'code' ? (
                  <>
                    <Check className='size-4 text-emerald-300' />
                    <span>Code Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className='size-4' />
                    <span>Copy Code</span>
                  </>
                )}
              </Button>

              <Button
                variant='outline'
                size='sm'
                onClick={handleCopyImport}
                className='gap-1.5 text-xs cursor-pointer'
              >
                {copiedType === 'import' ? (
                  <>
                    <Check className='size-3.5 text-emerald-500' />
                    <span>Import Copied!</span>
                  </>
                ) : (
                  <>
                    <Code2 className='size-3.5' />
                    <span>Copy Import</span>
                  </>
                )}
              </Button>

              <Button
                variant='outline'
                size='sm'
                onClick={() => setIsCodeDrawerOpen(!isCodeDrawerOpen)}
                className='gap-1.5 text-xs cursor-pointer'
              >
                <FileCode className='size-3.5 text-primary' />
                <span>{isCodeDrawerOpen ? 'Hide Code' : 'View Code'}</span>
                {isCodeDrawerOpen ? <ChevronUp className='size-3' /> : <ChevronDown className='size-3' />}
              </Button>

              <Button variant='outline' size='sm' onClick={handleReloadIframe} className='gap-1.5 text-xs cursor-pointer'>
                <RefreshCw className='size-3.5' /> Reload
              </Button>

              <Button size='sm' variant='ghost' asChild className='gap-1.5 text-xs'>
                <Link href={`/storybook/index.html?path=/story/${selectedStory}`} target='_blank' rel='noopener noreferrer'>
                  <ArrowUpRight className='size-3.5' /> Pop-out
                </Link>
              </Button>
            </div>
          )}
        </div>

        {/* TAB 1: INTERACTIVE EXPLORER (STORYBOOK) */}
        <TabsContent value='explorer' className='space-y-4 outline-none'>
          {/* Quick Jump Buttons Bar */}
          <div className='flex flex-wrap items-center gap-2 rounded-xl border bg-muted/40 p-3 text-xs'>
            <span className='font-semibold text-foreground/80 flex items-center gap-1.5'>
              <Sparkles className='size-3.5 text-primary' /> Quick Jump:
            </span>
            {componentFamilies.map(item => (
              <Button
                key={item.id}
                variant={selectedStory === item.storyId ? 'default' : 'outline'}
                size='sm'
                className='h-7 text-xs px-2.5 transition-all cursor-pointer'
                onClick={() => handleStorySelect(item.storyId)}
              >
                {item.name.split(' ')[0]}
              </Button>
            ))}
          </div>

          {/* DEDICATED COPY CODE & ACTIVE COMPONENT HEADER BAR */}
          <div className='flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-card p-3 shadow-xs'>
            <div className='flex flex-wrap items-center gap-2.5'>
              <Badge className='bg-primary/10 text-primary border-primary/20 text-xs font-semibold'>
                {activeStoryInfo.category}
              </Badge>
              <span className='font-bold text-sm text-foreground'>{activeStoryInfo.componentName}</span>
              <span className='hidden sm:inline text-xs text-muted-foreground'>•</span>
              <span className='hidden sm:inline rounded bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground max-w-[280px] truncate' title={selectedStory}>
                {selectedStory}
              </span>
            </div>

            {/* INSTANT COPY BUTTONS RIGHT IN THIS AREA */}
            <div className='flex items-center gap-2'>
              <Button
                size='sm'
                variant='default'
                onClick={handleCopyCode}
                className='h-8 gap-1.5 px-3 text-xs font-medium cursor-pointer shadow-xs'
              >
                {copiedType === 'code' ? (
                  <>
                    <Check className='size-3.5 text-emerald-300' />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className='size-3.5' />
                    <span>Copy Code</span>
                  </>
                )}
              </Button>

              <Button
                size='sm'
                variant='outline'
                onClick={handleCopyImport}
                className='h-8 gap-1.5 px-3 text-xs cursor-pointer'
              >
                {copiedType === 'import' ? (
                  <>
                    <Check className='size-3.5 text-emerald-500' />
                    <span>Copied Import</span>
                  </>
                ) : (
                  <>
                    <Code2 className='size-3.5' />
                    <span>Copy Import</span>
                  </>
                )}
              </Button>

              <Button
                size='sm'
                variant={isCodeDrawerOpen ? 'secondary' : 'outline'}
                onClick={() => setIsCodeDrawerOpen(!isCodeDrawerOpen)}
                className='h-8 gap-1.5 px-3 text-xs cursor-pointer'
              >
                <FileCode className='size-3.5' />
                <span>{isCodeDrawerOpen ? 'Close Code' : 'View Code'}</span>
              </Button>
            </div>
          </div>

          {/* EXPANDABLE SOURCE CODE DRAWER */}
          {isCodeDrawerOpen && (
            <div className='relative w-full rounded-2xl border bg-neutral-900 p-5 text-neutral-100 shadow-md transition-all dark:bg-neutral-950'>
              <div className='flex items-center justify-between border-b border-neutral-800 pb-3 mb-3'>
                <div className='space-y-0.5'>
                  <div className='flex items-center gap-2'>
                    <span className='text-xs font-bold text-white'>{activeStoryInfo.componentName}</span>
                    <Badge variant='outline' className='text-[10px] text-neutral-300 border-neutral-700 py-0'>
                      TSX
                    </Badge>
                  </div>
                  <p className='font-mono text-[11px] text-neutral-400'>
                    Source: <code className='text-sky-300'>{activeStoryInfo.filePath}</code>
                  </p>
                </div>

                <div className='flex items-center gap-2'>
                  <Button
                    size='sm'
                    variant='outline'
                    className='h-7 bg-neutral-800 text-neutral-200 border-neutral-700 hover:bg-neutral-700 text-xs gap-1.5 cursor-pointer'
                    onClick={handleCopyImport}
                  >
                    {copiedType === 'import' ? <Check className='size-3 text-emerald-400' /> : <Copy className='size-3' />}
                    <span>Copy Import</span>
                  </Button>
                  <Button
                    size='sm'
                    className='h-7 bg-primary text-primary-foreground hover:bg-primary/90 text-xs gap-1.5 cursor-pointer'
                    onClick={handleCopyCode}
                  >
                    {copiedType === 'code' ? <Check className='size-3 text-emerald-300' /> : <Copy className='size-3' />}
                    <span>Copy Full Snippet</span>
                  </Button>
                </div>
              </div>

              {/* Code Pre Block */}
              <div className='overflow-x-auto rounded-lg bg-black/40 p-4 font-mono text-xs text-neutral-200 border border-neutral-800/80'>
                <pre>{activeStoryInfo.sampleCode}</pre>
              </div>

              <div className='mt-3 flex items-center justify-between text-[11px] text-neutral-400'>
                <span>Import paths use your local project aliases (<code className='text-neutral-300'>@/components/...</code>).</span>
                <span className='text-emerald-400 font-medium'>Fully compatible with React 19 & Tailwind CSS v4</span>
              </div>
            </div>
          )}

          {/* Embedded Storybook Viewer */}
          <div className='relative w-full overflow-hidden rounded-2xl border bg-background shadow-md'>
            <div className='flex items-center justify-between border-b bg-muted/30 px-4 py-2 text-xs text-muted-foreground'>
              <div className='flex items-center gap-2'>
                <span className='size-2.5 rounded-full bg-emerald-500 animate-pulse' />
                <span className='font-medium text-foreground'>Storybook Canvas Live View</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='hidden sm:inline'>React Aria + Tailwind CSS v4</span>
                <Link
                  href={`/storybook/index.html?path=/story/${selectedStory}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-foreground text-primary flex items-center gap-1 underline underline-offset-2'
                >
                  Fullscreen Studio <ExternalLink className='size-3' />
                </Link>
              </div>
            </div>
            <iframe
              ref={iframeRef}
              src={`/storybook/index.html?path=/story/${selectedStory}`}
              title='Untitled UI Storybook Interactive Explorer'
              className='h-[750px] w-full border-0'
              allow='clipboard-write'
            />
          </div>
        </TabsContent>

        {/* TAB 2: COMPONENT CATALOG & CODE PREVIEWS */}
        <TabsContent value='catalog' className='space-y-6 outline-none'>
          {/* Search & Filter Bar */}
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <div className='relative w-full max-w-md'>
              <Search className='text-muted-foreground absolute top-2.5 left-3 size-4' />
              <Input
                placeholder='Search 50+ components (e.g. Button, Input, Table, Modal)...'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='pl-9'
              />
            </div>

            <div className='flex flex-wrap items-center gap-2'>
              {(['all', 'base', 'application', 'foundations'] as const).map(cat => (
                <Button
                  key={cat}
                  variant={categoryFilter === cat ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setCategoryFilter(cat)}
                  className='capitalize text-xs h-8 cursor-pointer'
                >
                  {cat === 'all' ? 'All Collections' : cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Catalog Grid */}
          <div className='grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {filteredFamilies.map(item => (
              <Card
                key={item.id}
                className='group flex flex-col justify-between overflow-hidden border transition-all duration-200 hover:border-primary/50 hover:shadow-md'
              >
                <CardHeader className='pb-3'>
                  <div className='flex items-center justify-between gap-2'>
                    <CardTitle className='text-base font-semibold group-hover:text-primary transition-colors'>
                      {item.name}
                    </CardTitle>
                    {item.badge && (
                      <Badge variant={item.badge === 'Popular' ? 'default' : 'secondary'} className='text-[10px] px-2 py-0.5'>
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className='line-clamp-2 text-xs'>{item.description}</CardDescription>
                </CardHeader>

                <CardContent className='space-y-3 pb-3'>
                  {/* Live Iframe Preview Box */}
                  <div className='relative h-32 w-full overflow-hidden rounded-lg border bg-muted/20'>
                    <iframe
                      src={`/storybook/iframe.html?id=${item.storyId}&viewMode=story`}
                      title={`${item.name} Preview`}
                      className='pointer-events-none h-full w-full scale-90 transform-origin-top'
                      tabIndex={-1}
                    />
                    <div className='absolute inset-0 bg-transparent' />
                  </div>

                  {/* Subcomponents Chips */}
                  <div className='flex flex-wrap gap-1'>
                    {item.subcomponents.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className='rounded bg-muted/70 px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground'
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className='border-t pt-3 flex flex-col gap-2'>
                  <div className='flex w-full items-center justify-between text-xs text-muted-foreground'>
                    <span className='capitalize font-medium text-foreground/70'>{item.category}</span>
                    <span className='truncate text-[10px] font-mono max-w-[170px]' title={item.filePath}>
                      {item.filePath.replace('react/components/', '')}
                    </span>
                  </div>

                  <div className='grid grid-cols-2 w-full gap-2 pt-1'>
                    <Button
                      variant='outline'
                      size='sm'
                      className='h-8 text-xs gap-1 cursor-pointer'
                      onClick={() => handleStorySelect(item.storyId)}
                    >
                      <Eye className='size-3.5' /> Preview
                    </Button>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant='default' size='sm' className='h-8 text-xs gap-1 cursor-pointer'>
                          <Code2 className='size-3.5' /> Code
                        </Button>
                      </DialogTrigger>
                      <DialogContent className='max-w-2xl'>
                        <DialogHeader>
                          <DialogTitle>{item.name}</DialogTitle>
                          <DialogDescription>
                            Component location: <code className='text-xs font-mono'>{item.filePath}</code>
                          </DialogDescription>
                        </DialogHeader>

                        <div className='relative mt-2 rounded-lg bg-neutral-900 p-4 font-mono text-xs text-neutral-100 dark:bg-neutral-950 overflow-x-auto'>
                          <Button
                            variant='ghost'
                            size='sm'
                            className='absolute top-2 right-2 text-neutral-300 hover:text-white h-7 px-2 cursor-pointer'
                            onClick={() => handleCopyCatalogSnippet(item.sampleCode, item.id)}
                          >
                            {copiedCatalogId === item.id ? (
                              <Check className='size-3.5 text-emerald-400' />
                            ) : (
                              <Copy className='size-3.5' />
                            )}
                          </Button>
                          <pre>{item.sampleCode}</pre>
                        </div>

                        <div className='flex justify-between items-center pt-2'>
                          <p className='text-xs text-muted-foreground'>
                            All components support React 19 and React Aria keyboard navigation.
                          </p>
                          <Button size='sm' asChild className='text-xs gap-1.5'>
                            <Link href={`/storybook/index.html?path=/story/${item.storyId}`} target='_blank'>
                              <ExternalLink className='size-3.5' /> Full Story
                            </Link>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* TAB 3: INTEGRATION & USAGE GUIDE */}
        <TabsContent value='guide' className='space-y-6 outline-none'>
          <div className='grid gap-6 md:grid-cols-2'>
            <Card>
              <CardHeader>
                <div className='flex items-center gap-2'>
                  <Layers className='size-5 text-primary' />
                  <CardTitle className='text-lg'>1. Local Interactive Storybook</CardTitle>
                </div>
                <CardDescription>
                  Run the dedicated development server inside the <code className='text-xs font-mono font-bold text-foreground'>react/</code> workspace.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-3 text-sm'>
                <p className='text-muted-foreground'>
                  To test variants, toggle dark/light themes, or inspect props live in your terminal:
                </p>
                <div className='rounded-lg bg-neutral-900 p-4 font-mono text-xs text-neutral-100 dark:bg-neutral-950'>
                  <p className='text-neutral-400'># 1. Open PowerShell or terminal</p>
                  <p className='text-emerald-400'>cd react</p>
                  <p className='mt-2 text-neutral-400'># 2. Launch Storybook</p>
                  <p className='text-emerald-400'>npm.cmd run storybook</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='flex items-center gap-2'>
                  <Boxes className='size-5 text-primary' />
                  <CardTitle className='text-lg'>2. Copying Components to Your App</CardTitle>
                </div>
                <CardDescription>
                  Copy any component directly into your Next.js project structure.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-3 text-sm'>
                <p className='text-muted-foreground'>
                  Untitled UI components are standard TypeScript React components. You can copy them directly into <code className='text-xs font-mono font-bold text-foreground'>src/components/</code>:
                </p>
                <div className='rounded-lg bg-neutral-900 p-4 font-mono text-xs text-neutral-100 dark:bg-neutral-950'>
                  <p className='text-neutral-400'>// Example copy target</p>
                  <p className='text-sky-300'>copy react/components/base/buttons/button.tsx src/components/ui/</p>
                  <p className='mt-2 text-neutral-400'>// All icons can be imported from:</p>
                  <p className='text-emerald-400'>import &#123; Check, Edit02 &#125; from "@untitledui/icons";</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Architecture Highlights */}
          <Card className='border-dashed'>
            <CardHeader>
              <CardTitle className='text-lg'>Architecture & Accessibility Standards</CardTitle>
              <CardDescription>
                How Untitled UI React components deliver top-tier accessibility and performance.
              </CardDescription>
            </CardHeader>
            <CardContent className='grid gap-4 sm:grid-cols-3 text-sm'>
              <div className='space-y-1.5'>
                <h4 className='font-semibold text-foreground'>React 19 & React Aria</h4>
                <p className='text-xs text-muted-foreground'>
                  Full keyboard navigation, screen reader accessibility (WCAG 2.1 AA), and focus ring management out-of-the-box.
                </p>
              </div>
              <div className='space-y-1.5'>
                <h4 className='font-semibold text-foreground'>Tailwind CSS v4</h4>
                <p className='text-xs text-muted-foreground'>
                  Styled using modern CSS variables, fluid color tokens, and responsive utilities matching the Funui Studio design system.
                </p>
              </div>
              <div className='space-y-1.5'>
                <h4 className='font-semibold text-foreground'>Compound Component Pattern</h4>
                <p className='text-xs text-muted-foreground'>
                  Flexible composition using sub-components (e.g. Select.Item, Modal.Trigger, Table.Header) for maximum ergonomics.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
