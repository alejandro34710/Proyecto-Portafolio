import type { ExperienceEntry, ExperienceTechItem } from './types'

export const careerSnapshot = {
  experienceCount: '02',
  startYear: '2024',
  currentRole: 'FULL STACK',
  base: 'BOGOTÁ, CO',
  focus: ['PRODUCT', 'FULL STACK', 'CLOUD', 'AI'] as const,
} as const

export const timelineYears = ['2024', '2025', 'NOW'] as const

export const evolutionStageIds = [
  'operations',
  'data',
  'product',
  'fullStack',
  'cloud',
  'ai',
] as const

export type EvolutionStageId = (typeof evolutionStageIds)[number]

export const currentScopeStageIds = [
  'discover',
  'design',
  'build',
  'ship',
  'operate',
  'improve',
] as const

export type CurrentScopeStageId = (typeof currentScopeStageIds)[number]

export const experienceTechRail: readonly ExperienceTechItem[] = [
  { name: 'REACT', slug: 'react' },
  { name: 'TYPESCRIPT', slug: 'typescript' },
  { name: 'NESTJS', slug: 'nestjs' },
  { name: 'POSTGRESQL', slug: 'postgresql' },
  { name: 'TYPEORM', slug: 'typeorm' },
  { name: 'TAILWIND CSS', slug: 'tailwindcss' },
  { name: 'VITE', slug: 'vite' },
  { name: 'DOCKER', slug: 'docker' },
  { name: 'GOOGLE CLOUD', slug: 'googlecloud' },
  { name: 'REST APIs' },
  { name: 'GIT', slug: 'git' },
  { name: 'GITHUB', slug: 'github' },
  { name: 'GEMINI AI', slug: 'googlegemini' },
]

