import { stackCore } from '@/data/stack'
import { getLocalized } from '@/data/projects'
import { Reveal, Stagger, StaggerItem } from '@/components/design-system'
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
            {item.slug && (
              <img
                src={`https://cdn.simpleicons.org/${item.slug}`}
                alt=""
                width={16}
                height={16}
                loading="lazy"
                decoding="async"
              />
            )}
            <strong>{item.name}</strong>
            <em>{getLocalized(item.category, locale)}</em>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
