import type { Dictionary } from '../types'

export const es: Dictionary = {
  meta: {
    language: 'Idioma',
  },
  header: {
    brand: 'SYSTEM',
    theme: 'Tema',
    language: 'Idioma',
    cta: 'Contactar',
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      architecture: 'Arquitectura',
      ai: 'IA',
      lab: 'Lab',
      journal: 'Journal',
      contact: 'Contacto',
    },
  },
  hero: {
    consoleLabel: 'SYSTEM',
    systemOnline: 'SYSTEM ONLINE',
    ready: 'LISTO',
    role: 'Full Stack Engineer',
    scroll: 'Desplázate para continuar',
  },
  philosophy: {
    label: 'FILOSOFÍA',
    systemLabel: 'SISTEMAS / PERSONAS / RESULTADOS',
    eyebrow: '[ PENSAMIENTO DE PRODUCTO ]',
    statement: [
      'Construir bien',
      'empieza antes',
      'del código.',
      'Empieza al ver',
      'todo lo que',
      'está conectado.',
    ],
    manifestoLabel: 'UNA FORMA DE DECIDIR',
    principles: [
      'Entiendo el problema antes de elegir la solución.',
      'La arquitectura también define la experiencia.',
      'La IA sirve cuando reduce fricción, no cuando añade espectáculo.',
      'Diseño para personas, equipos y sistemas a la vez.',
      'Cada decisión debe dejar el producto más claro que antes.',
    ],
    signals: [
      { action: '01 / OBSERVAR', label: 'CONTEXTO' },
      { action: '02 / DEFINIR', label: 'DECISIÓN' },
      { action: '03 / ESTRUCTURAR', label: 'SISTEMA' },
      { action: '04 / ENTREGAR', label: 'EXPERIENCIA' },
      { action: '05 / APRENDER', label: 'IMPACTO' },
    ],
    transitionLabel: 'LA INTENCIÓN SE CONVIERTE EN PRÁCTICA',
    nextLabel: 'EXPERIENCIA',
  },
  systemMap: {
    tag: '[ SYSTEM MAP ]',
    headline: 'Explora la arquitectura',
    headlineLine2: 'detrás del portafolio.',
    lede: 'Este portafolio está organizado como un sistema: capítulos en capas, no una página tradicional. Entra por el índice.',
    scroll: 'Desplázate para entrar al sistema',
    explore: 'Explorar sección',
    status: 'Sistema respondiendo',
    techLabels: {
      frontend: 'FRONTEND',
      backend: 'BACKEND',
      database: 'DATABASE',
      cloud: 'CLOUD',
      ai: 'AI LAYER',
      infrastructure: 'INFRASTRUCTURE',
    },
    chapters: {
      philosophy: {
        label: 'Filosofía',
        subtitle: 'Pensar en sistemas',
        description:
          'Decisiones de producto, experiencia e ingeniería que se sostienen entre sí.',
        summary: 'Cómo la intención se vuelve producto coherente.',
        editorial: 'Las decisiones pequeñas también diseñan el sistema.',
        technologies: ['Pensamiento sistémico', 'Producto', 'UX'],
        projectCount: 'Capa base',
      },
      experience: {
        label: 'Experiencia',
        subtitle: 'Construido en contextos reales',
        description:
          'Software donde cada decisión toca operaciones y personas.',
        summary: 'Roles, entrega y aprendizajes de campo.',
        editorial: 'Las restricciones reales enseñan arquitectura más clara.',
        technologies: ['Full Stack', 'Entrega', 'Operaciones'],
        projectCount: '4 contextos',
      },
      projects: {
        label: 'Proyectos',
        subtitle: 'De concepto a operación',
        description:
          'Productos completos: interfaz, servicios, datos y despliegue como uno.',
        summary: 'Trabajo seleccionado de idea a producción.',
        editorial: 'Lo útil vence a lo brillante incompleto.',
        technologies: ['React', 'NestJS', 'Cloud'],
        projectCount: '3 productos',
      },
      architecture: {
        label: 'Arquitectura',
        subtitle: 'Conectado con intención',
        description:
          'Sistemas con límites claros, observabilidad y espacio para evolucionar.',
        summary: 'Servicios, datos y patrones de confiabilidad.',
        editorial: 'La estructura también es una decisión de producto.',
        technologies: ['APIs', 'Datos', 'Observabilidad'],
        projectCount: 'Vista de sistema',
      },
      ai: {
        label: 'IA',
        subtitle: 'Inteligencia dentro del flujo',
        description:
          'Contexto, modelos y herramientas convertidos en capacidades reales.',
        summary: 'Agentes, control y salidas útiles.',
        editorial: 'Inteligencia sin control es ruido.',
        technologies: ['Gemini', 'Agentes', 'Tool use'],
        projectCount: '2 capacidades',
      },
      lab: {
        label: 'Laboratorio',
        subtitle: 'Evidencia antes de certeza',
        description:
          'Experimentos pequeños para validar interacción, infraestructura e inteligencia.',
        summary: 'Prototipos que producen evidencia.',
        editorial: 'Mide antes de escalar la creencia.',
        technologies: ['Prototipos', 'Eval', 'Infra'],
        projectCount: 'En curso',
      },
      journal: {
        label: 'Journal',
        subtitle: 'Notas de campo',
        description:
          'Ideas que aparecen al diseñar, construir y operar productos digitales.',
        summary: 'Notas sobre craft y sistemas.',
        editorial: 'Escribir aclara la arquitectura.',
        technologies: ['Sistemas', 'Producto', 'Craft'],
        projectCount: 'Ensayos',
      },
      contact: {
        label: 'Contacto',
        subtitle: 'Empieza con un problema difícil',
        description:
          'Una conversación para convertir una idea ambiciosa en un producto claro.',
        summary: 'Disponibilidad y siguientes pasos.',
        editorial: 'Empieza por la restricción que importa.',
        technologies: ['Descubrir', 'Diseñar', 'Construir'],
        projectCount: 'Canal abierto',
      },
    },
  },
}
