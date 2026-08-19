import type { LocalizedStringList } from '@/data/types'
import { Stagger, StaggerItem } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'

type ResponsibilityListProps = {
  items: LocalizedStringList
}

export function ResponsibilityList({ items }: ResponsibilityListProps) {
  const { t, locale } = useLocale()
  const list = items[locale]

  return (
    <section className="responsibility-list" aria-labelledby="what-i-do">
      <h3 id="what-i-do" className="experience-block__kicker">
        {t.experience.whatIDo}
      </h3>
      <Stagger className="responsibility-list__rows">
        {list.map((item, index) => (
          <StaggerItem key={item} className="responsibility-list__row">
            <span className="responsibility-list__index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p>{item}</p>
            <span className="responsibility-list__tick" aria-hidden="true" />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
