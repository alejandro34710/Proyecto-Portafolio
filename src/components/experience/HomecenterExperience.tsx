import {
  BarChart3,
  Calendar,
  CheckCircle,
  FileSpreadsheet,
  MapPin,
  Workflow,
} from 'lucide-react'
import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'

export function HomecenterExperience() {
  const { t } = useLocale()
  const copy = t.experience.homecenter

  return (
    <article
      className="homecenter-experience"
      id="homecenter-experience"
      aria-labelledby="homecenter-title"
    >
      <Reveal preset="slideUp">
        <header className="homecenter-experience__header">
          <div className="homecenter-experience__meta-top">
            <span className="homecenter-experience__badge">{copy.badge}</span>
            <span className="homecenter-experience__time-tag">
              JUN 2024 — ENE 2025
            </span>
          </div>

          <div className="homecenter-experience__headline-group">
            <h2 id="homecenter-title" className="homecenter-experience__role">
              {copy.role}
            </h2>
            <p className="homecenter-experience__area">{copy.area}</p>
            <p className="homecenter-experience__company">{copy.company}</p>
          </div>

          <div className="homecenter-experience__meta-row">
            <span className="homecenter-experience__meta-item">
              <Calendar size={13} aria-hidden="true" />
              {copy.period}
            </span>
            <span className="homecenter-experience__meta-item">
              <MapPin size={13} aria-hidden="true" />
              {copy.location}
            </span>
          </div>

          <p className="homecenter-experience__lede">{copy.description}</p>
        </header>
      </Reveal>

      <div className="homecenter-experience__pillars">
        {/* Pillar 1: Data & Analytics */}
        <Reveal
          className="homecenter-pillar homecenter-pillar--data"
          preset="slideUp"
        >
          <header className="homecenter-pillar__header">
            <div className="homecenter-pillar__icon-wrap">
              <BarChart3 size={16} aria-hidden="true" />
            </div>
            <h3 className="homecenter-pillar__title">{copy.dataTitle}</h3>
          </header>
          <ul className="homecenter-pillar__list">
            {copy.dataItems.map((item) => (
              <li key={item}>
                <CheckCircle
                  size={13}
                  className="homecenter-pillar__bullet"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Pillar 2: Processes & Improvement */}
        <Reveal
          className="homecenter-pillar homecenter-pillar--process"
          preset="slideUp"
        >
          <header className="homecenter-pillar__header">
            <div className="homecenter-pillar__icon-wrap">
              <Workflow size={16} aria-hidden="true" />
            </div>
            <h3 className="homecenter-pillar__title">{copy.processTitle}</h3>
          </header>
          <ul className="homecenter-pillar__list">
            {copy.processItems.map((item) => (
              <li key={item}>
                <CheckCircle
                  size={13}
                  className="homecenter-pillar__bullet"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Contextual Operational Tools */}
      <Reveal preset="slideUp">
        <footer className="homecenter-experience__footer">
          <span className="homecenter-experience__tools-label">
            <FileSpreadsheet size={13} aria-hidden="true" />
            {copy.toolsTitle}:
          </span>
          <div className="homecenter-experience__tools-list">
            {copy.tools.map((tool) => (
              <span key={tool} className="homecenter-experience__tool-chip">
                {tool}
              </span>
            ))}
          </div>
        </footer>
      </Reveal>
    </article>
  )
}
