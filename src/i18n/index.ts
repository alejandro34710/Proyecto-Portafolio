import type { Dictionary, Locale } from './types'
import { en } from './locales/en'
import { es } from './locales/es'

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
}

export const defaultLocale: Locale = 'en'

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale]
}

export type { Dictionary, Locale, ChapterId, ChapterCopy } from './types'
