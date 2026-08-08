import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { useLocale } from '@/hooks/useLocale'

const consoleLines = [
  'Initializing...',
  'Loading modules...',
  'Ready.',
] as const

const stack = [
  'React',
  'NestJS',
  'PostgreSQL',
  'Cloud Run',
  'AI',
] as const

export function SystemStatusBar() {
  const { t } = useLocale()
  const [visibleLines, setVisibleLines] = useState(1)

  useEffect(() => {
    if (visibleLines >= consoleLines.length) return
    const timeout = window.setTimeout(() => {
      setVisibleLines((current) => current + 1)
    }, 780)
    return () => window.clearTimeout(timeout)
  }, [visibleLines])

  return (
    <footer className="hero-dock" aria-label="System status">
      <div className="hero-dock__console" aria-hidden="true">
        <span>{t.hero.consoleLabel}</span>
        {consoleLines.slice(0, visibleLines).map((line) => (
          <code key={line}>{line}</code>
        ))}
      </div>

      <div className="hero-dock__band">
        <div className="hero-dock__status">
          <span className="hero-dock__system">{t.hero.systemOnline}</span>
          <span className="hero-dock__ready">
            <i aria-hidden="true" />
            {t.hero.ready}
          </span>
        </div>

        <div className="hero-dock__meta">
          <strong>{t.hero.role}</strong>
          <ul className="hero-dock__stack">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <a className="hero-dock__scroll" href="#system-map">
          <span className="hero-dock__scroll-dot" aria-hidden="true" />
          <span>{t.hero.scroll}</span>
          <ArrowDown size={13} strokeWidth={1.5} />
        </a>
      </div>
    </footer>
  )
}
