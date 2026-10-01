import { TechIcon } from '@/components/common/TechIcon'
import { Reveal, Stagger, StaggerItem } from '@/components/design-system'
import { getLocalized } from '@/data/projects'
import { stackCore } from '@/data/stack'
import { useLocale } from '@/hooks/useLocale'

export function CoreStack() {
  const { t, locale } = useLocale()
  const copy = t.stackPage.coreStack

  return (
    <section className="stack-core" aria-labelledby="stack-core-title">
      <Reveal preset="slideUp">
        <p className="stack-section__eyebrow">{copy.eyebrow}</p>
        <h2 id="stack-core-title" className="stack-section__title">
          {copy.titleLine1}
          <span>{copy.titleLine2}</span>
        </h2>
      </Reveal>

      <Stagger className="stack-core__list">
        {stackCore.map((item) => (
          <StaggerItem key={item.index} className="stack-core__row">
            <span className="stack-core__index">{item.index}</span>
            <div className="stack-core__icon-wrap">
              {item.slug && <TechIcon slug={item.slug} size={18} />}
            </div>
            <strong className="stack-core__name">{item.name}</strong>
            <span className="stack-core__category">
              {getLocalized(item.category, locale)}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
