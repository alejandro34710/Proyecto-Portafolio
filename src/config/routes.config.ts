export const ROUTES = {
  HOME: '/',
  PROJECTS: '/projects',
  PROJECT_DETAIL: '/projects/:slug',
  EXPERIENCE: '/experience',
  STACK: '/stack',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const

export type RouteKey = keyof typeof ROUTES

export const ROUTE_TITLES: Record<RouteKey, string> = {
  HOME: 'Home',
  PROJECTS: 'Projects',
  PROJECT_DETAIL: 'Project',
  EXPERIENCE: 'Experience',
  STACK: 'Stack',
  ABOUT: 'About',
  CONTACT: 'Contact',
}

/** Nav items for the public portfolio flow (desktop + mobile). */
export const NAV_ITEMS = [
  { key: 'home', path: ROUTES.HOME, index: '01' },
  { key: 'projects', path: ROUTES.PROJECTS, index: '02' },
  { key: 'experience', path: ROUTES.EXPERIENCE, index: '03' },
  { key: 'stack', path: ROUTES.STACK, index: '04' },
  { key: 'about', path: ROUTES.ABOUT, index: '05' },
  { key: 'contact', path: ROUTES.CONTACT, index: '06' },
] as const

export type NavKey = (typeof NAV_ITEMS)[number]['key']

export function projectPath(slug: string) {
  return `/projects/${slug}`
}
