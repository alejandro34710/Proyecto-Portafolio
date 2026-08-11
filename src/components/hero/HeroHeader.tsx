import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '@/config/routes.config'
import { useLocale } from '@/hooks/useLocale'
import { useTheme } from '@/hooks/useTheme'
import type { Locale } from '@/i18n'

export function HeroHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)
  const { scrollY } = useScroll()
  const { resolvedTheme, setTheme } = useTheme()
  const { locale, setLocale, t } = useLocale()
  const isDark = resolvedTheme === 'dark'

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = lastY.current
    const delta = latest - previous

    if (menuOpen || latest < 28) {
      setHidden(false)
    } else if (delta > 6) {
      setHidden(true)
    } else if (delta < -6) {
      setHidden(false)
    }

    lastY.current = latest
    setScrolled(latest > 18)
  })

  const setLanguage = (next: Locale) => {
    setLocale(next)
  }

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <motion.header
      className={`hero-header${scrolled ? ' is-scrolled' : ''}`}
      initial={false}
      animate={hidden ? 'hidden' : 'visible'}
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          pointerEvents: 'auto',
        },
        hidden: {
          y: -28,
          opacity: 0,
          pointerEvents: 'none',
        },
      }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="hero-header__shell">
        <Link
          className="hero-header__brand"
          to="/"
          aria-label={locale === 'es' ? 'Ir al inicio' : 'Go to home'}
        >
          <span className="hero-header__logo" aria-hidden="true">
            A
          </span>
          <span className="hero-header__brand-text">{t.header.brand}</span>
        </Link>

        <nav
          className="hero-header__nav"
          aria-label={
            locale === 'es' ? 'Navegación principal' : 'Main navigation'
          }
        >
          {NAV_ITEMS.map((item) => {
            const label = t.header.nav[item.key]
            return (
              <NavLink
                key={item.key}
                className={({ isActive }) =>
                  `hero-header__link${isActive ? ' is-active' : ''}`
                }
                to={item.path}
                end={item.path === '/'}
              >
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <motion.span
                        className="hero-header__active-surface"
                        layoutId="hero-header-active"
                        transition={{
                          type: 'spring',
                          stiffness: 340,
                          damping: 32,
                        }}
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="hero-header__label">{label}</span>
                  </>
                )}
              </NavLink>
            )
          })}
        </nav>

        <div className="hero-header__controls">
          <Link className="hero-header__cta" to="/contact">
            {t.header.cta}
            <ArrowUpRight size={13} strokeWidth={1.6} aria-hidden="true" />
          </Link>
          <div
            className="hero-header__lang"
            role="group"
            aria-label={t.meta.language}
          >
            <button
              type="button"
              className={locale === 'en' ? 'is-active' : ''}
              onClick={() => setLanguage('en')}
              aria-pressed={locale === 'en'}
            >
              EN
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={locale === 'es' ? 'is-active' : ''}
              onClick={() => setLanguage('es')}
              aria-pressed={locale === 'es'}
            >
              ES
            </button>
          </div>

          <button
            type="button"
            className="hero-header__icon-btn"
            onClick={toggleTheme}
            aria-label={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
          >
            {isDark ? (
              <Sun size={15} strokeWidth={1.75} />
            ) : (
              <Moon size={15} strokeWidth={1.75} />
            )}
          </button>

          <button
            className="hero-header__menu hero-header__icon-btn"
            type="button"
            aria-label={menuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? (
              <X size={16} strokeWidth={1.75} />
            ) : (
              <Menu size={16} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      <motion.div
        className="hero-header__mobile"
        initial={false}
        animate={menuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, y: 0, pointerEvents: 'auto' },
          closed: { opacity: 0, y: -10, pointerEvents: 'none' },
        }}
      >
        {NAV_ITEMS.map((item) => (
          <NavLink
            to={item.path}
            key={item.key}
            end={item.path === '/'}
            onClick={() => setMenuOpen(false)}
          >
            {t.header.nav[item.key]}
          </NavLink>
        ))}
      </motion.div>
    </motion.header>
  )
}
