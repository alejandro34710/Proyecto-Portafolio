import { ArrowDown, ArrowUpRight, FileDown } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { HeroPortrait } from '@/components/hero/HeroPortrait'
import { ROUTES } from '@/config/routes.config'
import { useLocale } from '@/hooks/useLocale'

interface HomeHeroProps {
  introReady: boolean
}

export function HomeHero({ introReady }: HomeHeroProps) {
  const { t } = useLocale()
  const hero = t.home.hero

  return (
    <section className="home-hero" id="hero" data-home-chapter>
      <div className="home-hero__scene" aria-hidden="true">
        <span className="home-hero__scene-glow" />
        <span className="home-hero__scene-noise" />
      </div>
      <div className="home-hero__ambient" aria-hidden="true" />

      <div className="home-container home-hero__layout">
        <motion.div
          className="home-hero__copy"
          initial={false}
          animate={
            introReady
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 24, filter: 'blur(8px)' }
          }
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="home-hero__top-meta">
            <p className="home-hero__availability">
              <span className="home-hero__pulse-dot" aria-hidden="true" />
              <span>{hero.availability}</span>
            </p>
            <p className="home-hero__identity">{hero.identity}</p>
          </div>

          <h1 className="home-hero__title">
            {hero.titleLine1}
            <span>{hero.titleLine2}</span>
          </h1>

          <p className="home-hero__intro">{hero.intro}</p>

          <div className="home-hero__actions">
            <a className="home-button home-button--primary" href="#work">
              {hero.viewProjects}
              <ArrowDown size={15} aria-hidden="true" />
            </a>
            <Link
              className="home-button home-button--ghost"
              to={ROUTES.EXPERIENCE}
            >
              {hero.viewExperience}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <a
              className="home-hero__cv-link"
              href="/Alejandro-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileDown size={14} aria-hidden="true" />
              <span>{hero.downloadCv}</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="home-hero__visual"
          initial={false}
          animate={
            introReady
              ? { opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }
              : { opacity: 0, scale: 0.95, x: 28, filter: 'blur(10px)' }
          }
          transition={{
            duration: 0.9,
            delay: introReady ? 0.06 : 0,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <HeroPortrait />
        </motion.div>
      </div>
    </section>
  )
}
