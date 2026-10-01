import { useState, useRef, useCallback } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Radio, ShieldCheck, MapPin, Cpu, Activity } from 'lucide-react'
import { CONTACT_CONFIG } from '@/config/contact.config'
import { useLocale } from '@/hooks/useLocale'

export function ContactSignalVisual() {
  const { t, locale } = useLocale()
  const reduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduceMotion || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setMousePos({ x, y })
    },
    [reduceMotion],
  )

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setMousePos({ x: 0, y: 0 })
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const transformStyle =
    !reduceMotion && isHovered
      ? {
          transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg) translateZ(6px)`,
          transition: 'transform 0.15s ease-out',
        }
      : {
          transform:
            'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
          transition: 'transform 0.5s ease-out',
        }

  return (
    <div
      ref={containerRef}
      className="contact-visual-canvas"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      {/* Background technical coordinates and hairline grids */}
      <div className="contact-visual-canvas__grid" />
      <div className="contact-visual-canvas__ambient-glow" />

      {/* Technical corner indicators */}
      <span className="contact-visual__corner is-tl">+</span>
      <span className="contact-visual__corner is-tr">+</span>
      <span className="contact-visual__corner is-bl">+</span>
      <span className="contact-visual__corner is-br">+</span>

      <div className="contact-visual__header-meta">
        <span className="contact-visual__channel-tag">
          <Activity size={12} className="contact-visual__pulse-icon" />
          {t.contact.signalHeader}
        </span>
        <span className="contact-visual__coords">
          LAT 4.71° N · LON 74.07° W
        </span>
      </div>

      {/* Interactive 3D layer container */}
      <div className="contact-visual__stage" style={transformStyle}>
        {/* SVG Orbital Radians and Signal Lines */}
        <svg
          className="contact-visual__svg"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Radial grid markers */}
          <circle
            cx="250"
            cy="250"
            r="215"
            stroke="currentColor"
            strokeOpacity="0.14"
            strokeWidth="1"
            strokeDasharray="3 7"
          />
          <circle
            cx="250"
            cy="250"
            r="165"
            stroke="currentColor"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
          <circle
            cx="250"
            cy="250"
            r="115"
            stroke="currentColor"
            strokeOpacity="0.28"
            strokeWidth="1"
            strokeDasharray="6 8"
          />
          <circle
            cx="250"
            cy="250"
            r="65"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="1.2"
          />

          {/* Crosshair axes */}
          <line
            x1="25"
            y1="250"
            x2="475"
            y2="250"
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="1"
          />
          <line
            x1="250"
            y1="25"
            x2="250"
            y2="475"
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="1"
          />

          {/* Dynamic rotating orbital rings */}
          <g className="contact-visual__orbit-ring-outer">
            <circle
              cx="250"
              cy="250"
              r="190"
              stroke="var(--home-accent)"
              strokeOpacity="0.32"
              strokeWidth="1.5"
              strokeDasharray="40 90 20 80"
            />
            <circle cx="440" cy="250" r="3.5" fill="var(--home-cyan)" />
            <circle cx="60" cy="250" r="2.5" fill="var(--home-accent)" />
          </g>

          <g className="contact-visual__orbit-ring-inner">
            <circle
              cx="250"
              cy="250"
              r="140"
              stroke="var(--home-cyan)"
              strokeOpacity="0.38"
              strokeWidth="1.2"
              strokeDasharray="25 60 15 50"
            />
            <circle cx="250" cy="110" r="3" fill="var(--home-accent)" />
            <circle cx="250" cy="390" r="2.5" fill="var(--home-cyan)" />
          </g>
        </svg>

        {/* Central Core Element */}
        <div className="contact-visual__core">
          <div className="contact-visual__core-wave is-first" />
          <div className="contact-visual__core-wave is-second" />
          <div className="contact-visual__core-badge">
            <Radio size={22} className="contact-visual__core-icon" />
            <span className="contact-visual__core-status">
              {t.contact.signalCoreStatus}
            </span>
            <span className="contact-visual__core-id">ALEJANDRO</span>
          </div>
        </div>

        {/* Strategic Floating Glass Nodes */}
        {/* Node 1: Availability */}
        <motion.div
          className="contact-glass-node is-availability"
          initial={false}
          animate={
            !reduceMotion
              ? {
                  y: isHovered ? mousePos.y * -14 : 0,
                  x: isHovered ? mousePos.x * -10 : 0,
                }
              : {}
          }
          transition={{ duration: 0.2 }}
        >
          <div className="contact-glass-node__indicator">
            <span className="contact-glass-node__pulse" />
            <span className="contact-glass-node__dot" />
          </div>
          <div className="contact-glass-node__content">
            <span className="contact-glass-node__tag">
              <ShieldCheck size={11} /> {t.contact.statusBadge}
            </span>
            <strong className="contact-glass-node__title">
              {t.contact.statusDetail}
            </strong>
          </div>
        </motion.div>

        {/* Node 2: Location */}
        <motion.div
          className="contact-glass-node is-location"
          initial={false}
          animate={
            !reduceMotion
              ? {
                  y: isHovered ? mousePos.y * -8 : 0,
                  x: isHovered ? mousePos.x * -14 : 0,
                }
              : {}
          }
          transition={{ duration: 0.2 }}
        >
          <div className="contact-glass-node__icon-wrap">
            <MapPin size={14} />
          </div>
          <div className="contact-glass-node__content">
            <span className="contact-glass-node__tag">
              {t.contact.locationLabel}
            </span>
            <strong className="contact-glass-node__title">
              {CONTACT_CONFIG.location}
            </strong>
            <small className="contact-glass-node__sub">
              {t.contact.timezoneValue}
            </small>
          </div>
        </motion.div>

        {/* Node 3: Role, background, focus */}
        <motion.div
          className="contact-glass-node is-discipline"
          initial={false}
          animate={
            !reduceMotion
              ? {
                  y: isHovered ? mousePos.y * -18 : 0,
                  x: isHovered ? mousePos.x * -8 : 0,
                }
              : {}
          }
          transition={{ duration: 0.2 }}
        >
          <div className="contact-glass-node__icon-wrap">
            <Cpu size={14} />
          </div>
          <div className="contact-glass-node__content">
            <span className="contact-glass-node__tag">
              {CONTACT_CONFIG.education[locale]}
            </span>
            <strong className="contact-glass-node__title">
              {CONTACT_CONFIG.role[locale]}
            </strong>
            <small className="contact-glass-node__sub">
              {t.contact.signalFocus}
            </small>
          </div>
        </motion.div>
      </div>

      {/* Technical bottom metadata footer */}
      <div className="contact-visual__footer-meta">
        <span>{t.contact.signalFooterA}</span>
        <span>{t.contact.signalFooterB}</span>
        <span>{t.contact.signalFooterC}</span>
      </div>
    </div>
  )
}
