import { Link } from 'react-router-dom'
import { Seo } from '@/components/common/Seo'
import { projectPath } from '@/config/routes.config'
import { experienceEntries } from '@/data/experience'
import { getLocalized, getProjectBySlug } from '@/data/projects'
import { useLocale } from '@/hooks/useLocale'

export function ExperiencePage() {
  const { t, locale } = useLocale()

  return (
    <div className="page-shell">
      <Seo title={t.header.nav.experience} description={t.experience.lede} />

      <div className="experience-layout">
        <header>
          <p className="page-eyebrow">{t.experience.eyebrow}</p>
          <h1 className="page-title">
            {t.experience.titleLine1}
            <span>{t.experience.titleLine2}</span>
          </h1>
          <p className="page-lede">{t.experience.lede}</p>
        </header>

        <div className="experience-timeline">
          {experienceEntries.map((entry) => {
            if (entry.isTodo) {
              return (
                <article key={entry.id} className="experience-entry">
                  <div className="experience-todo">
                    <strong>{t.experience.todoLabel}</strong>
                    <p>{t.experience.todoBody}</p>
                    {entry.relatedProjectSlugs.length > 0 && (
                      <p style={{ marginTop: '1rem' }}>
                        <span
                          style={{
                            display: 'block',
                            marginBottom: '0.45rem',
                            color: 'var(--home-soft)',
                            font: '600 0.62rem/1 var(--font-mono)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {t.experience.related}
                        </span>
                        {entry.relatedProjectSlugs.map((slug, index) => {
                          const project = getProjectBySlug(slug)
                          if (!project) return null
                          return (
                            <span key={slug}>
                              {index > 0 ? ' · ' : ''}
                              <Link to={projectPath(slug)}>
                                {project.title}
                              </Link>
                            </span>
                          )
                        })}
                      </p>
                    )}
                  </div>
                </article>
              )
            }

            const company = entry.company
              ? getLocalized(entry.company, locale)
              : t.common.pending
            const role = entry.role
              ? getLocalized(entry.role, locale)
              : t.common.pending
            const period = entry.period
              ? getLocalized(entry.period, locale)
              : t.common.pending
            const description = entry.description
              ? getLocalized(entry.description, locale)
              : null
            const responsibilities = entry.responsibilities
              ? entry.responsibilities[locale]
              : null

            return (
              <article key={entry.id} className="experience-entry">
                <span className="experience-entry__period">{period}</span>
                <h2 className="experience-entry__role">{role}</h2>
                <p className="experience-entry__company">{company}</p>
                {description && (
                  <p className="detail-body" style={{ marginTop: '1rem' }}>
                    {description}
                  </p>
                )}
                {responsibilities && responsibilities.length > 0 && (
                  <ol className="detail-list">
                    {responsibilities.map((item, index) => (
                      <li key={item}>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
                {entry.technologies.length > 0 && (
                  <p
                    className="project-row__meta"
                    style={{ marginTop: '1.25rem' }}
                  >
                    <span>{t.experience.technologies}</span>
                    <span>{entry.technologies.join(' · ')}</span>
                  </p>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
