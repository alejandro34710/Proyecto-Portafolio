import { useCallback, useEffect, useState } from 'react'
import { motion, useScroll } from 'motion/react'
import { Seo } from '@/components/common/Seo'
import { PortfolioIntro } from '@/components/hero/PortfolioIntro'
import {
  HomeContact,
  HomeExperience,
  HomeHero,
  HomeProfileTransition,
  HomeSystem,
  HomeWork,
  TechMarquee,
} from '@/components/home'
import { useLocale } from '@/hooks/useLocale'
import './HomePage.css'

const journeySections = [
  { id: 'hero', number: '00', label: 'Opening' },
  { id: 'work', number: '01', label: 'Selected work' },
  { id: 'system', number: '02', label: 'System & Stack' },
  { id: 'experience-preview', number: '03', label: 'Experience' },
  { id: 'profile', number: '04', label: 'Profile' },
  { id: 'contact', number: '05', label: 'Contact' },
] as const

export function HomePage() {
  const [activeSection, setActiveSection] = useState('hero')
  const [introReady, setIntroReady] = useState(false)
  const { scrollYProgress } = useScroll()
  const { t, locale } = useLocale()
  const handleIntroComplete = useCallback(() => setIntroReady(true), [])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      '[data-home-chapter]',
    )
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.15, 0.4] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const activeIndex = journeySections.findIndex(
    (section) => section.id === activeSection,
  )

  return (
    <div className="home-experience">
      <Seo description={t.home.meta.description} />
      <PortfolioIntro onComplete={handleIntroComplete} />

      <a className="skip-link" href="#work">
        {locale === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>

      <motion.div
        className="reading-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      <aside className="chapter-rail" aria-label="Reading progress">
        <span>
          {activeIndex < 0 ? '00' : journeySections[activeIndex].number}
        </span>
        <div>
          {journeySections.map((chapter, index) => (
            <a
              href={`#${chapter.id}`}
              key={chapter.id}
              className={index === activeIndex ? 'is-active' : ''}
              aria-label={chapter.label}
            >
              <i />
            </a>
          ))}
        </div>
        <span>05</span>
      </aside>

      {/* 01 — Hero & Identity */}
      <HomeHero introReady={introReady} />

      {/* 01.5 — Minimal Core Marquee */}
      <TechMarquee />

      {/* 02 — Selected Work */}
      <HomeWork />

      {/* 03 — System Architecture & Capabilities */}
      <HomeSystem />

      {/* 04 — Professional Experience Preview */}
      <HomeExperience />

      {/* 05 — Profile & Philosophy Transition */}
      <HomeProfileTransition />

      {/* 06 — Professional Closing & Contact */}
      <HomeContact />
    </div>
  )
}
