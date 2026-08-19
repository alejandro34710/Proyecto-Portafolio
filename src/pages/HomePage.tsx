import { useCallback, useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Braces,
  CloudCog,
  Database,
  Layers3,
  Network,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { motion, useScroll } from 'motion/react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/common/Seo'
import { PortfolioIntro } from '@/components/hero/PortfolioIntro'
import { HeroPortrait } from '@/components/hero/HeroPortrait'
import { TechMarquee } from '@/components/home/TechMarquee'
import { CONTACT_CONFIG } from '@/config/contact.config'
import { projectPath, ROUTES } from '@/config/routes.config'
import { projects, getLocalized } from '@/data/projects'
import { stackGroups } from '@/data/stack'
import type { Project } from '@/data/types'
import { useLocale } from '@/hooks/useLocale'
import './HomePage.css'

const journeySections = [
  { id: 'hero', number: '00', label: 'Opening' },
  { id: 'work', number: '01', label: 'Selected work' },
  { id: 'capabilities', number: '02', label: 'Capabilities' },
  { id: 'stack-system', number: '03', label: 'Stack system' },
  { id: 'process', number: '04', label: 'Process' },
  { id: 'profile', number: '05', label: 'Profile' },
  { id: 'contact', number: '06', label: 'Contact' },
] as const

const copy = {
  es: {
    availability: 'Disponible para construir productos con impacto',
    titleA: 'Portafolio.',
    titleB: 'Producto digital que escala.',
    intro:
      'Diseño y construyo sistemas completos donde experiencia, backend, datos, cloud e inteligencia artificial trabajan como una sola arquitectura.',
    viewWork: 'Ver proyectos',
    contact: 'Hablar conmigo',
    role: 'Desarrollador Fullstack',
    location: 'Colombia / Remoto',
    focus: 'Producto · Cloud · IA',
    workEyebrow: '[ 01 / SELECTED SYSTEMS ]',
    workTitleA: 'Software construido para',
    workTitleB: 'trabajar en el mundo real.',
    workBody:
      'Cada caso se presenta como un sistema: problema, decisiones, arquitectura y resultado. Los visuales conceptuales protegen la información de productos privados.',
    privatePreview: 'Representación de sistema privado',
    viewCase: 'Ver caso de estudio',
    allProjects: 'Ver todos los proyectos',
    capabilitiesEyebrow: '[ 02 / CAPABILITIES ]',
    capabilitiesTitleA: 'De la intención',
    capabilitiesTitleB: 'a producción.',
    capabilitiesBody:
      'Trabajo a través de las capas que convierten una idea en un producto confiable. No son servicios aislados: son partes de un mismo sistema.',
    capabilities: [
      {
        title: 'Product Engineering',
        body: 'Traducir necesidades reales en flujos, decisiones y software mantenible.',
        tech: 'Discovery · Architecture · Delivery',
      },
      {
        title: 'Frontend Systems',
        body: 'Interfaces claras, accesibles y preparadas para evolucionar como producto.',
        tech: 'React · TypeScript · Motion',
      },
      {
        title: 'Backend Systems',
        body: 'Servicios, contratos y lógica de dominio con límites técnicos explícitos.',
        tech: 'Node.js · NestJS · REST',
      },
      {
        title: 'Data & Operations',
        body: 'Modelos y herramientas que convierten procesos en información trazable.',
        tech: 'PostgreSQL · SQL · Modeling',
      },
      {
        title: 'Cloud Delivery',
        body: 'Contenedores y automatización para llevar el producto hasta producción.',
        tech: 'GCP · Cloud Run · Docker · CI/CD',
      },
      {
        title: 'AI Integration',
        body: 'Capacidades generativas incorporadas con propósito y salidas controladas.',
        tech: 'Gemini · LLM APIs · Workflows',
      },
    ],
    stackEyebrow: '[ 03 / ENGINEERING TOPOLOGY ]',
    stackTitleA: 'Una arquitectura.',
    stackTitleB: 'Múltiples capas.',
    stackBody:
      'La tecnología importa cuando forma una cadena coherente entre interfaz, servicios, datos, infraestructura e inteligencia.',
    inspectStack: 'Inspeccionar stack completo',
    processEyebrow: '[ 04 / PRODUCT METHOD ]',
    processTitleA: 'Claridad antes',
    processTitleB: 'de complejidad.',
    processBody:
      'Mi proceso reduce incertidumbre de forma progresiva y mantiene conectadas las decisiones de producto con las de ingeniería.',
    process: [
      ['01', 'Entender', 'Contexto, usuarios y restricción real.'],
      ['02', 'Definir', 'Alcance, modelo y decisiones críticas.'],
      ['03', 'Diseñar', 'Flujos, interfaz y arquitectura.'],
      ['04', 'Construir', 'Código, datos e integraciones.'],
      ['05', 'Entregar', 'Validación, despliegue y observación.'],
      ['06', 'Iterar', 'Aprendizaje convertido en mejora.'],
    ],
    manifesto:
      'Una buena experiencia no termina en la interfaz. También depende de la arquitectura, los datos y la confiabilidad que existen detrás.',
    profileEyebrow: '[ 05 / PROFILE & SIGNAL ]',
    profileTitleA: 'Pienso en producto.',
    profileTitleB: 'Construyo en sistema.',
    profileBody:
      'Me muevo entre diseño e ingeniería para convertir problemas reales en productos claros, mantenibles y preparados para crecer.',
    principles: [
      'Entender antes de construir',
      'Diseñar el sistema completo',
      'Mantener la complejidad visible',
      'Usar IA cuando aporta capacidad real',
      'Llevar las ideas hasta producción',
    ],
    moreAbout: 'Conocer mi enfoque',
    contactEyebrow: '[ 06 / OPEN CHANNEL ]',
    contactTitleA: 'Construyamos algo',
    contactTitleB: 'que tenga sentido.',
    contactBody:
      'Estoy abierto a conversar sobre productos donde diseño, ingeniería, cloud e inteligencia artificial necesiten funcionar juntos.',
    contactCta: 'Abrir canal de contacto',
    status: 'Canal disponible',
    response: 'Colombia · Trabajo remoto',
  },
  en: {
    availability: 'Available to build products with meaningful impact',
    titleA: 'Portfolio.',
    titleB: 'Digital product that scales.',
    intro:
      'I design and build complete systems where experience, backend, data, cloud and artificial intelligence work as one architecture.',
    viewWork: 'View projects',
    contact: 'Talk with me',
    role: 'Fullstack Developer',
    location: 'Colombia / Remote',
    focus: 'Product · Cloud · AI',
    workEyebrow: '[ 01 / SELECTED SYSTEMS ]',
    workTitleA: 'Software built to',
    workTitleB: 'work in the real world.',
    workBody:
      'Every case is presented as a system: problem, decisions, architecture and result. Conceptual visuals protect private product information.',
    privatePreview: 'Private system representation',
    viewCase: 'View case study',
    allProjects: 'View all projects',
    capabilitiesEyebrow: '[ 02 / CAPABILITIES ]',
    capabilitiesTitleA: 'From intent',
    capabilitiesTitleB: 'to production.',
    capabilitiesBody:
      'I work across the layers that turn an idea into a dependable product. They are not isolated services; they are parts of one system.',
    capabilities: [
      {
        title: 'Product Engineering',
        body: 'Translate real needs into flows, decisions and maintainable software.',
        tech: 'Discovery · Architecture · Delivery',
      },
      {
        title: 'Frontend Systems',
        body: 'Clear, accessible interfaces designed to evolve with the product.',
        tech: 'React · TypeScript · Motion',
      },
      {
        title: 'Backend Systems',
        body: 'Services, contracts and domain logic with explicit technical boundaries.',
        tech: 'Node.js · NestJS · REST',
      },
      {
        title: 'Data & Operations',
        body: 'Models and tools that turn processes into traceable information.',
        tech: 'PostgreSQL · SQL · Modeling',
      },
      {
        title: 'Cloud Delivery',
        body: 'Containers and automation that move the product into production.',
        tech: 'GCP · Cloud Run · Docker · CI/CD',
      },
      {
        title: 'AI Integration',
        body: 'Purposeful generative capabilities with controlled outputs.',
        tech: 'Gemini · LLM APIs · Workflows',
      },
    ],
    stackEyebrow: '[ 03 / ENGINEERING TOPOLOGY ]',
    stackTitleA: 'One architecture.',
    stackTitleB: 'Multiple layers.',
    stackBody:
      'Technology matters when it forms a coherent chain across interface, services, data, infrastructure and intelligence.',
    inspectStack: 'Inspect the complete stack',
    processEyebrow: '[ 04 / PRODUCT METHOD ]',
    processTitleA: 'Clarity before',
    processTitleB: 'complexity.',
    processBody:
      'My process progressively reduces uncertainty and keeps product decisions connected to engineering decisions.',
    process: [
      ['01', 'Understand', 'Context, users and the real constraint.'],
      ['02', 'Define', 'Scope, model and critical decisions.'],
      ['03', 'Design', 'Flows, interface and architecture.'],
      ['04', 'Build', 'Code, data and integrations.'],
      ['05', 'Deliver', 'Validation, deployment and observation.'],
      ['06', 'Iterate', 'Learning converted into improvement.'],
    ],
    manifesto:
      'A good experience does not end at the interface. It also depends on the architecture, data and reliability behind it.',
    profileEyebrow: '[ 05 / PROFILE & SIGNAL ]',
    profileTitleA: 'I think in product.',
    profileTitleB: 'I build in systems.',
    profileBody:
      'I move between design and engineering to turn real problems into clear, maintainable products ready to grow.',
    principles: [
      'Understand before building',
      'Design the complete system',
      'Keep complexity visible',
      'Use AI when it adds real capability',
      'Take ideas all the way to production',
    ],
    moreAbout: 'Read about my approach',
    contactEyebrow: '[ 06 / OPEN CHANNEL ]',
    contactTitleA: 'Let’s build something',
    contactTitleB: 'that matters.',
    contactBody:
      'I am open to discussing products where design, engineering, cloud and artificial intelligence need to work together.',
    contactCta: 'Open contact channel',
    status: 'Channel available',
    response: 'Colombia · Remote work',
  },
} as const

const capabilityIcons = [
  Workflow,
  Braces,
  Layers3,
  Database,
  CloudCog,
  BrainCircuit,
] as const

function SectionHeading({
  eyebrow,
  lineA,
  lineB,
  body,
  inverse = false,
}: {
  eyebrow: string
  lineA: string
  lineB: string
  body: string
  inverse?: boolean
}) {
  return (
    <header className={`home-section-heading${inverse ? ' is-inverse' : ''}`}>
      <p className="home-eyebrow">{eyebrow}</p>
      <h2>
        {lineA}
        <span>{lineB}</span>
      </h2>
      <p className="home-section-heading__body">{body}</p>
    </header>
  )
}

function ProjectSystemPreview({ project }: { project: Project }) {
  return (
    <div
      className={`project-system-preview project-system-preview--${project.slug}`}
      aria-hidden="true"
    >
      <div className="project-system-preview__window">
        <div className="project-system-preview__topbar">
          <span className="project-system-preview__lights">
            <i />
            <i />
            <i />
          </span>
          <span>{project.title} / OPERATIONS</span>
          <span>LIVE SYSTEM</span>
        </div>
        <div className="project-system-preview__workspace">
          <aside>
            <strong>{project.number}</strong>
            <i className="is-active" />
            <i />
            <i />
            <i />
          </aside>
          <div className="project-system-preview__canvas">
            <div className="project-system-preview__canvas-head">
              <span>CONTROL SURFACE</span>
              <i />
            </div>
            <div className="project-system-preview__signal">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="project-system-preview__modules">
              <span>
                <small>INPUT</small>
                <strong>24</strong>
              </span>
              <span>
                <small>PROCESS</small>
                <strong>08</strong>
              </span>
              <span>
                <small>STATUS</small>
                <strong>OK</strong>
              </span>
            </div>
          </div>
          <div className="project-system-preview__sidepanel">
            <span>SYSTEM FLOW</span>
            <i />
            <i />
            <i />
            <small>UI → API → DATA</small>
          </div>
        </div>
      </div>
      <span className="project-system-preview__orbit" />
      <span className="project-system-preview__coordinate">
        PRJ / {project.number}
      </span>
    </div>
  )
}

export function HomePage() {
  const [activeSection, setActiveSection] = useState('hero')
  const [introReady, setIntroReady] = useState(false)
  const { scrollYProgress } = useScroll()
  const { locale } = useLocale()
  const c = copy[locale]
  const featured = projects.slice(0, 3)
  const handleIntroComplete = useCallback(() => setIntroReady(true), [])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      '[data-home-chapter]',
    )
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-34% 0px -54% 0px', threshold: [0, 0.15, 0.4] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const activeIndex = journeySections.findIndex(
    (section) => section.id === activeSection,
  )

  return (
    <div className="home-experience">
      <Seo title="Ingeniero Multimedia · Desarrollador Fullstack" description={c.intro} />
      <PortfolioIntro onComplete={handleIntroComplete} />

      <a className="skip-link" href="#work">
        {locale === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>

      <motion.div
        className="reading-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      <aside className="chapter-rail" aria-label="Reading progress">
        <span>
          {activeIndex < 0 ? '00' : journeySections[activeIndex].number}
        </span>
        <div>
          {journeySections.map((chapter, index) => (
            <a
              href={`#${chapter.id}`}
              key={chapter.id}
              className={index === activeIndex ? 'is-active' : ''}
              aria-label={chapter.label}
            >
              <i />
            </a>
          ))}
        </div>
        <span>06</span>
      </aside>

      <section className="home-hero" id="hero" data-home-chapter>
        <div className="home-hero__scene" aria-hidden="true">
          <span className="home-hero__scene-glow" />
          <span className="home-hero__scene-noise" />
        </div>
        <div className="home-hero__ambient" aria-hidden="true" />
        <div className="home-container home-hero__layout">
          <motion.div
            className="home-hero__copy"
            initial={false}
            animate={
              introReady
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 30, filter: 'blur(8px)' }
            }
            transition={{ duration: 0.86, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="home-hero__availability">
              <i /> {c.availability}
            </p>
            <p className="home-hero__identity">
              {locale === 'es'
                ? 'ALEJANDRO · DESARROLLADOR FULLSTACK'
                : 'ALEJANDRO · FULLSTACK DEVELOPER'}
            </p>
            <h1>
              {c.titleA}
              <span>{c.titleB}</span>
            </h1>
            <p className="home-hero__intro">{c.intro}</p>
            <div className="home-hero__actions">
              <a className="home-button home-button--primary" href="#work">
                {c.viewWork}
                <ArrowDown size={15} aria-hidden="true" />
              </a>
              <Link
                className="home-button home-button--ghost"
                to={ROUTES.CONTACT}
              >
                {c.contact}
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="home-hero__visual"
            initial={false}
            animate={
              introReady
                ? { opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }
                : { opacity: 0, scale: 0.94, x: 36, filter: 'blur(10px)' }
            }
            transition={{
              duration: 1.08,
              delay: introReady ? 0.08 : 0,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <HeroPortrait />
          </motion.div>
        </div>
      </section>

      <TechMarquee />

      <section className="home-work home-section" id="work" data-home-chapter>
        <div className="home-container">
          <SectionHeading
            eyebrow={c.workEyebrow}
            lineA={c.workTitleA}
            lineB={c.workTitleB}
            body={c.workBody}
          />

          <div className="home-work__list">
            {featured.map((project, index) => (
              <motion.article
                className={`home-project${index % 2 === 1 ? ' is-reversed' : ''}`}
                key={project.slug}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="home-project__copy">
                  <p className="home-project__index">
                    PROJECT / {project.number}
                    <span>{project.year ?? '—'}</span>
                  </p>
                  <p className="home-project__category">
                    {getLocalized(project.category, locale)}
                  </p>
                  <h3>{project.title}</h3>
                  <p className="home-project__description">
                    {getLocalized(project.shortDescription, locale)}
                  </p>
                  <ul className="home-project__stack">
                    {(project.stack.length > 0
                      ? project.stack
                      : project.architecture.map((layer) =>
                          getLocalized(layer.label, locale),
                        )
                    ).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="home-project__disclosure">
                    <i /> {c.privatePreview}
                  </p>
                  <Link
                    className="home-text-link"
                    to={projectPath(project.slug)}
                  >
                    {c.viewCase}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
                <div className="home-project__visual">
                  <ProjectSystemPreview project={project} />
                </div>
              </motion.article>
            ))}
          </div>

          <Link className="home-all-projects" to={ROUTES.PROJECTS}>
            <span>{c.allProjects}</span>
            <strong>{String(projects.length).padStart(2, '0')}</strong>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section
        className="home-capabilities home-section"
        id="capabilities"
        data-home-chapter
      >
        <div className="home-capabilities__grid" aria-hidden="true" />
        <div className="home-container home-capabilities__layout">
          <SectionHeading
            eyebrow={c.capabilitiesEyebrow}
            lineA={c.capabilitiesTitleA}
            lineB={c.capabilitiesTitleB}
            body={c.capabilitiesBody}
            inverse
          />
          <div className="capability-system">
            {c.capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index]
              return (
                <motion.article
                  className="capability-system__row"
                  key={capability.title}
                  initial={{ opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.045 }}
                >
                  <span className="capability-system__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="capability-system__icon">
                    <Icon size={19} strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{capability.title}</h3>
                    <p>{capability.body}</p>
                  </div>
                  <small>{capability.tech}</small>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className="home-stack home-section"
        id="stack-system"
        data-home-chapter
      >
        <div className="home-container">
          <SectionHeading
            eyebrow={c.stackEyebrow}
            lineA={c.stackTitleA}
            lineB={c.stackTitleB}
            body={c.stackBody}
          />

          <div className="stack-topology">
            <div className="stack-topology__telemetry">
              <span>ARCH / 05 LAYERS</span>
              <span>STATUS / CONNECTED</span>
            </div>
            <div className="stack-topology__core" aria-hidden="true">
              <span />
              <Network size={24} strokeWidth={1.2} />
              <small>SYSTEM CORE</small>
            </div>
            <div className="stack-topology__groups">
              {stackGroups.map((group, index) => (
                <article className="stack-node" key={group.id}>
                  <p>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {getLocalized(group.label, locale)}
                  </p>
                  <ul>
                    {group.items.slice(0, 5).map((item) => (
                      <li key={item.name}>{item.name}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <Link className="home-text-link home-stack__link" to={ROUTES.STACK}>
            {c.inspectStack}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section
        className="home-process home-section"
        id="process"
        data-home-chapter
      >
        <div className="home-container">
          <div className="home-process__intro">
            <SectionHeading
              eyebrow={c.processEyebrow}
              lineA={c.processTitleA}
              lineB={c.processTitleB}
              body={c.processBody}
            />
            <blockquote>
              <Sparkles size={19} strokeWidth={1.35} aria-hidden="true" />“
              {c.manifesto}”
            </blockquote>
          </div>

          <ol className="process-line">
            {c.process.map(([number, title, body], index) => (
              <li key={number}>
                <span className="process-line__node">
                  {index === c.process.length - 1 ? (
                    <Workflow size={17} strokeWidth={1.4} />
                  ) : (
                    number
                  )}
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="home-profile home-section"
        id="profile"
        data-home-chapter
      >
        <div className="home-container home-profile__layout">
          <div>
            <SectionHeading
              eyebrow={c.profileEyebrow}
              lineA={c.profileTitleA}
              lineB={c.profileTitleB}
              body={c.profileBody}
            />
            <Link className="home-text-link" to={ROUTES.ABOUT}>
              {c.moreAbout}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="profile-signal">
            <div className="profile-signal__map" aria-hidden="true">
              <span className="profile-signal__ring" />
              <span className="profile-signal__ring" />
              <span className="profile-signal__ring" />
              <span className="profile-signal__core">A</span>
              <i />
              <i />
              <i />
            </div>
            <ol>
              {c.principles.map((principle, index) => (
                <li key={principle}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {principle}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="home-contact" id="contact" data-home-chapter>
        <div className="home-contact__ambient" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="home-container home-contact__layout">
          <div>
            <p className="home-eyebrow">{c.contactEyebrow}</p>
            <h2>
              {c.contactTitleA}
              <span>{c.contactTitleB}</span>
            </h2>
            <p>{c.contactBody}</p>
            <Link
              className="home-button home-button--light"
              to={ROUTES.CONTACT}
            >
              {c.contactCta}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <aside className="home-contact__console">
            <div>
              <span>CHANNEL / 06</span>
              <span>SECURE</span>
            </div>
            <Network size={40} strokeWidth={1} aria-hidden="true" />
            <strong>{c.status}</strong>
            <p>{c.response}</p>
            <dl>
              <dt>ROLE</dt>
              <dd>{CONTACT_CONFIG.role}</dd>
              <dt>FOCUS</dt>
              <dd>{CONTACT_CONFIG.focus}</dd>
            </dl>
          </aside>
        </div>
      </section>
    </div>
  )
}
