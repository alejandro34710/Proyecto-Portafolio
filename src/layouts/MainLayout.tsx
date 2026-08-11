import { Outlet, useLocation } from 'react-router-dom'
import { SiteFooter } from '@/components/common/SiteFooter'
import { HeroHeader } from '@/components/hero/HeroHeader'
import { PageTransition } from '@/components/common/PageTransition'
import '@/styles/portfolio-shell.css'

export function MainLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isContact = pathname === '/contact'

  return (
    <div
      className={`portfolio-shell${isHome ? ' portfolio-shell--home' : ''}${
        isContact ? ' portfolio-shell--contact' : ''
      }`}
    >
      <span id="top" />
      <HeroHeader />
      <main className="portfolio-shell__main">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <SiteFooter />
    </div>
  )
}
