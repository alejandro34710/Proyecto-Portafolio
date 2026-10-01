import { MapPin, Briefcase, GraduationCap, Compass } from 'lucide-react'
import { useLocale } from '@/hooks/useLocale'
import { AboutSystemVisual } from './AboutSystemVisual'

export function AboutHero() {
  const { t } = useLocale()

  return (
    <section className="about-hero" aria-label="About introduction and profile">
      <div className="about-hero__grid">
        {/* Left Column: Narrative, Identity & Quick Meta */}
        <div className="about-hero__narrative">
          <p className="page-eyebrow">{t.about.eyebrow}</p>

          <h1 className="about-hero__title">
            {t.about.titleLine1} <em>{t.about.titleLine2}</em>
          </h1>

          <div className="about-hero__ledes">
            <p className="about-hero__lede">{t.about.body1}</p>
            <p className="about-hero__lede about-hero__lede--secondary">
              {t.about.body2}
            </p>
          </div>

          {/* Quick Identity HUD Card (Selective Glassmorphism) */}
          <div
            className="about-identity-hud"
            aria-label="Professional snapshot"
          >
            <div className="about-identity-hud__item">
              <span className="about-identity-hud__label">
                <Briefcase size={13} strokeWidth={2} aria-hidden="true" />
                {t.about.hero.roleLabel}
              </span>
              <strong className="about-identity-hud__value">
                {t.about.hero.roleValue}
              </strong>
            </div>

            <div className="about-identity-hud__item">
              <span className="about-identity-hud__label">
                <GraduationCap size={13} strokeWidth={2} aria-hidden="true" />
                {t.about.hero.formationLabel}
              </span>
              <strong className="about-identity-hud__value">
                {t.about.hero.formationValue}
              </strong>
            </div>

            <div className="about-identity-hud__item">
              <span className="about-identity-hud__label">
                <MapPin size={13} strokeWidth={2} aria-hidden="true" />
                {t.about.hero.locationLabel}
              </span>
              <strong className="about-identity-hud__value">
                {t.about.hero.locationValue}
              </strong>
            </div>

            <div className="about-identity-hud__item about-identity-hud__item--highlight">
              <span className="about-identity-hud__label">
                <Compass size={13} strokeWidth={2} aria-hidden="true" />
                {t.about.hero.statusLabel}
              </span>
              <strong className="about-identity-hud__value">
                {t.about.hero.statusValue}
              </strong>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive System Architecture Visual */}
        <div className="about-hero__visual-column">
          <AboutSystemVisual />
        </div>
      </div>
    </section>
  )
}
