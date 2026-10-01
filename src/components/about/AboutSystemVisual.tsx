import { useState } from 'react'
import { Cpu, CheckCircle2, Sparkles } from 'lucide-react'
import { useLocale } from '@/hooks/useLocale'

type LayerId = 'experience' | 'logic' | 'data' | 'cloud'

interface LayerMeta {
  id: LayerId
  level: string
  title: string
  code: string
  detail: string
  tech: string[]
  color: string
  planeY: number
}

export function AboutSystemVisual() {
  const { t } = useLocale()
  const [activeLayer, setActiveLayer] = useState<LayerId>('experience')

  const layers: LayerMeta[] = [
    {
      id: 'experience',
      level: 'L01',
      title: t.about.visual.layer1Title,
      code: 'UI / UX / EXPERIENCE',
      detail: t.about.visual.layer1Detail,
      tech: ['UX/UI', 'React', 'TypeScript', 'Tailwind', 'Figma'],
      color: 'var(--palette-primary-400)',
      planeY: 55,
    },
    {
      id: 'logic',
      level: 'L02',
      title: t.about.visual.layer2Title,
      code: 'APIS / SERVICES / LOGIC',
      detail: t.about.visual.layer2Detail,
      tech: ['NestJS', 'Node.js', 'REST APIs', 'JWT', 'TypeORM'],
      color: 'var(--palette-primary-500)',
      planeY: 125,
    },
    {
      id: 'data',
      level: 'L03',
      title: t.about.visual.layer3Title,
      code: 'POSTGRESQL / RELATIONAL DATA',
      detail: t.about.visual.layer3Detail,
      tech: ['PostgreSQL', 'SQL', 'Data Modeling', 'Migrations'],
      color: 'var(--palette-info-500)',
      planeY: 195,
    },
    {
      id: 'cloud',
      level: 'L04',
      title: t.about.visual.layer4Title,
      code: 'GCP / DOCKER / AI INTEGRATION',
      detail: t.about.visual.layer4Detail,
      tech: ['Google Cloud', 'Docker', 'AI APIs', 'CI/CD Pipelines'],
      color: 'var(--palette-success-500)',
      planeY: 265,
    },
  ]

  const current = layers.find((l) => l.id === activeLayer) || layers[0]

  return (
    <div
      className="about-system-visual"
      role="region"
      aria-label="Interactive architecture and profile layers"
    >
      {/* Visual Window Header */}
      <div className="about-visual__header">
        <div className="about-visual__status">
          <span className="about-visual__status-dot" aria-hidden="true" />
          <span className="about-visual__status-text">
            {t.about.visual.tag}
          </span>
        </div>
        <div className="about-visual__meta-badges">
          <span className="about-visual__coord">
            LAT 4.71° N · LON 74.07° W
          </span>
          <span className="about-visual__env-badge">PROD / ACTIVE</span>
        </div>
      </div>

      {/* Main Isometric Visual Stage */}
      <div className="about-visual__stage">
        {/* Abstract Background Grid & Glow */}
        <div className="about-visual__grid-bg" aria-hidden="true">
          <div className="about-visual__grid-lines" />
          <div className="about-visual__radial-glow" />
        </div>

        {/* 3D Isometric System Architecture SVG Canvas */}
        <div className="about-visual__isometric-wrap">
          <svg
            className="about-visual__isometric-svg"
            viewBox="0 0 460 330"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Isometric representation of 4 architecture layers"
          >
            <defs>
              {/* Gradients for Layers */}
              <linearGradient
                id="planeGradActive"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="var(--ds-primary)"
                  stopOpacity="0.32"
                />
                <stop
                  offset="50%"
                  stopColor="var(--ds-primary)"
                  stopOpacity="0.14"
                />
                <stop
                  offset="100%"
                  stopColor="var(--ds-primary)"
                  stopOpacity="0.04"
                />
              </linearGradient>

              <linearGradient
                id="planeGradInactive"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="var(--ds-surface-secondary)"
                  stopOpacity="0.75"
                />
                <stop
                  offset="100%"
                  stopColor="var(--ds-surface-primary)"
                  stopOpacity="0.45"
                />
              </linearGradient>

              <linearGradient
                id="conduitGrad"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="var(--ds-primary)"
                  stopOpacity="0.8"
                />
                <stop
                  offset="50%"
                  stopColor="var(--ds-primary)"
                  stopOpacity="0.95"
                />
                <stop
                  offset="100%"
                  stopColor="var(--palette-success-500)"
                  stopOpacity="0.8"
                />
              </linearGradient>

              <filter
                id="neonGlow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Central Vertical Energy Conduit */}
            <line
              x1="230"
              y1="40"
              x2="230"
              y2="280"
              stroke="url(#conduitGrad)"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              className="about-visual__svg-conduit"
            />

            {/* 4 Isometric Stacked Planes (Rendered Back to Front: L04 to L01) */}
            {[...layers].reverse().map((layer) => {
              const isActive = activeLayer === layer.id
              const cy = layer.planeY
              // Diamond vertices: Top, Right, Bottom, Left
              const dTop = `${230},${cy - 38}`
              const dRight = `${385},${cy}`
              const dBottom = `${230},${cy + 38}`
              const dLeft = `${75},${cy}`
              const polyPoints = `${dTop} ${dRight} ${dBottom} ${dLeft}`

              return (
                <g
                  key={layer.id}
                  className={`about-visual__svg-layer ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveLayer(layer.id)}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Subtle Drop Shadow under each plane */}
                  <polygon
                    points={`${230},${cy - 34} ${385},${cy + 4} ${230},${cy + 42} ${75},${cy + 4}`}
                    fill="rgba(0,0,0,0.12)"
                    className="about-visual__svg-plane-shadow"
                  />

                  {/* Isometric Plane Face */}
                  <polygon
                    points={polyPoints}
                    fill={
                      isActive
                        ? 'url(#planeGradActive)'
                        : 'url(#planeGradInactive)'
                    }
                    stroke={
                      isActive
                        ? 'var(--ds-primary)'
                        : 'var(--ds-border-default)'
                    }
                    strokeWidth={isActive ? '2' : '1'}
                    filter={isActive ? 'url(#neonGlow)' : undefined}
                    className="about-visual__svg-plane-face"
                  />

                  {/* Internal Grid Lines on Plane */}
                  <line
                    x1="152.5"
                    y1={cy - 19}
                    x2="307.5"
                    y2={cy + 19}
                    stroke={
                      isActive ? 'var(--ds-primary)' : 'var(--ds-border-subtle)'
                    }
                    strokeWidth="0.8"
                    strokeOpacity={isActive ? 0.6 : 0.3}
                  />
                  <line
                    x1="307.5"
                    y1={cy - 19}
                    x2="152.5"
                    y2={cy + 19}
                    stroke={
                      isActive ? 'var(--ds-primary)' : 'var(--ds-border-subtle)'
                    }
                    strokeWidth="0.8"
                    strokeOpacity={isActive ? 0.6 : 0.3}
                  />

                  {/* Node Circuit Points on Plane */}
                  <circle
                    cx="230"
                    cy={cy}
                    r={isActive ? '4.5' : '3'}
                    fill={
                      isActive ? 'var(--ds-primary)' : 'var(--ds-text-tertiary)'
                    }
                    className="about-visual__svg-center-node"
                  />
                  <circle
                    cx="152.5"
                    cy={cy - 19}
                    r={isActive ? '3' : '2'}
                    fill={
                      isActive ? 'var(--ds-primary)' : 'var(--ds-border-strong)'
                    }
                  />
                  <circle
                    cx="307.5"
                    cy={cy + 19}
                    r={isActive ? '3' : '2'}
                    fill={
                      isActive ? 'var(--ds-primary)' : 'var(--ds-border-strong)'
                    }
                  />
                  <circle
                    cx="152.5"
                    cy={cy + 19}
                    r={isActive ? '3' : '2'}
                    fill={
                      isActive ? 'var(--ds-primary)' : 'var(--ds-border-strong)'
                    }
                  />
                  <circle
                    cx="307.5"
                    cy={cy - 19}
                    r={isActive ? '3' : '2'}
                    fill={
                      isActive ? 'var(--ds-primary)' : 'var(--ds-border-strong)'
                    }
                  />

                  {/* Level Tag floating on the right side of the plane */}
                  <rect
                    x="392"
                    y={cy - 11}
                    width="44"
                    height="22"
                    rx="4"
                    fill={
                      isActive
                        ? 'var(--ds-primary)'
                        : 'var(--ds-surface-secondary)'
                    }
                    stroke={
                      isActive
                        ? 'var(--ds-primary)'
                        : 'var(--ds-border-default)'
                    }
                    strokeWidth="1"
                  />
                  <text
                    x="414"
                    y={cy + 4}
                    textAnchor="middle"
                    fontFamily="var(--font-mono, monospace)"
                    fontSize="10"
                    fontWeight="700"
                    fill={isActive ? '#ffffff' : 'var(--ds-text-secondary)'}
                  >
                    {layer.level}
                  </text>

                  {/* Clean Monospace Phase Code tag inside the plane area */}
                  <text
                    x="96"
                    y={cy + 4}
                    textAnchor="start"
                    fontFamily="var(--font-mono, monospace)"
                    fontSize="9"
                    fontWeight="700"
                    letterSpacing="0.08em"
                    fill={
                      isActive ? 'var(--ds-primary)' : 'var(--ds-text-tertiary)'
                    }
                  >
                    {layer.id === 'experience'
                      ? 'UX / UI LAYER'
                      : layer.id === 'logic'
                        ? 'LOGIC & APIS'
                        : layer.id === 'data'
                          ? 'POSTGRESQL DATA'
                          : 'CLOUD & AI'}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* Layer Selector Strip (Tabs) */}
        <div
          className="about-visual__layer-selector-bar"
          role="tablist"
          aria-label="Layer inspector tabs"
        >
          {layers.map((layer) => {
            const isSelected = activeLayer === layer.id
            return (
              <button
                key={layer.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveLayer(layer.id)}
                className={`about-visual__selector-pill ${isSelected ? 'is-selected' : ''}`}
              >
                <span className="about-visual__pill-level">{layer.level}</span>
                <span className="about-visual__pill-title">
                  {layer.id === 'experience'
                    ? 'UX/UI'
                    : layer.id === 'logic'
                      ? 'Lógica & APIs'
                      : layer.id === 'data'
                        ? 'PostgreSQL'
                        : 'Cloud & IA'}
                </span>
              </button>
            )
          })}
        </div>

        {/* Selected Layer HUD Readout (Glassmorphism Panel) */}
        <div className="about-visual__layer-hud" aria-live="polite">
          <div className="about-visual__hud-top">
            <div className="about-visual__hud-badge">
              <span className="about-visual__hud-dot" />
              <strong>{current.level}</strong>
              <span>//</span>
              <span>{current.code}</span>
            </div>
            <h3 className="about-visual__hud-heading">{current.title}</h3>
          </div>

          <p className="about-visual__hud-detail">{current.detail}</p>

          <div className="about-visual__hud-tags">
            {current.tech.map((tag) => (
              <span key={tag} className="about-visual__hud-tag">
                <CheckCircle2 size={11} strokeWidth={2} aria-hidden="true" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Window Footer Telemetry */}
      <div className="about-visual__footer">
        <div className="about-visual__footer-left">
          <Cpu size={14} strokeWidth={1.8} aria-hidden="true" />
          <span className="about-visual__core-title">
            {t.about.visual.coreLabel}
          </span>
          <span className="about-visual__core-divider" aria-hidden="true">
            ·
          </span>
          <small className="about-visual__core-desc">
            {t.about.visual.coreDetail}
          </small>
        </div>
        <div className="about-visual__footer-right" aria-hidden="true">
          <Sparkles size={12} strokeWidth={1.8} />
          <span>{t.about.visual.legendPillarA}</span>
          <span className="about-visual__slash">/</span>
          <span>{t.about.visual.legendPillarB}</span>
          <span className="about-visual__slash">/</span>
          <span>{t.about.visual.legendPillarC}</span>
        </div>
      </div>
    </div>
  )
}
