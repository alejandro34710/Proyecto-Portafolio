import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Seo } from '@/components/common/Seo'
import { CaseSection, ProjectMedia, SystemDiagram } from '@/components/projects'
import { projectPath, ROUTES } from '@/config/routes.config'
import type { Project } from '@/data/types'
import {
  formatProjectStack,
  getLocalized,
  getNextProject,
  getProjectBySlug,
} from '@/data/projects'
import { useLocale } from '@/hooks/useLocale'

function MetaRow({
  label,
  value,
}: {
  label: string
  value: string | null | undefined
}) {
  if (!value) return null
  return (
    <dl>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </dl>
  )
}

function SolutionFlow({
  project,
  productLabel,
}: {
  project: Project
  productLabel: string
}) {
  const { locale } = useLocale()
  return (
    <div className="solution-flow" aria-label="Solution architecture">
      <span className="solution-flow__node">{productLabel}</span>
      {project.architecture.map((layer) => (
        <div key={layer.id} style={{ display: 'contents' }}>
          <span className="solution-flow__arrow" aria-hidden="true">
            →
          </span>
          <span className="solution-flow__node">
            {getLocalized(layer.label, locale).toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  )
}

export function ProjectDetailPage() {
  const { slug = '' } = useParams()
  const { t, locale } = useLocale()
  const project = getProjectBySlug(slug)
  const next = project ? getNextProject(project.slug) : undefined

  if (!project) {
    return (
      <div className="page-shell case-page">
        <Seo title={t.projectDetail.notFoundTitle} noIndex />
        <p className="page-eyebrow">[ 02 / PROJECT ]</p>
        <h1 className="page-title">{t.projectDetail.notFoundTitle}</h1>
        <p className="page-lede">{t.projectDetail.notFoundBody}</p>
        <p style={{ marginTop: '2rem' }}>
          <Link className="project-feature__cta" to={ROUTES.PROJECTS}>
            {t.projectDetail.backToProjects}
            <span aria-hidden="true">
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </span>
          </Link>
        </p>
      </div>
    )
  }

  const category = getLocalized(project.category, locale)
  const shortDescription = getLocalized(project.shortDescription, locale)
  const role = project.role ? getLocalized(project.role, locale) : null
  const status = project.status ? getLocalized(project.status, locale) : null
  const scope = project.scope ? getLocalized(project.scope, locale) : null
  const stack = formatProjectStack(project)
  const overview = project.overview
    ? getLocalized(project.overview, locale)
    : null
  const problem = project.problem ? getLocalized(project.problem, locale) : null
  const solution = project.solution
    ? getLocalized(project.solution, locale)
    : null
  const results = project.results ? getLocalized(project.results, locale) : null
  const responsibilities = project.responsibilities
    ? project.responsibilities[locale]
    : null

  const hasContext = Boolean(problem || overview)
  const hasSolution = Boolean(solution)
  const hasContribution = Boolean(
    responsibilities && responsibilities.length > 0,
  )
  const hasSystem = project.architecture.length > 0
  const hasChallenges = Boolean(
    project.challenges && project.challenges.length > 0,
  )
  const hasResult = Boolean(results)

  const headerYear = project.year
    ? `${t.projectDetail.selectedWork} / ${project.year}`
    : t.projectDetail.selectedWork

  return (
    <div className="page-shell page-shell--wide case-page">
      <Seo title={project.title} description={shortDescription} />

      <header className="case-hero">
        <p className="case-hero__eyebrow">
          {t.projects.projectLabel} / {project.number}
        </p>
        <p className="case-hero__breadcrumb">{headerYear}</p>

        <div className="case-hero__layout">
          <div className="case-hero__main">
            <span className="case-hero__category">{category}</span>
            <h1 className="case-hero__title">{project.title}</h1>
            <p className="case-hero__desc">{shortDescription}</p>
          </div>

          <aside className="case-meta" aria-label="Project metadata">
            <MetaRow label={t.projectDetail.role} value={role} />
            <MetaRow label={t.projectDetail.year} value={project.year} />
            <MetaRow label={t.projectDetail.status} value={status} />
            <MetaRow label={t.projectDetail.scope} value={scope} />
            <MetaRow label={t.projectDetail.stack} value={stack} />
          </aside>
        </div>

        {hasSystem && (
          <a className="case-hero__anchor" href="#case-system">
            {t.projectDetail.viewSystem}
            <ArrowDown size={14} strokeWidth={1.5} aria-hidden="true" />
          </a>
        )}
      </header>

      <section className="case-preview">
        <ProjectMedia
          title={project.title}
          cover={project.cover}
          video={project.video}
          poster={project.poster}
          variant="hero"
        />
        {project.privateProject && (
          <div className="case-preview__meta">
            <span>{t.projectDetail.previewLabel}</span>
            <span>{t.projectDetail.previewSensitive}</span>
          </div>
        )}
      </section>

      {hasContext && (
        <CaseSection
          index={t.projectDetail.contextIndex}
          title={t.projectDetail.contextTitle}
          layout="30-70"
        >
          {problem && (
            <div className="case-block">
              <h3 className="case-block__label">
                {t.projectDetail.theProblem}
              </h3>
              <p className="case-block__body">{problem}</p>
            </div>
          )}
          {overview && (
            <div className="case-block">
              <h3 className="case-block__label">
                {t.projectDetail.contextLabel}
              </h3>
              <p className="case-block__body">{overview}</p>
            </div>
          )}
        </CaseSection>
      )}

      {hasSolution && (
        <CaseSection
          index={t.projectDetail.solutionIndex}
          title={t.projectDetail.solutionTitle}
          layout="40-60"
        >
          <p className="case-block__body">{solution}</p>
          <SolutionFlow
            project={project}
            productLabel={t.projectDetail.solutionProduct.toUpperCase()}
          />
        </CaseSection>
      )}

      {hasContribution && (
        <CaseSection
          index={t.projectDetail.contributionIndex}
          title={t.projectDetail.contributionTitle}
          layout="30-70"
        >
          <p className="case-block__intro">
            {t.projectDetail.contributionIntro}
          </p>
          <ol className="case-contribution-list">
            {responsibilities!.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>{item}</div>
              </li>
            ))}
          </ol>
        </CaseSection>
      )}

      {hasSystem && (
        <CaseSection
          id="case-system"
          index={t.projectDetail.systemIndex}
          title={t.projectDetail.systemTitle}
          layout="30-70"
        >
          <SystemDiagram architecture={project.architecture} />
        </CaseSection>
      )}

      {hasChallenges && (
        <CaseSection
          index={t.projectDetail.engineeringIndex}
          title={t.projectDetail.engineeringTitle}
          layout="30-70"
        >
          <div className="challenge-rows">
            {project.challenges!.slice(0, 4).map((challenge, index) => (
              <article
                key={getLocalized(challenge.title, locale)}
                className="challenge-row"
              >
                <span className="challenge-row__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{getLocalized(challenge.title, locale)}</h3>
                  <p>{getLocalized(challenge.description, locale)}</p>
                </div>
              </article>
            ))}
          </div>
        </CaseSection>
      )}

      {hasResult && (
        <CaseSection
          index={t.projectDetail.resultIndex}
          title={t.projectDetail.resultTitle}
          layout="30-70"
        >
          {project.resultTags && project.resultTags.length > 0 && (
            <div className="case-result-tags">
              {project.resultTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
          <p className="case-block__body">{results}</p>
        </CaseSection>
      )}

      {project.privateProject && (
        <aside className="private-disclosure">
          <strong>{t.projectDetail.privateTitle}</strong>
          <p>{t.projectDetail.privateBody}</p>
        </aside>
      )}

      {next ? (
        <Link className="next-case" to={projectPath(next.slug)}>
          <span className="next-case__label">
            {t.projectDetail.nextCase} / {next.number}
          </span>
          <span className="next-case__name">
            {next.title}
            <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
          </span>
        </Link>
      ) : (
        <Link className="next-case next-case--back" to={ROUTES.PROJECTS}>
          <span className="next-case__label">
            {t.projectDetail.backToSelected}
          </span>
          <span className="next-case__name">
            →
            <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
          </span>
        </Link>
      )}
    </div>
  )
}
