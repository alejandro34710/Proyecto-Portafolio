import type {
  StackCapability,
  StackCoreItem,
  StackDomain,
  StackGroup,
  StackSystemNode,
  StackToolkitItem,
} from './types'

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

export const stackDomains: readonly StackDomain[] = [
  {
    id: 'interface',
    nodeClass: 'is-interface',
    label: 'INTERFACE',
    hint: {
      es: 'Experiencias digitales',
      en: 'Digital experiences',
    },
  },
  {
    id: 'services',
    nodeClass: 'is-services',
    label: 'SERVICES',
    hint: {
      es: 'Lógica y APIs',
      en: 'Logic and APIs',
    },
  },
  {
    id: 'data',
    nodeClass: 'is-data',
    label: 'DATA',
    hint: {
      es: 'Persistencia y modelos',
      en: 'Persistence and models',
    },
  },
  {
    id: 'cloud',
    nodeClass: 'is-cloud',
    label: 'CLOUD',
    hint: {
      es: 'Entrega y operación',
      en: 'Delivery and operations',
    },
  },
  {
    id: 'ai',
    nodeClass: 'is-ai',
    label: 'AI',
    hint: {
      es: 'Inteligencia aplicada',
      en: 'Applied intelligence',
    },
  },
]

export const stackCapabilities: readonly StackCapability[] = [
  {
    id: 'interface',
    index: '01',
    kicker: 'INTERFACE',
    titleLine1: {
      es: 'Construir experiencias',
      en: 'Build experiences',
    },
    titleLine2: {
      es: 'claras, rápidas y escalables.',
      en: 'that are clear, fast and scalable.',
    },
    lede: {
      es: 'Desarrollo interfaces web modernas y responsivas buscando equilibrar experiencia de usuario, mantenibilidad y rendimiento. Trabajo con arquitecturas basadas en componentes y sistemas visuales reutilizables para construir productos que puedan evolucionar sin perder consistencia.',
      en: 'I build modern, responsive web interfaces that balance user experience, maintainability and performance. I work with component-based architectures and reusable visual systems so products can evolve without losing consistency.',
    },
    featured: [
      {
        name: 'REACT',
        slug: 'react',
        role: {
          es: 'Frontend architecture',
          en: 'Frontend architecture',
        },
      },
      {
        name: 'TYPESCRIPT',
        slug: 'typescript',
        role: {
          es: 'Typed application development',
          en: 'Typed application development',
        },
      },
      {
        name: 'TAILWIND CSS',
        slug: 'tailwindcss',
        role: {
          es: 'Design systems & responsive UI',
          en: 'Design systems & responsive UI',
        },
      },
      {
        name: 'VITE',
        slug: 'vite',
        role: {
          es: 'Modern frontend tooling',
          en: 'Modern frontend tooling',
        },
      },
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    rail: [
      'COMPONENT ARCHITECTURE',
      'RESPONSIVE DESIGN',
      'UX/UI',
      'STATEFUL INTERFACES',
      'REUSABLE SYSTEMS',
      'PERFORMANCE',
    ],
  },
  {
    id: 'backend',
    index: '02',
    kicker: 'BACKEND',
    titleLine1: {
      es: 'La lógica detrás',
      en: 'The logic behind',
    },
    titleLine2: {
      es: 'del producto.',
      en: 'the product.',
    },
    lede: {
      es: 'Construyo servicios backend orientados a separar responsabilidades, modelar reglas de negocio y conectar aplicaciones mediante APIs claras y mantenibles.',
      en: 'I build backend services that separate responsibilities, model business rules and connect applications through clear, maintainable APIs.',
    },
    featured: [
      {
        name: 'NODE.JS',
        slug: 'nodedotjs',
        role: {
          es: 'Runtime del servidor',
          en: 'Server runtime',
        },
      },
      {
        name: 'NESTJS',
        slug: 'nestjs',
        role: {
          es: 'Servicios y arquitectura de APIs',
          en: 'Services and API architecture',
        },
      },
      {
        name: 'REST APIs',
        role: {
          es: 'Contratos entre cliente y servidor',
          en: 'Contracts between client and server',
        },
      },
      {
        name: 'TYPEORM',
        slug: 'typeorm',
        role: {
          es: 'Acceso y modelado de datos',
          en: 'Data access and modeling',
        },
      },
      {
        name: 'JWT AUTHENTICATION',
        role: {
          es: 'Autenticación y control de acceso',
          en: 'Authentication and access control',
        },
      },
    ],
    tags: ['API Architecture', 'Error Handling'],
    rail: [
      'API DESIGN',
      'BUSINESS LOGIC',
      'AUTHENTICATION',
      'ROLE-BASED ACCESS',
      'SERVICE ARCHITECTURE',
      'ERROR HANDLING',
    ],
    flow: ['CLIENT', 'API', 'SERVICE', 'BUSINESS LOGIC', 'DATA'],
    flowOrientation: 'vertical',
  },
  {
    id: 'data',
    index: '03',
    kicker: 'DATA',
    titleLine1: {
      es: 'Datos diseñados',
      en: 'Data designed',
    },
    titleLine2: {
      es: 'para sostener el sistema.',
      en: 'to support the system.',
    },
    lede: {
      es: 'Trabajo con PostgreSQL y SQL desde el diseño del modelo hasta su evolución en producción, incluyendo consultas, migraciones, validación de información y optimización de estructuras de datos.',
      en: 'I work with PostgreSQL and SQL from model design through production evolution, including queries, migrations, data validation and structure optimization.',
    },
    featured: [
      {
        name: 'POSTGRESQL',
        slug: 'postgresql',
        role: {
          es: 'Base de datos relacional',
          en: 'Relational database',
        },
      },
      {
        name: 'SQL',
        role: {
          es: 'Consultas y modelado',
          en: 'Queries and modeling',
        },
      },
      {
        name: 'TYPEORM',
        slug: 'typeorm',
        role: {
          es: 'Migraciones y acceso a datos',
          en: 'Migrations and data access',
        },
      },
    ],
    tags: ['Database Design', 'Database Migrations'],
    rail: [
      'DATA MODELING',
      'SQL QUERIES',
      'MIGRATIONS',
      'DATA VALIDATION',
      'DATABASE ADMINISTRATION',
      'QUERY OPTIMIZATION',
    ],
    flow: ['APPLICATION', 'DATA ACCESS', 'POSTGRESQL', 'STRUCTURED DATA'],
    flowOrientation: 'vertical',
  },
  {
    id: 'cloud',
    index: '04',
    kicker: 'CLOUD & DELIVERY',
    titleLine1: {
      es: 'Del entorno local',
      en: 'From the local environment',
    },
    titleLine2: {
      es: 'a producción.',
      en: 'to production.',
    },
    lede: {
      es: 'Además de desarrollar funcionalidades, participo en el proceso de llevar las aplicaciones a producción, configurando servicios, contenedores y entornos cloud para que el software pueda operar de forma confiable.',
      en: 'Beyond building features, I take part in getting applications to production by configuring services, containers and cloud environments so the software can run reliably.',
    },
    featured: [
      {
        name: 'GOOGLE CLOUD PLATFORM',
        slug: 'googlecloud',
        role: {
          es: 'Infraestructura y servicios cloud',
          en: 'Cloud infrastructure and services',
        },
      },
      {
        name: 'DOCKER',
        slug: 'docker',
        role: {
          es: 'Contenedores locales y de producción',
          en: 'Local and production containers',
        },
      },
      {
        name: 'GIT',
        slug: 'git',
        role: {
          es: 'Control de versiones',
          en: 'Version control',
        },
      },
      {
        name: 'GITHUB',
        slug: 'github',
        role: {
          es: 'Repositorio y colaboración',
          en: 'Repository and collaboration',
        },
      },
    ],
    tags: ['Application Deployment', 'Service Configuration'],
    gcpHighlights: ['CLOUD RUN', 'CLOUD SQL'],
    rail: [
      'VERSION CONTROL',
      'CONTAINERIZATION',
      'CLOUD DEPLOYMENT',
      'SERVICE CONFIGURATION',
      'PRODUCTION DELIVERY',
    ],
    flow: ['CODE', 'GIT', 'BUILD', 'DOCKER', 'CLOUD RUN', 'PRODUCTION'],
    flowOrientation: 'horizontal',
  },
  {
    id: 'ai',
    index: '05',
    kicker: 'AI',
    titleLine1: {
      es: 'Inteligencia integrada',
      en: 'Intelligence integrated',
    },
    titleLine2: {
      es: 'al producto.',
      en: 'into the product.',
    },
    lede: {
      es: 'Integro capacidades de Inteligencia Artificial dentro de aplicaciones para automatizar procesos, analizar información y transformar datos o contenido en resultados útiles para los usuarios.',
      en: 'I integrate artificial intelligence into applications to automate processes, analyze information and turn data or content into useful results for users.',
    },
    featured: [
      {
        name: 'GEMINI AI',
        slug: 'googlegemini',
        role: {
          es: 'Modelo integrado al producto',
          en: 'Model integrated into the product',
        },
      },
    ],
    tags: ['AI APIs', 'AI Model Integration'],
    rail: [
      'AI INTEGRATION',
      'PROCESS AUTOMATION',
      'INFORMATION ANALYSIS',
      'CONTENT GENERATION',
      'AI APIs',
    ],
    flow: [
      'APPLICATION',
      'CONTEXT / DATA',
      'AI MODEL',
      'STRUCTURED RESULT',
      'USER',
    ],
    flowOrientation: 'vertical',
  },
]

export const stackToolkit: readonly StackToolkitItem[] = [
  {
    name: 'POSTMAN',
    slug: 'postman',
    role: { es: 'API testing', en: 'API testing' },
  },
  {
    name: 'FIGMA',
    slug: 'figma',
    role: { es: 'Interface design', en: 'Interface design' },
  },
  {
    name: 'VS CODE',
    slug: 'visualstudiocode',
    role: { es: 'Development', en: 'Development' },
  },
  {
    name: 'CURSOR',
    role: {
      es: 'AI-assisted development',
      en: 'AI-assisted development',
    },
  },
  {
    name: 'GIT',
    slug: 'git',
    role: { es: 'Version control', en: 'Version control' },
  },
  {
    name: 'GITHUB',
    slug: 'github',
    role: {
      es: 'Repository & collaboration',
      en: 'Repository & collaboration',
    },
  },
  {
    name: 'DOCKER',
    slug: 'docker',
    role: {
      es: 'Local & production environments',
      en: 'Local & production environments',
    },
  },
]

export const stackCore: readonly StackCoreItem[] = [
  {
    index: '01',
    name: 'REACT',
    slug: 'react',
    category: { es: 'INTERFACE', en: 'INTERFACE' },
  },
  {
    index: '02',
    name: 'TYPESCRIPT',
    slug: 'typescript',
    category: { es: 'LANGUAGE', en: 'LANGUAGE' },
  },
  {
    index: '03',
    name: 'NESTJS',
    slug: 'nestjs',
    category: { es: 'BACKEND', en: 'BACKEND' },
  },
  {
    index: '04',
    name: 'POSTGRESQL',
    slug: 'postgresql',
    category: { es: 'DATA', en: 'DATA' },
  },
  {
    index: '05',
    name: 'DOCKER',
    slug: 'docker',
    category: { es: 'DELIVERY', en: 'DELIVERY' },
  },
  {
    index: '06',
    name: 'GOOGLE CLOUD',
    slug: 'googlecloud',
    category: { es: 'INFRASTRUCTURE', en: 'INFRASTRUCTURE' },
  },
]

export const stackSystemNodes: readonly StackSystemNode[] = [
  { id: 'user', label: 'USER', stack: '' },
  {
    id: 'interface',
    label: 'INTERFACE',
    stack: 'React · TypeScript · Tailwind',
  },
  { id: 'api', label: 'API', stack: 'NestJS · REST · TypeORM' },
  { id: 'data', label: 'DATA', stack: 'PostgreSQL · SQL' },
  { id: 'cloud', label: 'CLOUD', stack: 'Google Cloud · Docker' },
  { id: 'ai', label: 'AI', stack: 'Gemini · AI APIs' },
]

export const stackPrincipleLayers = [
  'INTERFACE',
  'LOGIC',
  'DATA',
  'CLOUD',
  'AI',
] as const

export function getStackCapability(id: string) {
  return stackCapabilities.find((capability) => capability.id === id)
}
