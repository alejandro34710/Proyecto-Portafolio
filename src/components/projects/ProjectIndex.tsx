import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES, projectPath } from '@/config/routes.config'
import type { Project } from '@/data/types'
import { useLocale } from '@/hooks/useLocale'

type ProjectIndexProps = {
  projects: readonly Project[]
}

export function ProjectIndex({ projects }: ProjectIndexProps) {
  const { t } = useLocale()

  return (
    <footer className="project-index">
      <h2 className="project-index__title">{t.projects.indexTitle}</h2>
      <ul className="project-index__list">
        {projects.map((project) => (
          <li key={project.slug} className="project-index__row">
            <span className="project-index__number">{project.number}</span>
            <span className="project-index__name">{project.title}</span>
            <span className="project-index__year">{project.year ?? ''}</span>
            <Link
              className="project-index__link"
              to={projectPath(project.slug)}
            >
              {t.projects.indexView}
              <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="project-index__cta">
        <p>{t.projects.ctaQuestion}</p>
        <div className="project-index__cta-links">
          <Link to={ROUTES.EXPERIENCE}>
            {t.projects.ctaExperience}
            <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
          </Link>
          <Link to={ROUTES.CONTACT}>
            {t.projects.ctaContact}
            <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
