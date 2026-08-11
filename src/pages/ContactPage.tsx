import { Send } from 'lucide-react'
import { Seo } from '@/components/common/Seo'
import { CONTACT_CONFIG } from '@/config/contact.config'
import { useLocale } from '@/hooks/useLocale'

export function ContactPage() {
  const { t } = useLocale()
  const mailto = CONTACT_CONFIG.email
    ? `mailto:${CONTACT_CONFIG.email}`
    : undefined

  return (
    <div className="contact-page">
      <Seo title={t.header.nav.contact} description={t.contact.lede} />

      <div className="contact-page__hero-grid">
        <div>
          <p className="page-eyebrow">{t.contact.eyebrow}</p>
          <h1 className="contact-page__title">
            {t.contact.titleLine1}
            <br />
            <em>{t.contact.titleLine2}</em>
          </h1>
          <p className="contact-page__lede">{t.contact.lede}</p>

          {mailto ? (
            <a className="contact-page__cta" href={mailto}>
              {t.contact.cta} <Send size={16} strokeWidth={1.5} />
            </a>
          ) : (
            <span className="contact-page__cta" title="TODO: email">
              {t.contact.cta} <Send size={16} strokeWidth={1.5} />
            </span>
          )}
        </div>

        <div className="contact-page__visual" aria-hidden="true">
          <span className="contact-page__orbit" />
          <span className="contact-page__orbit" />
          <span className="contact-page__orbit" />
          <div className="contact-page__visual-core">
            <Send size={27} strokeWidth={1.15} />
            <strong>OPEN</strong>
            <small>CHANNEL / 06</small>
          </div>
          <i className="is-one" />
          <i className="is-two" />
          <div className="contact-page__visual-label is-top">
            <span>LOCATION</span>
            <strong>{CONTACT_CONFIG.location}</strong>
          </div>
          <div className="contact-page__visual-label is-bottom">
            <span>MODE</span>
            <strong>REMOTE / ASYNC</strong>
          </div>
        </div>
      </div>

      <div className="contact-channels">
        <dl>
          <dt>{t.contact.email}</dt>
          <dd>
            {CONTACT_CONFIG.email ? (
              <a href={`mailto:${CONTACT_CONFIG.email}`}>
                {CONTACT_CONFIG.email}
              </a>
            ) : (
              <span className="is-todo">{t.contact.todoValue}</span>
            )}
          </dd>
        </dl>
        <dl>
          <dt>{t.contact.linkedin}</dt>
          <dd>
            {CONTACT_CONFIG.linkedin ? (
              <a
                href={CONTACT_CONFIG.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            ) : (
              <span className="is-todo">{t.contact.todoValue}</span>
            )}
          </dd>
        </dl>
        <dl>
          <dt>{t.contact.github}</dt>
          <dd>
            {CONTACT_CONFIG.github ? (
              <a href={CONTACT_CONFIG.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            ) : (
              <span className="is-todo">{t.contact.todoValue}</span>
            )}
          </dd>
        </dl>
      </div>
    </div>
  )
}
