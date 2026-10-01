import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CONTACT_CONFIG } from '@/config/contact.config'
import { IDENTITY } from '@/config/identity.config'
import { NAV_ITEMS } from '@/config/routes.config'
import { useLocale } from '@/hooks/useLocale'

export function SiteFooter() {
  const { locale, t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        {/* Main Row: Identity | Navigation | Channels */}
        <div className="site-footer__main">
          {/* Brand & Identity */}
          <div className="site-footer__brand">
            <Link
              to="/"
              className="site-footer__logo"
              aria-label={locale === 'es' ? 'Ir al inicio' : 'Go home'}
            >
              <span className="site-footer__logo-mark">A</span>
              <span className="site-footer__name">{IDENTITY.fullName}</span>
            </Link>
            <p className="site-footer__role">
              {locale === 'es' ? IDENTITY.role.es : IDENTITY.role.en} ·{' '}
              {locale === 'es' ? IDENTITY.education.es : IDENTITY.education.en}
            </p>
          </div>

          {/* Navigation Links */}
          <nav
            className="site-footer__nav"
            aria-label={
              locale === 'es' ? 'Navegación del sitio' : 'Site navigation'
            }
          >
            {NAV_ITEMS.map((item) => (
              <Link
                to={item.path}
                key={item.key}
                className="site-footer__nav-link"
              >
                {t.header.nav[item.key]}
              </Link>
            ))}
          </nav>

          {/* Professional Channels */}
          <div className="site-footer__channels">
            {CONTACT_CONFIG.linkedin && (
              <a
                href={CONTACT_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__channel-link"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            )}
            {CONTACT_CONFIG.github && (
              <a
                href={CONTACT_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__channel-link"
              >
                <span>GitHub</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            )}
            {CONTACT_CONFIG.cvUrl && (
              <a
                href={CONTACT_CONFIG.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="site-footer__channel-link"
              >
                <span>{locale === 'es' ? 'Currículum' : 'Resume / CV'}</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            )}
            {CONTACT_CONFIG.email && (
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="site-footer__channel-link"
              >
                <span>Email</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar: Copyright & Back to Top */}
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {year} {IDENTITY.fullName}.{' '}
            {locale === 'es'
              ? 'Todos los derechos reservados.'
              : 'All rights reserved.'}
          </p>

          <div className="site-footer__meta">
            <span className="site-footer__location">Bogotá, Colombia</span>
            <span className="site-footer__meta-dot" aria-hidden="true">
              ·
            </span>
            <a
              href="#top"
              className="site-footer__top-link"
              aria-label={locale === 'es' ? 'Volver arriba' : 'Back to top'}
            >
              <span>{locale === 'es' ? 'Volver arriba' : 'Back to top'}</span>
              <ArrowUp size={12} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
