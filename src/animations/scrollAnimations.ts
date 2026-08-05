import type { ScrollTriggerConfig } from '@/types/animations'

export const defaultScrollTriggerConfig: ScrollTriggerConfig = {
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
}

export const parallaxScrollConfig: ScrollTriggerConfig = {
  start: 'top bottom',
  end: 'bottom top',
  scrub: true,
}

// Placeholder exports for future GSAP ScrollTrigger animations
export const scrollAnimationRegistry = {
  fadeInOnScroll: 'fade-in-on-scroll',
  parallax: 'parallax',
  pinSection: 'pin-section',
} as const
