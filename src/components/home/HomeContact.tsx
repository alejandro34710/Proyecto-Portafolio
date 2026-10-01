import { ArrowUpRight, FileDown, Network } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/config/routes.config'
import { useLocale } from '@/hooks/useLocale'

export function HomeContact() {
  const { t } = useLocale()
  const contact = t.home.contact

  return (
    <section
      className="home-contact home-section"
      id="contact"
      data-home-chapter
    >
      <div className="home-contact__ambient" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="home-container home-contact__layout">
        <motion.div
          className="home-contact__copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="home-eyebrow">{contact.eyebrow}</p>
          <h2 className="home-section-title">
            {contact.titleLine1}
            <span>{contact.titleLine2}</span>
          </h2>
          <p className="home-contact__lede">{contact.lede}</p>

          <div className="home-contact__actions">
            <Link
              className="home-button home-button--light"
              to={ROUTES.CONTACT}
            >
              <span>{contact.primaryCta}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <a
              className="home-button home-button--ghost"
              href="/Alejandro-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileDown size={15} aria-hidden="true" />
              <span>{contact.secondaryCta}</span>
            </a>
          </div>
        </motion.div>

        <motion.aside
          className="home-contact__console"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Contact console"
        >
          <div className="home-contact__console-header">
            <span>{contact.channelBadge}</span>
            <span>SECURE</span>
          </div>

          <Network size={36} strokeWidth={1.2} aria-hidden="true" />
          <strong className="home-contact__status">
            {t.home.hero.availability}
          </strong>

          <dl className="home-contact__dl">
            <div>
              <dt>{contact.roleLabel}</dt>
              <dd>{contact.roleValue}</dd>
            </div>
            <div>
              <dt>{contact.locationLabel}</dt>
              <dd>{contact.locationValue}</dd>
            </div>
            <div>
              <dt>{contact.focusLabel}</dt>
              <dd>{contact.focusValue}</dd>
            </div>
          </dl>
        </motion.aside>
      </div>
    </section>
  )
}
