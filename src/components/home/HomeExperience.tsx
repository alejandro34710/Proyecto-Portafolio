import { ArrowRight, ArrowUpRight, Calendar, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/config/routes.config'
import { useLocale } from '@/hooks/useLocale'

export function HomeExperience() {
  const { t } = useLocale()
  const exp = t.home.experiencePreview

  return (
    <section
      className="home-experience-preview home-section"
      id="experience-preview"
      data-home-chapter
    >
      <div className="home-container">
        <header className="home-section-header">
          <p className="home-eyebrow">{exp.eyebrow}</p>
          <h2 className="home-section-title">{exp.title}</h2>
          <p className="home-section-lede">{exp.lede}</p>
        </header>

        <div className="home-experience-preview__grid">
          {/* Card 1: CUN (Current) */}
          <motion.article
            className="home-exp-card home-exp-card--active"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="home-exp-card__header">
              <span className="home-exp-card__badge home-exp-card__badge--active">
                <span className="home-exp-card__dot" aria-hidden="true" />
                {exp.currentBadge}
              </span>
              <span className="home-exp-card__tag">CAREER / 01</span>
            </div>

            <h3 className="home-exp-card__role">{exp.currentRole}</h3>
            <p className="home-exp-card__company">{exp.currentCompany}</p>

            <div className="home-exp-card__meta">
              <span>
                <Calendar size={13} aria-hidden="true" />
                {exp.currentPeriod}
              </span>
              <span>
                <MapPin size={13} aria-hidden="true" />
                {exp.currentLocation}
              </span>
            </div>

            <p className="home-exp-card__summary">{exp.currentSummary}</p>
          </motion.article>

          {/* Connector */}
          <div
            className="home-experience-preview__connector"
            aria-hidden="true"
          >
            <span className="home-experience-preview__connector-line" />
            <span className="home-experience-preview__connector-badge">
              <span>AMPLIACIÓN</span>
              <ArrowRight size={13} />
            </span>
            <span className="home-experience-preview__connector-line" />
          </div>

          {/* Card 2: Homecenter (Previous) */}
          <motion.article
            className="home-exp-card home-exp-card--past"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="home-exp-card__header">
              <span className="home-exp-card__badge">{exp.pastBadge}</span>
              <span className="home-exp-card__tag">CAREER / 02</span>
            </div>

            <h3 className="home-exp-card__role">{exp.pastRole}</h3>
            <p className="home-exp-card__company">{exp.pastCompany}</p>

            <div className="home-exp-card__meta">
              <span>
                <Calendar size={13} aria-hidden="true" />
                {exp.pastPeriod}
              </span>
              <span>
                <MapPin size={13} aria-hidden="true" />
                {exp.pastLocation}
              </span>
            </div>

            <p className="home-exp-card__summary">{exp.pastSummary}</p>
          </motion.article>
        </div>

        <div className="home-experience-preview__action">
          <Link className="home-experience-preview__cta" to={ROUTES.EXPERIENCE}>
            <span>{exp.cta}</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
