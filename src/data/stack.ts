import type {
  StackCapability,
  StackCoreItem,
  StackDomain,
  StackGroup,
  StackLayerArchitecture,
  StackSystemNode,
  StackToolkitItem,
} from './types'

/**
 * 6 Core Technologies that form Alejandro's technical nucleus.
 */
export const stackCore: readonly StackCoreItem[] = [
  {
    index: '01',
    name: 'REACT',
    slug: 'react',
    category: { es: 'FRONTEND & INTERFAZ', en: 'FRONTEND & INTERFACE' },
  },
  {
    index: '02',
    name: 'TYPESCRIPT',
    slug: 'typescript',
    category: { es: 'LENGUAJE & TIPADO', en: 'TYPED LANGUAGE' },
  },
  {
    index: '03',
    name: 'NESTJS',
    slug: 'nestjs',
    category: { es: 'BACKEND & APIS', en: 'BACKEND & APIS' },
  },
  {
    index: '04',
    name: 'POSTGRESQL',
    slug: 'postgresql',
    category: { es: 'DATOS & PERSISTENCIA', en: 'DATA & PERSISTENCE' },
  },
  {
    index: '05',
    name: 'DOCKER',
    slug: 'docker',
    category: { es: 'CONTENEDORES', en: 'CONTAINERIZATION' },
  },
  {
    index: '06',
    name: 'GOOGLE CLOUD',
    slug: 'googlecloud',
    category: { es: 'INFRAESTRUCTURA CLOUD', en: 'CLOUD INFRASTRUCTURE' },
  },
]

/**
 * Connected Architectural Layers (4 Core Layers + Transversal AI Capability).
 * This is the central source of truth for the interactive system studio.
 */
