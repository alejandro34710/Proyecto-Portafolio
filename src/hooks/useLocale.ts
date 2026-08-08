import { getDictionary } from '@/i18n'
import { useLocaleStore } from '@/store/localeStore'

export function useLocale() {
  const locale = useLocaleStore((state) => state.locale)
  const setLocale = useLocaleStore((state) => state.setLocale)
  const dictionary = getDictionary(locale)

  return { locale, setLocale, dictionary, t: dictionary }
}
