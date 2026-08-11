export type TechMarqueeItem = {
  name: string
  /** Simple Icons slug used for the brand glyph */
  slug: string
}

export const techMarqueeItems: readonly TechMarqueeItem[] = [
  { name: 'React', slug: 'react' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'NestJS', slug: 'nestjs' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Google Cloud', slug: 'googlecloud' },
  { name: 'GitHub', slug: 'github' },
  { name: 'Prisma', slug: 'prisma' },
  { name: 'Framer Motion', slug: 'framer' },
  { name: 'Vite', slug: 'vite' },
  { name: 'Gemini', slug: 'googlegemini' },
] as const
