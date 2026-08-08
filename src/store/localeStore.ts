import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Locale } from '@/i18n'
import { defaultLocale } from '@/i18n'

interface LocaleState {
  locale: Locale
  setLocale: (locale: Locale) => void
}

function applyDocumentLang(locale: Locale) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = locale
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: defaultLocale,
      setLocale: (locale) => {
        applyDocumentLang(locale)
        set({ locale })
      },
    }),
    {
      name: 'portfolio-locale',
      onRehydrateStorage: () => (state) => {
        if (state) applyDocumentLang(state.locale)
      },
    },
  ),
)