export const stackLayersArchitecture: readonly StackLayerArchitecture[] = [
  {
    id: 'interface',
    index: '01',
    isTransversal: false,
    kicker: 'LAYER 01 // INTERFACE',
    name: {
      es: 'Capa de Interfaz & Experiencia',
      en: 'Interface & Experience Layer',
    },
    tagline: {
      es: 'Arquitectura frontend, sistemas modulares y precisión visual.',
      en: 'Frontend architecture, modular systems, and visual precision.',
    },
    lede: {
      es: 'Diseño e implemento interfaces web reactivas y accesibles con React, TypeScript y Tailwind CSS. Me enfoco en desacoplar el estado del render, estructurar componentes reutilizables y garantizar rendimiento real en producción.',
      en: 'I design and implement responsive, accessible web interfaces with React, TypeScript, and Tailwind CSS. I focus on decoupling state from render, structuring reusable components, and ensuring real-world performance.',
    },
    coreTech: [
      {
        name: 'React',
        slug: 'react',
        role: {
          es: 'Arquitectura modular basada en componentes y estado reactivo',
          en: 'Modular component-based architecture and reactive state',
        },
      },
      {
        name: 'TypeScript',
        slug: 'typescript',
        role: {
          es: 'Tipado estricto e integración de contratos con APIs',
          en: 'Strict typing and contract integration with APIs',
        },
      },
    ],
    supportingTech: [
      'Tailwind CSS',
      'Vite',
      'JavaScript',
      'HTML5 / CSS3',
      'Responsive UX/UI',
    ],
    capabilities: [
      {
        es: 'Arquitectura modular basada en componentes y design tokens reutilizables',
        en: 'Modular architecture based on components and reusable design tokens',
      },
      {
        es: 'Consumo tipado de APIs REST con manejo robusto de estados asíncronos',
        en: 'Typed REST API consumption with resilient async state handling',
      },
      {
        es: 'Diseño responsivo, accesibilidad (a11y) y optimización de carga en cliente',
        en: 'Responsive design, accessibility (a11y), and client-side load optimization',
      },
    ],
    interconnection: {
      es: 'Captura interacciones del usuario, transforma requerimientos de producto en vistas reactivas y consume endpoints de la capa de Servicios mediante contratos tipados.',
      en: 'Captures user interactions, transforms product requirements into reactive views, and consumes Services endpoints via typed contracts.',
    },
    aiRelationship: {
      es: 'Integra interfaces con streaming de respuestas de IA, controles asistidos y visualización interactiva de resultados estructurados.',
      en: 'Integrates interfaces with AI streaming responses, assisted controls, and interactive visualization of structured results.',
    },
    projectProofs: [
      { name: 'NOVEX', slug: 'novex' },
      { name: 'Actas', slug: 'actas' },
      { name: 'Evaluaciones', slug: 'evaluaciones' },
    ],
    pipeline: {
      from: { es: 'Usuario & Requerimiento', en: 'User & Requirement' },
      receives: {
        es: 'Eventos de UI, formularios, navegación',
        en: 'UI events, forms, navigation',
      },
      produces: {
        es: 'Peticiones HTTP tipadas, mutaciones de estado',
        en: 'Typed HTTP requests, state mutations',
      },
      to: { es: 'Backend & APIs', en: 'Backend & APIs' },
    },
  },
  {
    id: 'backend',
    index: '02',
    isTransversal: false,
    kicker: 'LAYER 02 // SERVICES & APIS',
    name: {
      es: 'Capa de Servicios & Lógica de Negocio',
      en: 'Services & Business Logic Layer',
    },
    tagline: {
      es: 'APIs estructuradas, separación de dominios y control de acceso.',
      en: 'Structured APIs, domain separation, and access control.',
    },
    lede: {
      es: 'Construyo servicios backend con NestJS y Node.js orientados a desacoplar controladores de servicios de dominio, estructurar validaciones mediante DTOs y asegurar autenticación JWT con control de roles.',
      en: 'I build backend services with NestJS and Node.js designed to decouple controllers from domain services, enforce DTO validations, and secure JWT authentication with role control.',
    },
    coreTech: [
      {
        name: 'NestJS',
        slug: 'nestjs',
        role: {
          es: 'Arquitectura modular, inyección de dependencias y servicios',
          en: 'Modular architecture, dependency injection, and services',
        },
      },
      {
        name: 'Node.js',
        slug: 'nodedotjs',
        role: {
          es: 'Entorno de ejecución de alto rendimiento asíncrono',
          en: 'High-performance asynchronous runtime',
        },
      },
    ],
    supportingTech: [
      'REST APIs',
      'TypeORM',
      'JWT Authentication',
      'Validation DTOs',
      'Error Handling',
    ],
    capabilities: [
      {
        es: 'Diseño de contratos RESTful limpios y desacoplados del cliente',
        en: 'Clean RESTful contract design decoupled from client views',
      },
      {
        es: 'Lógica de negocio encapsulada con validación estricta de entradas',
        en: 'Encapsulated business logic with strict input validation',
      },
      {
        es: 'Seguridad mediante autenticación JWT, guards y permisos de usuario',
        en: 'Security via JWT authentication, guards, and user permissions',
      },
    ],
    interconnection: {
      es: 'Valida las peticiones recibidas del frontend, ejecuta las reglas de negocio institucionales y delega la persistencia a PostgreSQL a través de TypeORM.',
      en: 'Validates requests received from frontend, executes institutional business rules, and delegates persistence to PostgreSQL through TypeORM.',
    },
    aiRelationship: {
      es: 'Orquesta pipelines de modelos de IA (Gemini), ensambla contextos, gestiona cuotas y garantiza respuestas en esquemas JSON estructurados.',
      en: 'Orchestrates AI model pipelines (Gemini), context assembly, rate quota management, and guaranteed structured JSON output schemas.',
    },
    projectProofs: [
      { name: 'NOVEX', slug: 'novex' },
      { name: 'Actas', slug: 'actas' },
      { name: 'Entrevistas', slug: 'entrevistas' },
    ],
    pipeline: {
      from: { es: 'Interfaz Frontend', en: 'Frontend Interface' },
      receives: {
        es: 'Payloads REST, tokens JWT, parámetros de consulta',
        en: 'REST payloads, JWT tokens, query parameters',
      },
      produces: {
        es: 'Operaciones de base de datos, respuestas estructuradas',
        en: 'Database operations, structured responses',
      },
      to: { es: 'Capa de Datos (PostgreSQL)', en: 'Data Layer (PostgreSQL)' },
    },
  },
  {
    id: 'data',
    index: '03',
    isTransversal: false,
    kicker: 'LAYER 03 // DATA & PERSISTENCE',
    name: {
      es: 'Capa de Datos & Persistencia Relacional',
      en: 'Data & Relational Persistence Layer',
    },
    tagline: {
      es: 'Modelado relacional, integridad transaccional y consultas optimizadas.',
      en: 'Relational modeling, transactional integrity, and query optimization.',
    },
    lede: {
      es: 'Trato los datos como el cimiento crítico del sistema. Trabajo con PostgreSQL y SQL desde el diseño del esquema relacional y llaves foráneas hasta migraciones de esquemas en producción y optimización de índices para reportes operativos.',
      en: 'I treat data as the system foundation. I work with PostgreSQL and SQL from relational schema design and foreign keys through production schema migrations and index optimization for operational reporting.',
    },
    coreTech: [
      {
        name: 'PostgreSQL',
        slug: 'postgresql',
        role: {
          es: 'Motor de base de datos relacional y transaccional',
          en: 'Relational and transactional database engine',
        },
      },
      {
        name: 'SQL',
        slug: 'sql',
        role: {
          es: 'Consultas avanzadas, índices y análisis de datos',
          en: 'Advanced queries, indexes, and data analysis',
        },
      },
    ],
    supportingTech: [
      'TypeORM Migrations',
      'Schema Modeling',
      'Data Normalization',
      'Integrity Constraints',
    ],
    capabilities: [
      {
        es: 'Modelado relacional limpio con normalización y reglas de integridad',
        en: 'Clean relational modeling with normalization and integrity constraints',
      },
      {
        es: 'Migraciones de esquemas versionadas y controladas para producción',
        en: 'Version-controlled, safe schema migrations for production',
      },
      {
        es: 'Optimización de consultas SQL complejas para reporting y auditoría',
        en: 'SQL query optimization for complex reporting and audit trails',
      },
    ],
    interconnection: {
      es: 'Garantiza la persistencia fiable de todas las entidades de negocio requeridas por los servicios backend, manteniendo integridad y consistencia histórica.',
      en: 'Guarantees reliable persistence for all business entities required by backend services, maintaining integrity and historical consistency.',
    },
    aiRelationship: {
      es: 'Provee datasets limpios y normalizados para alimentar contextos de IA y almacena clasificaciones y metadatos generados.',
      en: 'Provides clean, normalized datasets to feed AI contexts and stores generated classifications and metadata.',
    },
    projectProofs: [
      { name: 'NOVEX', slug: 'novex' },
      { name: 'Actas', slug: 'actas' },
      { name: 'CUN', slug: 'experience' },
    ],
    pipeline: {
      from: {
        es: 'Servicios Backend (TypeORM)',
        en: 'Backend Services (TypeORM)',
      },
      receives: {
        es: 'Operaciones CRUD, transacciones, sentencias SQL',
        en: 'CRUD operations, transactions, SQL statements',
      },
      produces: {
        es: 'Registros persistidos, datasets normalizados, reportes',
        en: 'Persisted records, normalized datasets, reports',
      },
      to: {
        es: 'Almacenamiento Cloud SQL & Backups',
        en: 'Cloud SQL Storage & Backups',
      },
    },
  },
  {
    id: 'cloud',
    index: '04',
    isTransversal: false,
    kicker: 'LAYER 04 // CLOUD & INFRASTRUCTURE',
    name: {
      es: 'Capa de Infraestructura & Cloud Delivery',
      en: 'Infrastructure & Cloud Delivery Layer',
    },
    tagline: {
      es: 'Contenedores Docker, servicios cloud administrados y producción confiable.',
      en: 'Docker containers, managed cloud services, and reliable production.',
    },
    lede: {
      es: 'Llevo el software del entorno local a producción real mediante Docker y Google Cloud Platform. Configuro servicios serverless con Cloud Run, bases de datos administradas con Cloud SQL y control de versiones con Git/GitHub.',
      en: 'I take software from local environment to live production using Docker and Google Cloud Platform. I configure serverless services with Cloud Run, managed databases with Cloud SQL, and version control workflows with Git/GitHub.',
    },
    coreTech: [
      {
        name: 'Google Cloud Platform',
        slug: 'googlecloud',
        role: {
          es: 'Infraestructura cloud para cómputo serverless y bases de datos',
          en: 'Cloud infrastructure for serverless compute and databases',
        },
      },
      {
        name: 'Docker',
        slug: 'docker',
        role: {
          es: 'Contenerización de aplicaciones y paridad entre entornos',
          en: 'Application containerization and environment parity',
        },
      },
    ],
    supportingTech: [
      'Cloud Run',
      'Cloud SQL',
      'Git',
      'GitHub',
      'Environment Config',
    ],
    capabilities: [
      {
        es: 'Dockerfiles multi-etapa optimizados para NestJS y React',
        en: 'Multi-stage Dockerfiles optimized for NestJS and React',
      },
      {
        es: 'Despliegues en Google Cloud Run con variables de entorno seguras',
        en: 'Google Cloud Run deployments with secure environment configurations',
      },
      {
        es: 'Conexión segura entre servicios de cómputo y bases de datos Cloud SQL',
        en: 'Secure networking between compute services and Cloud SQL databases',
      },
    ],
    interconnection: {
      es: 'Sustenta la ejecución física y la disponibilidad de todas las capas anteriores, garantizando que el código y los datos operen de forma aislada y escalable.',
      en: 'Underpins the physical execution and availability of all preceding layers, ensuring code and data operate reliably in isolation.',
    },
    aiRelationship: {
      es: 'Hospeda microservicios que conectan con APIs externas de IA de forma segura con baja latencia y credenciales protegidas.',
      en: 'Hosts microservices connecting securely to external AI APIs with low latency and protected credentials.',
    },
    projectProofs: [
      { name: 'NOVEX', slug: 'novex' },
      { name: 'CUN', slug: 'experience' },
    ],
    pipeline: {
      from: { es: 'Código en GitHub', en: 'Code in GitHub' },
      receives: {
        es: 'Imágenes de Docker, configuraciones de variables',
        en: 'Docker images, configuration variables',
      },
      produces: {
        es: 'Servicios en producción en Cloud Run, Cloud SQL activo',
        en: 'Live production services on Cloud Run, active Cloud SQL',
      },
      to: { es: 'Usuarios en Producción', en: 'End Users in Production' },
    },
  },
  {
    id: 'ai',
    index: '05',
    isTransversal: true,
    kicker: 'TRANSVERSAL // APPLIED AI',
    name: {
      es: 'Capacidad Transversal de Inteligencia Artificial',
      en: 'Transversal Artificial Intelligence Capability',
    },
    tagline: {
      es: 'Automatización de procesos, análisis de información y modelos integrados al producto.',
      en: 'Process automation, information analysis, and models integrated into the product.',
    },
    lede: {
      es: 'No me defino como investigador de Machine Learning ni científico de datos: aplico Inteligencia Artificial como una capacidad transversal de ingeniería de producto. Integro la API de Google Gemini en flujos reales para automatizar tareas repetitivas, extraer conocimiento de documentos y enriquecer la experiencia de usuario.',
      en: 'I do not define myself as an ML researcher or data scientist: I apply Artificial Intelligence as a transversal product engineering capability. I integrate the Google Gemini API into real workflows to automate repetitive tasks, extract knowledge from documents, and enrich user experiences.',
    },
    coreTech: [
      {
        name: 'Gemini AI',
        slug: 'googlegemini',
        role: {
          es: 'Modelos multimodales para análisis, extracción y generación',
          en: 'Multimodal models for analysis, extraction, and generation',
        },
      },
      {
        name: 'AI APIs & Integrations',
        slug: 'ai',
        role: {
          es: 'Pipelines de automatización y orquestación con el backend',
          en: 'Automation pipelines and backend orchestration',
        },
      },
    ],
    supportingTech: [
      'Prompt Engineering',
      'Structured JSON Outputs',
      'Process Automation',
      'Content Generation',
    ],
    capabilities: [
      {
        es: 'Integración de Gemini en servicios backend con esquemas de salida tipados',
        en: 'Gemini integration into backend services with typed output schemas',
      },
      {
        es: 'Automatización de clasificación de texto y procesamiento de documentos',
        en: 'Text classification and document processing automation',
      },
      {
        es: 'Diseño de prompts deterministas y control de respuestas para aplicaciones web',
        en: 'Deterministic prompt design and guardrails for web applications',
      },
    ],
    interconnection: {
      es: 'Atraviesa horizontalmente todo el sistema: enriquece la UI con flujos asistidos, opera dentro del Backend mediante APIs seguras y valida información antes de persistirla en la capa de Datos.',
      en: 'Horizontally traverses the entire system: enriches the UI with assisted flows, operates inside the Backend via secure APIs, and validates data before persistence.',
    },
    projectProofs: [
      { name: 'NOVEX', slug: 'novex' },
      { name: 'Entrevistas', slug: 'entrevistas' },
    ],
    pipeline: {
      from: {
        es: 'Datos no estructurados / Consultas',
        en: 'Unstructured data / Queries',
      },
      receives: {
        es: 'Textos, requerimientos, formularios, contextos de negocio',
        en: 'Text, requirements, forms, business context',
      },
      produces: {
        es: 'JSON tipado, resúmenes, clasificaciones, automatización',
        en: 'Typed JSON, summaries, classifications, automation',
      },
      to: {
        es: 'Backend & Experiencia del Usuario',
        en: 'Backend & User Experience',
      },
    },
  },
]

