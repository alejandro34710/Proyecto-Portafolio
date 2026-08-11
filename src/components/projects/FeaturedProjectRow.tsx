import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '@/components/design-system/Motion'
import { ProjectMedia } from '@/components/projects/ProjectMedia'
import { projectPath } from '@/config/routes.config'
import type { Project } from '@/data/types'
import { formatProjectStack, getLocalized } from '@/data/projects'
import { useLocale } from '@/hooks/useLocale'

type FeaturedProjectRowProps = {
  project: Project
  reversed?: boolean
  compact?: boolean
}

export function FeaturedProjectRow({
  project,
  reversed = false,
  compact = false,
}: FeaturedProjectRowProps) {
  const { t, locale } = useLocale()
  const category = getLocalized(project.category, locale).toUpperCase()
  const description = getLocalized(project.shortDescription, locale)
  const stack = formatProjectStack(project)
  const status = project.status
    ? getLocalized(project.status, locale).toUpperCase()
    : null

  return (
    <Reveal>
      <article
        className={`project-feature${reversed ? ' project-feature--reverse' : ''}${
          compact ? ' project-feature--compact' : ''
        }`}
      >
        <div className="project-feature__copy">
          <span className="project-feature__label">
            {t.projects.projectLabel} / {project.number}
          </span>
          <span className="project-feature__category">{category}</span>
          <h2 className="project-feature__title">{project.title}</h2>
          <p className="project-feature__desc">{description}</p>
          {stack && <p className="project-feature__stack">{stack}</p>}
          <div className="project-feature__meta">
            {project.year && <span>{project.year}</span>}
            {status && <span>{status}</span>}
          </div>
          <Link className="project-feature__cta" to={projectPath(project.slug)}>
            {t.projects.viewCase}
            <span aria-hidden="true">
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </span>
          </Link>
        </div>
        <div className="project-feature__media">
          <ProjectMedia
            title={project.title}
            cover={project.cover}
            video={project.video}
            poster={project.poster}
            variant="row"
          />
        </div>
      </article>
    </Reveal>
  )
}
