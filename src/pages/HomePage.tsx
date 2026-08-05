import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Braces,
  Check,
  Cloud,
  Code2,
  Database,
  Layers3,
  Network,
  Send,
} from 'lucide-react'
import { AnimatePresence, motion, useScroll } from 'motion/react'
import type { Variants } from 'motion/react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/common/Seo'
import { HeroHeader } from '@/components/hero/HeroHeader'
import { HeroIsometricGraphic } from '@/components/hero/HeroIsometricGraphic'
import { SystemStatusBar } from '@/components/hero/SystemStatusBar'
import './HomePage.css'

const chapters = [
  {
    id: 'philosophy',
    label: 'Philosophy',
    number: '01',
    subtitle: 'Thinking in systems',
    description:
      'Decisiones de producto, experiencia e ingeniería que se sostienen entre sí.',
    tags: ['INTENTION', 'CLARITY', 'IMPACT'],
    facts: [
      ['MODE', 'Systems'],
      ['FOCUS', 'Decisions'],
      ['OUTPUT', 'Coherence'],
    ],
    visual: 'signal',
  },
  {
    id: 'experience',
    label: 'Experience',
    number: '02',
    subtitle: 'Built in real contexts',
    description:
      'Experiencia construyendo software donde cada decisión toca operaciones y personas.',
    tags: ['PRODUCT', 'OPERATIONS', 'DELIVERY'],
    facts: [
      ['ROLE', 'Full Stack'],
      ['CONTEXT', 'Real work'],
      ['OUTPUT', 'Products'],
    ],
    visual: 'timeline',
  },
  {
    id: 'projects',
    label: 'Projects',
    number: '03',
    subtitle: 'From concept to operation',
    description:
      'Productos completos: interfaz, servicios, datos y despliegue funcionando como uno.',
    tags: ['INTERFACE', 'BACKEND', 'CLOUD'],
    facts: [
      ['STATE', 'Production'],
      ['SCOPE', 'End to end'],
      ['VALUE', 'Useful'],
    ],
    visual: 'modules',
  },
  {
    id: 'architecture',
    label: 'Architecture',
    number: '04',
    subtitle: 'Connected with intention',
    description:
      'Sistemas con límites claros, observabilidad y espacio para evolucionar sin fricción.',
    tags: ['SERVICES', 'DATA', 'RELIABILITY'],
    facts: [
      ['VIEW', 'System'],
      ['PRIORITY', 'Resilience'],
      ['DELIVERY', 'Repeatable'],
    ],
    visual: 'layers',
  },
  {
    id: 'ai',
    label: 'AI',
    number: '05',
    subtitle: 'Intelligence inside the flow',
    description:
      'Contexto, modelos y herramientas convertidos en capacidades reales de producto.',
    tags: ['CONTEXT', 'AGENTS', 'CONTROL'],
    facts: [
      ['PATTERN', 'Tool use'],
      ['CONTROL', 'Human loop'],
      ['OUTPUT', 'Decisions'],
    ],
    visual: 'neural',
  },
  {
    id: 'lab',
    label: 'Laboratory',
    number: '06',
    subtitle: 'Evidence before certainty',
    description:
      'Experimentos pequeños para validar interacción, infraestructura e inteligencia.',
    tags: ['PROTOTYPE', 'MEASURE', 'LEARN'],
    facts: [
      ['STATUS', 'Exploring'],
      ['METHOD', 'Prototype'],
      ['OUTPUT', 'Evidence'],
    ],
    visual: 'prototype',
  },
  {
    id: 'journal',
    label: 'Journal',
    number: '07',
    subtitle: 'Notes from the field',
    description:
      'Ideas que aparecen al diseñar, construir y operar productos digitales completos.',
    tags: ['SYSTEMS', 'PRODUCT', 'CRAFT'],
    facts: [
      ['FORMAT', 'Field notes'],
      ['TOPICS', 'Engineering'],
      ['STATE', 'Ongoing'],
    ],
    visual: 'notes',
  },
  {
    id: 'contact',
    label: 'Contact',
    number: '08',
    subtitle: 'Start with a hard problem',
    description:
      'Una conversación para convertir una idea ambiciosa en un producto claro y robusto.',
    tags: ['DISCOVER', 'DESIGN', 'BUILD'],
    facts: [
      ['CHANNEL', 'Collaboration'],
      ['STATUS', 'Available'],
      ['NEXT', 'Conversation'],
    ],
    visual: 'transmit',
  },
] as const

