import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CONTACT_CONFIG } from '@/config/contact.config'
import { NAV_ITEMS } from '@/config/routes.config'
import { useLocale } from '@/hooks/useLocale'

export function SiteFooter() {
  const { locale, t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__grid" aria-hidden="true" />
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link
            to="/"
            aria-label={locale === 'es' ? 'Ir al inicio' : 'Go home'}
          >
            <span>A</span>
            <strong>ALEJANDRO</strong>
          </Link>
          <p>
            {locale === 'es'
              ? 'Producto, ingeniería, cloud e inteligencia artificial como un solo sistema.'
              : 'Product, engineering, cloud and artificial intelligence as one system.'}
          </p>
        </div>

        <nav
          aria-label={
            locale === 'es' ? 'Navegación del pie' : 'Footer navigation'
          }
        >
          <span>NAVIGATION / 01—06</span>
          {NAV_ITEMS.map((item) => (
            <Link to={item.path} key={item.key}>
              {t.header.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="site-footer__channels">
          <span>OPEN CHANNELS</span>
          {CONTACT_CONFIG.github && (
            <a href={CONTACT_CONFIG.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={12} />
            </a>
          )}
          {CONTACT_CONFIG.linkedin && (
            <a href={CONTACT_CONFIG.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={12} />
            </a>
          )}
          <Link to="/contact">
            {t.header.nav.contact} <ArrowUpRight size={12} />
          </Link>
        </div>

        <a className="site-footer__top" href="#top" aria-label="Back to top">
          <ArrowUp size={16} />
        </a>
      </div>

      <div className="site-footer__legal">
        <span>© {year} Alejandro</span>
        <span>INGENIERO MULTIMEDIA · DESARROLLADOR FULLSTACK</span>
        <span>CO / REMOTE</span>
      </div>
    </footer>
  )
}