export const experienceEntries: readonly ExperienceEntry[] = [
  {
    id: 'homecenter',
    index: '01',
    company: {
      es: 'Homecenter Sodimac',
      en: 'Homecenter Sodimac',
    },
    role: {
      es: 'Practicante Profesional',
      en: 'Professional Intern',
    },
    roleSecondary: {
      es: 'Gerencia de Eficiencia Operacional',
      en: 'Operational Efficiency Management',
    },
    location: {
      es: 'Bogotá, Colombia',
      en: 'Bogotá, Colombia',
    },
    period: {
      es: 'JUN 2024 — ENE 2025',
      en: 'JUN 2024 — JAN 2025',
    },
    periodShort: {
      es: 'Jun 2024 — Ene 2025',
      en: 'Jun 2024 — Jan 2025',
    },
    description: {
      es: 'Realicé mi práctica profesional apoyando proyectos orientados a la optimización de procesos internos mediante análisis de información, gestión de datos y construcción de herramientas para el seguimiento operativo.',
      en: 'I completed my professional internship supporting projects aimed at optimizing internal processes through information analysis, data management and tools for operational tracking.',
    },
    current: false,
    timelineLabel: {
      es: 'Operational Efficiency',
      en: 'Operational Efficiency',
    },
    layout: 'split',
    columns: [
      {
        id: 'data',
        title: {
          es: 'DATA & ANALYTICS',
          en: 'DATA & ANALYTICS',
        },
        items: {
          es: [
            'Desarrollo de dashboards e indicadores utilizando Power BI.',
            'Gestión, validación y análisis de información para la elaboración de reportes.',
            'Construcción de reportes en Microsoft Excel para el seguimiento de indicadores operativos.',
          ],
          en: [
            'Development of dashboards and indicators using Power BI.',
            'Management, validation and analysis of information for report production.',
            'Construction of Microsoft Excel reports to track operational indicators.',
          ],
        },
      },
      {
        id: 'process',
        title: {
          es: 'PROCESS & IMPROVEMENT',
          en: 'PROCESS & IMPROVEMENT',
        },
        items: {
          es: [
            'Apoyo en la creación de capacitaciones y documentación de procesos.',
            'Participación en iniciativas de mejora continua orientadas a optimizar la eficiencia operacional.',
          ],
          en: [
            'Support in creating training materials and process documentation.',
            'Participation in continuous-improvement initiatives aimed at operational efficiency.',
          ],
        },
      },
    ],
    technologies: [
      'POWER BI',
      'MICROSOFT EXCEL',
      'DATA ANALYSIS',
      'REPORTING',
      'PROCESS DOCUMENTATION',
      'CONTINUOUS IMPROVEMENT',
    ],
  },
  {
    id: 'cun',
    index: '02',
    company: {
      es: 'Corporación Unificada Nacional — CUN',
      en: 'Corporación Unificada Nacional — CUN',
    },
    role: {
      es: 'Desarrollador Full Stack',
      en: 'Full Stack Developer',
    },
    location: {
      es: 'Bogotá, Colombia',
      en: 'Bogotá, Colombia',
    },
    period: {
      es: 'JUL 2025 — ACTUALIDAD',
      en: 'JUL 2025 — PRESENT',
    },
    periodShort: {
      es: 'Jul 2025 — Actualidad',
      en: 'Jul 2025 — Present',
    },
    description: {
      es: 'Participo en el desarrollo, mantenimiento y evolución de plataformas web institucionales utilizadas por diferentes áreas académicas y administrativas. Mi trabajo cubre el ciclo completo del software: análisis de requerimientos, diseño de soluciones, desarrollo frontend y backend, gestión de datos, integración de inteligencia artificial, despliegue cloud, soporte en producción y mejora continua.',
      en: 'I take part in the development, maintenance and evolution of institutional web platforms used by academic and administrative areas. My work covers the full software cycle: requirements analysis, solution design, frontend and backend development, data management, artificial intelligence integration, cloud deployment, production support and continuous improvement.',
    },
    current: true,
    timelineLabel: {
      es: 'Full Stack Development',
      en: 'Full Stack Development',
    },
    layout: 'primary',
    scope: [
      {
        id: 'frontend',
        index: '01',
        label: { es: 'FRONTEND', en: 'FRONTEND' },
        body: {
          es: 'Interfaces y productos web con React, TypeScript, Tailwind CSS y Vite.',
          en: 'Web interfaces and products with React, TypeScript, Tailwind CSS and Vite.',
        },
      },
      {
        id: 'backend',
        index: '02',
        label: { es: 'BACKEND', en: 'BACKEND' },
        body: {
          es: 'Servicios, reglas de negocio y APIs REST utilizando NestJS y TypeORM.',
          en: 'Services, business rules and REST APIs using NestJS and TypeORM.',
        },
      },
      {
        id: 'data',
        index: '03',
        label: { es: 'DATA', en: 'DATA' },
        body: {
          es: 'Diseño, administración, migración y optimización de bases de datos PostgreSQL.',
          en: 'Design, administration, migration and optimization of PostgreSQL databases.',
        },
      },
      {
        id: 'cloud-ai',
        index: '04',
        label: { es: 'CLOUD + AI', en: 'CLOUD + AI' },
        body: {
          es: 'Despliegues con Docker y Google Cloud e integración de soluciones basadas en Inteligencia Artificial.',
          en: 'Deployments with Docker and Google Cloud, and integration of AI-based solutions.',
        },
      },
    ],
    responsibilities: {
      es: [
        'Desarrollo de aplicaciones frontend con React, TypeScript, Tailwind CSS y Vite.',
        'Construcción de servicios backend utilizando NestJS, TypeORM y PostgreSQL.',
        'Diseño e integración de APIs REST para conectar servicios y aplicaciones.',
        'Diseño, optimización y administración de bases de datos PostgreSQL, incluyendo consultas SQL, migraciones y mantenimiento.',
        'Implementación de funcionalidades basadas en Inteligencia Artificial para automatización, análisis de información y optimización de procesos.',
        'Despliegue de aplicaciones en Google Cloud Platform utilizando Docker y configuración de servicios para producción.',
        'Resolución de incidencias, debugging, corrección de errores y soporte técnico sobre plataformas institucionales.',
        'Análisis de requerimientos y colaboración con diferentes equipos para convertir necesidades operativas en funcionalidades de software.',
        'Optimización de rendimiento, mantenimiento evolutivo y mejora continua de aplicaciones.',
      ],
      en: [
        'Frontend application development with React, TypeScript, Tailwind CSS and Vite.',
        'Backend services built with NestJS, TypeORM and PostgreSQL.',
        'Design and integration of REST APIs to connect services and applications.',
        'Design, optimization and administration of PostgreSQL databases, including SQL queries, migrations and maintenance.',
        'Implementation of AI-based features for automation, information analysis and process optimization.',
        'Application deployment on Google Cloud Platform using Docker and production service configuration.',
        'Incident resolution, debugging, defect correction and technical support on institutional platforms.',
        'Requirements analysis and collaboration with different teams to turn operational needs into software features.',
        'Performance optimization, evolutionary maintenance and continuous improvement of applications.',
      ],
    },
    technologies: [
      'REACT',
      'TYPESCRIPT',
      'NESTJS',
      'POSTGRESQL',
      'TYPEORM',
      'TAILWIND CSS',
      'VITE',
      'DOCKER',
      'GOOGLE CLOUD',
      'REST APIs',
      'GIT',
      'GITHUB',
      'GEMINI AI',
    ],
  },
]

export function getExperienceById(id: string) {
  return experienceEntries.find((entry) => entry.id === id)
}
