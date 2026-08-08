import { useEffect, useRef, useState } from 'react'
import {
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
import { motion, useScroll } from 'motion/react'
import type { Variants } from 'motion/react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/common/Seo'
import { HeroHeader } from '@/components/hero/HeroHeader'
import { HeroIsometricGraphic } from '@/components/hero/HeroIsometricGraphic'
import { SystemStatusBar } from '@/components/hero/SystemStatusBar'
import { PhilosophySection } from '@/components/philosophy/PhilosophySection'
import { SystemMap } from '@/components/system-map/SystemMap'
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
  { id: 'system-map', number: 'SM', label: 'System Map' },
  ...chapters,
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
          </div>
          <SystemStatusBar />
        </section>

        <section
          className="system-map chapter"
          id="system-map"
          data-chapter
        >
          <SystemMap />
        </section>

        <PhilosophySection />

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
