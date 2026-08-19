import type { Locale } from '@/i18n'

export type LocalizedString = Record<Locale, string>

export type LocalizedStringList = Record<Locale, readonly string[]>

export type ArchitectureLayerId =
  'interface' | 'services' | 'data' | 'cloud' | 'ai'

export type ArchitectureLayer = {
  id: ArchitectureLayerId
  label: LocalizedString
  technologies?: readonly string[]
}

export type ProjectChallenge = {
  title: LocalizedString
  description: LocalizedString
}

export type ResultTag =
  | 'PROCESS'
  | 'VISIBILITY'
  | 'AUTOMATION'
  | 'TRACEABILITY'
  | 'DECISION_SUPPORT'
  | 'OPERATIONAL_CONTROL'

export type Project = {
  slug: string
  number: string
  title: string
  shortDescription: LocalizedString
  year: string | null
  role: LocalizedString | null
  category: LocalizedString
  status: LocalizedString | null
  scope: LocalizedString | null
  featured: boolean
  privateProject: boolean
  stack: readonly string[]
  cover: string | null
  video: string | null
  poster: string | null
  overview: LocalizedString | null
  problem: LocalizedString | null
  solution: LocalizedString | null
  responsibilities: LocalizedStringList | null
  architecture: readonly ArchitectureLayer[]
  challenges: readonly ProjectChallenge[] | null
  results: LocalizedString | null
  resultTags?: readonly ResultTag[]
}

export type ExperienceLayout = 'primary' | 'split'

export type ExperienceScopeItem = {
  id: string
  index: string
  label: LocalizedString
  body: LocalizedString
}

export type ExperienceColumn = {
  id: string
  title: LocalizedString
  items: LocalizedStringList
}

export type ExperienceTechItem = {
  name: string
  /** Simple Icons slug; omit when no brand glyph should be loaded */
  slug?: string
}

export type ExperienceEntry = {
  id: string
  index: string
  company: LocalizedString
  role: LocalizedString
  roleSecondary?: LocalizedString
  location?: LocalizedString
  period: LocalizedString
  periodShort: LocalizedString
  description: LocalizedString
  current: boolean
  timelineLabel: LocalizedString
  layout: ExperienceLayout
  scope?: readonly ExperienceScopeItem[]
  responsibilities?: LocalizedStringList
  columns?: readonly ExperienceColumn[]
  technologies: readonly string[]
}

export type StackGroupId = 'interface' | 'backend' | 'data' | 'cloud' | 'ai'

export type StackItem = {
  name: string
  note?: LocalizedString
}

export type StackGroup = {
  id: StackGroupId
  label: LocalizedString
  items: readonly StackItem[]
}

export type StackDomainId = 'interface' | 'services' | 'data' | 'cloud' | 'ai'

export type StackDomain = {
  id: StackDomainId
  nodeClass: string
  label: string
  hint: LocalizedString
}

export type StackFeaturedTech = {
  name: string
  role: LocalizedString
  slug?: string
}

export type StackCapability = {
  id: StackGroupId
  index: string
  kicker: string
  titleLine1: LocalizedString
  titleLine2: LocalizedString
  lede: LocalizedString
  featured: readonly StackFeaturedTech[]
  tags: readonly string[]
  rail: readonly string[]
  flow?: readonly string[]
  flowOrientation?: 'vertical' | 'horizontal'
  gcpHighlights?: readonly string[]
}

export type StackToolkitItem = {
  name: string
  role: LocalizedString
  slug?: string
}

export type StackCoreItem = {
  index: string
  name: string
  category: LocalizedString
  slug?: string
}

export type StackSystemNodeId =
  'user' | 'interface' | 'api' | 'data' | 'cloud' | 'ai'

export type StackSystemNode = {
  id: StackSystemNodeId
  label: string
  stack: string
}
