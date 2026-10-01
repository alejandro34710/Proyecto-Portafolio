import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'

export function ExperienceTrajectory() {
  const { t } = useLocale()
  const copy = t.experience.trajectory

  return (
    <section
      className="experience-trajectory"
      aria-labelledby="experience-trajectory-title"
    >
      <Reveal preset="slideUp">
        <header className="experience-trajectory__header">
          <p className="experience-section__eyebrow">{copy.eyebrow}</p>
          <h2
            id="experience-trajectory-title"
            className="experience-trajectory__title"
          >
            {copy.title}
          </h2>
        </header>
      </Reveal>

      <div className="experience-trajectory__track">
        {/* Phase 1: Homecenter */}
        <Reveal
          className="experience-trajectory__card experience-trajectory__card--foundation"
          preset="slideUp"
        >
          <div className="experience-trajectory__card-top">
            <span className="experience-trajectory__phase-badge">
              STAGE {copy.phase1.index}
            </span>
            <span className="experience-trajectory__period">
              {copy.phase1.period}
            </span>
          </div>
          <h3 className="experience-trajectory__role">{copy.phase1.role}</h3>
          <p className="experience-trajectory__company">
            {copy.phase1.company}
          </p>
          <p className="experience-trajectory__focus">{copy.phase1.focus}</p>
        </Reveal>

        {/* Connector */}
        <div className="experience-trajectory__connector" aria-hidden="true">
          <div className="experience-trajectory__connector-line" />
          <span className="experience-trajectory__connector-badge">
            <span>{copy.connectorText}</span>
            <ArrowRight size={13} />
          </span>
          <div className="experience-trajectory__connector-line" />
        </div>

        {/* Phase 2: CUN */}
        <Reveal
          className="experience-trajectory__card experience-trajectory__card--active"
          preset="slideUp"
        >
          <div className="experience-trajectory__card-top">
            <span className="experience-trajectory__phase-badge experience-trajectory__phase-badge--active">
              <span className="experience-trajectory__pulse-dot" />
              STAGE {copy.phase2.index} · ACTIVE
            </span>
            <span className="experience-trajectory__period">
              {copy.phase2.period}
            </span>
          </div>
          <h3 className="experience-trajectory__role">{copy.phase2.role}</h3>
          <p className="experience-trajectory__company">
            {copy.phase2.company}
          </p>
          <p className="experience-trajectory__focus">{copy.phase2.focus}</p>
          <div className="experience-trajectory__indicator">
            <CheckCircle2 size={13} />
            <span>ENFOQUE PROFESIONAL ACTUAL</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
