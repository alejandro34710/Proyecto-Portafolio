import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'
import { StackSystemVisual } from './StackSystemVisual'

export function StackHero() {
  const { t } = useLocale()

  return (
    <header className="stack-page__hero">
      <Reveal preset="slideUp">
        <p className="page-eyebrow">{t.stackPage.eyebrow}</p>
        <h1 className="page-title stack-hero__title">
          {t.stackPage.titleLine1}
          <span>
            {t.stackPage.titleLine2}
            <br />
            {t.stackPage.titleLine3}
          </span>
        </h1>
        <p className="page-lede stack-hero__lede">{t.stackPage.lede}</p>
      </Reveal>

      <Reveal preset="slideLeft">
        <StackSystemVisual />
      </Reveal>
    </header>
  )
}
