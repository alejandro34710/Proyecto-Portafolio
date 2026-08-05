import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/config/routes.config'
import { RootLayout } from '@/layouts/RootLayout'
import { MainLayout } from '@/layouts/MainLayout'
import { AboutPage } from '@/pages/AboutPage'
import { ArchitecturePage } from '@/pages/ArchitecturePage'
import { BlogPage } from '@/pages/BlogPage'
import { ContactPage } from '@/pages/ContactPage'
import { ExperiencePage } from '@/pages/ExperiencePage'
import { HomePage } from '@/pages/HomePage'
import { LabPage } from '@/pages/LabPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { SkillsPage } from '@/pages/SkillsPage'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: ROUTES.HOME, element: <HomePage /> },
          { path: ROUTES.ABOUT, element: <AboutPage /> },
          { path: ROUTES.PROJECTS, element: <ProjectsPage /> },
          { path: ROUTES.PROJECT_DETAIL, element: <ProjectDetailPage /> },
          { path: ROUTES.EXPERIENCE, element: <ExperiencePage /> },
          { path: ROUTES.SKILLS, element: <SkillsPage /> },
          { path: ROUTES.ARCHITECTURE, element: <ArchitecturePage /> },
          { path: ROUTES.LAB, element: <LabPage /> },
          { path: ROUTES.BLOG, element: <BlogPage /> },
          { path: ROUTES.CONTACT, element: <ContactPage /> },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
