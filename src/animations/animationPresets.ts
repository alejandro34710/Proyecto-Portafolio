export const DURATION = {
  instant: 0.08,
  fast: 0.14,
  normal: 0.24,
  slow: 0.42,
  page: 0.56,
} as const

export const EASING = {
  standard: [0.2, 0, 0, 1] as const,
  easeOut: [0.16, 1, 0.3, 1] as const,
  easeInOut: [0.65, 0, 0.35, 1] as const,
  elastic: [0.34, 1.56, 0.64, 1] as const,
} as const

export const SPRING = {
  gentle: { type: 'spring', stiffness: 220, damping: 26, mass: 0.8 },
  responsive: { type: 'spring', stiffness: 360, damping: 30, mass: 0.7 },
  expressive: { type: 'spring', stiffness: 280, damping: 22, mass: 0.75 },
} as const

export const DELAY = {
  none: 0,
  short: 0.06,
  medium: 0.12,
  long: 0.24,
} as const

export const STAGGER = {
  fast: 0.04,
  children: 0.065,
  slow: 0.1,
} as const

export const MOTION_DISTANCE = {
  subtle: 8,
  standard: 16,
  expressive: 24,
} as const
