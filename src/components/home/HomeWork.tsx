import { ArrowUpRight, Lock } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { projectPath, ROUTES } from '@/config/routes.config'
import { projects, getLocalized } from '@/data/projects'
import type { Project } from '@/data/types'
import { useLocale } from '@/hooks/useLocale'

function ProjectSystemPreview({ project }: { project: Project }) {
  const { locale } = useLocale()
  const layers = project.architecture.length > 0 ? project.architecture : []

  return (
    <div className="project-system-preview" aria-hidden="true">
      <div className="project-system-preview__screen">
        <header className="project-system-preview__bar">
          <div className="project-system-preview__dots">
            <span />
            <span />
            <span />
          </div>
          <small>
            SYS://{project.slug}.internal ·{' '}
            {locale === 'es' ? 'ACCESO INSTITUCIONAL' : 'INSTITUTIONAL ACCESS'}
          </small>
        </header>

        <div className="project-system-preview__body">
          <div className="project-system-preview__main">
            <div className="project-system-preview__wire-header">
              <span className="project-system-preview__wire-badge">
                TOPOLOGY / {project.number}
              </span>
              <span className="project-system-preview__wire-status">
                ACTIVE
              </span>
            </div>

            <div className="project-system-preview__wire-flow">
              {layers.map((layer) => (
                <div
                  key={layer.id}
                  className="project-system-preview__wire-node"
                >
                  <span className="project-system-preview__wire-label">
                    {getLocalized(layer.label, locale)}
                  </span>
                  {layer.technologies && layer.technologies.length > 0 && (
                    <small className="project-system-preview__wire-tech">
                      {layer.technologies.slice(0, 2).join(' · ')}
                    </small>
                  )}
                </div>
              ))}
            </div>

            <div className="project-system-preview__modules">
              <span>
                <small>SERVICES</small>
                <strong>REST</strong>
              </span>
              <span>
                <small>DATA</small>
                <strong>PGSQL</strong>
              </span>
              <span>
                <small>STATUS</small>
                <strong>PROD</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <span className="project-system-preview__coordinate">
        PRJ / {project.number}
      </span>
    </div>
  )
}

export function HomeWork() {
  const { t, locale } = useLocale()
  const work = t.home.work
  const featured = projects.slice(0, 3)

  return (
    <section className="home-work home-section" id="work" data-home-chapter>
      <div className="home-container">
        <header className="home-section-header">
          <p className="home-eyebrow">{work.eyebrow}</p>
          <h2 className="home-section-title">
            {work.titleLine1}
            <span>{work.titleLine2}</span>
          </h2>
          <p className="home-section-lede">{work.lede}</p>
        </header>

        <div className="home-work__list">
          {featured.map((project, index) => {
            const isReversed = index % 2 === 1
            const stackItems =
              project.stack.length > 0
                ? project.stack
                : project.architecture.map((layer) =>
                    getLocalized(layer.label, locale),
                  )

            return (
              <motion.article
                key={project.slug}
                className={`home-project${isReversed ? ' is-reversed' : ''}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="home-project__copy">
                  <div className="home-project__meta-top">
                    <span className="home-project__index">
                      PROJECT / {project.number}
                    </span>
                    <span className="home-project__year">
                      {project.year ?? '2025'}
                    </span>
                  </div>

                  <p className="home-project__category">
                    {getLocalized(project.category, locale)}
                  </p>

                  <h3 className="home-project__title">{project.title}</h3>

                  <p className="home-project__description">
                    {getLocalized(project.shortDescription, locale)}
                  </p>

                  <ul className="home-project__stack">
                    {stackItems.slice(0, 6).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="home-project__footer">
                    <p className="home-project__disclosure">
                      <Lock size={12} aria-hidden="true" />
                      <span>{work.privateBadge}</span>
                    </p>

                    <Link
                      className="home-project__cta"
                      to={projectPath(project.slug)}
                    >
                      <span>{work.viewProject}</span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                <div className="home-project__visual">
                  <ProjectSystemPreview project={project} />
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="home-work__all-wrap">
          <Link className="home-all-projects" to={ROUTES.PROJECTS}>
            <span>{work.allProjects}</span>
            <strong>({String(projects.length).padStart(2, '0')})</strong>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
