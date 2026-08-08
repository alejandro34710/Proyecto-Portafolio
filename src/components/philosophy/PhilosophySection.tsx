import { useRef } from 'react'
import type { PointerEvent } from 'react'
import { ArrowDown } from 'lucide-react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import type { MotionValue } from 'motion/react'
import { useLocale } from '@/hooks/useLocale'
import './PhilosophySection.css'

const signalPositions = [
  [165, 170],
  [255, 355],
  [760, 195],
  [290, 560],
  [780, 505],
] as const

function ManifestPrinciple({
  principle,
  index,
  progress,
  reduceMotion,
}: {
  principle: string
  index: number
  progress: MotionValue<number>
  reduceMotion: boolean | null
}) {
  const start = 0.5 + index * 0.04
  const opacity = useTransform(progress, [start, start + 0.07], [0, 1])
  const x = useTransform(progress, [start, start + 0.085], [-18, 0])

  return (
    <motion.li
      style={{
        opacity: reduceMotion ? 1 : opacity,
        x: reduceMotion ? 0 : x,
      }}
    >
      <span>{String(index + 1).padStart(2, '0')}</span>
      <p>{principle}</p>
    </motion.li>
  )
}

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { t } = useLocale()
  const copy = t.philosophy
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const graphicX = useSpring(pointerX, { stiffness: 48, damping: 24 })
  const graphicY = useSpring(pointerY, { stiffness: 48, damping: 24 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 72%', 'end 30%'],
  })

  const copyOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.34, 0.48],
    [0.35, 1, 1, 0],
  )
  const copyY = useTransform(
    scrollYProgress,
    [0, 0.16, 0.34, 0.48],
    [28, 0, 0, -28],
  )
  const copyScale = useTransform(scrollYProgress, [0.34, 0.48], [1, 0.985])
  const sculptureOpacity = useTransform(
    scrollYProgress,
    [0.04, 0.23, 0.48, 0.58],
    [0.12, 1, 1, 0.72],
  )
  const sculptureScale = useTransform(scrollYProgress, [0.04, 0.36], [0.91, 1])
  const sculptureRotate = useTransform(scrollYProgress, [0.04, 0.4], [-1.8, 0])
  const overlayProgress = useTransform(scrollYProgress, [0.18, 0.5], [0, 1])
  const overlayOpacity = useTransform(scrollYProgress, [0.18, 0.36], [0, 0.7])
  const signalOpacity = useTransform(
    scrollYProgress,
    [0.28, 0.42, 0.52, 0.62],
    [0, 1, 1, 0.35],
  )
  const manifestoOpacity = useTransform(scrollYProgress, [0.46, 0.54], [0, 1])
  const manifestoY = useTransform(scrollYProgress, [0.46, 0.56], [24, 0])
  const transitionOpacity = useTransform(scrollYProgress, [0.7, 0.75], [0, 1])
  const transitionProgress = useTransform(scrollYProgress, [0.68, 0.76], [0, 1])
  const systemY = useTransform(scrollYProgress, [0, 1], [22, -18])
  const systemX = useTransform(scrollYProgress, [0.45, 0.58], [0, 28])
  const combinedY = useTransform(() => graphicY.get() + systemY.get())
  const combinedX = useTransform(() => graphicX.get() + systemX.get())

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    pointerX.set(x * 15)
    pointerY.set(y * 12)
  }

  function resetPointer() {
    pointerX.set(0)
    pointerY.set(0)
  }

  const visible = reduceMotion ? 1 : undefined

  return (
    <section
      ref={sectionRef}
      className="philosophy chapter"
      id="philosophy"
      data-chapter
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="philosophy-brain">
        <div className="philosophy-brain__meta">
          <div className="philosophy-brain__chapter">
            <i aria-hidden="true" />
            <span>01</span>
            <span className="philosophy-brain__rule" />
            <span>{copy.label}</span>
          </div>
          <span>{copy.systemLabel}</span>
        </div>

        <motion.div
          className="philosophy-brain__copy"
          style={{
            opacity: visible ?? copyOpacity,
            y: reduceMotion ? 0 : copyY,
            scale: reduceMotion ? 1 : copyScale,
          }}
        >
          <p className="philosophy-brain__eyebrow">{copy.eyebrow}</p>
          <h2>
            {copy.statement.map((line, index) => (
              <span
                className={index === 2 || index === 5 ? 'is-accent' : ''}
                key={line}
              >
                {line}
              </span>
            ))}
          </h2>
        </motion.div>

        <motion.figure
          className="philosophy-brain__system"
          style={{
            x: reduceMotion ? 0 : combinedX,
            y: reduceMotion ? 0 : combinedY,
          }}
          aria-hidden="true"
        >
          <div className="philosophy-brain__readout">
            <span>THINKING MAP / ACTIVE</span>
            <span>CONTEXT → DECISION → IMPACT</span>
          </div>

          <motion.div
            className="philosophy-brain__sculpture"
            style={{
              opacity: visible ?? sculptureOpacity,
              scale: reduceMotion ? 1 : sculptureScale,
              rotate: reduceMotion ? 0 : sculptureRotate,
            }}
          >
            <img
              src="/Formas/philosophy-map-v1.png"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <span className="philosophy-brain__sculpture-glow" />
          </motion.div>

          <svg
            className="philosophy-brain__overlay"
            viewBox="0 0 900 700"
            role="presentation"
          >
            <motion.g
              className="philosophy-brain__contours"
              style={{ opacity: visible ?? overlayOpacity }}
            >
              <motion.path
                d="M120 420C240 210 360 140 480 220S700 380 820 240"
                style={{ pathLength: reduceMotion ? 1 : overlayProgress }}
              />
              <motion.path
                d="M150 520C280 360 390 300 500 340S680 520 800 430"
                style={{ pathLength: reduceMotion ? 1 : overlayProgress }}
              />
              <motion.path
                d="M240 120C340 250 430 400 620 560"
                style={{ pathLength: reduceMotion ? 1 : overlayProgress }}
              />
            </motion.g>

            <motion.g
              className="philosophy-brain__hotspots"
              style={{ opacity: visible ?? signalOpacity }}
            >
              {signalPositions.map(([x, y], index) => {
                const goesLeft = index === 0 || index === 1 || index === 3
                return (
                  <g key={`${x}-${y}`}>
                    <circle cx={x} cy={y} r="4" />
                    <circle className="is-ring" cx={x} cy={y} r="12" />
                    <path
                      d={`M${goesLeft ? x - 12 : x + 12} ${y}h${goesLeft ? -36 : 36}`}
                    />
                  </g>
                )
              })}
            </motion.g>
          </svg>

          <motion.div
            className="philosophy-brain__signals"
            style={{ opacity: visible ?? signalOpacity }}
          >
            {copy.signals.map((signal, index) => (
              <div
                className={`philosophy-brain__signal-label philosophy-brain__signal-label--${index + 1}`}
                key={signal.label}
              >
                <span>{signal.action}</span>
                <strong>{signal.label}</strong>
              </div>
            ))}
          </motion.div>

          <div className="philosophy-brain__system-caption">
            <span>CONNECTION MAP / 01</span>
            <i />
            <span>LIVE STRUCTURE</span>
          </div>
        </motion.figure>

        <motion.div
          className="philosophy-brain__manifesto"
          style={{
            opacity: visible ?? manifestoOpacity,
            y: reduceMotion ? 0 : manifestoY,
          }}
        >
          <div className="philosophy-brain__manifesto-head">
            <span>MANIFESTO / 05</span>
            <strong>{copy.manifestoLabel}</strong>
          </div>
          <ol>
            {copy.principles.map((principle, index) => (
              <ManifestPrinciple
                principle={principle}
                index={index}
                progress={scrollYProgress}
                reduceMotion={reduceMotion}
                key={principle}
              />
            ))}
          </ol>
        </motion.div>

        <motion.div
          className="philosophy-brain__transition"
          style={{ opacity: visible ?? transitionOpacity }}
        >
          <span>{copy.transitionLabel}</span>
          <svg
            viewBox="0 0 760 34"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M1 17C172 17 200 5 344 17S578 29 759 17"
              style={{ pathLength: reduceMotion ? 1 : transitionProgress }}
            />
            <circle cx="759" cy="17" r="3" />
          </svg>
          <a href="#experience">
            <span>02</span>
            {copy.nextLabel}
            <ArrowDown size={15} strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
