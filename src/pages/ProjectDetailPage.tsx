import { useParams } from 'react-router-dom'
import { Seo } from '@/components/common/Seo'
import { Section } from '@/components/common/Section'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const title = slug ? `Project: ${slug}` : 'Project'

  return (
    <>
      <Seo title={title} />
      <Section>
        <h1 className="text-2xl font-semibold text-text-primary sm:text-3xl">
          {title}
        </h1>
        <p className="mt-4 text-text-secondary">Project detail placeholder.</p>
      </Section>
    </>
  )
}
