import type { Dictionary } from '../types'

export const en: Dictionary = {
  meta: {
    language: 'Language',
  },
  header: {
    brand: 'SYSTEM',
    theme: 'Theme',
    language: 'Lang',
    cta: 'Contact',
    nav: {
      home: 'Home',
      projects: 'Projects',
      architecture: 'Architecture',
      ai: 'AI',
      lab: 'Lab',
      journal: 'Journal',
      contact: 'Contact',
    },
  },
  hero: {
    consoleLabel: 'SYSTEM',
    systemOnline: 'SYSTEM ONLINE',
    ready: 'READY',
    role: 'Full Stack Engineer',
    scroll: 'Scroll to continue',
  },
  philosophy: {
    label: 'PHILOSOPHY',
    systemLabel: 'SYSTEMS / PEOPLE / OUTCOMES',
    eyebrow: '[ PRODUCT THINKING ]',
    statement: [
      'Building well',
      'begins before',
      'the code.',
      'It begins by',
      'seeing what',
      'is connected.',
    ],
    manifestoLabel: 'A WAY OF DECIDING',
    principles: [
      'Understand the problem before choosing the solution.',
      'Architecture shapes the experience too.',
      'AI matters when it removes friction, not when it performs.',
      'Design for people, teams, and systems at the same time.',
      'Every decision should leave the product clearer than before.',
    ],
    signals: [
      { action: '01 / OBSERVE', label: 'CONTEXT' },
      { action: '02 / FRAME', label: 'DECISION' },
      { action: '03 / STRUCTURE', label: 'SYSTEM' },
      { action: '04 / DELIVER', label: 'EXPERIENCE' },
      { action: '05 / LEARN', label: 'IMPACT' },
    ],
    transitionLabel: 'INTENTION BECOMES PRACTICE',
    nextLabel: 'EXPERIENCE',
  },
  systemMap: {
    tag: '[ SYSTEM MAP ]',
    headline: 'Explore the architecture',
    headlineLine2: 'behind the portfolio.',
    lede: 'This portfolio is organized as a system — layered chapters, not a traditional page. Enter through the index.',
    scroll: 'Scroll to enter the system',
    explore: 'Enter section',
    status: 'System responding',
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
        label: 'Philosophy',
        subtitle: 'Thinking in systems',
        description:
          'Product, experience, and engineering decisions that hold together as one.',
        summary: 'How intention becomes coherent products.',
        editorial: 'Small decisions also design the system.',
        technologies: ['Systems thinking', 'Product craft', 'UX'],
        projectCount: 'Core layer',
      },
      experience: {
        label: 'Experience',
        subtitle: 'Built in real contexts',
        description:
          'Software work where every decision touches operations and people.',
        summary: 'Roles, delivery, and lessons from the field.',
        editorial: 'Real constraints teach clearer architecture.',
        technologies: ['Full Stack', 'Delivery', 'Operations'],
        projectCount: '4 contexts',
      },
      projects: {
        label: 'Projects',
        subtitle: 'From concept to operation',
        description:
          'Complete products: interface, services, data, and deploy as one.',
        summary: 'Selected work from idea to production.',
        editorial: 'Useful beats unfinished brilliance.',
        technologies: ['React', 'NestJS', 'Cloud'],
        projectCount: '3 products',
      },
      architecture: {
        label: 'Architecture',
        subtitle: 'Connected with intention',
        description:
          'Systems with clear boundaries, observability, and room to evolve.',
        summary: 'Services, data, and reliability patterns.',
        editorial: 'Structure is a product decision.',
        technologies: ['APIs', 'Data', 'Observability'],
        projectCount: 'System view',
      },
      ai: {
        label: 'AI',
        subtitle: 'Intelligence inside the flow',
        description:
          'Context, models, and tools turned into real product capabilities.',
        summary: 'Agents, control loops, and useful outputs.',
        editorial: 'Intelligence without control is noise.',
        technologies: ['Gemini', 'Agents', 'Tool use'],
        projectCount: '2 capabilities',
      },
      lab: {
        label: 'Laboratory',
        subtitle: 'Evidence before certainty',
        description:
          'Small experiments to validate interaction, infrastructure, and intelligence.',
        summary: 'Prototypes that produce evidence.',
        editorial: 'Measure before you scale belief.',
        technologies: ['Prototypes', 'Eval', 'Infra'],
        projectCount: 'Ongoing',
      },
      journal: {
        label: 'Journal',
        subtitle: 'Notes from the field',
        description:
          'Ideas that appear while designing, building, and operating products.',
        summary: 'Field notes on craft and systems.',
        editorial: 'Writing clarifies the architecture.',
        technologies: ['Systems', 'Product', 'Craft'],
        projectCount: 'Essays',
      },
      contact: {
        label: 'Contact',
        subtitle: 'Start with a hard problem',
        description:
          'A conversation to turn an ambitious idea into a clear, robust product.',
        summary: 'Availability and next steps.',
        editorial: 'Begin with the constraint that matters.',
        technologies: ['Discover', 'Design', 'Build'],
        projectCount: 'Open channel',
      },
    },
  },
}
