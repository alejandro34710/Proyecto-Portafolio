import { APP_CONFIG } from './app.config'

export const SEO_DEFAULTS = {
  title: APP_CONFIG.name,
  description: APP_CONFIG.description,
  ogType: 'website',
  ogUrl: APP_CONFIG.baseUrl,
  /** TODO: add a real social preview once the production URL is known. */
  ogImage: '',
} as const
