import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'
import { StackSystemFlow } from './StackSystemFlow'

export function SystemFlowSection() {
  const { t } = useLocale()
  const copy = t.stackPage.systemFlow

  return (
    <section className="stack-connect" aria-labelledby="stack-connect-title">
      <Reveal preset="slideUp">
        <p className="stack-section__eyebrow">{copy.eyebrow}</p>
        <h2 id="stack-connect-title" className="stack-section__title">
          {copy.titleLine1}
          <span>{copy.titleLine2}</span>
        </h2>
        <p className="stack-section__lede">{copy.lede}</p>
      </Reveal>
      <StackSystemFlow />
    </section>
  )
}
