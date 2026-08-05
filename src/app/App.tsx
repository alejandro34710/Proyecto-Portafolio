import { RouterProvider } from 'react-router-dom'
import { AppProviders } from '@/app/providers/AppProviders'
import { ThemeInitializer } from '@/app/ThemeInitializer'
import { router } from '@/router'

export function App() {
  return (
    <AppProviders>
      <ThemeInitializer />
      <RouterProvider router={router} />
    </AppProviders>
  )
}
