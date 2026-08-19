import {
  Activity,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Layers,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { evolutionStageIds, type EvolutionStageId } from '@/data/experience'
import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const stageIcons: Record<EvolutionStageId, LucideIcon> = {
  operations: Activity,
  data: Database,
  product: Layers,
  fullStack: Code2,
  cloud: Cloud,
  ai: BrainCircuit,
}

export function CareerEvolution() {
  const { t } = useLocale()
  const reduceMotion = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 900px)')
  const copy = t.experience.evolution

  return (
    <section
      className="career-evolution"
      aria-labelledby="career-evolution-title"
    >
      <Reveal preset="slideUp">
        <p className="experience-section__eyebrow">{copy.eyebrow}</p>
        <h2 id="career-evolution-title" className="experience-section__title">
          {copy.title}
        </h2>
        <p className="experience-section__lede">{copy.body1}</p>
        <p className="experience-section__lede">{copy.body2}</p>
      </Reveal>

      <ol className="career-evolution__flow">
        {evolutionStageIds.map((id, index) => {
          const Icon = stageIcons[id]
          return (
            <li key={id} className="career-evolution__stage">
              {index > 0 && (
                <motion.span
                  className="career-evolution__connector"
                  aria-hidden="true"
                  initial={
                    reduceMotion
                      ? false
                      : isMobile
                        ? { scaleY: 0, scaleX: 1 }
                        : { scaleX: 0, scaleY: 1 }
                  }
                  whileInView={
                    reduceMotion ? undefined : { scaleX: 1, scaleY: 1 }
                  }
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08 * index,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              )}
              <span className="career-evolution__icon">
                <Icon size={16} strokeWidth={1.4} />
              </span>
              <strong>{copy.stages[id]}</strong>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
