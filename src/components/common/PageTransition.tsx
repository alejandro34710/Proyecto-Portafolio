import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { pageTransitionVariants } from '@/animations/pageTransitions'
import { cn } from '@/utils/cn'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={pageTransitionVariants}
      initial={false}
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
