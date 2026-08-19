import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/config/routes.config'
import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'

export function ExperienceCTA() {
  const { t } = useLocale()
  const copy = t.experience.cta

  return (
    <section className="experience-cta">
      <Reveal preset="slideUp">
        <p className="experience-cta__kicker">{copy.kicker}</p>
        <h2 className="experience-cta__title">
          {copy.titleLine1}
          <span>{copy.titleLine2}</span>
        </h2>
        <p className="experience-cta__lede">{copy.lede}</p>
        <div className="experience-cta__links">
          <Link className="experience-cta__primary" to={ROUTES.PROJECTS}>
            {copy.primary}
            <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>
          <Link className="experience-cta__secondary" to={ROUTES.ABOUT}>
            {copy.secondary}
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
