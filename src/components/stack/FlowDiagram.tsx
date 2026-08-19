import { motion, useReducedMotion } from 'motion/react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

type FlowDiagramProps = {
  nodes: readonly string[]
  orientation?: 'vertical' | 'horizontal'
}

export function FlowDiagram({
  nodes,
  orientation = 'vertical',
}: FlowDiagramProps) {
  const reduceMotion = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 900px)')
  const isVertical = orientation === 'vertical' || isMobile

  return (
    <ol
      className={`stack-flow stack-flow--${isVertical ? 'vertical' : 'horizontal'}`}
    >
      {nodes.map((node, index) => (
        <li key={node} className="stack-flow__node">
          {index > 0 && (
            <motion.span
              className="stack-flow__connector"
              aria-hidden="true"
              initial={
                reduceMotion
                  ? false
                  : isVertical
                    ? { scaleY: 0, scaleX: 1 }
                    : { scaleX: 0, scaleY: 1 }
              }
              whileInView={reduceMotion ? undefined : { scaleX: 1, scaleY: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: 0.08 * index,
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
