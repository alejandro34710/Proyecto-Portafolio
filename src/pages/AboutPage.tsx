import { Seo } from '@/components/common/Seo'
import { CONTACT_CONFIG } from '@/config/contact.config'
import { useLocale } from '@/hooks/useLocale'

export function AboutPage() {
  const { t } = useLocale()

  return (
    <div className="page-shell">
      <Seo title={t.header.nav.about} description={t.about.body1} />

      <div className="about-layout">
        <div>
          <p className="page-eyebrow">{t.about.eyebrow}</p>
          <h1 className="page-title">
            {t.about.titleLine1}
            <span>{t.about.titleLine2}</span>
          </h1>
          <p className="page-lede">{t.about.body1}</p>
          <p className="page-lede">{t.about.body2}</p>

          <h2
            className="detail-kicker"
            style={{ marginTop: '3rem', marginBottom: '0.5rem' }}
          >
            {t.about.howIWork}
          </h2>
          <ol className="about-principles">
            {t.about.principles.map((principle, index) => (
              <li key={principle}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {principle}
              </li>
            ))}
          </ol>
        </div>

        <aside className="about-aside" aria-label="Professional profile">
          <div className="about-aside__system" aria-hidden="true">
            <span className="about-aside__orbit" />
            <span className="about-aside__orbit" />
            <span className="about-aside__core">A</span>
            <i className="is-one" />
            <i className="is-two" />
            <small>PRODUCT / ENGINEERING / AI</small>
          </div>
          <dl>
            <dt>{t.about.location}</dt>
            <dd>{CONTACT_CONFIG.location}</dd>
          </dl>
          <dl>
            <dt>{t.about.role}</dt>
            <dd>{CONTACT_CONFIG.role}</dd>
          </dl>
          <dl>
            <dt>{t.about.focus}</dt>
            <dd>{CONTACT_CONFIG.focus}</dd>
          </dl>
        </aside>
      </div>
    </div>
  )
}
