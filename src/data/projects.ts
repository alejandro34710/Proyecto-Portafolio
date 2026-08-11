import type { ArchitectureLayer, Project } from './types'

const baseArchitecture: ArchitectureLayer[] = [
  {
    id: 'interface',
    label: { es: 'Interface', en: 'Interface' },
  },
  {
    id: 'services',
    label: { es: 'Services', en: 'Services' },
  },
  {
    id: 'data',
    label: { es: 'Data', en: 'Data' },
  },
  {
    id: 'cloud',
    label: { es: 'Cloud', en: 'Cloud' },
  },
]

const novexArchitecture: ArchitectureLayer[] = [
  {
    id: 'interface',
    label: { es: 'Interface', en: 'Interface' },
    technologies: ['React', 'TypeScript'],
  },
  {
    id: 'services',
    label: { es: 'Services', en: 'Services' },
    technologies: ['NestJS', 'REST'],
  },
  {
    id: 'data',
    label: { es: 'Data', en: 'Data' },
    technologies: ['PostgreSQL'],
  },
  {
    id: 'cloud',
    label: { es: 'Cloud', en: 'Cloud' },
    technologies: ['Cloud Run', 'GCP'],
  },
  {
    id: 'ai',
    label: { es: 'AI', en: 'AI' },
    technologies: ['Gemini', 'AI workflows'],
  },
]

const withAi: ArchitectureLayer[] = [
  ...baseArchitecture,
  {
    id: 'ai',
    label: { es: 'AI', en: 'AI' },
  },
]

function pendingFields(
  architecture: readonly ArchitectureLayer[],
): Pick<
  Project,
  | 'year'
  | 'role'
  | 'status'
  | 'scope'
  | 'stack'
  | 'cover'
  | 'video'
  | 'poster'
  | 'overview'
  | 'problem'
  | 'solution'
  | 'responsibilities'
  | 'architecture'
  | 'challenges'
  | 'results'
  | 'resultTags'
> {
  return {
    year: null,
    role: null,
    status: null,
    scope: null,
    stack: [],
    cover: null,
    video: null,
    poster: null,
    overview: null,
    problem: null,
    solution: null,
    responsibilities: null,
    architecture,
    challenges: null,
    results: null,
    resultTags: undefined,
  }
}

/**
 * Single source of truth for project listings and project detail.
 * Detail fields marked null are intentional TODOs until real repos are analyzed.
 */
export const projects: readonly Project[] = [
  {
    slug: 'novex',
    number: '01',
    title: 'NOVEX',
    shortDescription: {
      es: 'Plataforma de inteligencia operacional para registrar, analizar y dar seguimiento a situaciones mediante datos e inteligencia artificial.',
      en: 'Operational intelligence platform to register, analyze and track situations using data and artificial intelligence.',
    },
    category: {
      es: 'Inteligencia operacional',
      en: 'Operational intelligence',
    },
    year: '2026',
    role: {
      es: 'Desarrollo Full Stack',
      en: 'Full Stack Development',
    },
    status: {
      es: 'Producto interno',
      en: 'Internal Product',
    },
    scope: {
      es: 'Producto · Frontend · Backend · Datos · IA · Cloud',
      en: 'Product · Frontend · Backend · Data · AI · Cloud',
    },
    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'AI', 'GCP'],
    featured: true,
    privateProject: true,
    architecture: novexArchitecture,
    cover: null,
    video: null,
    poster: null,
    overview: null,
    problem: null,
    solution: null,
    responsibilities: null,
    challenges: null,
    results: null,
    resultTags: undefined,
  },
  {
    slug: 'actas',
    number: '02',
    title: 'Actas',
    shortDescription: {
      es: 'Sistema para gestionar, publicar y dar seguimiento a actas y procesos institucionales.',
      en: 'System to manage, publish and track minutes and institutional processes.',
    },
    category: {
      es: 'Procesos institucionales',
      en: 'Institutional processes',
    },
    featured: true,
    privateProject: true,
    ...pendingFields(baseArchitecture),
  },
  {
    slug: 'evaluaciones',
    number: '03',
    title: 'Evaluaciones',
    shortDescription: {
      es: 'Plataforma digital para centralizar procesos de evaluación, análisis y seguimiento.',
      en: 'Digital platform to centralize evaluation, analysis and follow-up processes.',
    },
    category: {
      es: 'Evaluación',
      en: 'Evaluation',
    },
    featured: true,
    privateProject: true,
    ...pendingFields(baseArchitecture),
  },
  {
    slug: 'entrevistas',
    number: '04',
    title: 'Entrevistas',
    shortDescription: {
      es: 'Sistema de entrevistas y evaluación asistida por inteligencia artificial.',
      en: 'Interview and evaluation system assisted by artificial intelligence.',
    },
    category: {
      es: 'Selección asistida por IA',
      en: 'AI-assisted selection',
    },
    featured: true,
    privateProject: true,
    ...pendingFields(withAi),
  },
  {
    slug: 'producto',
    number: '05',
    title: 'Producto',
    shortDescription: {
      es: 'Plataforma para coordinar y dar trazabilidad al ciclo de producción de contenidos y procesos académicos.',
      en: 'Platform to coordinate and trace the production cycle of academic content and processes.',
    },
    category: {
      es: 'Producción de contenidos',
      en: 'Content production',
    },
    featured: true,
    privateProject: true,
    ...pendingFields(baseArchitecture),
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): readonly Project[] {
  return projects.filter((project) => project.featured)
}

export function getSecondaryProjects(): readonly Project[] {
  return projects.filter((project) => !project.featured)
}

export function getNextProject(slug: string): Project | undefined {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index < 0 || index >= projects.length - 1) return undefined
  return projects[index + 1]
}

export function formatProjectStack(project: Project): string | null {
  if (project.stack.length === 0) return null
  return project.stack.join(' · ')
}

export function getLocalized<T extends Record<'en' | 'es', string>>(
  value: T,
  locale: 'en' | 'es',
): string {
  return value[locale]
}
