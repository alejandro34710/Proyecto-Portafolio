import { useState } from 'react'
import { TechIcon } from '@/components/common/TechIcon'
import { useLocale } from '@/hooks/useLocale'
import type { StackGroupId } from '@/data/types'

type BlueprintLayer = {
  id: StackGroupId
  index: string
  name: { es: string; en: string }
  techs: string[]
  slugs: string[]
  isTransversal?: boolean
}

const BLUEPRINT_LAYERS: readonly BlueprintLayer[] = [
  {
    id: 'interface',
    index: '01',
    name: { es: 'INTERFACE', en: 'INTERFACE' },
    techs: ['React', 'TypeScript', 'Tailwind'],
    slugs: ['react', 'typescript', 'tailwindcss'],
  },
  {
    id: 'backend',
    index: '02',
    name: { es: 'BACKEND & APIS', en: 'BACKEND & APIS' },
    techs: ['NestJS', 'Node.js', 'REST APIs'],
    slugs: ['nestjs', 'nodedotjs'],
  },
  {
    id: 'data',
    index: '03',
    name: { es: 'DATA PERSISTENCE', en: 'DATA PERSISTENCE' },
    techs: ['PostgreSQL', 'SQL', 'TypeORM'],
    slugs: ['postgresql', 'typeorm'],
  },
  {
    id: 'cloud',
    index: '04',
    name: { es: 'CLOUD & DELIVERY', en: 'CLOUD & DELIVERY' },
    techs: ['Google Cloud', 'Docker', 'Cloud Run'],
    slugs: ['googlecloud', 'docker'],
  },
]

type StackHeroBlueprintProps = {
  activeLayerId?: StackGroupId | null
  onSelectLayer?: (id: StackGroupId) => void
}

export function StackHeroBlueprint({
  activeLayerId: externalActive,
  onSelectLayer,
}: StackHeroBlueprintProps) {
  const { locale } = useLocale()
  const [internalHover, setInternalHover] = useState<StackGroupId | null>(null)

  const activeId = internalHover || externalActive || null

  const handleSelect = (id: StackGroupId) => {
    if (onSelectLayer) {
      onSelectLayer(id)
    }
    const studioEl = document.getElementById('stack-studio')
    if (studioEl) {
      studioEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div
      className={`stack-blueprint ${activeId ? 'has-active' : ''}`}
      aria-label="Connected Technical Architecture Blueprint"
    >
      {/* Background technical radar grid */}
      <div className="stack-blueprint__grid" aria-hidden="true" />

      {/* Top Header telemetry */}
      <div className="stack-blueprint__telemetry">
        <div className="stack-blueprint__status">
          <span className="stack-blueprint__pulse" aria-hidden="true" />
          <span>CONNECTED_SYSTEM // 4_LAYERS + AI_TRANSVERSAL</span>
        </div>
        <span className="stack-blueprint__coords">
          UTC-5 · PRODUCTION READY
        </span>
      </div>

      {/* Blueprint Visual Container */}
      <div className="stack-blueprint__body">
        {/* Left Side: The 4 Structural Layers */}
        <div className="stack-blueprint__layers">
          {BLUEPRINT_LAYERS.map((layer) => {
            const isHovered = activeId === layer.id
            return (
              <button
                key={layer.id}
                type="button"
                className={`stack-blueprint__layer-row ${isHovered ? 'is-active' : ''}`}
                onMouseEnter={() => setInternalHover(layer.id)}
                onMouseLeave={() => setInternalHover(null)}
                onClick={() => handleSelect(layer.id)}
                aria-label={`${layer.name[locale]} - ${layer.techs.join(', ')}`}
              >
                <div className="stack-blueprint__layer-head">
                  <span className="stack-blueprint__layer-idx">
                    {layer.index}
                  </span>
                  <strong className="stack-blueprint__layer-title">
                    {layer.name[locale]}
                  </strong>
                </div>

                <div className="stack-blueprint__layer-icons">
                  {layer.slugs.map((slug) => (
                    <span
                      key={slug}
                      className="stack-blueprint__mini-icon"
                      title={slug}
                    >
                      <TechIcon slug={slug} size={14} />
                    </span>
                  ))}
                  <span className="stack-blueprint__layer-techs">
                    {layer.techs.join(' · ')}
                  </span>
                </div>

                <div
                  className="stack-blueprint__connector-dot"
                  aria-hidden="true"
                />
              </button>
            )
          })}
        </div>

        {/* Vertical Transversal AI Highway */}
        <button
          type="button"
          className={`stack-blueprint__ai-highway ${activeId === 'ai' ? 'is-active' : ''}`}
          onMouseEnter={() => setInternalHover('ai')}
          onMouseLeave={() => setInternalHover(null)}
          onClick={() => handleSelect('ai')}
          aria-label="Transversal AI Capability - Gemini AI & APIs"
        >
          <div className="stack-blueprint__ai-line" aria-hidden="true">
            <span className="stack-blueprint__ai-pulse-track" />
          </div>
          <div className="stack-blueprint__ai-badge">
            <TechIcon slug="googlegemini" size={16} />
            <span className="stack-blueprint__ai-label">AI</span>
            <small className="stack-blueprint__ai-sub">TRANSVERSAL</small>
          </div>
        </button>
      </div>

      {/* Bottom Interactive Prompt */}
      <div className="stack-blueprint__footer">
        <span className="stack-blueprint__footer-hint">
          {activeId === 'ai'
            ? locale === 'es'
              ? 'IA Transversal: Conecta flujos de frontend, backend y procesamiento de datos'
              : 'Transversal AI: Connects frontend flows, backend logic and data processing'
            : activeId
              ? locale === 'es'
                ? `Explorando capa ${activeId.toUpperCase()} · Clic para abrir detalle interactivo`
                : `Inspecting ${activeId.toUpperCase()} layer · Click to inspect details`
              : locale === 'es'
                ? 'Interactúa con cualquier capa para explorar el flujo técnico'
                : 'Interact with any layer to explore the technical flow'}
        </span>
      </div>
    </div>
  )
}
