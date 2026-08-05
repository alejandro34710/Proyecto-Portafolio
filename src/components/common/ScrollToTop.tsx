import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from '@/hooks/useLenis'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null

    if (lenis) {
      lenis.scrollTo(target ?? 0, { immediate: true })
    } else {
      target?.scrollIntoView()
      if (!target) window.scrollTo(0, 0)
    }
  }, [pathname, hash, lenis])

  return null
}
