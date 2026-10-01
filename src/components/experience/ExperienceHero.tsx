import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'

export function ExperienceHero() {
  const { t } = useLocale()
  const hero = t.experience.hero

  return (
    <section
      className="experience-hero"
      aria-labelledby="experience-hero-title"
    >
      <Reveal className="experience-hero__copy" preset="slideUp">
        <p className="page-eyebrow">{t.experience.eyebrow}</p>
        <h1
          id="experience-hero-title"
          className="page-title experience-hero__title"
        >
          {t.experience.titleLine1}
          <span>{t.experience.titleLine2}</span>
        </h1>
        <p className="page-lede experience-hero__lede">{t.experience.lede}</p>
      </Reveal>

      <Reveal className="experience-hero__status-card" preset="slideLeft">
        <div className="experience-hero__status-inner">
          <header className="experience-hero__status-header">
            <span className="experience-hero__status-badge">
              <span className="experience-hero__live-dot" aria-hidden="true" />
              {hero.statusBadge}
            </span>
            <span className="experience-hero__status-mark" aria-hidden="true">
              [ POSITION_01 ]
            </span>
          </header>

          <div className="experience-hero__status-main">
            <h2 className="experience-hero__current-role">
              {hero.currentRole}
            </h2>
            <p className="experience-hero__current-company">
              <Briefcase size={14} aria-hidden="true" />
              <span>{hero.company}</span>
            </p>
          </div>

          <div className="experience-hero__status-meta">
            <span className="experience-hero__meta-item">
              <Calendar size={13} aria-hidden="true" />
              {hero.period}
            </span>
            <span className="experience-hero__meta-item">
              <MapPin size={13} aria-hidden="true" />
              {hero.location}
            </span>
          </div>

          <p className="experience-hero__status-summary">{hero.summary}</p>

          <footer className="experience-hero__status-footer">
            <div className="experience-hero__focus-line">
              <Sparkles size={13} aria-hidden="true" />
              <span className="experience-hero__focus-label">
                {hero.currentFocusLabel}:
              </span>
              <strong className="experience-hero__focus-value">
                {hero.currentFocusValue}
              </strong>
            </div>
            <p className="experience-hero__anchor">{hero.trajectoryAnchor}</p>
          </footer>
        </div>
      </Reveal>
    </section>
  )
}
