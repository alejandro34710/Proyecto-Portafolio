import { Helmet } from 'react-helmet-async'
import { APP_CONFIG } from '@/config/app.config'
import { SEO_DEFAULTS } from '@/config/seo.config'
import type { SeoMeta } from '@/types'

type SeoProps = SeoMeta

export function Seo({
  title,
  description,
  ogTitle,
  ogDescription,
  ogType,
  ogUrl,
  ogImage,
  noIndex = false,
}: SeoProps) {
  const pageTitle = title ? `${title} | ${APP_CONFIG.name}` : SEO_DEFAULTS.title
  const pageDescription = description ?? SEO_DEFAULTS.description
  const pageOgTitle = ogTitle ?? pageTitle
  const pageOgDescription = ogDescription ?? pageDescription
  const pageOgType = ogType ?? SEO_DEFAULTS.ogType
  const pageOgUrl = ogUrl ?? SEO_DEFAULTS.ogUrl
  const pageOgImage = ogImage ?? SEO_DEFAULTS.ogImage

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={pageOgTitle} />
      <meta property="og:description" content={pageOgDescription} />
      <meta property="og:type" content={pageOgType} />
      {pageOgUrl && <meta property="og:url" content={pageOgUrl} />}
      {pageOgImage && <meta property="og:image" content={pageOgImage} />}

      <meta
        name="twitter:card"
        content={pageOgImage ? 'summary_large_image' : 'summary'}
      />
      <meta name="twitter:title" content={pageOgTitle} />
      <meta name="twitter:description" content={pageOgDescription} />
      {pageOgImage && <meta name="twitter:image" content={pageOgImage} />}
    </Helmet>
  )
}
