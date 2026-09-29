// React Imports
import type { ComponentType } from 'react'

// Third-party Imports
import type { RegistryItem } from 'shadcn/schema'

type ComponentLoaderProps = {
  componentName: RegistryItem['name']
  category: string
}

// Turbopack can only build a static module map for a dynamic `import()` when the directory part
// of the path is a string literal. `import(`.../${category}/${name}`)` has two variables in one
// call site, which Turbopack sometimes fails to resolve and reports as "Cannot find module
// 'unknown'" instead of a real error. Giving each category its own call site (literal directory,
// single dynamic segment) is the documented, reliable pattern.
const importers: Record<string, (name: string) => Promise<{ default: ComponentType<any> }>> = {
  accordion: name => import(`@/components/shadcn-studio/accordion/${name}`),
  alert: name => import(`@/components/shadcn-studio/alert/${name}`),
  avatar: name => import(`@/components/shadcn-studio/avatar/${name}`),
  badge: name => import(`@/components/shadcn-studio/badge/${name}`),
  breadcrumb: name => import(`@/components/shadcn-studio/breadcrumb/${name}`),
  button: name => import(`@/components/shadcn-studio/button/${name}`),
  'button-group': name => import(`@/components/shadcn-studio/button-group/${name}`),
  calendar: name => import(`@/components/shadcn-studio/calendar/${name}`),
  card: name => import(`@/components/shadcn-studio/card/${name}`),
  checkbox: name => import(`@/components/shadcn-studio/checkbox/${name}`),
  collapsible: name => import(`@/components/shadcn-studio/collapsible/${name}`),
  combobox: name => import(`@/components/shadcn-studio/combobox/${name}`),
  'data-table': name => import(`@/components/shadcn-studio/data-table/${name}`),
  'date-picker': name => import(`@/components/shadcn-studio/date-picker/${name}`),
  dialog: name => import(`@/components/shadcn-studio/dialog/${name}`),
  'dropdown-menu': name => import(`@/components/shadcn-studio/dropdown-menu/${name}`),
  form: name => import(`@/components/shadcn-studio/form/${name}`),
  input: name => import(`@/components/shadcn-studio/input/${name}`),
  'input-mask': name => import(`@/components/shadcn-studio/input-mask/${name}`),
  'input-otp': name => import(`@/components/shadcn-studio/input-otp/${name}`),
  pagination: name => import(`@/components/shadcn-studio/pagination/${name}`),
  popover: name => import(`@/components/shadcn-studio/popover/${name}`),
  'radio-group': name => import(`@/components/shadcn-studio/radio-group/${name}`),
  select: name => import(`@/components/shadcn-studio/select/${name}`),
  sheet: name => import(`@/components/shadcn-studio/sheet/${name}`),
  sonner: name => import(`@/components/shadcn-studio/sonner/${name}`),
  switch: name => import(`@/components/shadcn-studio/switch/${name}`),
  table: name => import(`@/components/shadcn-studio/table/${name}`),
  tabs: name => import(`@/components/shadcn-studio/tabs/${name}`),
  textarea: name => import(`@/components/shadcn-studio/textarea/${name}`),
  tooltip: name => import(`@/components/shadcn-studio/tooltip/${name}`)
}

const ComponentLoader = async <TProps extends object>({
  componentName,
  category,
  ...props
}: ComponentLoaderProps & TProps) => {
  if (!componentName) {
    return null
  }

  const importer = importers[category]

  if (!importer) {
    console.error(`Failed to load component ${componentName}: unknown category "${category}"`)

    return null
  }

  try {
    const Component = (await importer(componentName)).default as ComponentType<TProps>

    return <Component {...(props as TProps)} currentPage={1} totalPages={10} />
  } catch (error) {
    console.error(`Failed to load component ${componentName}:`, error)

    return null
  }
}

export default ComponentLoader
