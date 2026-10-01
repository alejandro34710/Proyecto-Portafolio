import { useState } from 'react'
import {
  GraduationCap,
  Layout,
  Code2,
  Database,
  CloudLightning,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
} from 'lucide-react'
import { useLocale } from '@/hooks/useLocale'

const STAGE_ICONS = [GraduationCap, Layout, Code2, Database, CloudLightning]

export function AboutEvolutionFlow() {
  const { t } = useLocale()
  const { stages } = t.about.evolution
  const [selectedStageId, setSelectedStageId] = useState<string>(stages[0].id)

  const activeStage = stages.find((s) => s.id === selectedStageId) || stages[0]
  const activeIndex = stages.findIndex((s) => s.id === activeStage.id)
  const ActiveIcon = STAGE_ICONS[activeIndex] || GraduationCap

  return (
    <section
      className="about-evolution-section"
      aria-labelledby="about-evolution-title"
    >
      <div className="about-section__header">
        <p className="page-eyebrow">{t.about.evolution.eyebrow}</p>
        <h2 id="about-evolution-title" className="about-section__title">
          {t.about.evolution.title}
        </h2>
        <p className="about-section__lede">{t.about.evolution.lede}</p>
      </div>

      {/* Evolution Interactive Card */}
      <div className="about-evolution__wrapper">
        {/* Connected Circuit Stage Rail (Top Stepper) */}
        <div
          className="about-evolution__stepper-rail"
          role="tablist"
          aria-label="Evolution stages timeline"
        >
          <div className="about-evolution__rail-line" aria-hidden="true">
            <div
              className="about-evolution__rail-progress"
              style={{
                width: `${(activeIndex / (stages.length - 1)) * 100}%`,
              }}
            />
          </div>

          {stages.map((stage, idx) => {
            const Icon = STAGE_ICONS[idx]
            const isCurrent = stage.id === activeStage.id
            const isCompleted = idx < activeIndex

            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                aria-controls={`evolution-panel-${stage.id}`}
                id={`evolution-tab-${stage.id}`}
                onClick={() => setSelectedStageId(stage.id)}
                className={`about-evolution__node-btn ${isCurrent ? 'is-current' : ''} ${isCompleted ? 'is-completed' : ''}`}
              >
                <span className="about-evolution__node-disc">
                  <Icon size={15} strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="about-evolution__node-text">
                  <strong className="about-evolution__node-index">
                    {stage.index}
                  </strong>
                  <span className="about-evolution__node-label">
                    {stage.title}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        {/* Master Stage Display (Glassmorphism & High-Contrast Typography) */}
        <div
          id={`evolution-panel-${activeStage.id}`}
          role="tabpanel"
          aria-labelledby={`evolution-tab-${activeStage.id}`}
          className="about-evolution__showcase-card"
        >
          {/* Top Metadata Bar */}
          <div className="about-evolution__showcase-top">
            <div className="about-evolution__phase-badge">
              <ActiveIcon size={16} strokeWidth={2} aria-hidden="true" />
              <span>
                ETAPA {activeStage.index} · {activeStage.phase}
              </span>
            </div>
            <span className="about-evolution__context-badge">
              {activeStage.context}
            </span>
          </div>

          <h3 className="about-evolution__showcase-title">
            {activeStage.title}
          </h3>

          {/* Dual Column Editorial Layout */}
          <div className="about-evolution__showcase-grid">
            <div className="about-evolution__content-box">
              <span className="about-evolution__box-kicker">
                <BookOpen size={13} strokeWidth={2} aria-hidden="true" />
                CONTEXTO & ENFOQUE
              </span>
              <p className="about-evolution__box-text">
                {activeStage.id === 'multimedia'
                  ? 'La formación formal en Ingeniería Multimedia sentó las bases de computación gráfica, algoritmos, arquitectura de información y comprensión del usuario antes de la especialización técnica.'
                  : activeStage.id === 'ux-interface'
                    ? 'El diseño como herramienta de precisión estructural: reducción de fricción en flujos productivos y articulación de sistemas de diseño escalables.'
                    : activeStage.id === 'frontend'
                      ? 'Especialización en interfaces reactivas con React y TypeScript, priorizando rendimiento, tipado estricto y una experiencia fluida sin latencia perceptible.'
                      : activeStage.id === 'backend-data'
                        ? 'Modelado relacional con PostgreSQL, desarrollo de microservicios y APIs REST con NestJS/Node.js, seguridad, autenticación JWT y control de transacciones.'
                        : 'Construcción y despliegue de plataformas institucionales completas en Google Cloud con Docker, garantizando mantenibilidad e incorporando modelos de IA en procesos reales.'}
              </p>
            </div>

            <div className="about-evolution__content-box about-evolution__content-box--highlight">
              <span className="about-evolution__box-kicker">
                <Sparkles size={13} strokeWidth={2} aria-hidden="true" />
                CRITERIO TÉCNICO ADQUIRIDO
              </span>
              <p className="about-evolution__box-text">
                {activeStage.takeaway}
              </p>
            </div>
          </div>

          {/* Competency Tags Strip */}
          <div className="about-evolution__tags-row">
            <span className="about-evolution__tags-label">COMPETENCIAS:</span>
            <div className="about-evolution__tags-list">
              {activeStage.tags.map((tag) => (
                <span key={tag} className="about-evolution__tag-chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="about-evolution__footer-nav">
            <button
              type="button"
              className="about-evolution__nav-btn"
              disabled={activeIndex === 0}
              onClick={() => setSelectedStageId(stages[activeIndex - 1].id)}
            >
              <ArrowLeft size={14} aria-hidden="true" />
              <span>Anterior</span>
            </button>

            <div className="about-evolution__step-counter">
              <span>{activeIndex + 1}</span>
              <small>/ {stages.length}</small>
            </div>

            <button
              type="button"
              className="about-evolution__nav-btn about-evolution__nav-btn--next"
              disabled={activeIndex === stages.length - 1}
              onClick={() => setSelectedStageId(stages[activeIndex + 1].id)}
            >
              <span>Siguiente</span>
              <ArrowRight size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
