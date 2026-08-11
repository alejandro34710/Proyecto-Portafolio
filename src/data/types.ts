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

export type ExperienceEntry = {
  id: string
  company: LocalizedString | null
  role: LocalizedString | null
  period: LocalizedString | null
  description: LocalizedString | null
  responsibilities: LocalizedStringList | null
  technologies: readonly string[]
  relatedProjectSlugs: readonly string[]
  /** Explicit placeholder when real employment data is not yet available */
  isTodo?: boolean
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
