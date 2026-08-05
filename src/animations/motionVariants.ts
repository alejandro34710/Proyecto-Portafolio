import type { Variants } from 'motion/react'
import {
  DELAY,
  DURATION,
  EASING,
  MOTION_DISTANCE,
  SPRING,
  STAGGER,
} from './animationPresets'

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASING.easeOut },
  },
}

export const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: MOTION_DISTANCE.standard,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: DURATION.slow, ease: EASING.easeOut },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.975 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.normal, ease: EASING.easeOut },
  },
}

function createSlideVariant(x: number, y: number): Variants {
  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: DURATION.slow, ease: EASING.easeOut },
    },
  }
}

export const slideUp = createSlideVariant(0, MOTION_DISTANCE.expressive)
export const slideDown = createSlideVariant(0, -MOTION_DISTANCE.expressive)
export const slideLeft = createSlideVariant(MOTION_DISTANCE.expressive, 0)
export const slideRight = createSlideVariant(-MOTION_DISTANCE.expressive, 0)

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.children,
      delayChildren: DELAY.short,
    },
  },
}

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER.fast },
  },
}

export const cardMotion: Variants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -4, transition: SPRING.responsive },
  tap: { y: -1, scale: 0.995, transition: SPRING.responsive },
}

export const buttonMotion: Variants = {
  rest: { scale: 1 },
  hover: { y: -1, transition: SPRING.responsive },
  tap: { y: 0, scale: 0.975, transition: SPRING.responsive },
}

export const imageMotion: Variants = {
  hidden: { opacity: 0, scale: 1.035, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: DURATION.page, ease: EASING.easeOut },
  },
  hover: { scale: 1.02, transition: SPRING.gentle },
}

export const sectionMotion: Variants = {
  hidden: { opacity: 0, y: MOTION_DISTANCE.expressive },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.easeOut,
      staggerChildren: STAGGER.children,
    },
  },
}
