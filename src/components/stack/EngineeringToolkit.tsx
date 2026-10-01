import { TechIcon } from '@/components/common/TechIcon'
import { Reveal } from '@/components/design-system'
import { getLocalized } from '@/data/projects'
import { stackToolkit } from '@/data/stack'
import { useLocale } from '@/hooks/useLocale'

export function EngineeringToolkit() {
  const { t, locale } = useLocale()
  const copy = t.stackPage.toolkit
  const sequence = [...stackToolkit, ...stackToolkit]

  return (
    <section className="stack-toolkit" aria-labelledby="stack-toolkit-title">
      <Reveal preset="slideUp">
        <p className="stack-section__eyebrow">{copy.eyebrow}</p>
        <h2 id="stack-toolkit-title" className="stack-section__title">
          {copy.titleLine1}
          <span>{copy.titleLine2}</span>
        </h2>
        <p className="stack-section__lede">{copy.lede}</p>
      </Reveal>

      <div className="stack-toolkit__rail" aria-label={copy.lede}>
        <ul className="stack-toolkit__track">
          {sequence.map((item, index) => (
            <li
              key={`${item.name}-${index}`}
              className="stack-toolkit__item"
              aria-hidden={index >= stackToolkit.length || undefined}
            >
              {item.slug && (
                <div className="stack-toolkit__icon">
                  <TechIcon slug={item.slug} size={16} />
                </div>
              )}
              <strong>{item.name}</strong>
              <span>{getLocalized(item.role, locale)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
