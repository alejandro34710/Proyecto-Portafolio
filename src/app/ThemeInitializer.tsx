import { useEffect } from 'react'
import { useThemeStore } from '@/store/themeStore'

export function ThemeInitializer() {
  const theme = useThemeStore((state) => state.theme)
  const setTheme = useThemeStore((state) => state.setTheme)

  useEffect(() => {
    setTheme(theme)
  }, [theme, setTheme])

  return null
}
