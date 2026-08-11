import type { ChapterId } from '@/i18n'
import { ROUTES } from '@/config/routes.config'

export type SystemChapterMeta = {
  id: ChapterId
  number: string
  visual: string
  path: string
}

export const SYSTEM_CHAPTERS: readonly SystemChapterMeta[] = [
  { id: 'projects', number: '01', visual: 'modules', path: ROUTES.PROJECTS },
  {
    id: 'experience',
    number: '02',
    visual: 'timeline',
    path: ROUTES.EXPERIENCE,
  },
  { id: 'stack', number: '03', visual: 'layers', path: ROUTES.STACK },
  { id: 'about', number: '04', visual: 'signal', path: ROUTES.ABOUT },
  { id: 'contact', number: '05', visual: 'transmit', path: ROUTES.CONTACT },
] as const
