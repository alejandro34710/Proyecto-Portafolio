export type Theme = 'light' | 'dark' | 'system'

export type ResolvedTheme = 'light' | 'dark'

export interface SeoMeta {
  title?: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogType?: string
  ogUrl?: string
  ogImage?: string
  noIndex?: boolean
}

export interface RouteConfig {
  path: string
  title: string
}

export interface ApiError {
  message: string
  status?: number
}
