import { useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { Link } from 'react-router-dom'
import { useLocale } from '@/hooks/useLocale'
import { SYSTEM_CHAPTERS } from './chapters'
import { SystemMapObject } from './SystemMapObject'

const mapStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
}

const mapReveal: Variants = {
  hidden: { opacity: 0, x: -28, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}

const rowReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
}

export function SystemMap() {
  const { t } = useLocale()
  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const activeChapter = SYSTEM_CHAPTERS[activeIndex] ?? SYSTEM_CHAPTERS[0]
  const chaptersCopy = t.systemMap.chapters

  return (
    <motion.div
      className="system-map__layout"
      variants={mapStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="system-map__editorial">
        <motion.p className="system-map__tag" variants={mapReveal}>
          {t.systemMap.tag}
        </motion.p>
        <motion.h2 className="system-map__headline" variants={mapReveal}>
          {t.systemMap.headline}
          <span>{t.systemMap.headlineLine2}</span>
        </motion.h2>
        <motion.p className="system-map__lede" variants={mapReveal}>
          {t.systemMap.lede}
        </motion.p>

        <motion.div
          className="system-map__index"
          role="list"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.05, delayChildren: 0.12 },
            },
          }}
        >
          {SYSTEM_CHAPTERS.map((chapter, index) => {
            const copy = chaptersCopy[chapter.id]
            const isActive = index === activeIndex
            const isExpanded = expandedId === chapter.id

            return (
              <motion.div
                key={chapter.id}
                className={`system-map__item${isActive ? ' is-active' : ''}${
                  isExpanded ? ' is-expanded' : ''
                }`}
                role="listitem"
                variants={rowReveal}
              >
                <button
                  type="button"
                  className="system-map__row"
                  aria-expanded={isExpanded}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => {
                    setActiveIndex(index)
                    setExpandedId((current) =>
                      current === chapter.id ? null : chapter.id,
                    )
                  }}
                >
                  <span className="system-map__row-number">
                    {chapter.number}
                  </span>
                  <span className="system-map__row-title">{copy.label}</span>
                  <span className="system-map__row-plus" aria-hidden="true">
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      className="system-map__panel"
                      key={`${chapter.id}-panel`}
                      initial={{
                        height: 0,
                        opacity: 0,
                        y: -6,
                        filter: 'blur(6px)',
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        y: -4,
                        filter: 'blur(4px)',
                      }}
                      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="system-map__panel-inner">
                        <p className="system-map__panel-desc">
                          {copy.description}
                        </p>
                        <Link
                          className="system-map__panel-cta"
                          to={chapter.path}
                        >
                          <ArrowRight size={14} strokeWidth={1.5} />
                          {t.systemMap.explore}
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div variants={mapReveal}>
          <Link className="system-map__scroll" to={SYSTEM_CHAPTERS[0].path}>
            <span className="system-map__scroll-dot" aria-hidden="true" />
            <span>{t.systemMap.scroll}</span>
            <ArrowDown size={14} strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="system-map__visual"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.12 },
          },
        }}
      >
        <SystemMapObject chapter={activeChapter} index={activeIndex} />
      </motion.div>
    </motion.div>
  )
}
