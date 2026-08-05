import { Seo } from '@/components/common/Seo'
import { Section } from '@/components/common/Section'

interface PlaceholderPageProps {
  title: string
  description?: string
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <>
      <Seo title={title} description={description} />
      <Section>
        <h1 className="text-2xl font-semibold text-text-primary sm:text-3xl">
          {title}
        </h1>
        <p className="mt-4 text-text-secondary">
          {description ?? 'Content coming in a future sprint.'}
        </p>
      </Section>
    </>
  )
}
