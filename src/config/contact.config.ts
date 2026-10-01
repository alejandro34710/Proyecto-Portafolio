import { IDENTITY } from './identity.config'

/**
 * Central contact / social / CV links + identity surfaces used by About/Home.
 * Only store verified professional channels.
 */
export const CONTACT_CONFIG = {
  email: 'alejandro34710@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alejandro-acu%C3%B1a-velez/',
  github: 'https://github.com/alejandro34710',
  /** Served from Vite `public/` as `/Alejandro-CV.pdf`. */
  cvUrl: '/Alejandro-CV.pdf',
  location: 'Bogotá, Colombia',
  /** Current professional identity (localized). */
  role: IDENTITY.role,
  /** Academic formation (localized). */
  education: IDENTITY.education,
  /** Capability descriptor (localized). */
  focus: IDENTITY.focus,
} as const

export type ContactConfig = typeof CONTACT_CONFIG

export type PrimaryContactAction = {
  href: string
  external: boolean
}

/** Prefer email for the primary Contact CTA. */
export function getPrimaryContactAction(): PrimaryContactAction | null {
  if (CONTACT_CONFIG.email) {
    return { href: `mailto:${CONTACT_CONFIG.email}`, external: false }
  }
  if (CONTACT_CONFIG.linkedin) {
    return { href: CONTACT_CONFIG.linkedin, external: true }
  }
  if (CONTACT_CONFIG.github) {
    return { href: CONTACT_CONFIG.github, external: true }
  }
  return null
}

export type ContactChannelId = 'email' | 'cv' | 'linkedin' | 'github'

export type ContactChannel = {
  id: ContactChannelId
  href: string
  external: boolean
  /** When true, suggest download attribute for the link. */
  download?: boolean
  label: string
}

/**
 * Channel order for Contact: Email → CV → LinkedIn → GitHub.
 */
export function getConfiguredContactChannels(): readonly ContactChannel[] {
  const channels: ContactChannel[] = []

  if (CONTACT_CONFIG.email) {
    channels.push({
      id: 'email',
      href: `mailto:${CONTACT_CONFIG.email}`,
      external: false,
      label: CONTACT_CONFIG.email,
    })
  }
  if (CONTACT_CONFIG.cvUrl) {
    channels.push({
      id: 'cv',
      href: CONTACT_CONFIG.cvUrl,
      external: true,
      download: true,
      label: 'CV',
    })
  }
  if (CONTACT_CONFIG.linkedin) {
    channels.push({
      id: 'linkedin',
      href: CONTACT_CONFIG.linkedin,
      external: true,
      label: 'LinkedIn',
    })
  }
  if (CONTACT_CONFIG.github) {
    channels.push({
      id: 'github',
      href: CONTACT_CONFIG.github,
      external: true,
      label: 'GitHub',
    })
  }

  return channels
}
