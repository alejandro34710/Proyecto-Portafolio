import { Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { useTheme } from '@/hooks/useTheme'

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'AI', href: '#ai' },
  { label: 'Lab', href: '#lab' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
] as const

export function HeroHeader({ activeSection }: { activeSection: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <header className="hero-header">
      <a className="hero-header__brand" href="#hero" aria-label="Ir al inicio">
        SYSTEM <span>/</span> 01
      </a>

      <nav className="hero-header__nav" aria-label="Navegación principal">
        {navItems.map((item, index) => {
          const sectionId = item.href.replace('#', '')
          return (
            <span key={item.label} className="hero-header__nav-item">
              {index > 0 && (
                <span className="hero-header__dot" aria-hidden="true">
                  ·
                </span>
              )}
              <a
                className={activeSection === sectionId ? 'is-active' : ''}
                href={item.href}
              >
                {item.label}
              </a>
            </span>
          )
        })}
      </nav>

      <div className="hero-header__controls">
        <div className="hero-header__theme">
          <span>Theme</span>
          <button
            type="button"
            className={!isDark ? 'is-active' : ''}
            onClick={() => setTheme('light')}
            aria-label="Activar tema claro"
          />
          <button
            type="button"
            className={isDark ? 'is-active' : ''}
            onClick={() => setTheme('dark')}
            aria-label="Activar tema oscuro"
          />
        </div>
        <button
          className="hero-header__menu"
          type="button"
          aria-label={menuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
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
        {navItems.map((item) => (
          <a
            href={item.href}
            key={item.label}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </motion.div>
    </header>
  )
}
