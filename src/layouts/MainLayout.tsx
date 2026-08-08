import { Outlet, useLocation } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { PageTransition } from '@/components/common/PageTransition'

export function MainLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className={isHome ? 'min-h-screen bg-[#fafafa] dark:bg-[#121212]' : 'min-h-screen bg-background'}>
      <main>
        {isHome ? (
          <PageTransition>
            <Outlet />
          </PageTransition>
        ) : (
          <Container>
            <PageTransition>
              <Outlet />
            </PageTransition>
          </Container>
        )}
      </main>
    </div>
  )
}
