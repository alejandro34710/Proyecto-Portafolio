import type { LocalizedString } from '@/data/types'

/**
 * Canonical professional identity.
 * Role = current professional identity.
 * Education = academic formation (not a job title).
 * Focus = capability descriptor used for coherence across surfaces.
 */
export const IDENTITY = {
  name: 'Alejandro',
  fullName: 'Zuany Alejandro Acuña Vélez',
  role: {
    es: 'Desarrollador Full Stack',
    en: 'Full Stack Developer',
  } satisfies LocalizedString,
  education: {
    es: 'Ingeniero Multimedia',
    en: 'Multimedia Engineer',
  } satisfies LocalizedString,
  focus: {
    es: 'Ingeniería Multimedia · Desarrollo de Producto · UX/UI · Cloud · IA',
    en: 'Multimedia Engineering · Product Development · UX/UI · Cloud · AI',
  } satisfies LocalizedString,
} as const

export type IdentityConfig = typeof IDENTITY
