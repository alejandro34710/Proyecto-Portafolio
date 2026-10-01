import { useState } from 'react'
import { Seo } from '@/components/common/Seo'
import {
  CoreStack,
  EngineeringToolkit,
  StackCTA,
  StackHero,
  StackOverview,
  StackPrinciple,
  StackSystemStudio,
} from '@/components/stack'
import { useLocale } from '@/hooks/useLocale'
import type { StackGroupId } from '@/data/types'
import '@/styles/stack.css'

export function StackPage() {
  const { t } = useLocale()
  const [selectedLayerId, setSelectedLayerId] =
    useState<StackGroupId>('interface')

  return (
    <div className="page-shell stack-page">
      <Seo title={t.header.nav.stack} description={t.stackPage.lede} />

      <StackHero onSelectLayer={setSelectedLayerId} />
      <StackOverview />
      <StackSystemStudio
        selectedLayerId={selectedLayerId}
        onSelectLayer={setSelectedLayerId}
      />
      <CoreStack />
      <EngineeringToolkit />
      <StackPrinciple />
      <StackCTA />
    </div>
  )
}
