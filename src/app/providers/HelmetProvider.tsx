import { HelmetProvider } from 'react-helmet-async'
import type { ReactNode } from 'react'

export function HelmetAsyncProvider({ children }: { children: ReactNode }) {
  return <HelmetProvider>{children}</HelmetProvider>
}
