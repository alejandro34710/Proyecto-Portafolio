import { Seo } from '@/components/common/Seo'
import {
  CapabilityRail,
  CapabilitySection,
  CoreStack,
  DeliveryFlow,
  EngineeringToolkit,
  FlowDiagram,
  StackCTA,
  StackHero,
  StackOverview,
  StackPrinciple,
  SystemFlowSection,
  TechnologyList,
} from '@/components/stack'
import { stackCapabilities } from '@/data/stack'
import { useLocale } from '@/hooks/useLocale'
import '@/styles/stack.css'

export function StackPage() {
  const { t } = useLocale()

  return (
    <div className="page-shell stack-page">
      <Seo title={t.header.nav.stack} description={t.stackPage.lede} />

      <StackHero />
      <StackOverview />

      {stackCapabilities.map((capability) => (
        <CapabilitySection key={capability.id} capability={capability}>
          <TechnologyList
            featured={capability.featured}
            tags={capability.tags}
            highlights={capability.gcpHighlights}
          />
          {capability.id === 'cloud' && capability.flow ? (
            <DeliveryFlow nodes={capability.flow} />
          ) : capability.flow ? (
            <FlowDiagram
              nodes={capability.flow}
              orientation={capability.flowOrientation}
            />
          ) : null}
          <CapabilityRail items={capability.rail} label={capability.kicker} />
        </CapabilitySection>
      ))}

      <EngineeringToolkit />
      <SystemFlowSection />
      <CoreStack />
      <StackPrinciple />
      <StackCTA />
    </div>
  )
}
