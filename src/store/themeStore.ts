import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ResolvedTheme, Theme } from '@/types'

interface ThemeState {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function resolveTheme(theme: Theme): ResolvedTheme {
  if (typeof window !== 'undefined') {
    if (
      window.location.search.includes('theme=dark') ||
      window.location.hash.includes('dark')
    ) {
      return 'dark'
    }
    if (
      window.location.search.includes('theme=light') ||
      window.location.hash.includes('light')
    ) {
      return 'light'
    }
  }
  if (theme === 'system') return getSystemTheme()
  return theme
}

function applyThemeClass(resolvedTheme: ResolvedTheme) {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(resolvedTheme)
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      resolvedTheme: 'light',
      setTheme: (theme) => {
        const resolvedTheme = resolveTheme(theme)
        applyThemeClass(resolvedTheme)
        set({ theme, resolvedTheme })
      },
    }),
    {
      name: 'portfolio-theme',
      onRehydrateStorage: () => (state) => {
        if (state) {
          const resolvedTheme = resolveTheme(state.theme)
          applyThemeClass(resolvedTheme)
          state.resolvedTheme = resolvedTheme
        }
      },
    },
  ),
)

if (typeof window !== 'undefined') {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      const { theme, setTheme } = useThemeStore.getState()
      if (theme === 'system') {
        setTheme('system')
      }
    })
}
