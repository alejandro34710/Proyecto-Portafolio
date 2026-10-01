import { Layout, Cpu, Boxes, CheckCircle2 } from 'lucide-react'
import { useLocale } from '@/hooks/useLocale'

const PILLAR_ICONS = [Layout, Cpu, Boxes]

export function AboutIntersectionMatrix() {
  const { t } = useLocale()
  const { pillars, eyebrow, title, lede, conclusion } = t.about.intersection

  return (
    <section
      className="about-intersection-section"
      aria-labelledby="about-intersection-title"
    >
      <div className="about-section__header">
        <p className="page-eyebrow">{eyebrow}</p>
        <h2 id="about-intersection-title" className="about-section__title">
          {title}
        </h2>
        <p className="about-section__lede">{lede}</p>
      </div>

      <div className="about-intersection__grid">
        {pillars.map((pillar, idx) => {
          const Icon = PILLAR_ICONS[idx] || Layout

          return (
            <div key={pillar.id} className="about-intersection__card">
              <div className="about-intersection__card-header">
                <span className="about-intersection__card-badge">
                  <Icon size={16} strokeWidth={2} aria-hidden="true" />
                  <strong>PILLAR / {pillar.index}</strong>
                </span>
                <span className="about-intersection__card-role">
                  {pillar.role}
                </span>
              </div>

              <h3 className="about-intersection__card-title">{pillar.title}</h3>
              <p className="about-intersection__card-desc">
                {pillar.description}
              </p>

              <ul className="about-intersection__card-points">
                {pillar.points.map((point) => (
                  <li key={point} className="about-intersection__point-item">
                    <CheckCircle2
                      size={13}
                      strokeWidth={2}
                      className="about-intersection__point-icon"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {/* Strategic Synthesis Glass Banner */}
      <div className="about-intersection__conclusion">
        <div className="about-intersection__conclusion-tag">
          SYNTHESIS & VALUE
        </div>
        <p className="about-intersection__conclusion-text">{conclusion}</p>
      </div>
    </section>
  )
}
