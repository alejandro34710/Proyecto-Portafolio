import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react'
import type { PointerEvent } from 'react'
import { useLocale } from '@/hooks/useLocale'

const spring = { stiffness: 95, damping: 20, mass: 0.7 }

const portraitCopy = {
  es: {
    alt: 'Alejandro — Desarrollador Full Stack, Ingeniero Multimedia',
    identityLabel: 'Perfil',
    identityName: 'Alejandro',
    identityRole: 'Desarrollador Full Stack',
    focusLabel: 'Enfoque',
    focusItems: ['Producto', 'Cloud', 'IA'],
    statusLabel: 'Estado',
    statusValue: 'Abierto',
  },
  en: {
    alt: 'Alejandro — Full Stack Developer, Multimedia Engineer',
    identityLabel: 'Profile',
    identityName: 'Alejandro',
    identityRole: 'Full Stack Developer',
    focusLabel: 'Focus',
    focusItems: ['Product', 'Cloud', 'AI'],
    statusLabel: 'Status',
    statusValue: 'Open',
  },
} as const

export function HeroPortrait() {
  const { locale } = useLocale()
  const copy = portraitCopy[locale]
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, spring)
  const smoothY = useSpring(pointerY, spring)
  const rotateY = useTransform(smoothX, [-1, 1], [-3.5, 3.5])
  const rotateX = useTransform(smoothY, [-1, 1], [3, -3])
  const imageX = useTransform(smoothX, [-1, 1], [-7, 7])
  const imageY = useTransform(smoothY, [-1, 1], [-5, 5])
  const detailX = useTransform(smoothX, [-1, 1], [8, -8])

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2)
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <div
      className="hero-portrait"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <motion.div
        className="hero-portrait__stage"
        style={reduceMotion ? undefined : { rotateX, rotateY }}
      >
        <div className="hero-portrait__architecture" aria-hidden="true">
          <span className="hero-portrait__halo" />
          <span className="hero-portrait__ring hero-portrait__ring--outer" />
          <span className="hero-portrait__ring hero-portrait__ring--inner" />
          <span className="hero-portrait__grid" />
          <span className="hero-portrait__axis hero-portrait__axis--x" />
          <span className="hero-portrait__axis hero-portrait__axis--y" />
          <span className="hero-portrait__corner hero-portrait__corner--tl" />
          <span className="hero-portrait__corner hero-portrait__corner--tr" />
          <span className="hero-portrait__corner hero-portrait__corner--bl" />
          <span className="hero-portrait__corner hero-portrait__corner--br" />
          <span className="hero-portrait__marker hero-portrait__marker--a" />
          <span className="hero-portrait__marker hero-portrait__marker--b" />
          <span className="hero-portrait__marker hero-portrait__marker--c" />
          <span className="hero-portrait__scan" />
        </div>

        <motion.aside
          className="hero-portrait__chip hero-portrait__chip--identity"
          style={reduceMotion ? undefined : { x: detailX }}
          aria-hidden="true"
        >
          <span>{copy.identityLabel}</span>
          <strong>{copy.identityName}</strong>
          <small>{copy.identityRole}</small>
        </motion.aside>

        <motion.aside
          className="hero-portrait__chip hero-portrait__chip--focus"
          style={reduceMotion ? undefined : { x: detailX }}
          aria-hidden="true"
        >
          <span>{copy.focusLabel}</span>
          <ul>
            {copy.focusItems.map((item) => (
              <li key={item}>
                <i />
                {item}
              </li>
            ))}
          </ul>
        </motion.aside>

        <motion.div
          className="hero-portrait__image-wrap"
          style={reduceMotion ? undefined : { x: imageX, y: imageY }}
        >
          <img
            className="hero-portrait__image"
            src="/RetratoPortafolio.png"
            alt={copy.alt}
            width={1024}
            height={1536}
            decoding="async"
            fetchPriority="high"
          />
        </motion.div>

        <div className="hero-portrait__status" aria-hidden="true">
          <span className="hero-portrait__status-line" />
          <p>
            <small>{copy.statusLabel}</small>
            <strong>
              <i />
              {copy.statusValue}
            </strong>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
