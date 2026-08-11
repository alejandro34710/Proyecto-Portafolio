import { Seo } from '@/components/common/Seo'
import { FeaturedProjectRow, ProjectIndex } from '@/components/projects'
import { getFeaturedProjects, getSecondaryProjects } from '@/data/projects'
import { useLocale } from '@/hooks/useLocale'

export function ProjectsPage() {
  const { t } = useLocale()
  const featured = getFeaturedProjects()
  const secondary = getSecondaryProjects()

  return (
    <div className="page-shell page-shell--wide projects-page">
      <Seo
        title={t.header.nav.projects}
        description={`${t.projects.lede1} ${t.projects.lede2}`}
      />

      <header className="projects-hero">
        <p className="page-eyebrow">{t.projects.eyebrow}</p>
        <h1 className="projects-hero__title">
          {t.projects.titleLine1}
          <span>{t.projects.titleLine2}</span>
        </h1>
        <p className="projects-hero__lede">{t.projects.lede1}</p>
        <p className="projects-hero__lede projects-hero__lede--secondary">
          {t.projects.lede2}
        </p>
        <p className="projects-hero__techline">
          <span>{t.projects.techLine}</span>
          <span>{t.projects.periodLine}</span>
        </p>
      </header>

      <section className="projects-featured" aria-label={t.header.nav.projects}>
        {featured.map((project, index) => (
          <FeaturedProjectRow
            key={project.slug}
            project={project}
            reversed={index % 2 === 1}
          />
        ))}
      </section>

      {secondary.length > 0 && (
        <section
          className="projects-other"
          aria-label={t.projects.otherWorkTitle}
        >
          <h2 className="projects-other__title">{t.projects.otherWorkTitle}</h2>
          {secondary.map((project, index) => (
            <FeaturedProjectRow
              key={project.slug}
              project={project}
              reversed={index % 2 === 1}
              compact
            />
          ))}
        </section>
      )}

      <ProjectIndex projects={featured} />
    </div>
  )
}
