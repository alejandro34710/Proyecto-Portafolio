import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/config/routes.config'
import { RootLayout } from '@/layouts/RootLayout'
import { MainLayout } from '@/layouts/MainLayout'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: ROUTES.HOME,
            lazy: async () => {
              const { HomePage } = await import('@/pages/HomePage')
              return { Component: HomePage }
            },
          },
          {
            path: ROUTES.PROJECTS,
            lazy: async () => {
              const { ProjectsPage } = await import('@/pages/ProjectsPage')
              return { Component: ProjectsPage }
            },
          },
          {
            path: ROUTES.PROJECT_DETAIL,
            lazy: async () => {
              const { ProjectDetailPage } =
                await import('@/pages/ProjectDetailPage')
              return { Component: ProjectDetailPage }
            },
          },
          {
            path: ROUTES.EXPERIENCE,
            lazy: async () => {
              const { ExperiencePage } = await import('@/pages/ExperiencePage')
              return { Component: ExperiencePage }
            },
          },
          {
            path: ROUTES.STACK,
            lazy: async () => {
              const { StackPage } = await import('@/pages/StackPage')
              return { Component: StackPage }
            },
          },
          {
            path: ROUTES.ABOUT,
            lazy: async () => {
              const { AboutPage } = await import('@/pages/AboutPage')
              return { Component: AboutPage }
            },
          },
          {
            path: ROUTES.CONTACT,
            lazy: async () => {
              const { ContactPage } = await import('@/pages/ContactPage')
              return { Component: ContactPage }
            },
          },
        ],
      },
      {
        path: '*',
        lazy: async () => {
          const { NotFoundPage } = await import('@/pages/NotFoundPage')
          return { Component: NotFoundPage }
        },
      },
    ],
  },
])
