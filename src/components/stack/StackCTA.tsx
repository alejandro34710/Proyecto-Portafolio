import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/config/routes.config'
import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'

export function StackCTA() {
  const { t } = useLocale()
  const copy = t.stackPage.cta

  return (
    <section className="stack-cta">
      <Reveal preset="slideUp">
        <p className="stack-cta__kicker">{copy.kicker}</p>
        <h2 className="stack-cta__title">
          {copy.titleLine1}
          <span>{copy.titleLine2}</span>
        </h2>
        <p className="stack-cta__lede">{copy.lede}</p>
        <div className="stack-cta__links">
          <Link className="stack-cta__primary" to={ROUTES.PROJECTS}>
            {copy.primary}
            <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>
          <Link className="stack-cta__secondary" to={ROUTES.EXPERIENCE}>
            {copy.secondary}
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
