import { useState } from 'react'
import {
  FileSearch,
  Network,
  Minimize2,
  Sparkles,
  Rocket,
  ShieldCheck,
  Terminal,
} from 'lucide-react'
import { useLocale } from '@/hooks/useLocale'

const PRINCIPLE_ICONS = [FileSearch, Network, Minimize2, Sparkles, Rocket]

export function AboutPrinciplesConsole() {
  const { t } = useLocale()
  const { items, eyebrow, title, lede, helperText } = t.about.philosophy
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const activePrinciple = items[selectedIndex] || items[0]
  const Icon = PRINCIPLE_ICONS[selectedIndex] || FileSearch

  return (
    <section
      className="about-principles-section"
      aria-labelledby="about-principles-title"
    >
      <div className="about-section__header">
        <p className="page-eyebrow">{eyebrow}</p>
        <h2 id="about-principles-title" className="about-section__title">
          {title}
        </h2>
        <p className="about-section__lede">{lede}</p>
        <span className="about-principles__hint">{helperText}</span>
      </div>

      <div className="about-principles__console-grid">
        {/* Left Column: Interactive Principle Switcher List */}
        <div
          className="about-principles__nav"
          role="tablist"
          aria-label="Engineering principles"
        >
          {items.map((item, idx) => {
            const ItemIcon = PRINCIPLE_ICONS[idx]
            const isSelected = selectedIndex === idx

            return (
              <button
                key={item.index}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`principle-panel-${item.index}`}
                id={`principle-tab-${item.index}`}
                onClick={() => setSelectedIndex(idx)}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`about-principles__tab-card ${isSelected ? 'is-selected' : ''}`}
              >
                <div className="about-principles__tab-top">
                  <span className="about-principles__tab-number">
                    {item.index}
                  </span>
                  <span className="about-principles__tab-icon">
                    <ItemIcon size={14} strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="about-principles__tab-title">{item.title}</h3>
                <p className="about-principles__tab-snippet">
                  {item.statement}
                </p>
                <div
                  className="about-principles__tab-active-indicator"
                  aria-hidden="true"
                />
              </button>
            )
          })}
        </div>

        {/* Right Column: Deep Architectural Console Glass Panel */}
        <div
          id={`principle-panel-${activePrinciple.index}`}
          role="tabpanel"
          aria-labelledby={`principle-tab-${activePrinciple.index}`}
          className="about-principles__detail-display"
        >
          <div className="about-principles__display-chrome">
            <div className="about-principles__display-tag">
              <Icon size={16} strokeWidth={2} aria-hidden="true" />
              <span>
                PRINCIPLE / {activePrinciple.index} — EXECUTION CRITERION
              </span>
            </div>
            <div className="about-principles__display-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="about-principles__display-content">
            <h3 className="about-principles__display-heading">
              {activePrinciple.title}
            </h3>

            <blockquote className="about-principles__display-quote">
              &ldquo;{activePrinciple.statement}&rdquo;
            </blockquote>

            <p className="about-principles__display-description">
              {activePrinciple.detail}
            </p>

            <div className="about-principles__display-meta">
              <div className="about-principles__meta-item">
                <span className="about-principles__meta-label">
                  <ShieldCheck size={13} strokeWidth={2} aria-hidden="true" />
                  CRITERIO TÉCNICO
                </span>
                <span className="about-principles__meta-value">
                  {activePrinciple.criterion}
                </span>
              </div>

              <div className="about-principles__meta-item">
                <span className="about-principles__meta-label">
                  <Terminal size={13} strokeWidth={2} aria-hidden="true" />
                  EN LA PRÁCTICA
                </span>
                <span className="about-principles__meta-value">
                  {activePrinciple.practice}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
