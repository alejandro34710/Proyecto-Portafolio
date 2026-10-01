import { Seo } from '@/components/common/Seo'
import {
  AboutHero,
  AboutEvolutionFlow,
  AboutPrinciplesConsole,
  AboutIntersectionMatrix,
  AboutEducationCredentials,
  AboutClosingBridge,
} from '@/components/about'
import { useLocale } from '@/hooks/useLocale'
import '@/styles/about.css'

export function AboutPage() {
  const { t } = useLocale()

  return (
    <div className="about-page-shell">
      <Seo title={t.header.nav.about} description={t.about.body1} />

      <div className="about-page-content">
        {/* Momento 01: Identidad & Hero Scene con Visual de Arquitectura */}
        <AboutHero />

        {/* Momento 02: Trayectoria & Evolución (Ing. Multimedia → Full Stack) */}
        <AboutEvolutionFlow />

        {/* Momento 03: Criterio Técnico & Cómo Pienso (5 Principios Revisitados) */}
        <AboutPrinciplesConsole />

        {/* Momento 04: La Intersección (Diseño × Ingeniería × Producto) */}
        <AboutIntersectionMatrix />

        {/* Momento 05: Formación Académica & Especialización Continua */}
        <AboutEducationCredentials />

        {/* Cierre y Transición a Proyectos / Contacto */}
        <AboutClosingBridge />
      </div>
    </div>
  )
}
