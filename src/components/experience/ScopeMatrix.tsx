import type { ExperienceScopeItem } from '@/data/types'
import { getLocalized } from '@/data/projects'
import { Stagger, StaggerItem } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'

type ScopeMatrixProps = {
  items: readonly ExperienceScopeItem[]
}

export function ScopeMatrix({ items }: ScopeMatrixProps) {
  const { t, locale } = useLocale()

  return (
    <section className="scope-matrix" aria-labelledby="scope-of-work">
      <h3 id="scope-of-work" className="experience-block__kicker">
        {t.experience.scopeOfWork}
      </h3>
      <Stagger className="scope-matrix__grid">
        {items.map((item) => (
          <StaggerItem key={item.id} className="scope-matrix__cell">
            <span className="scope-matrix__index">
              {item.index} / {getLocalized(item.label, locale)}
            </span>
            <p>{getLocalized(item.body, locale)}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
