import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from 'motion/react'
import type { ReactNode } from 'react'
import {
  fadeIn,
  reveal,
  scaleIn,
  slideDown,
  slideLeft,
  slideRight,
  slideUp,
  staggerContainer,
} from '@/animations/motionVariants'

const revealPresets = {
  reveal,
  fade: fadeIn,
  scale: scaleIn,
  slideUp,
  slideDown,
  slideLeft,
  slideRight,
} as const

export type RevealPreset = keyof typeof revealPresets

export interface RevealProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: ReactNode
  preset?: RevealPreset
  delay?: number
  once?: boolean
  amount?: number
}

export function Reveal({
  children,
  preset = 'reveal',
  delay = 0,
  once = true,
  amount = 0.2,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={revealPresets[preset]}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once, amount }}
      transition={delay ? { delay } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export interface StaggerProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  once?: boolean
  amount?: number
}

export function Stagger({
  children,
  once = true,
  amount = 0.15,
  ...props
}: StaggerProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={staggerContainer}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export interface StaggerItemProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  variants?: Variants
}

export function StaggerItem({
  children,
  variants = reveal,
  ...props
}: StaggerItemProps) {
  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  )
}
