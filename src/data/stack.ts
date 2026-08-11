import type { StackGroup } from './types'

export const stackGroups: readonly StackGroup[] = [
  {
    id: 'interface',
    label: { es: 'Interface', en: 'Interface' },
    items: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Tailwind CSS' },
      { name: 'Motion / Framer Motion' },
    ],
  },
  {
    id: 'backend',
    label: { es: 'Backend', en: 'Backend' },
    items: [
      { name: 'Node.js' },
      { name: 'NestJS' },
      { name: 'REST APIs' },
      { name: 'Authentication' },
      {
        name: 'Application architecture',
        note: {
          es: 'Límites claros entre servicios y dominio',
          en: 'Clear boundaries between services and domain',
        },
      },
    ],
  },
  {
    id: 'data',
    label: { es: 'Data', en: 'Data' },
    items: [
      { name: 'PostgreSQL' },
      { name: 'SQL' },
      { name: 'TypeORM / Prisma' },
      { name: 'Data modeling' },
    ],
  },
  {
    id: 'cloud',
    label: { es: 'Cloud & Delivery', en: 'Cloud & Delivery' },
    items: [
      { name: 'GCP' },
      { name: 'Cloud Run' },
      { name: 'Cloud SQL' },
      { name: 'Docker' },
      { name: 'GitHub Actions' },
      { name: 'CI/CD' },
    ],
  },
  {
    id: 'ai',
    label: { es: 'AI', en: 'AI' },
    items: [
      { name: 'Gemini / Generative AI' },
      { name: 'LLM integrations' },
      { name: 'Structured outputs' },
      { name: 'Prompt engineering' },
      { name: 'AI workflows' },
    ],
  },
]