const journeySections = [
  { id: 'hero', number: '00', label: 'Opening' },
  { id: 'philosophy', number: '01', label: 'Philosophy' },
  { id: 'system-index', number: 'IX', label: 'System index' },
  ...chapters.slice(1),
] as const

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
}

const editorialReveal: Variants = {
  hidden: { opacity: 0, x: -48, filter: 'blur(9px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
  },
}

const depthReveal: Variants = {
  hidden: { opacity: 0, scale: 0.9, rotateX: 7, y: 34 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
}

const pathReveal: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
}

const screenReveal: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)', y: 28 },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0 0% 0)',
    y: 0,
    transition: { duration: 1.15, ease: [0.16, 1, 0.3, 1] },
  },
}

const labReveal: Variants = {
  hidden: { opacity: 0, rotate: -2, y: 48 },
  visible: {
    opacity: 1,
    rotate: 0,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

const journalReveal: Variants = {
  hidden: { opacity: 0, x: 52 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
}

const contactReveal: Variants = {
  hidden: { opacity: 0, y: 28, letterSpacing: '0.035em' },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: 'inherit',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
}

function ChapterLabel({
  number,
  children,
}: {
  number: string
  children: string
}) {
  return (
    <div className="chapter-label">
      <span className="chapter-label__dot" />
      <span>{number}</span>
      <span className="chapter-label__rule" />
      <span>{children}</span>
    </div>
  )
}

function ChapterLink({ to, children }: { to: string; children: string }) {
  return (
    <Link className="chapter-link" to={to}>
      <span>{children}</span>
      <span className="chapter-link__icon" aria-hidden="true">
        <ArrowUpRight size={17} strokeWidth={1.5} />
      </span>
    </Link>
  )
}

function PhilosophyStructure() {
  return (
    <div className="philosophy-structure" aria-hidden="true">
      <div className="philosophy-structure__coordinates">
        <span>04°36&apos;05.2&quot;N</span>
        <span>STRUCTURE / 01</span>
      </div>
      <svg viewBox="0 0 760 620" preserveAspectRatio="none">
        <g className="philosophy-structure__guides">
          <path d="M40 500L382 92L718 500" />
          <path d="M96 488H666" />
          <path d="M158 408H604" />
          <path d="M228 328H537" />
          <path d="M302 245H467" />
        </g>
        <g className="philosophy-structure__connections">
          <path pathLength="1" d="M102 401C210 401 242 312 348 312" />
          <path pathLength="1" d="M348 312C471 312 494 202 653 202" />
          <path pathLength="1" d="M348 312C470 312 488 474 669 474" />
        </g>
        <g className="philosophy-structure__nodes">
          <circle cx="102" cy="401" r="5" />
          <circle cx="348" cy="312" r="6" />
          <circle cx="653" cy="202" r="5" />
          <circle cx="669" cy="474" r="5" />
        </g>
      </svg>
      <div className="philosophy-structure__stage">
        <span className="philosophy-structure__floor philosophy-structure__floor--one" />
        <span className="philosophy-structure__floor philosophy-structure__floor--two" />
        <span className="philosophy-structure__wall philosophy-structure__wall--one" />
        <span className="philosophy-structure__wall philosophy-structure__wall--two" />
        <div className="philosophy-structure__core">
          <span className="philosophy-structure__face philosophy-structure__face--front">
            PRODUCT
          </span>
          <span className="philosophy-structure__face philosophy-structure__face--side" />
          <span className="philosophy-structure__face philosophy-structure__face--top" />
        </div>
        <div className="philosophy-structure__panel philosophy-structure__panel--code">
          <span>01 / CODE</span>
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="philosophy-structure__panel philosophy-structure__panel--experience">
          <span>02 / EXPERIENCE</span>
          <strong>Clear</strong>
          <small>Meaningful</small>
        </div>
        <div className="philosophy-structure__panel philosophy-structure__panel--impact">
          <span>03 / IMPACT</span>
          <strong>Useful</strong>
          <small>Measurable</small>
        </div>
      </div>
      <div className="philosophy-structure__label philosophy-structure__label--one">
        <i /> ARCHITECTURE <small>Scalable / reliable</small>
      </div>
      <div className="philosophy-structure__label philosophy-structure__label--two">
        <i /> DECISIONS <small>Intentional / visible</small>
      </div>
      <span className="philosophy-structure__pulse philosophy-structure__pulse--one" />
      <span className="philosophy-structure__pulse philosophy-structure__pulse--two" />
    </div>
  )
}

function SystemIndexVisual({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[number]
  index: number
}) {
  return (
    <div
      className="index-machine"
      id="index-visual"
      data-visual={chapter.visual}
    >
      <div className="index-machine__coordinates">
        <span>VIEW / SYSTEM</span>
        <span>ACTIVE LAYER {chapter.number}</span>
      </div>
      <div className="index-machine__scale" aria-hidden="true">
        <span>00</span>
        <i />
        <i />
        <i />
        <i />
        <i />
        <span>06</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          className="index-machine__scene"
          key={chapter.id}
          initial={{ opacity: 0, scale: 0.965, rotateZ: -0.6 }}
          animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
          exit={{ opacity: 0, scale: 1.025, rotateZ: 0.4 }}
          transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg
            viewBox="0 0 900 650"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <g className="index-machine__grid">
              <path d="M70 520L450 104L834 520" />
              <path d="M145 520L450 190L755 520" />
              <path d="M224 520L450 274L676 520" />
              <path d="M70 520H834M145 442H758M218 364H683M292 286H610" />
            </g>
            <g className="index-machine__routes">
              <path
                pathLength="1"
                d="M116 430C244 430 249 318 390 318S554 205 766 205"
              />
              <path
                pathLength="1"
                d="M116 430C276 430 296 506 451 506S612 411 796 411"
              />
              <path pathLength="1" d="M390 318C390 230 453 191 453 103" />
            </g>
            <g className="index-machine__points">
              <circle cx="116" cy="430" r="5" />
              <circle cx="390" cy="318" r="6" />
              <circle cx="766" cy="205" r="5" />
              <circle cx="796" cy="411" r="5" />
              <circle cx="451" cy="506" r="5" />
              <circle cx="453" cy="103" r="5" />
            </g>
          </svg>
          <div className="index-machine__platform index-machine__platform--base" />
          <div className="index-machine__platform index-machine__platform--mid" />
          <div className="index-machine__core">
            <span>{chapter.number}</span>
            <small>{chapter.label}</small>
          </div>
          <div className="index-machine__pane index-machine__pane--one">
            <span>{chapter.tags[0]}</span>
            <i />
            <i />
            <i />
          </div>
          <div className="index-machine__pane index-machine__pane--two">
            <span>{chapter.tags[1]}</span>
            <strong>{String(index + 1).padStart(2, '0')}</strong>
          </div>
          <div className="index-machine__pane index-machine__pane--three">
            <span>{chapter.tags[2]}</span>
            <i />
            <i />
          </div>
          <span className="index-machine__traveller index-machine__traveller--one" />
          <span className="index-machine__traveller index-machine__traveller--two" />
        </motion.div>
      </AnimatePresence>
      <div className="index-machine__status">
        <i /> Illustration responding <span>0{index + 1} / 08</span>
      </div>
    </div>
  )
}

function SystemIndex() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeChapter = chapters[activeIndex]

  return (
    <section className="system-index chapter" id="system-index" data-chapter>
      <div className="system-index__heading">
        <ChapterLabel number="IX">System index</ChapterLabel>
        <span>08 CHAPTERS / ONE PRODUCT SYSTEM</span>
      </div>
      <div className="system-index__content">
        <div className="system-index__directory">
          <div className="system-index__intro">
            <span>Navigate the system</span>
            <p>
              Cada capítulo abre una capa distinta de cómo pienso, diseño y
              construyo productos.
            </p>
          </div>
          <div className="system-index__list" role="list">
            {chapters.map((chapter, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  className={isActive ? 'is-active' : ''}
                  type="button"
                  key={chapter.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  aria-controls="index-visual"
                >
                  <span className="system-index__number">{chapter.number}</span>
                  <span className="system-index__name">{chapter.label}</span>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.span
                        className="system-index__row-detail"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.32 }}
                      >
                        {chapter.subtitle}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <ArrowUpRight size={16} strokeWidth={1.35} />
                </button>
              )
            })}
          </div>
        </div>
        <div className="system-index__preview">
          <AnimatePresence mode="wait">
            <motion.div
              className="system-index__description"
              key={activeChapter.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>{activeChapter.subtitle}</span>
              <p>{activeChapter.description}</p>
              <div>
                {activeChapter.tags.map((tag) => (
                  <i key={tag}>{tag}</i>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          <SystemIndexVisual chapter={activeChapter} index={activeIndex} />
        </div>
      </div>
      <div className="system-index__console">
        <div>
          <span>SYSTEM CONSOLE</span>
          <code>&gt; layer.{activeChapter.id} selected</code>
        </div>
        {activeChapter.facts.map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
        <a href={`#${activeChapter.id}`}>
          Open chapter <ArrowRight size={15} />
        </a>
      </div>
    </section>
  )
}

function ArchitectureMap() {
  return (
    <div
      className="architecture-map"
      aria-label="Flujo simplificado de una arquitectura de producto"
    >
      <svg
        className="architecture-map__lines"
        viewBox="0 0 900 500"
        aria-hidden="true"
      >
        <path pathLength="1" d="M160 250H295C335 250 335 135 375 135H490" />
        <path pathLength="1" d="M160 250H295C335 250 335 365 375 365H490" />
        <path pathLength="1" d="M490 135H585C625 135 625 250 665 250H755" />
        <path pathLength="1" d="M490 365H585C625 365 625 250 665 250" />
      </svg>
      <div className="architecture-map__module architecture-map__module--edge">
        <span className="architecture-map__index">ENTRY</span>
        <Code2 />
        <strong>Interfaces</strong>
        <small>Web · Mobile</small>
      </div>
      <div className="architecture-map__module architecture-map__module--api">
        <span className="architecture-map__index">ROUTE 01</span>
        <Network />
        <strong>Services</strong>
        <small>APIs · Events</small>
      </div>
      <div className="architecture-map__module architecture-map__module--ai">
        <span className="architecture-map__index">ROUTE 02</span>
        <BrainCircuit />
        <strong>Intelligence</strong>
        <small>Models · Agents</small>
      </div>
      <div className="architecture-map__module architecture-map__module--cloud">
        <span className="architecture-map__index">OUTPUT</span>
        <Cloud />
        <strong>Cloud</strong>
        <small>Deploy · Observe</small>
      </div>
      <span className="architecture-map__pulse architecture-map__pulse--one" />
      <span className="architecture-map__pulse architecture-map__pulse--two" />
    </div>
  )
}

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollYProgress: pageScrollProgress } = useScroll()

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-chapter]')
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-28% 0px -48% 0px', threshold: [0, 0.2, 0.55] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const activeIndex = journeySections.findIndex(
    (section) => section.id === activeSection,
  )

  return (
    <div className="home-experience">
      <Seo
        title="Full Stack Product Engineer"
        description="Portafolio de Alejandro, Full Stack Engineer especializado en productos digitales, arquitectura, cloud e inteligencia artificial."
      />
      <a className="skip-link" href="#philosophy">
        Saltar al contenido
      </a>
      <HeroHeader activeSection={activeSection} />
      {activeSection !== 'hero' && (
        <motion.div
          className="reading-progress"
          style={{ scaleX: pageScrollProgress }}
          aria-hidden="true"
        />
      )}
      <aside
        className={`chapter-rail${activeSection === 'hero' ? ' chapter-rail--hidden' : ''}`}
        aria-label="Progreso de lectura"
      >
        <span className="chapter-rail__current">
          {activeIndex < 0 ? '00' : journeySections[activeIndex].number}
        </span>
        <div className="chapter-rail__line">
          {journeySections.map((chapter, index) => (
            <a
              href={`#${chapter.id}`}
              key={chapter.id}
              className={index === activeIndex ? 'is-active' : ''}
              aria-label={`Ir a ${chapter.label}`}
            >
              <span />
            </a>
          ))}
        </div>
        <span className="chapter-rail__total">10</span>
      </aside>

      <main>
        <section
          className="hero-ref chapter"
          id="hero"
          ref={heroRef}
          data-chapter
        >
          <HeroIsometricGraphic />
          <div className="hero-ref__content">
            <p className="hero-ref__tag">[ FULL STACK ENGINEER ]</p>
            <h1>Alejandro</h1>
            <p className="hero-ref__subtitle">
              Building digital products from idea to production.
            </p>
            <a className="hero-ref__scroll" href="#philosophy">
              <span className="hero-ref__scroll-dot" aria-hidden="true" />
              <span>Scroll to enter the system</span>
              <ArrowDown size={14} strokeWidth={1.5} />
            </a>
          </div>
          <SystemStatusBar />
        </section>

        <section className="philosophy chapter" id="philosophy" data-chapter>
          <motion.div
            className="philosophy__layout"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={editorialReveal} className="philosophy__meta">
              <ChapterLabel number="01">Philosophy</ChapterLabel>
              <span className="philosophy__side-note">
                SYSTEMS / PEOPLE / OUTCOMES
              </span>
            </motion.div>
            <div className="philosophy__copy">
              <motion.h2 variants={editorialReveal}>
                Un producto no termina<span>cuando compila.</span>
              </motion.h2>
              <motion.div
                className="philosophy__statement"
                variants={editorialReveal}
              >
                <span className="philosophy__principle">
                  01 / COMPLETE PRODUCTS
                </span>
                <p>
                  Termina cuando alguien puede usarlo, el equipo puede
                  evolucionarlo y el sistema puede sostenerlo.
                </p>
                <ChapterLink to="/about">Explore philosophy</ChapterLink>
              </motion.div>
            </div>
            <motion.div
              className="philosophy__visual"
              variants={depthReveal}
              aria-hidden="true"
            >
              <PhilosophyStructure />
            </motion.div>
          </motion.div>
          <div className="chapter-footer chapter-footer--dark">
            <span>Current layer / Philosophy</span>
            <p>“Las decisiones pequeñas también diseñan el sistema.”</p>
            <a href="#system-index">
              Next / System Index <ArrowDown size={15} />
            </a>
          </div>
        </section>

        <SystemIndex />

        <section className="experience chapter" id="experience" data-chapter>
          <div className="experience__heading">
            <ChapterLabel number="02">Experience</ChapterLabel>
            <motion.h2
              variants={editorialReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              Aprendí construyendo donde el software{' '}
              <span>toca el trabajo real.</span>
            </motion.h2>
          </div>
          <motion.div
            className="experience__path"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.article
              variants={pathReveal}
              className="experience__moment experience__moment--one"
            >
              <span>FOUNDATION</span>
              <strong>Interfaces que explican</strong>
              <p>
                Convertir procesos complejos en recorridos claros, rápidos y
                humanos.
              </p>
            </motion.article>
            <motion.article
              variants={pathReveal}
              className="experience__moment experience__moment--two"
            >
              <span>EXPANSION</span>
              <strong>Sistemas que conectan</strong>
              <p>
                APIs, datos y automatizaciones trabajando como un solo producto.
              </p>
            </motion.article>
            <motion.article
              variants={pathReveal}
              className="experience__moment experience__moment--three"
            >
              <span>NOW</span>
              <strong>Productos que piensan</strong>
              <p>
                Cloud e IA aplicados con propósito, observabilidad y criterio de
                ingeniería.
              </p>
            </motion.article>
            <svg
              className="experience__line"
              viewBox="0 0 1200 320"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                pathLength="1"
                d="M40 244C218 244 240 82 426 82S666 258 832 258s177-158 328-158"
              />
            </svg>
          </motion.div>
          <div className="experience__summary">
            <span>My role</span>
            <strong>Full Stack Engineer</strong>
            <p>
              Del descubrimiento y la interfaz al backend, el despliegue y la
              evolución.
            </p>
            <ChapterLink to="/experience">Explore experience</ChapterLink>
          </div>
        </section>

        <section
          className="projects chapter chapter--ink"
          id="projects"
          data-chapter
        >
          <div className="projects__intro">
            <ChapterLabel number="03">Selected product</ChapterLabel>
            <motion.h2
              variants={editorialReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              Menos demo.<span>Más producto.</span>
            </motion.h2>
            <p>
              Construyo herramientas internas y experiencias digitales
              preparadas para operar, crecer y generar decisiones.
            </p>
            <ChapterLink to="/projects">View selected projects</ChapterLink>
          </div>
          <motion.div
            className="product-preview"
            variants={screenReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="product-preview__topbar">
              <span className="product-preview__brand">
                <i /> CONTROL / 01
              </span>
              <span>Operational intelligence</span>
              <span>
                LIVE <i className="is-live" />
              </span>
            </div>
            <div className="product-preview__body">
              <aside className="product-preview__nav">
                <span>OVERVIEW</span>
                <span>SIGNALS</span>
                <span>SYSTEMS</span>
                <span>REPORTS</span>
              </aside>
              <div className="product-preview__dashboard">
                <div className="product-preview__welcome">
                  <span>WEEK 31 / OPERATIONS</span>
                  <h3>
                    Every signal,
                    <br />
                    one clear view.
                  </h3>
                </div>
                <div className="product-preview__metric">
                  <span>System health</span>
                  <strong>Stable</strong>
                  <small>
                    <i /> All services connected
                  </small>
                </div>
                <div className="product-preview__chart">
                  <div className="product-preview__chart-meta">
                    <span>Flow activity</span>
                    <span>Last 7 days</span>
                  </div>
                  <svg
                    viewBox="0 0 660 190"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="chart-fill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0"
                          stopColor="var(--home-accent)"
                          stopOpacity=".34"
                        />
                        <stop
                          offset="1"
                          stopColor="var(--home-accent)"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      className="chart-area"
                      d="M0 165C46 158 51 92 95 106s63 44 105 6 58-64 97-26 50 69 92 40 50-98 93-76 60 91 98 50 43-42 80-56V190H0Z"
                    />
                    <path
                      pathLength="1"
                      className="chart-line"
                      d="M0 165C46 158 51 92 95 106s63 44 105 6 58-64 97-26 50 69 92 40 50-98 93-76 60 91 98 50 43-42 80-56"
                    />
                  </svg>
                </div>
                <div className="product-preview__events">
                  <span>Latest activity</span>
                  <p>
                    <i /> Data pipeline synchronized <small>now</small>
                  </p>
                  <p>
                    <i /> AI summary generated <small>04m</small>
                  </p>
                  <p>
                    <i /> New release deployed <small>18m</small>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="projects__folio">
            <span>CASE / 01</span>
            <strong>Operational Control</strong>
            <span>Product · Cloud · AI</span>
          </div>
        </section>

        <section
          className="architecture chapter"
          id="architecture"
          data-chapter
        >
          <div className="architecture__copy">
            <ChapterLabel number="04">Architecture</ChapterLabel>
            <motion.h2
              variants={editorialReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              Diseñar para hoy.<span>Sin bloquear mañana.</span>
            </motion.h2>
            <p>
              Arquitectura es decidir qué debe estar conectado, qué debe
              permanecer independiente y cómo observarlo todo.
            </p>
            <ul>
              <li>
                <Check /> Límites claros
              </li>
              <li>
                <Check /> Datos confiables
              </li>
              <li>
                <Check /> Despliegues repetibles
              </li>
            </ul>
            <ChapterLink to="/architecture">Explore architecture</ChapterLink>
          </div>
          <motion.div
            className="architecture__visual"
            variants={depthReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <span className="architecture__view">SYSTEM VIEW / LIVE</span>
            <ArchitectureMap />
          </motion.div>
          <div className="architecture__legend">
            <div>
              <Code2 />
              <span>Frontend</span>
              <small>Precise interfaces</small>
            </div>
            <div>
              <Braces />
              <span>Backend</span>
              <small>Reliable services</small>
            </div>
            <div>
              <Database />
              <span>Data</span>
              <small>Useful context</small>
            </div>
            <div>
              <Cloud />
              <span>Cloud</span>
              <small>Observable delivery</small>
            </div>
          </div>
        </section>

        <section className="ai-chapter chapter" id="ai" data-chapter>
          <div className="ai-chapter__noise" aria-hidden="true" />
          <div className="ai-chapter__copy">
            <ChapterLabel number="05">Artificial intelligence</ChapterLabel>
            <motion.h2
              variants={editorialReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              Inteligencia que entra al <span>flujo del producto.</span>
            </motion.h2>
            <p>
              No agrego IA como decoración. Diseño el contexto, las herramientas
              y los controles que la convierten en una capacidad real.
            </p>
            <ChapterLink to="/skills">Explore AI practice</ChapterLink>
          </div>
          <motion.div
            className="ai-orbit"
            initial={{ opacity: 0, scale: 0.86 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          >
            <div className="ai-orbit__core">
              <span>AI</span>
              <small>ORCHESTRATION</small>
            </div>
            <div className="ai-orbit__ring ai-orbit__ring--one">
              <i>CONTEXT</i>
            </div>
            <div className="ai-orbit__ring ai-orbit__ring--two">
              <i>TOOLS</i>
            </div>
            <div className="ai-orbit__ring ai-orbit__ring--three">
              <i>OUTPUT</i>
            </div>
            <span className="ai-orbit__signal ai-orbit__signal--one" />
            <span className="ai-orbit__signal ai-orbit__signal--two" />
            <span className="ai-orbit__signal ai-orbit__signal--three" />
          </motion.div>
          <div className="ai-chapter__principles">
            <article>
              <span>01</span>
              <strong>Useful context</strong>
              <p>Datos y conocimiento antes que prompts aislados.</p>
            </article>
            <article>
              <span>02</span>
              <strong>Human control</strong>
              <p>Decisiones visibles, trazables y recuperables.</p>
            </article>
            <article>
              <span>03</span>
              <strong>Measurable value</strong>
              <p>Menos fricción, mejores respuestas, más capacidad.</p>
            </article>
          </div>
        </section>

        <section className="lab chapter" id="lab" data-chapter>
          <div className="lab__title">
            <ChapterLabel number="06">Engineering lab</ChapterLabel>
            <motion.h2
              variants={editorialReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.45 }}
            >
              Un espacio para probar <span>antes de prometer.</span>
            </motion.h2>
          </div>
          <motion.div
            className="lab__bench"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.article
              className="lab-card lab-card--agents"
              variants={labReveal}
            >
              <div className="lab-card__top">
                <span>EXP / 014</span>
                <BrainCircuit />
              </div>
              <div className="lab-card__agent-flow">
                <i>ASK</i>
                <b />
                <i>PLAN</i>
                <b />
                <i>ACT</i>
              </div>
              <strong>Agent workflows</strong>
              <p>Herramientas, memoria y guardrails.</p>
            </motion.article>
            <motion.article
              className="lab-card lab-card--motion"
              variants={labReveal}
            >
              <div className="lab-card__top">
                <span>EXP / 021</span>
                <Layers3 />
              </div>
              <div className="lab-card__waves">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <strong>Interface motion</strong>
              <p>Movimiento que orienta y explica.</p>
            </motion.article>
            <motion.article
              className="lab-card lab-card--infra"
              variants={labReveal}
            >
              <div className="lab-card__top">
                <span>EXP / 028</span>
                <Cloud />
              </div>
              <div className="lab-card__terminal">
                <span>$ deploy product-core</span>
                <span>✓ build complete</span>
                <span>✓ checks passing</span>
                <span className="cursor">_</span>
              </div>
              <strong>Delivery systems</strong>
              <p>De commit a producción con confianza.</p>
            </motion.article>
          </motion.div>
          <div className="lab__aside">
            <span>
              LAB STATUS <i />
            </span>
            <p>Experimentar es reducir incertidumbre con evidencia.</p>
            <ChapterLink to="/lab">Open engineering lab</ChapterLink>
          </div>
        </section>

        <section className="journal chapter" id="journal" data-chapter>
          <div className="journal__masthead">
            <ChapterLabel number="07">Journal</ChapterLabel>
            <span>NOTES ON BUILDING COMPLETE PRODUCTS</span>
          </div>
          <motion.div
            className="journal__title"
            variants={journalReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
          >
            <h2>
              Field
              <br />
              notes.
            </h2>
            <p>
              Ideas, decisiones y aprendizajes que aparecen cuando diseño
              productos reales.
            </p>
          </motion.div>
          <div className="journal__issues">
            <Link to="/blog">
              <span>NOTE / 001</span>
              <strong>
                La arquitectura también es experiencia de usuario.
              </strong>
              <small>6 min</small>
              <ArrowUpRight />
            </Link>
            <Link to="/blog">
              <span>NOTE / 002</span>
              <strong>Qué significa poner IA dentro de un producto.</strong>
              <small>8 min</small>
              <ArrowUpRight />
            </Link>
            <Link to="/blog">
              <span>NOTE / 003</span>
              <strong>
                De una interfaz correcta a una interfaz inevitable.
              </strong>
              <small>5 min</small>
              <ArrowUpRight />
            </Link>
          </div>
          <div className="journal__footer">
            <span>ISSUE 01 / 2026</span>
            <ChapterLink to="/blog">Read the journal</ChapterLink>
          </div>
        </section>

        <section
          className="contact-chapter chapter chapter--dark"
          id="contact"
          data-chapter
        >
          <div className="contact-chapter__header">
            <ChapterLabel number="08">Contact</ChapterLabel>
            <span>END / OR A NEW START</span>
          </div>
          <motion.div
            className="contact-chapter__main"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.span variants={contactReveal}>
              Have a product in mind?
            </motion.span>
            <motion.h2 variants={contactReveal}>
              Construyamos algo <em>completo.</em>
            </motion.h2>
            <motion.p variants={contactReveal}>
              Puedo ayudarte a convertir una idea ambiciosa en un producto
              claro, robusto y listo para producción.
            </motion.p>
            <motion.div variants={contactReveal}>
              <Link className="contact-chapter__cta" to="/contact">
                Start a conversation <Send size={19} />
              </Link>
            </motion.div>
          </motion.div>
          <div className="contact-chapter__footer">
            <span>ALEJANDRO / FULL STACK ENGINEER</span>
            <span>FRONTEND · BACKEND · CLOUD · AI</span>
            <a href="#hero">
              Back to top <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
