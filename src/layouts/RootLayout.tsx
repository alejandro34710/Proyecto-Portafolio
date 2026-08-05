import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { LoadingScreen } from '@/components/common/LoadingScreen'
import { ScrollToTop } from '@/components/common/ScrollToTop'

export function RootLayout() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <LoadingScreen />
      <Outlet />
    </ErrorBoundary>
  )
}
