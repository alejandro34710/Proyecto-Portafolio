import type { ChapterId } from '@/i18n'

export type SystemChapterMeta = {
  id: ChapterId
  number: string
  visual: string
}

export const SYSTEM_CHAPTERS: readonly SystemChapterMeta[] = [
  { id: 'philosophy', number: '01', visual: 'signal' },
  { id: 'experience', number: '02', visual: 'timeline' },
  { id: 'projects', number: '03', visual: 'modules' },
  { id: 'architecture', number: '04', visual: 'layers' },
  { id: 'ai', number: '05', visual: 'neural' },
  { id: 'lab', number: '06', visual: 'prototype' },
  { id: 'journal', number: '07', visual: 'notes' },
  { id: 'contact', number: '08', visual: 'transmit' },
] as const
