export interface StoryInfo {
  storyId: string
  title: string
  componentName: string
  category: 'Base' | 'Application' | 'Foundations' | 'Shared Assets'
  filePath: string
  importCode: string
  sampleCode: string
}

export const storyCatalog: Record<string, StoryInfo> = {
  'application-application-navigation': {
    storyId: 'application-application-navigation--header-navigation-simple-demo',
    title: 'Application Navigation',
    componentName: 'Header & Sidebar Navigation',
    category: 'Application',
    filePath: 'react/components/application/app-navigation/header-navigation.tsx',
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
  'base-components-buttons': {
    storyId: 'base-components-buttons--primary',
    title: 'Buttons',
    componentName: 'Button Primitives & Action Groups',
    category: 'Base',
    filePath: 'react/components/base/buttons/button.tsx',
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
  'base-components-badges': {
    storyId: 'base-components-badges--pill-color',
    title: 'Badges & Tags',
    componentName: 'Badges & Status Pills',
    category: 'Base',
    filePath: 'react/components/base/badges/badges.tsx',
    importCode: `import { Badge, BadgeWithDot } from "@/components/base/badges/badges";`,
    sampleCode: `"use client";

import { Badge, BadgeWithDot } from "@/components/base/badges/badges";

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge color="brand" size="md" type="pill-color">
        Active
      </Badge>
      <BadgeWithDot color="success" size="md" type="pill-color">
        Completed
      </BadgeWithDot>
      <Badge color="warning" size="md" type="color">
        Pending Review
      </Badge>
      <Badge color="error" size="md" type="color">
        Declined
      </Badge>
    </div>
  );
}`
  },
  'base-components-badge-groups': {
    storyId: 'base-components-badge-groups--pill-color-leading',
    title: 'Badge Groups',
    componentName: 'Badge Groups & Feature Pills',
    category: 'Base',
    filePath: 'react/components/base/badge-groups/badge-group.tsx',
    importCode: `import { BadgeGroup } from "@/components/base/badge-groups/badge-group";`,
    sampleCode: `"use client";

import { BadgeGroup } from "@/components/base/badge-groups/badge-group";
import { ArrowRight } from "@untitledui/icons";

export function BadgeGroupDemo() {
  return (
    <BadgeGroup color="brand" size="md" iconTrailing={ArrowRight}>
      <BadgeGroup.Badge>New Feature</BadgeGroup.Badge>
      <BadgeGroup.Text>Check out the new dashboard analytics</BadgeGroup.Text>
    </BadgeGroup>
  );
}`
  },
  'base-components-inputs': {
    storyId: 'base-components-inputs--default',
    title: 'Form Inputs',
    componentName: 'Form Input Fields',
    category: 'Base',
    filePath: 'react/components/base/input/input.tsx',
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
  'base-components-checkboxes': {
    storyId: 'base-components-checkboxes--checkboxes',
    title: 'Checkboxes',
    componentName: 'Accessible Checkboxes & Groups',
    category: 'Base',
    filePath: 'react/components/base/checkbox/checkbox.tsx',
    importCode: `import { Checkbox } from "@/components/base/checkbox/checkbox";`,
    sampleCode: `"use client";

import { Checkbox } from "@/components/base/checkbox/checkbox";

export function CheckboxDemo() {
  return (
    <div className="space-y-3">
      <Checkbox isSelected={true}>
        Subscribe to product announcements
      </Checkbox>
      <Checkbox>
        Receive monthly performance analytics
      </Checkbox>
    </div>
  );
}`
  },
  'base-components-toggles': {
    storyId: 'base-components-toggles--toggles',
    title: 'Toggles & Switches',
    componentName: 'Toggle Switch Primitives',
    category: 'Base',
    filePath: 'react/components/base/toggle/toggle.tsx',
    importCode: `import { Toggle } from "@/components/base/toggle/toggle";`,
    sampleCode: `"use client";

import { Toggle } from "@/components/base/toggle/toggle";

export function ToggleDemo() {
  return (
    <div className="space-y-4">
      <Toggle label="Enable two-factor authentication" hint="Add an extra layer of security to your account." defaultSelected={true} />
    </div>
  );
}`
  },
  'base-components-select': {
    storyId: 'base-components-select--default',
    title: 'Select Menus',
    componentName: 'Accessible Select Dropdowns',
    category: 'Base',
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
  'base-components-avatars': {
    storyId: 'base-components-avatars--group',
    title: 'Avatars',
    componentName: 'Avatars & User Profile Groups',
    category: 'Base',
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
  'application-tables': {
    storyId: 'application-tables--table-01-divider-line',
    title: 'Enterprise Tables',
    componentName: 'Data Tables & Pagination',
    category: 'Application',
    filePath: 'react/components/application/table/table.tsx',
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
          <th>Actions</th>
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
  'application-date-pickers': {
    storyId: 'application-date-pickers--calendar-demo',
    title: 'Date Pickers',
    componentName: 'Date Pickers & Calendars',
    category: 'Application',
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
  'application-charts': {
    storyId: 'application-charts--activity-gauge-xs',
    title: 'Charts & Gauges',
    componentName: 'Activity Gauges & Analytics Charts',
    category: 'Application',
    filePath: 'react/components/application/charts/charts-base.tsx',
    importCode: `import { ActivityGauge, BarChart } from "@/components/application/charts/charts-base";`,
    sampleCode: `"use client";

import { ActivityGauge } from "@/components/application/charts/charts-base";

export function ChartDemo() {
  return (
    <div className="flex items-center gap-6">
      <ActivityGauge value={78} title="Monthly Quota" />
      <ActivityGauge value={42} title="Storage Used" />
    </div>
  );
}`
  },
  'application-carousels': {
    storyId: 'application-carousels--carousel-md',
    title: 'Carousels',
    componentName: 'Carousels & Media Sliders',
    category: 'Application',
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
  'application-file-upload': {
    storyId: 'application-file-upload--file-upload-progress-bar',
    title: 'File Upload',
    componentName: 'File Upload & Dropzone',
    category: 'Application',
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
  'base-components-tooltips': {
    storyId: 'base-components-tooltips--tooltip',
    title: 'Tooltips',
    componentName: 'Tooltips & Context Popovers',
    category: 'Base',
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
  'base-components-sliders': {
    storyId: 'base-components-sliders--default',
    title: 'Sliders & Progress',
    componentName: 'Sliders & Range Controls',
    category: 'Base',
    filePath: 'react/components/base/slider/slider.tsx',
    importCode: `import { Slider } from "@/components/base/slider/slider";`,
    sampleCode: `"use client";

import { Slider } from "@/components/base/slider/slider";

export function SliderDemo() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <Slider label="Budget allocation" defaultValue={40} />
    </div>
  );
}`
  },
  'application-tabs': {
    storyId: 'application-tabs--button-brand-horizontal',
    title: 'Tabs',
    componentName: 'Application Tabs & Pill Switchers',
    category: 'Application',
    filePath: 'react/components/application/tabs/tabs.tsx',
    importCode: `import { TabList, Tabs } from "@/components/application/tabs/tabs";`,
    sampleCode: `"use client";

import { Tabs, TabList } from "@/components/application/tabs/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview">
      <TabList>
        <Tabs.Tab id="overview">Overview</Tabs.Tab>
        <Tabs.Tab id="analytics">Analytics</Tabs.Tab>
        <Tabs.Tab id="reports">Reports</Tabs.Tab>
        <Tabs.Tab id="settings">Settings</Tabs.Tab>
      </TabList>
    </Tabs>
  );
}`
  },
  'shared-assets-miscellaneous-assets-credit-card': {
    storyId: 'shared-assets-miscellaneous-assets-credit-card--credit-card-story',
    title: 'Credit Card',
    componentName: 'Credit Card & Shared Assets',
    category: 'Shared Assets',
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
  'foundations-integration-icons': {
    storyId: 'foundations-integration-icons--integration-icons',
    title: 'Integration Icons',
    componentName: 'Brand & Integration Icons',
    category: 'Foundations',
    filePath: 'react/components/foundations/logo/untitledui-logo.tsx',
    importCode: `import { UntitledLogo, UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo";`,
    sampleCode: `"use client";

import { UntitledLogo, UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo";

export function BrandLogoDemo() {
  return (
    <div className="flex items-center gap-4">
      <UntitledLogo className="h-8 w-auto text-primary" />
      <UntitledLogoMinimal className="size-8 text-primary" />
    </div>
  );
}`
  }
}

export function getStoryInfo(storyId: string): StoryInfo {
  // 1. Direct match on storyId
  for (const item of Object.values(storyCatalog)) {
    if (item.storyId === storyId) return item
  }

  // 2. Match by prefix
  for (const [key, item] of Object.entries(storyCatalog)) {
    if (storyId.startsWith(key) || key.startsWith(storyId)) {
      return item
    }
  }

  // 3. Match by keyword
  const normalized = storyId.toLowerCase()
  if (normalized.includes('nav')) return storyCatalog['application-application-navigation']
  if (normalized.includes('button')) return storyCatalog['base-components-buttons']
  if (normalized.includes('badge')) return storyCatalog['base-components-badges']
  if (normalized.includes('input') || normalized.includes('text')) return storyCatalog['base-components-inputs']
  if (normalized.includes('check') || normalized.includes('radio') || normalized.includes('toggle'))
    return storyCatalog['base-components-checkboxes']
  if (normalized.includes('select') || normalized.includes('dropdown') || normalized.includes('menu'))
    return storyCatalog['base-components-select']
  if (normalized.includes('avatar')) return storyCatalog['base-components-avatars']
  if (normalized.includes('table')) return storyCatalog['application-tables']
  if (normalized.includes('date') || normalized.includes('calendar')) return storyCatalog['application-date-pickers']
  if (normalized.includes('chart') || normalized.includes('gauge')) return storyCatalog['application-charts']
  if (normalized.includes('carousel')) return storyCatalog['application-carousels']
  if (normalized.includes('upload')) return storyCatalog['application-file-upload']
  if (normalized.includes('card')) return storyCatalog['shared-assets-miscellaneous-assets-credit-card']
  if (normalized.includes('tab')) return storyCatalog['application-tabs']
  if (normalized.includes('slider') || normalized.includes('progress')) return storyCatalog['base-components-sliders']
  if (normalized.includes('tooltip') || normalized.includes('popover')) return storyCatalog['base-components-tooltips']
  if (normalized.includes('icon') || normalized.includes('logo')) return storyCatalog['foundations-integration-icons']

  // 4. Default fallback
  return storyCatalog['application-application-navigation']
}

