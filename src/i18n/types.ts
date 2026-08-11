export type Locale = 'en' | 'es'

export type ChapterId =
  'projects' | 'experience' | 'stack' | 'about' | 'contact'

export type ChapterCopy = {
  label: string
  description: string
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
      experience: string
      stack: string
      about: string
      contact: string
    }
  }
  hero: {
    consoleLabel: string
    systemOnline: string
    ready: string
    role: string
    scroll: string
    tag: string
    name: string
    subtitle: string
    stackLine: string
    ctaPrimary: string
    ctaSecondary: string
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
  projects: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    lede1: string
    lede2: string
    techLine: string
    periodLine: string
    projectLabel: string
    viewCase: string
    otherWorkTitle: string
    indexTitle: string
    indexView: string
    ctaQuestion: string
    ctaExperience: string
    ctaContact: string
  }
  projectDetail: {
    selectedWork: string
    role: string
    year: string
    status: string
    scope: string
    stack: string
    viewSystem: string
    previewLabel: string
    previewSensitive: string
    contextIndex: string
    contextTitle: string
    theProblem: string
    contextLabel: string
    solutionIndex: string
    solutionTitle: string
    solutionProduct: string
    contributionIndex: string
    contributionTitle: string
    contributionIntro: string
    systemIndex: string
    systemTitle: string
    engineeringIndex: string
    engineeringTitle: string
    resultIndex: string
    resultTitle: string
    privateTitle: string
    privateBody: string
    nextCase: string
    backToSelected: string
    notFoundTitle: string
    notFoundBody: string
    backToProjects: string
    mediaPreview: string
    mediaPending: string
  }
  experience: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    lede: string
    company: string
    role: string
    period: string
    technologies: string
    related: string
    todoLabel: string
    todoBody: string
  }
  stackPage: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    lede: string
  }
  about: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    body1: string
    body2: string
    howIWork: string
    principles: readonly string[]
    location: string
    role: string
    focus: string
  }
  contact: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    lede: string
    cta: string
    email: string
    linkedin: string
    github: string
    todoValue: string
  }
  common: {
    pending: string
  }
}
