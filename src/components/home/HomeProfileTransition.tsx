import { ArrowUpRight, Compass, GraduationCap } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/config/routes.config'
import { useLocale } from '@/hooks/useLocale'

export function HomeProfileTransition() {
  const { t } = useLocale()
  const profile = t.home.profileTransition

  return (
    <section
      className="home-profile-transition home-section"
      id="profile"
      data-home-chapter
    >
      <div className="home-container">
        <div className="home-profile-transition__layout">
          <motion.div
            className="home-profile-transition__copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="home-eyebrow">{profile.eyebrow}</p>
            <h2 className="home-section-title">
              {profile.titleLine1}
              <span>{profile.titleLine2}</span>
            </h2>
            <p className="home-profile-transition__body">{profile.body}</p>

            <Link className="home-profile-transition__cta" to={ROUTES.ABOUT}>
              <span>{profile.cta}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.aside
            className="home-profile-transition__card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="home-profile-transition__card-top">
              <span className="home-profile-transition__card-badge">
                PROFILE CONSOLE
              </span>
              <span className="home-profile-transition__card-mark">
                FOUNDATION / 05
              </span>
            </div>

            <div className="home-profile-transition__item">
              <div className="home-profile-transition__item-label">
                <GraduationCap size={15} aria-hidden="true" />
                <span>{profile.formationLabel}</span>
              </div>
              <p className="home-profile-transition__item-val">
                {profile.formationValue}
              </p>
            </div>

            <div className="home-profile-transition__item">
              <div className="home-profile-transition__item-label">
                <Compass size={15} aria-hidden="true" />
                <span>{profile.approachLabel}</span>
              </div>
              <p className="home-profile-transition__item-val">
                {profile.approachValue}
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
