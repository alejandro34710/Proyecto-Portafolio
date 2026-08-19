import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

type DeliveryFlowProps = {
  nodes: readonly string[]
}

export function DeliveryFlow({ nodes }: DeliveryFlowProps) {
  const reduceMotion = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 900px)')
  const listRef = useRef<HTMLOListElement>(null)
  const inView = useInView(listRef, { once: true, amount: 0.35 })
  const lastIndex = nodes.length - 1
  const [step, setStep] = useState(-1)
  const active = reduceMotion ? lastIndex : step

  useEffect(() => {
    if (!inView || reduceMotion) return

    const timers = nodes.map((_, index) =>
      window.setTimeout(() => setStep(index), 280 * index),
    )

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [inView, nodes, reduceMotion])

  return (
    <ol ref={listRef} className="stack-delivery">
      {nodes.map((node, index) => (
        <li
          key={node}
          className={
            index === active
              ? 'stack-delivery__node is-active'
              : index < active
                ? 'stack-delivery__node is-passed'
                : 'stack-delivery__node'
          }
        >
          {index > 0 && (
            <motion.span
              className="stack-delivery__line"
              aria-hidden="true"
              initial={
                reduceMotion
                  ? false
                  : isMobile
                    ? { scaleY: 0, scaleX: 1 }
                    : { scaleX: 0, scaleY: 1 }
              }
              whileInView={reduceMotion ? undefined : { scaleX: 1, scaleY: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          )}
          <strong>{node}</strong>
        </li>
      ))}
    </ol>
  )
}
