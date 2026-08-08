import { Menu, Moon, Sun, X } from 'lucide-react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useRef, useState } from 'react'
import { useLocale } from '@/hooks/useLocale'
import { useTheme } from '@/hooks/useTheme'
import type { Locale } from '@/i18n'

const navHrefs = [
  { key: 'home', href: '#hero', index: '01', section: 'hero' },
  { key: 'projects', href: '#projects', index: '02', section: 'projects' },
  {
    key: 'architecture',
    href: '#architecture',
    index: '03',
    section: 'architecture',
  },
  { key: 'ai', href: '#ai', index: '04', section: 'ai' },
  { key: 'lab', href: '#lab', index: '05', section: 'lab' },
  { key: 'journal', href: '#journal', index: '06', section: 'journal' },
  { key: 'contact', href: '#contact', index: '07', section: 'contact' },
] as const

type HeroHeaderProps = {
  activeSection: string
}

export function HeroHeader({ activeSection }: HeroHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
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
  })

  const setLanguage = (next: Locale) => {
    setLocale(next)
  }

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <motion.header
      className="hero-header"
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
        <a className="hero-header__brand" href="#hero" aria-label="Ir al inicio">
          <span className="hero-header__logo" aria-hidden="true">
            A
          </span>
          <span className="hero-header__brand-text">
            {t.header.brand} <span>/ 01</span>
          </span>
        </a>

        <nav className="hero-header__nav" aria-label="Navegación principal">
          {navHrefs.map((item) => {
            const label = t.header.nav[item.key]
            const isActive =
              activeSection === item.section ||
              (item.section === 'hero' &&
                (activeSection === 'hero' || activeSection === 'system-map'))
            return (
              <a
                key={item.key}
                className={`hero-header__link${isActive ? ' is-active' : ''}`}
                href={item.href}
              >
                <span className="hero-header__index">{item.index}</span>
                <span className="hero-header__label">{label}</span>
              </a>
            )
          })}
        </nav>

        <div className="hero-header__controls">
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
        {navHrefs.map((item) => (
          <a
            href={item.href}
            key={item.key}
            onClick={() => setMenuOpen(false)}
          >
            <span>{item.index}</span>
            {t.header.nav[item.key]}
          </a>
        ))}
      </motion.div>
    </motion.header>
  )
}