/**
 * Secondary Engineering Toolkit: verified tools that support development.
 */
export const stackToolkit: readonly StackToolkitItem[] = [
  {
    name: 'POSTMAN',
    slug: 'postman',
    role: {
      es: 'Pruebas y contratos de APIs',
      en: 'API testing & contracts',
    },
  },
  {
    name: 'FIGMA',
    slug: 'figma',
    role: {
      es: 'Diseño UI y sistemas visuales',
      en: 'UI design & visual systems',
    },
  },
  {
    name: 'VS CODE',
    slug: 'visualstudiocode',
    role: { es: 'Entorno de desarrollo', en: 'Development IDE' },
  },
  {
    name: 'CURSOR',
    slug: 'cursor',
    role: {
      es: 'Desarrollo asistido por IA',
      en: 'AI-assisted development',
    },
  },
  {
    name: 'GIT',
    slug: 'git',
    role: { es: 'Control de versiones', en: 'Version control' },
  },
  {
    name: 'GITHUB',
    slug: 'github',
    role: {
      es: 'Repositorios y colaboración',
      en: 'Repository & collaboration',
    },
  },
  {
    name: 'DOCKER',
    slug: 'docker',
    role: {
      es: 'Entornos locales y producción',
      en: 'Local & prod environments',
    },
  },
]

