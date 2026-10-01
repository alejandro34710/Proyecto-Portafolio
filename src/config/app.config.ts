import { IDENTITY } from './identity.config'

export const APP_CONFIG = {
  name: `${IDENTITY.name} — ${IDENTITY.role.es}`,
  description:
    'Desarrollador Full Stack con formación en Ingeniería Multimedia. Construyo productos digitales completos entre frontend, backend, cloud e IA.',
  /** TODO: add the verified production origin before publishing. */
  baseUrl: '',
  defaultLocale: 'es',
} as const
