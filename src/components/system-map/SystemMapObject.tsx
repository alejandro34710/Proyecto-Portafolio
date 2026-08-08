import { AnimatePresence, motion } from 'motion/react'
import { useLocale } from '@/hooks/useLocale'
import type { SystemChapterMeta } from './chapters'
import type { TechLabel } from './types'

const techLabels: readonly TechLabel[] = [
  { id: 'frontend', x: 2, y: 10, anchorX: 36, anchorY: 30 },
  { id: 'backend', x: 0, y: 44, anchorX: 32, anchorY: 50 },
  { id: 'database', x: 3, y: 80, anchorX: 34, anchorY: 68 },
  { id: 'cloud', x: 84, y: 8, anchorX: 64, anchorY: 26 },
  { id: 'ai', x: 86, y: 42, anchorX: 66, anchorY: 46 },
  { id: 'infrastructure', x: 80, y: 78, anchorX: 62, anchorY: 66 },
] as const

const chapterHighlight: Record<string, readonly TechLabel['id'][]> = {
  philosophy: ['frontend', 'backend'],
  experience: ['backend', 'infrastructure'],
  projects: ['frontend', 'cloud'],
  architecture: ['backend', 'database', 'infrastructure'],
  ai: ['ai'],
  lab: ['ai', 'frontend'],
  journal: ['frontend'],
  contact: ['cloud', 'infrastructure'],
}

type SystemMapObjectProps = {
  chapter: SystemChapterMeta
  index: number
}

function connectorPath(label: TechLabel) {
  const midX = label.x < 50 ? label.anchorX : label.x
  const midY = label.y + 2.8
  return `M ${label.x + 7} ${midY} H ${midX} V ${label.anchorY}`
}

export function SystemMapObject({ chapter, index }: SystemMapObjectProps) {
  const { t } = useLocale()
  const activeLabels = chapterHighlight[chapter.id] ?? []
  const labels = t.systemMap.techLabels

  return (
    <motion.div
      className="system-map-object"
      data-chapter={chapter.id}
      data-visual={chapter.visual}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: 0.06 },
        },
      }}
    >
      <motion.div
        className="system-map-object__coordinates"
        aria-hidden="true"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.45 } },
        }}
      >
        <span>SYS / MAP</span>
        <span>LAYER {chapter.number}</span>
      </motion.div>

      <motion.div
        className="system-map-object__stage"
        variants={{
          hidden: { opacity: 0, scale: 0.97 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
          },
        }}
      >
        <img
          className="system-map-object__image"
          src="/Formas/Introobject.png"
          alt=""
          draggable={false}
        />

        <span className="system-map-object__core-glow" aria-hidden="true" />
        <span className="system-map-object__center-pulse" aria-hidden="true" />
        <span className="system-map-object__experience-line" aria-hidden="true" />

        <div className="system-map-object__nodes" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>

        <div className="system-map-object__cards" aria-hidden="true">
          <span>UI</span>
          <span>API</span>
          <span>DATA</span>
        </div>

        <div className="system-map-object__lab-card" aria-hidden="true">
          <strong>LAB</strong>
          <small>PROTOTYPE</small>
        </div>

        <div className="system-map-object__notes" aria-hidden="true">
          <span>NOTE / 01</span>
          <span>FIELD</span>
        </div>

        <div className="system-map-object__transmit" aria-hidden="true" />

        <svg
          className="system-map-object__connectors"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {techLabels.map((label) => (
            <g key={label.id}>
              <path
                className={activeLabels.includes(label.id) ? 'is-lit' : undefined}
                pathLength="1"
                d={connectorPath(label)}
              />
              <rect
                className={
                  activeLabels.includes(label.id)
                    ? 'system-map-object__svg-anchor is-lit'
                    : 'system-map-object__svg-anchor'
                }
                x={label.anchorX - 0.35}
                y={label.anchorY - 0.35}
                width="0.7"
                height="0.7"
              />
            </g>
          ))}
        </svg>

        <motion.div
          className="system-map-object__labels"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.22 },
            },
          }}
        >
          {techLabels.map((label) => (
            <motion.div
              key={label.id}
              className={`system-map-object__label${
                activeLabels.includes(label.id) ? ' is-lit' : ''
              }`}
              style={{ left: `${label.x}%`, top: `${label.y}%` }}
              data-label={label.id}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <i className="system-map-object__label-index" />
              <strong>{labels[label.id]}</strong>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={chapter.id}
          className="system-map-object__status"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <i />
          {t.systemMap.status}
          <span>{String(index + 1).padStart(2, '0')} / 08</span>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