/**
 * Legacy support for HomePage topology visualization.
 */
export const stackGroups: readonly StackGroup[] = [
  {
    id: 'interface',
    label: { es: 'Interface', en: 'Interface' },
    items: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Vite' },
      { name: 'JavaScript' },
    ],
  },
  {
    id: 'backend',
    label: { es: 'Backend', en: 'Backend' },
    items: [
      { name: 'NestJS' },
      { name: 'Node.js' },
      { name: 'REST APIs' },
      { name: 'TypeORM' },
      { name: 'JWT Authentication' },
    ],
  },
  {
    id: 'data',
    label: { es: 'Data', en: 'Data' },
    items: [
      { name: 'PostgreSQL' },
      { name: 'SQL' },
      { name: 'TypeORM' },
      { name: 'Database Migrations' },
    ],
  },
  {
    id: 'cloud',
    label: { es: 'Cloud & Delivery', en: 'Cloud & Delivery' },
    items: [
      { name: 'Google Cloud Platform' },
      { name: 'Docker' },
      { name: 'Cloud Run' },
      { name: 'Cloud SQL' },
      { name: 'Git & GitHub' },
    ],
  },
  {
    id: 'ai',
    label: { es: 'AI (Transversal)', en: 'AI (Transversal)' },
    items: [
      { name: 'Gemini AI' },
      { name: 'AI APIs' },
      { name: 'Structured Outputs' },
      { name: 'Prompt Engineering' },
      { name: 'Process Automation' },
    ],
  },
]

