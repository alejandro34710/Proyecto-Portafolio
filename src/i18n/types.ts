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
    titleLine3: string
    lede: string
    snapshot: {
      title: string
      experiencesLabel: string
      startLabel: string
      roleLabel: string
      baseLabel: string
      currentFocus: string
      currentlyBuilding: string
    }
    timeline: {
      eyebrow: string
      title: string
      lede: string
      now: string
    }
    scopeOfWork: string
    whatIDo: string
    techRailLabel: string
    evolution: {
      eyebrow: string
      title: string
      body1: string
      body2: string
      stages: {
        operations: string
        data: string
        product: string
        fullStack: string
        cloud: string
        ai: string
      }
    }
    currentScope: {
      eyebrow: string
      title: string
      stages: {
        discover: { label: string; detail: string }
        design: { label: string; detail: string }
        build: { label: string; detail: string }
        ship: { label: string; detail: string }
        operate: { label: string; detail: string }
        improve: { label: string; detail: string }
      }
    }
    principles: {
      title: string
      items: readonly {
        index: string
        title: string
        body: string
      }[]
    }
    cta: {
      kicker: string
      titleLine1: string
      titleLine2: string
      lede: string
      primary: string
      secondary: string
    }
  }
  stackPage: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    titleLine3: string
    lede: string
    overview: {
      eyebrow: string
      titleLine1: string
      titleLine2: string
      lede: string
      indexTitle: string
    }
    coreTechnologies: string
    toolkit: {
      eyebrow: string
      titleLine1: string
      titleLine2: string
      lede: string
    }
    systemFlow: {
      eyebrow: string
      titleLine1: string
      titleLine2: string
      lede: string
    }
    coreStack: {
      eyebrow: string
      titleLine1: string
      titleLine2: string
    }
    principle: {
      eyebrow: string
      titleLine1: string
      titleLine2: string
      body: string
    }
    cta: {
      kicker: string
      titleLine1: string
      titleLine2: string
      lede: string
      primary: string
      secondary: string
    }
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
