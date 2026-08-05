/** CSS token references for places where a runtime value is required. */
export const spacingTokens = {
  4: 'var(--space-4)',
  8: 'var(--space-8)',
  12: 'var(--space-12)',
  16: 'var(--space-16)',
  20: 'var(--space-20)',
  24: 'var(--space-24)',
  32: 'var(--space-32)',
  40: 'var(--space-40)',
  48: 'var(--space-48)',
  64: 'var(--space-64)',
  80: 'var(--space-80)',
  96: 'var(--space-96)',
  128: 'var(--space-128)',
} as const

export const radiusTokens = {
  xs: 'var(--radius-xs)',
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  '2xl': 'var(--radius-2xl)',
  full: 'var(--radius-full)',
} as const

export const shadowTokens = {
  soft: 'var(--shadow-soft)',
  medium: 'var(--shadow-medium)',
  large: 'var(--shadow-large)',
  floating: 'var(--shadow-floating)',
  glass: 'var(--shadow-glass)',
} as const

export const blurTokens = {
  xs: 'var(--blur-xs)',
  sm: 'var(--blur-sm)',
  md: 'var(--blur-md)',
  lg: 'var(--blur-lg)',
  xl: 'var(--blur-xl)',
  '2xl': 'var(--blur-2xl)',
} as const

export const transitionTokens = {
  fast: 'var(--transition-fast)',
  normal: 'var(--transition-normal)',
  slow: 'var(--transition-slow)',
  elastic: 'var(--transition-elastic)',
  spring: 'var(--transition-spring)',
  page: 'var(--transition-page)',
  hover: 'var(--transition-hover)',
  focus: 'var(--transition-focus)',
} as const