export const stackDomains: readonly StackDomain[] = [
  {
    id: 'interface',
    nodeClass: 'is-interface',
    label: 'INTERFACE',
    hint: {
      es: 'Experiencias digitales reactivas',
      en: 'Reactive digital experiences',
    },
  },
  {
    id: 'services',
    nodeClass: 'is-services',
    label: 'SERVICES',
    hint: {
      es: 'Lógica de negocio y APIs',
      en: 'Business logic & APIs',
    },
  },
  {
    id: 'data',
    nodeClass: 'is-data',
    label: 'DATA',
    hint: {
      es: 'Persistencia relacional y modelos',
      en: 'Relational persistence & models',
    },
  },
  {
    id: 'cloud',
    nodeClass: 'is-cloud',
    label: 'CLOUD',
    hint: {
      es: 'Infraestructura y entrega',
      en: 'Infrastructure & delivery',
    },
  },
  {
    id: 'ai',
    nodeClass: 'is-ai',
    label: 'AI (TRANSVERSAL)',
    hint: {
      es: 'Capacidad transversal aplicada',
      en: 'Applied transversal capability',
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
      es: 'Desarrollo interfaces web modernas y responsivas buscando equilibrar experiencia de usuario, mantenibilidad y rendimiento.',
      en: 'I build modern, responsive web interfaces that balance user experience, maintainability and performance.',
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
    ],
    tags: ['Tailwind CSS', 'Vite', 'JavaScript', 'HTML5/CSS3'],
    rail: [
      'COMPONENT ARCHITECTURE',
      'RESPONSIVE DESIGN',
      'UX/UI',
      'STATEFUL INTERFACES',
      'REUSABLE SYSTEMS',
    ],
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
  { id: 'ai', label: 'AI (TRANSVERSAL)', stack: 'Gemini · AI APIs' },
]

export const stackPrincipleLayers = [
  'INTERFACE',
  'SERVICES',
  'DATA',
  'CLOUD',
  'AI (TRANSVERSAL)',
] as const

export function getStackLayerArchitecture(id: string) {
  return stackLayersArchitecture.find((layer) => layer.id === id)
}
