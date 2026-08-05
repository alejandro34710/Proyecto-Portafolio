import { APP_CONFIG } from './app.config'

export const SEO_DEFAULTS = {
  title: APP_CONFIG.name,
  description: APP_CONFIG.description,
  ogType: 'website',
  ogUrl: APP_CONFIG.baseUrl,
  ogImage: `${APP_CONFIG.baseUrl}/og-image.png`,
} as const
