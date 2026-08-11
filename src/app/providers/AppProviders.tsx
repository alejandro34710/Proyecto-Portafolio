import type { ReactNode } from 'react'
import { HelmetAsyncProvider } from './HelmetProvider'
import { LenisProvider } from './LenisProvider'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <HelmetAsyncProvider>
      <LenisProvider>{children}</LenisProvider>
    </HelmetAsyncProvider>
  )
}
