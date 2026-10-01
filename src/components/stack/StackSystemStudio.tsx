import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { TechIcon } from '@/components/common/TechIcon'
import { stackLayersArchitecture } from '@/data/stack'
import { useLocale } from '@/hooks/useLocale'
import type { StackGroupId } from '@/data/types'

type StackSystemStudioProps = {
  selectedLayerId?: StackGroupId
  onSelectLayer?: (id: StackGroupId) => void
}

export function StackSystemStudio({
  selectedLayerId,
  onSelectLayer,
}: StackSystemStudioProps) {
  const { locale, t } = useLocale()
  const [internalActiveId, setInternalActiveId] =
    useState<StackGroupId>('interface')

  const activeId = selectedLayerId || internalActiveId
  const activeLayer =
    stackLayersArchitecture.find((layer) => layer.id === activeId) ||
    stackLayersArchitecture[0]

  const handleSelect = (id: StackGroupId) => {
    setInternalActiveId(id)
    if (onSelectLayer) {
      onSelectLayer(id)
    }
  }

  const copy = t.stackPage.studio

  return (
    <section
      id="stack-studio"
      className="stack-studio"
      aria-labelledby="stack-studio-title"
    >
      <div className="stack-studio__header">
        <p className="stack-section__eyebrow">{copy.eyebrow}</p>
        <h2 id="stack-studio-title" className="stack-studio__title">
          {copy.title}
        </h2>
        <p className="stack-studio__subtitle">{copy.subtitle}</p>
      </div>

      <div className="stack-studio__layout">
        {/* Left Column: Layer Navigation Cards */}
        <div
          className="stack-studio__nav"
          role="tablist"
          aria-label={copy.title}
        >
          {stackLayersArchitecture.map((layer) => {
            const isSelected = layer.id === activeId
            return (
              <button
                key={layer.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`layer-panel-${layer.id}`}
                id={`layer-tab-${layer.id}`}
                className={`stack-studio__tab ${isSelected ? 'is-active' : ''} ${
                  layer.isTransversal ? 'is-transversal' : ''
                }`}
                onClick={() => handleSelect(layer.id)}
              >
                <div className="stack-studio__tab-top">
                  <span className="stack-studio__tab-idx">
                    {layer.isTransversal ? '✦' : layer.index}
                  </span>
                  <span className="stack-studio__tab-kicker">
                    {layer.isTransversal
                      ? copy.transversalBadge
                      : layer.kicker.replace('LAYER ', '')}
                  </span>
                </div>

                <strong className="stack-studio__tab-name">
                  {layer.name[locale]}
                </strong>

                <div className="stack-studio__tab-techs">
                  {layer.coreTech.map((tech) => (
                    <span
                      key={tech.name}
                      className="stack-studio__tab-chip"
                      title={tech.name}
                    >
                      {tech.slug && <TechIcon slug={tech.slug} size={12} />}
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>

                {isSelected && (
                  <div
                    className="stack-studio__tab-indicator"
                    aria-hidden="true"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Right Column: Layer Inspector & Architecture Panel */}
        <div
          className="stack-studio__inspector"
          role="tabpanel"
          id={`layer-panel-${activeLayer.id}`}
          aria-labelledby={`layer-tab-${activeLayer.id}`}
        >
          {/* Top Panel Banner */}
          <div className="stack-studio__panel-head">
            <div className="stack-studio__panel-badges">
              <span className="stack-studio__panel-kicker">
                {activeLayer.kicker}
              </span>
              {activeLayer.isTransversal && (
                <span className="stack-studio__panel-transversal-pill">
                  <Sparkles size={11} aria-hidden="true" />
                  <span>{copy.transversalBadge}</span>
                </span>
              )}
            </div>

            <h3 className="stack-studio__panel-title">
              {activeLayer.name[locale]}
            </h3>
            <p className="stack-studio__panel-tagline">
              {activeLayer.tagline[locale]}
            </p>
            <p className="stack-studio__panel-lede">
              {activeLayer.lede[locale]}
            </p>
          </div>

          {/* Core Technologies Grid */}
          <div className="stack-studio__group">
            <h4 className="stack-studio__group-title">
              <Cpu size={14} aria-hidden="true" />
              <span>{copy.coreTitle}</span>
            </h4>
            <div className="stack-studio__core-grid">
              {activeLayer.coreTech.map((tech) => (
                <div key={tech.name} className="stack-studio__core-card">
                  <div className="stack-studio__core-icon">
                    {tech.slug && <TechIcon slug={tech.slug} size={22} />}
                  </div>
                  <div className="stack-studio__core-info">
                    <strong className="stack-studio__core-name">
                      {tech.name}
                    </strong>
                    <span className="stack-studio__core-role">
                      {tech.role[locale]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting & Ecosystem Pills */}
          <div className="stack-studio__group">
            <h4 className="stack-studio__group-title">
              <Layers size={14} aria-hidden="true" />
              <span>{copy.supportingTitle}</span>
            </h4>
            <ul className="stack-studio__supporting-list">
              {activeLayer.supportingTech.map((tech) => (
                <li key={tech} className="stack-studio__supporting-pill">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Applied Engineering Capabilities */}
          <div className="stack-studio__group">
            <h4 className="stack-studio__group-title">
              <CheckCircle2 size={14} aria-hidden="true" />
              <span>{copy.capabilitiesTitle}</span>
            </h4>
            <ul className="stack-studio__capabilities-list">
              {activeLayer.capabilities.map((cap, i) => (
                <li key={i} className="stack-studio__capability-item">
                  <span
                    className="stack-studio__capability-bullet"
                    aria-hidden="true"
                  >
                    →
                  </span>
                  <span>{cap[locale]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Data & Event Pipeline */}
          <div className="stack-studio__group">
            <h4 className="stack-studio__group-title">
              <span className="stack-studio__group-tag">PIPELINE</span>
              <span>{copy.pipelineTitle}</span>
            </h4>
            <div className="stack-studio__pipeline">
              <div className="stack-studio__pipe-step">
                <span className="stack-studio__pipe-label">FROM</span>
                <strong className="stack-studio__pipe-value">
                  {activeLayer.pipeline.from[locale]}
                </strong>
                <small className="stack-studio__pipe-desc">
                  {activeLayer.pipeline.receives[locale]}
                </small>
              </div>

              <div className="stack-studio__pipe-arrow" aria-hidden="true">
                <ArrowRight size={14} />
              </div>

              <div className="stack-studio__pipe-step stack-studio__pipe-step--accent">
                <span className="stack-studio__pipe-label">PRODUCES</span>
                <strong className="stack-studio__pipe-value">
                  {activeLayer.pipeline.produces[locale]}
                </strong>
              </div>

              <div className="stack-studio__pipe-arrow" aria-hidden="true">
                <ArrowRight size={14} />
              </div>

              <div className="stack-studio__pipe-step">
                <span className="stack-studio__pipe-label">TO</span>
                <strong className="stack-studio__pipe-value">
                  {activeLayer.pipeline.to[locale]}
                </strong>
              </div>
            </div>
          </div>

          {/* Interconnection & Transversal AI Relationship */}
          <div className="stack-studio__interconnect-grid">
            <div className="stack-studio__interconnect-card">
              <span className="stack-studio__interconnect-tag">
                SYSTEM INTERCONNECTION
              </span>
              <p>{activeLayer.interconnection[locale]}</p>
            </div>

            {activeLayer.aiRelationship && (
              <div className="stack-studio__interconnect-card stack-studio__interconnect-card--ai">
                <span className="stack-studio__interconnect-tag stack-studio__interconnect-tag--ai">
                  <Sparkles size={11} aria-hidden="true" />
                  <span>TRANSVERSAL AI AUGMENTATION</span>
                </span>
                <p>{activeLayer.aiRelationship[locale]}</p>
              </div>
            )}
          </div>

          {/* Real Project Evidence */}
          {activeLayer.projectProofs &&
            activeLayer.projectProofs.length > 0 && (
              <div className="stack-studio__proof-row">
                <span className="stack-studio__proof-label">
                  {copy.projectProofTitle}:
                </span>
                <div className="stack-studio__proof-chips">
                  {activeLayer.projectProofs.map((proof) => (
                    <Link
                      key={proof.name}
                      to={
                        proof.slug === 'experience'
                          ? '/experience'
                          : `/projects/${proof.slug}`
                      }
                      className="stack-studio__proof-link"
                    >
                      <span>{proof.name}</span>
                      <ExternalLink size={11} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  )
}
