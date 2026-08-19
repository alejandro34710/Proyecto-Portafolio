import { motion, useReducedMotion } from 'motion/react'
import { experienceEntries, timelineYears } from '@/data/experience'
import { getLocalized } from '@/data/projects'
import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export function CareerTimeline() {
  const { t, locale } = useLocale()
  const reduceMotion = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 900px)')
  const copy = t.experience.timeline

  return (
    <section
      className="career-timeline"
      aria-labelledby="career-timeline-title"
    >
      <Reveal preset="slideUp">
        <p className="experience-section__eyebrow">{copy.eyebrow}</p>
        <h2 id="career-timeline-title" className="experience-section__title">
          {copy.title}
        </h2>
        <p className="experience-section__lede">{copy.lede}</p>
      </Reveal>

      <div className="career-timeline__axis">
        <span className="career-timeline__coords" aria-hidden="true">
          DATA → SOFTWARE
        </span>

        <div className="career-timeline__track" aria-hidden="true">
          <motion.span
            className="career-timeline__line"
            style={{
              transformOrigin: isMobile ? 'top center' : 'left center',
            }}
            initial={
              reduceMotion
                ? false
                : isMobile
                  ? { scaleY: 0, scaleX: 1 }
                  : { scaleX: 0, scaleY: 1 }
            }
            whileInView={reduceMotion ? undefined : { scaleX: 1, scaleY: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <ol className="career-timeline__years">
          {timelineYears.map((year) => (
            <li key={year}>{year === 'NOW' ? copy.now : year}</li>
          ))}
        </ol>

        <ol className="career-timeline__nodes">
          {experienceEntries.map((entry) => (
            <li
              key={entry.id}
              className={
                entry.current
                  ? 'career-timeline__node is-active'
                  : 'career-timeline__node'
              }
            >
              <span className="career-timeline__dot" />
              <span className="career-timeline__index">{entry.index}</span>
              <strong>{getLocalized(entry.company, locale)}</strong>
              <em>{getLocalized(entry.timelineLabel, locale)}</em>
              <span className="career-timeline__period">
                {getLocalized(entry.periodShort, locale)}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
