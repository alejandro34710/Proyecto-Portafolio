import { motion, useReducedMotion } from 'motion/react'
import { stackPrincipleLayers } from '@/data/stack'
import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'

export function StackPrinciple() {
  const { t } = useLocale()
  const copy = t.stackPage.principle
  const reduceMotion = useReducedMotion()

  return (
    <section
      className="stack-principle"
      aria-labelledby="stack-principle-title"
    >
      <Reveal preset="slideUp">
        <p className="stack-section__eyebrow">{copy.eyebrow}</p>
        <h2 id="stack-principle-title" className="stack-section__title">
          {copy.titleLine1}
          <span>{copy.titleLine2}</span>
        </h2>
        <p className="stack-section__lede">{copy.body}</p>
      </Reveal>

      <ol className="stack-principle__layers">
        {stackPrincipleLayers.map((layer, index) => (
          <li key={layer}>
            {index > 0 && (
              <motion.span
                aria-hidden="true"
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={reduceMotion ? undefined : { scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            )}
            {layer}
          </li>
        ))}
      </ol>
    </section>
  )
}
