import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'
import { StackHeroBlueprint } from './StackHeroBlueprint'
import type { StackGroupId } from '@/data/types'

type StackHeroProps = {
  onSelectLayer?: (id: StackGroupId) => void
}

export function StackHero({ onSelectLayer }: StackHeroProps) {
  const { t } = useLocale()

  return (
    <header className="stack-page__hero">
      <Reveal preset="slideUp" className="stack-hero__copy">
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

      <Reveal preset="slideLeft" className="stack-hero__visual">
        <StackHeroBlueprint onSelectLayer={onSelectLayer} />
      </Reveal>
    </header>
  )
}
