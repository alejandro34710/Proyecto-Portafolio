import { Link } from 'react-router-dom'
import { Seo } from '@/components/common/Seo'
import { Section } from '@/components/common/Section'
import { ROUTES } from '@/config/routes.config'

export function NotFoundPage() {
  return (
    <>
      <Seo title="Not Found" noIndex />
      <Section>
        <h1 className="text-2xl font-semibold text-text-primary sm:text-3xl">
          404 — Page Not Found
        </h1>
        <p className="mt-4 text-text-secondary">
          The page you are looking for does not exist.
        </p>
        <Link
          to={ROUTES.HOME}
          className="mt-6 inline-block text-primary underline-offset-4 hover:underline"
        >
          Return to home
        </Link>
      </Section>
    </>
  )
}
