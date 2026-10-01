import { Database, Layers, Sparkles, TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'

export function CareerTransition() {
  const { t } = useLocale()
  const copy = t.experience.transition

  return (
    <section
      className="career-transition"
      aria-labelledby="career-transition-title"
    >
      <Reveal preset="slideUp">
        <header className="career-transition__header">
          <p className="experience-section__eyebrow">{copy.eyebrow}</p>
          <h2 id="career-transition-title" className="career-transition__title">
            {copy.title}
          </h2>
          <p className="career-transition__lede">{copy.lede}</p>
        </header>
      </Reveal>

      <div className="career-transition__narrative">
        <Reveal preset="slideUp">
          <p>{copy.body1}</p>
        </Reveal>
        <Reveal preset="slideUp">
          <p>{copy.body2}</p>
        </Reveal>
      </div>

      <div className="career-transition__bridge">
        {/* Foundation Card */}
        <Reveal
          className="career-transition__panel career-transition__panel--foundation"
          preset="slideUp"
        >
          <div className="career-transition__panel-badge">
            <Database size={13} aria-hidden="true" />
            <span>{copy.foundationTag}</span>
          </div>
          <h3 className="career-transition__panel-title">
            {copy.foundationTitle}
          </h3>
          <p className="career-transition__panel-desc">
            {copy.foundationDescription}
          </p>
          <ul className="career-transition__list">
            {copy.foundationPoints.map((point) => (
              <li key={point}>
                <span
                  className="career-transition__list-bullet"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Dynamic Connector */}
        <div className="career-transition__spine" aria-hidden="true">
          <div className="career-transition__spine-line" />
          <div className="career-transition__spine-node">
            <TrendingUp size={15} />
            <span>AMPLIACIÓN</span>
          </div>
          <div className="career-transition__spine-line" />
        </div>

        {/* Expansion Card */}
        <Reveal
          className="career-transition__panel career-transition__panel--expansion"
          preset="slideUp"
        >
          <div className="career-transition__panel-badge career-transition__panel-badge--accent">
            <Layers size={13} aria-hidden="true" />
            <span>{copy.expansionTag}</span>
          </div>
          <h3 className="career-transition__panel-title">
            {copy.expansionTitle}
          </h3>
          <p className="career-transition__panel-desc">
            {copy.expansionDescription}
          </p>
          <ul className="career-transition__list">
            {copy.expansionPoints.map((point) => (
              <li key={point}>
                <Sparkles
                  size={12}
                  className="career-transition__list-sparkle"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
