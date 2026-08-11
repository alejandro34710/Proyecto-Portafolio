import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

interface PortfolioIntroProps {
  onComplete: () => void
}

const INTRO_SESSION_KEY = 'alejandro-portfolio-intro-v1'

export function PortfolioIntro({ onComplete }: PortfolioIntroProps) {
  const reduceMotion = useReducedMotion()
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.sessionStorage.getItem(INTRO_SESSION_KEY) !== 'seen'
  })

  const closeIntro = useCallback(() => {
    window.sessionStorage.setItem(INTRO_SESSION_KEY, 'seen')
    setVisible(false)
  }, [])

  useEffect(() => {
    if (!visible) {
      onComplete()
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(closeIntro, reduceMotion ? 120 : 2450)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = previousOverflow
    }
  }, [closeIntro, onComplete, reduceMotion, visible])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible ? (
        <motion.div
          className="portfolio-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reduceMotion ? 0.08 : 0.6,
            ease: 'easeInOut',
          }}
          role="status"
          aria-label="Inicializando portafolio"
        >
          <motion.div
            className="portfolio-intro__curtain portfolio-intro__curtain--top"
            exit={{ y: '-102%' }}
            transition={{ duration: 0.78, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="portfolio-intro__curtain portfolio-intro__curtain--bottom"
            exit={{ y: '102%' }}
            transition={{ duration: 0.78, ease: [0.76, 0, 0.24, 1] }}
          />

          <div className="portfolio-intro__grid" aria-hidden="true" />
          <motion.span
            className="portfolio-intro__scanner"
            initial={{ y: '-30vh', opacity: 0 }}
            animate={{ y: '30vh', opacity: [0, 1, 0] }}
            transition={{ duration: 1.45, ease: 'easeInOut' }}
            aria-hidden="true"
          />

          <motion.div
            className="portfolio-intro__frame"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="portfolio-intro__topline">
              <span>A / PORTFOLIO SYSTEM</span>
              <span>SECURE BOOT / 01</span>
            </div>

            <div className="portfolio-intro__core" aria-hidden="true">
              <span className="portfolio-intro__orbit portfolio-intro__orbit--outer" />
              <span className="portfolio-intro__orbit portfolio-intro__orbit--inner" />
              <motion.span
                className="portfolio-intro__monogram"
                initial={{ rotate: -30, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                A
              </motion.span>
            </div>

            <div className="portfolio-intro__readout">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.45 }}
              >
                INITIALIZING DIGITAL EXPERIENCE
              </motion.p>
              <div className="portfolio-intro__progress" aria-hidden="true">
                <motion.i
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 0.22,
                    duration: 1.7,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                />
              </div>
              <div className="portfolio-intro__modules" aria-hidden="true">
                <span>PRODUCT</span>
                <span>ENGINEERING</span>
                <span>CLOUD</span>
                <span>AI</span>
              </div>
            </div>

            <div className="portfolio-intro__bottomline">
              <span>
                <i /> SYSTEM ONLINE
              </span>
              <span>BOG / 04.7110° N</span>
            </div>
          </motion.div>

          <button
            className="portfolio-intro__skip"
            type="button"
            onClick={closeIntro}
          >
            OMITIR INTRO
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
