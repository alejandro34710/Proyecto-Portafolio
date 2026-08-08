export type Locale = 'en' | 'es'

export type ChapterId =
  | 'philosophy'
  | 'experience'
  | 'projects'
  | 'architecture'
  | 'ai'
  | 'lab'
  | 'journal'
  | 'contact'

export type ChapterCopy = {
  label: string
  subtitle: string
  description: string
  summary: string
  editorial: string
  technologies: readonly string[]
  projectCount: string
}

export type Dictionary = {
  meta: {
    language: string
  }
  header: {
    brand: string
    theme: string
    language: string
    cta: string
    nav: {
      home: string
      projects: string
      architecture: string
      ai: string
      lab: string
      journal: string
      contact: string
    }
  }
  hero: {
    consoleLabel: string
    systemOnline: string
    ready: string
    role: string
    scroll: string
  }
  philosophy: {
    label: string
    systemLabel: string
    eyebrow: string
    statement: readonly string[]
    manifestoLabel: string
    principles: readonly string[]
    signals: ReadonlyArray<{
      action: string
      label: string
    }>
    transitionLabel: string
    nextLabel: string
  }
  systemMap: {
    tag: string
    headline: string
    headlineLine2: string
    lede: string
    scroll: string
    explore: string
    status: string
    techLabels: {
      frontend: string
      backend: string
      database: string
      cloud: string
      ai: string
      infrastructure: string
    }
    chapters: Record<ChapterId, ChapterCopy>
  }
}
