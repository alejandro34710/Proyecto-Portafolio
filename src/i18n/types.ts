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
  home: {
    meta: {
      description: string
    }
    hero: {
      availability: string
      identity: string
      titleLine1: string
      titleLine2: string
      intro: string
      viewProjects: string
      viewExperience: string
      downloadCv: string
    }
    marqueeLabel: string
    work: {
      eyebrow: string
      titleLine1: string
      titleLine2: string
      lede: string
      privateBadge: string
      viewProject: string
      allProjects: string
    }
    system: {
      eyebrow: string
      titleLine1: string
      titleLine2: string
      lede: string
      inspectStack: string
      layers: readonly {
        index: string
        title: string
        description: string
        tech: string
      }[]
    }
    experiencePreview: {
      eyebrow: string
      title: string
      lede: string
      currentBadge: string
      currentRole: string
      currentCompany: string
      currentPeriod: string
      currentLocation: string
      currentSummary: string
      pastBadge: string
      pastRole: string
      pastCompany: string
      pastPeriod: string
      pastLocation: string
      pastSummary: string
      cta: string
    }
    profileTransition: {
      eyebrow: string
      titleLine1: string
      titleLine2: string
      body: string
      formationLabel: string
      formationValue: string
      approachLabel: string
      approachValue: string
      cta: string
    }
    contact: {
      eyebrow: string
      titleLine1: string
      titleLine2: string
      lede: string
      primaryCta: string
      secondaryCta: string
      channelBadge: string
      roleLabel: string
      roleValue: string
      locationLabel: string
      locationValue: string
      focusLabel: string
      focusValue: string
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
    hero: {
      statusBadge: string
      currentRole: string
      company: string
      period: string
      location: string
      trajectoryAnchor: string
      summary: string
      currentFocusLabel: string
      currentFocusValue: string
    }
    trajectory: {
      eyebrow: string
      title: string
      phase1: {
        index: string
        period: string
        role: string
        company: string
        focus: string
      }
      connectorText: string
      phase2: {
        index: string
        period: string
        role: string
        company: string
        focus: string
      }
    }
    cun: {
      badge: string
      role: string
      company: string
      period: string
      location: string
      currentTag: string
      lede: string
      domainTitle: string
      domainSubtitle: string
      lifecycleTitle: string
      lifecycleSubtitle: string
      lifecycleSteps: readonly {
        index: string
        label: string
        detail: string
      }[]
      domains: readonly {
        id: string
        index: string
        title: string
        description: string
        responsibilities: readonly string[]
        techs: readonly { name: string; slug?: string }[]
      }[]
    }
    transition: {
      eyebrow: string
      title: string
      lede: string
      body1: string
      body2: string
      foundationTag: string
      foundationTitle: string
      foundationDescription: string
      foundationPoints: readonly string[]
      expansionTag: string
      expansionTitle: string
      expansionDescription: string
      expansionPoints: readonly string[]
    }
    homecenter: {
      badge: string
      role: string
      area: string
      company: string
      period: string
      location: string
      description: string
      dataTitle: string
      dataItems: readonly string[]
      processTitle: string
      processItems: readonly string[]
      toolsTitle: string
      tools: readonly string[]
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
    studio: {
      eyebrow: string
      title: string
      subtitle: string
      coreTitle: string
      supportingTitle: string
      capabilitiesTitle: string
      interconnectionTitle: string
      aiTitle: string
      projectProofTitle: string
      pipelineTitle: string
      transversalBadge: string
      layerBadge: string
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
    hero: {
      badge: string
      roleLabel: string
      roleValue: string
      formationLabel: string
      formationValue: string
      locationLabel: string
      locationValue: string
      statusLabel: string
      statusValue: string
    }
    visual: {
      tag: string
      layer1Title: string
      layer1Detail: string
      layer2Title: string
      layer2Detail: string
      layer3Title: string
      layer3Detail: string
      layer4Title: string
      layer4Detail: string
      coreLabel: string
      coreDetail: string
      legendPillarA: string
      legendPillarB: string
      legendPillarC: string
    }
    evolution: {
      eyebrow: string
      title: string
      lede: string
      stages: readonly {
        id: string
        index: string
        phase: string
        title: string
        context: string
        takeaway: string
        tags: readonly string[]
      }[]
    }
    philosophy: {
      eyebrow: string
      title: string
      lede: string
      helperText: string
      items: readonly {
        index: string
        title: string
        statement: string
        detail: string
        criterion: string
        practice: string
      }[]
    }
    intersection: {
      eyebrow: string
      title: string
      lede: string
      pillars: readonly {
        id: string
        index: string
        title: string
        role: string
        description: string
        points: readonly string[]
      }[]
      conclusion: string
    }
    education: {
      eyebrow: string
      title: string
      lede: string
      degrees: readonly {
        id: string
        index: string
        degree: string
        institution: string
        period: string
        status: string
        statusType: 'completed' | 'in_progress'
        description: string
        competencies: readonly string[]
      }[]
    }
    closing: {
      kicker: string
      title: string
      body: string
      projectsCta: string
      contactCta: string
    }
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
    downloadCv: string
    cv: string
    statusBadge: string
    statusDetail: string
    signalLabel: string
    signalHeader: string
    signalCoreStatus: string
    signalFocus: string
    signalFooterA: string
    signalFooterB: string
    signalFooterC: string
    emailStatus: string
    locationLabel: string
    locationValue: string
    timezoneLabel: string
    timezoneValue: string
    focusLabel: string
    roleLabel: string
    roleValue: string
    backgroundLabel: string
    directEmail: {
      label: string
      action: string
      copyAction: string
      copiedFeedback: string
      openClient: string
      hint: string
    }
    channelsSection: {
      eyebrow: string
      title: string
      lede: string
    }
    channels: {
      email: {
        index: string
        tag: string
        badge: string
        title: string
        description: string
        action: string
      }
      cv: {
        index: string
        tag: string
        badge: string
        title: string
        description: string
        action: string
        meta: string
      }
      linkedin: {
        index: string
        tag: string
        badge: string
        title: string
        description: string
        action: string
      }
      github: {
        index: string
        tag: string
        badge: string
        title: string
        description: string
        action: string
      }
    }
    contextCards: {
      discipline: {
        tag: string
        title: string
        desc: string
      }
      collaboration: {
        tag: string
        title: string
        desc: string
      }
      stackDelivery: {
        tag: string
        title: string
        desc: string
      }
    }
    closing: {
      kicker: string
      title: string
      body: string
    }
  }
  common: {
    pending: string
  }
}
