import type { ReactNode } from 'react'
import { HelmetAsyncProvider } from './HelmetProvider'
import { LenisProvider } from './LenisProvider'
import { QueryProvider } from './QueryProvider'
import { SonnerProvider } from './SonnerProvider'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <HelmetAsyncProvider>
      <QueryProvider>
        <LenisProvider>
          {children}
          <SonnerProvider />
        </LenisProvider>
      </QueryProvider>
    </HelmetAsyncProvider>
  )
}
