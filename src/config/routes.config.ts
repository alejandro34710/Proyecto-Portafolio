export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  PROJECT_DETAIL: '/projects/:slug',
  EXPERIENCE: '/experience',
  SKILLS: '/skills',
  ARCHITECTURE: '/architecture',
  LAB: '/lab',
  BLOG: '/blog',
  CONTACT: '/contact',
} as const

export type RouteKey = keyof typeof ROUTES

export const ROUTE_TITLES: Record<RouteKey, string> = {
  HOME: 'Home',
  ABOUT: 'About',
  PROJECTS: 'Projects',
  PROJECT_DETAIL: 'Project',
  EXPERIENCE: 'Experience',
  SKILLS: 'Skills',
  ARCHITECTURE: 'Architecture',
  LAB: 'Lab',
  BLOG: 'Blog',
  CONTACT: 'Contact',
}
