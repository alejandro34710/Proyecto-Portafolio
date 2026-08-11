/**
 * Central contact / social / CV links.
 * Replace TODO values with real URLs before publish — do not invent them.
 */
export const CONTACT_CONFIG = {
  /** TODO: replace with real email */
  email: null as string | null,
  /** TODO: replace with real LinkedIn profile URL */
  linkedin: null as string | null,
  /** TODO: replace with real GitHub profile URL */
  github: null as string | null,
  /** TODO: replace with real CV/resume file path or URL */
  cvUrl: null as string | null,
  location: 'Colombia',
  role: 'Ingeniero Multimedia · Desarrollador Fullstack',
  focus: 'Producto · Ingeniería · IA',
} as const

export type ContactConfig = typeof CONTACT_CONFIG
