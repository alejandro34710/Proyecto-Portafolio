import {
  BrainCircuit,
  Calendar,
  CheckCircle,
  ChevronRight,
  Code2,
  Database,
  Layers,
  MapPin,
  Server,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { TechIcon } from '@/components/common/TechIcon'
import { Reveal, Stagger, StaggerItem } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'

const domainIcons: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  data: Database,
  'cloud-ai': BrainCircuit,
}

export function CunExperience() {
  const { t, locale } = useLocale()
  const copy = t.experience.cun

  return (
    <article
      className="cun-experience"
      id="cun-experience"
      aria-labelledby="cun-title"
    >
      {/* CUN Editorial Header */}
      <Reveal preset="slideUp">
        <header className="cun-experience__header">
          <div className="cun-experience__meta-top">
            <span className="cun-experience__badge">{copy.badge}</span>
            <span className="cun-experience__status-pill">
              <span className="cun-experience__status-dot" aria-hidden="true" />
              {copy.currentTag}
            </span>
          </div>

          <div className="cun-experience__headline-group">
            <h2 id="cun-title" className="cun-experience__role">
              {copy.role}
            </h2>
            <p className="cun-experience__company">{copy.company}</p>
          </div>

          <div className="cun-experience__meta-row">
            <span className="cun-experience__meta-item">
              <Calendar size={14} aria-hidden="true" />
              {copy.period}
            </span>
            <span className="cun-experience__meta-item">
              <MapPin size={14} aria-hidden="true" />
              {copy.location}
            </span>
            <span className="cun-experience__meta-item cun-experience__meta-item--highlight">
              <Layers size={14} aria-hidden="true" />
              {locale === 'es'
                ? 'CICLO DE SOFTWARE COMPLETO'
                : 'FULL SOFTWARE LIFECYCLE'}
            </span>
          </div>

          <p className="cun-experience__lede">{copy.lede}</p>
        </header>
      </Reveal>

      {/* End-to-End Scope / Lifecycle Ribbon */}
      <section className="cun-lifecycle" aria-labelledby="cun-lifecycle-title">
        <Reveal preset="slideUp">
          <div className="cun-lifecycle__intro">
            <div className="cun-lifecycle__headings">
              <span className="experience-section__eyebrow">
                [ SCOPE / WORKFLOW ]
              </span>
              <h3 id="cun-lifecycle-title" className="cun-lifecycle__title">
                {copy.lifecycleTitle}
              </h3>
            </div>
            <p className="cun-lifecycle__subtitle">{copy.lifecycleSubtitle}</p>
          </div>
        </Reveal>

        <div className="cun-lifecycle__ribbon" role="list">
          {copy.lifecycleSteps.map((step, idx) => (
            <div
              key={step.index}
              className="cun-lifecycle__step"
              role="listitem"
            >
              <div className="cun-lifecycle__step-top">
                <span className="cun-lifecycle__step-num">{step.index}</span>
                {idx < copy.lifecycleSteps.length - 1 && (
                  <ChevronRight
                    size={14}
                    className="cun-lifecycle__step-arrow"
                    aria-hidden="true"
                  />
                )}
              </div>
              <strong className="cun-lifecycle__step-label">
                {step.label}
              </strong>
              <p className="cun-lifecycle__step-detail">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Technical Domains */}
      <section className="cun-domains" aria-labelledby="cun-domains-title">
        <Reveal preset="slideUp">
          <div className="cun-domains__intro">
            <span className="experience-section__eyebrow">
              [ DOMINIOS TÉCNICOS / RESPONSABILIDADES ]
            </span>
            <h3 id="cun-domains-title" className="cun-domains__title">
              {copy.domainTitle}
            </h3>
            <p className="cun-domains__subtitle">{copy.domainSubtitle}</p>
          </div>
        </Reveal>

        <Stagger className="cun-domains__grid">
          {copy.domains.map((domain) => {
            const Icon = domainIcons[domain.id] || Sparkles
            return (
              <StaggerItem key={domain.id} className="cun-domain-card">
                <header className="cun-domain-card__header">
                  <div className="cun-domain-card__icon-wrap">
                    <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="cun-domain-card__index">
                    P-0{domain.index}
                  </span>
                </header>

                <h4 className="cun-domain-card__title">{domain.title}</h4>
                <p className="cun-domain-card__description">
                  {domain.description}
                </p>

                <div className="cun-domain-card__responsibilities">
                  <span className="cun-domain-card__kicker">
                    {locale === 'es'
                      ? 'RESPONSABILIDADES CLAVE:'
                      : 'KEY RESPONSIBILITIES:'}
                  </span>
                  <ul>
                    {domain.responsibilities.map((resp) => (
                      <li key={resp}>
                        <CheckCircle
                          size={13}
                          className="cun-domain-card__bullet-icon"
                          aria-hidden="true"
                        />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <footer className="cun-domain-card__footer">
                  <span className="cun-domain-card__techs-label">
                    {locale === 'es' ? 'EVIDENCIA TÉCNICA:' : 'TECH EVIDENCE:'}
                  </span>
                  <div className="cun-domain-card__tech-chips">
                    {domain.techs.map((tech) => (
                      <span key={tech.name} className="cun-domain-card__chip">
                        {tech.slug && (
                          <TechIcon
                            slug={tech.slug}
                            size={12}
                            aria-hidden="true"
                          />
                        )}
                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </footer>
              </StaggerItem>
            )
          })}
        </Stagger>
      </section>
    </article>
  )
}
