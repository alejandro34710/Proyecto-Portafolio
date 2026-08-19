import type { ReactNode } from 'react'
import type { StackCapability } from '@/data/types'
import { getLocalized } from '@/data/projects'
import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'

type CapabilitySectionProps = {
  capability: StackCapability
  children: ReactNode
}

export function CapabilitySection({
  capability,
  children,
}: CapabilitySectionProps) {
  const { locale } = useLocale()

  return (
    <section
      className="stack-capability"
      id={capability.id}
      aria-labelledby={`${capability.id}-title`}
    >
      <Reveal preset="slideUp">
        <p className="stack-capability__kicker">
          {capability.index} / {capability.kicker}
        </p>
        <h2 id={`${capability.id}-title`} className="stack-capability__title">
          {getLocalized(capability.titleLine1, locale)}
          <span>{getLocalized(capability.titleLine2, locale)}</span>
        </h2>
        <p className="stack-capability__lede">
          {getLocalized(capability.lede, locale)}
        </p>
      </Reveal>
      {children}
    </section>
  )
}
