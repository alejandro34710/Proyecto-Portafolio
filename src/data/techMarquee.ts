export type TechMarqueeItem = {
  name: string
  /** Simple Icons slug used for the brand glyph */
  slug: string
}

export const techMarqueeItems: readonly TechMarqueeItem[] = [
  { name: 'React', slug: 'react' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'NestJS', slug: 'nestjs' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Google Cloud', slug: 'googlecloud' },
  { name: 'Gemini AI', slug: 'googlegemini' },
] as const
