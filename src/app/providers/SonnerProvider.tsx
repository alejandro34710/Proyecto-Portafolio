import { Toaster } from 'sonner'
import { useTheme } from '@/hooks/useTheme'

export function SonnerProvider() {
  const { resolvedTheme } = useTheme()

  return (
    <Toaster
      position="bottom-right"
      theme={resolvedTheme}
      richColors
      closeButton
    />
  )
}
