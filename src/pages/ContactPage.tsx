import { Mail, FileDown } from 'lucide-react'
import { Seo } from '@/components/common/Seo'
import {
  ContactSignalVisual,
  ContactEmailCard,
  ContactChannelsList,
  ContactContextMatrix,
} from '@/components/contact'
import { CONTACT_CONFIG } from '@/config/contact.config'
import { useLocale } from '@/hooks/useLocale'
import '@/styles/contact.css'

export function ContactPage() {
  const { t } = useLocale()

  return (
    <div className="contact-page-shell">
      <Seo title={t.header.nav.contact} description={t.contact.lede} />

      {/* Viewport 1: Complete Scene (Intro + Email + Signal Visual) */}
      <div className="contact-hero-scene">
        <section
          className="contact-hero-grid"
          aria-label="Contact introduction"
        >
          <div className="contact-hero__intro">
            <p className="page-eyebrow">{t.contact.eyebrow}</p>
            <h1 className="contact-hero__title">
              {t.contact.titleLine1}
              <em>{t.contact.titleLine2}</em>
            </h1>
            <p className="contact-hero__lede">{t.contact.lede}</p>

            {/* Email as a core design element */}
            <ContactEmailCard />
          </div>

          <div className="contact-hero__visual-wrap">
            <ContactSignalVisual />
          </div>
        </section>
      </div>

      {/* Subsequent Sections (Scroll Down Scene) */}
      <div className="contact-body-sections">
        {/* Professional Scope & Working Parameters */}
        <ContactContextMatrix />

        {/* Verified Professional Channels Directory */}
        <ContactChannelsList />

        {/* Closing Bridge Section */}
        <section className="contact-closing" aria-label="Closing statement">
          <span className="contact-closing__kicker">
            {t.contact.closing.kicker}
          </span>
          <h2 className="contact-closing__title">{t.contact.closing.title}</h2>
          <p className="contact-closing__body">{t.contact.closing.body}</p>
          <div className="contact-closing__actions">
            <a
              href={`mailto:${CONTACT_CONFIG.email}`}
              className="contact-email-btn contact-email-btn--primary"
            >
              <Mail size={16} strokeWidth={1.8} aria-hidden="true" />
              <span>{t.contact.channels.email.action}</span>
            </a>
            {CONTACT_CONFIG.cvUrl && (
              <a
                href={CONTACT_CONFIG.cvUrl}
                download="Alejandro-CV.pdf"
                className="contact-email-btn contact-email-btn--copy"
              >
                <FileDown size={16} strokeWidth={1.8} aria-hidden="true" />
                <span>{t.contact.channels.cv.action}</span>
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
