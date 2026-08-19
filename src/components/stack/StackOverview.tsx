import { stackCapabilities } from '@/data/stack'
import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'

export function StackOverview() {
  const { t } = useLocale()
  const copy = t.stackPage.overview

  return (
    <section className="stack-overview">
      <Reveal className="stack-overview__copy" preset="slideUp">
        <p className="stack-section__eyebrow">{copy.eyebrow}</p>
        <h2 className="stack-section__title">
          {copy.titleLine1}
          <span>{copy.titleLine2}</span>
        </h2>
        <p className="stack-section__lede">{copy.lede}</p>
      </Reveal>

      <nav className="stack-overview__index" aria-label={copy.indexTitle}>
        <p>{copy.indexTitle}</p>
        <ol>
          {stackCapabilities.map((capability) => (
            <li key={capability.id}>
              <a href={`#${capability.id}`}>
                <span>{capability.index}</span>
                {capability.kicker}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  )
}
