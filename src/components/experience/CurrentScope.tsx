import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'
import {
  currentScopeStageIds,
  type CurrentScopeStageId,
} from '@/data/experience'
import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'

export function CurrentScope() {
  const { t } = useLocale()
  const copy = t.experience.currentScope
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLOListElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.35 })
  const lastIndex = currentScopeStageIds.length - 1
  const [step, setStep] = useState(-1)
  const active = reduceMotion ? lastIndex : step

  useEffect(() => {
    if (!inView || reduceMotion) return

    const timers = currentScopeStageIds.map((_, index) =>
      window.setTimeout(() => setStep(index), 280 * index),
    )

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [inView, reduceMotion])

  return (
    <section className="current-scope" aria-labelledby="current-scope-title">
      <Reveal preset="slideUp">
        <p className="experience-section__eyebrow">{copy.eyebrow}</p>
        <h2 id="current-scope-title" className="experience-section__title">
          {copy.title}
        </h2>
      </Reveal>

      <ol ref={sectionRef} className="current-scope__flow">
        {currentScopeStageIds.map((id: CurrentScopeStageId, index) => (
          <li
            key={id}
            className={
              index === active
                ? 'current-scope__stage is-active'
                : index < active
                  ? 'current-scope__stage is-passed'
                  : 'current-scope__stage'
            }
          >
            <strong>{copy.stages[id].label}</strong>
            <span>{copy.stages[id].detail}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
