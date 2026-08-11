import type { ExperienceEntry } from './types'

/**
 * Experience timeline data.
 * No fabricated employment history — entries are explicit TODOs until real data is provided.
 */
export const experienceEntries: readonly ExperienceEntry[] = [
  {
    id: 'todo-primary',
    company: null,
    role: null,
    period: null,
    description: null,
    responsibilities: null,
    technologies: [],
    relatedProjectSlugs: [
      'novex',
      'actas',
      'evaluaciones',
      'entrevistas',
      'producto',
    ],
    isTodo: true,
  },
]
