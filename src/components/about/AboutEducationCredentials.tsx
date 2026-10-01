import { GraduationCap, BrainCircuit, CheckCircle2, Clock } from 'lucide-react'
import { useLocale } from '@/hooks/useLocale'

export function AboutEducationCredentials() {
  const { t } = useLocale()
  const { degrees, eyebrow, title, lede } = t.about.education

  return (
    <section
      className="about-education-section"
      aria-labelledby="about-education-title"
    >
      <div className="about-section__header">
        <p className="page-eyebrow">{eyebrow}</p>
        <h2 id="about-education-title" className="about-section__title">
          {title}
        </h2>
        <p className="about-section__lede">{lede}</p>
      </div>

      <div className="about-education__grid">
        {degrees.map((degree) => {
          const isCompleted = degree.statusType === 'completed'
          const Icon = isCompleted ? GraduationCap : BrainCircuit

          return (
            <article
              key={degree.id}
              className={`about-education__card ${isCompleted ? 'is-completed' : 'is-in-progress'}`}
              aria-labelledby={`degree-title-${degree.id}`}
            >
              <div className="about-education__card-header">
                <div className="about-education__badge-group">
                  <span className="about-education__index-badge">
                    {degree.index}
                  </span>
                  <span
                    className={`about-education__status-badge ${isCompleted ? 'about-education__status-badge--success' : 'about-education__status-badge--active'}`}
                  >
                    {isCompleted ? (
                      <CheckCircle2
                        size={12}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    ) : (
                      <Clock size={12} strokeWidth={2} aria-hidden="true" />
                    )}
                    <span>{degree.status}</span>
                  </span>
                </div>
                <span className="about-education__period">{degree.period}</span>
              </div>

              <div className="about-education__title-row">
                <span className="about-education__icon-wrap">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <h3
                    id={`degree-title-${degree.id}`}
                    className="about-education__degree-title"
                  >
                    {degree.degree}
                  </h3>
                  <p className="about-education__institution">
                    {degree.institution}
                  </p>
                </div>
              </div>

              <p className="about-education__desc">{degree.description}</p>

              <div className="about-education__competencies">
                <span className="about-education__competencies-label">
                  COMPETENCIAS CLAVE
                </span>
                <div className="about-education__competencies-pills">
                  {degree.competencies.map((comp) => (
                    <span key={comp} className="about-education__comp-pill">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
