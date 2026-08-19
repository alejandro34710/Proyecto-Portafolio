import { Seo } from '@/components/common/Seo'
import {
  CareerEvolution,
  CareerTimeline,
  CurrentScope,
  ExperienceCTA,
  ExperienceEntry,
  ExperienceHero,
  ProfessionalPrinciples,
  TechnologyRail,
} from '@/components/experience'
import { getExperienceById } from '@/data/experience'
import { useLocale } from '@/hooks/useLocale'
import '@/styles/experience.css'

export function ExperiencePage() {
  const { t } = useLocale()
  const cun = getExperienceById('cun')
  const homecenter = getExperienceById('homecenter')

  if (!cun || !homecenter) {
    return null
  }

  return (
    <div className="page-shell experience-page">
      <Seo title={t.header.nav.experience} description={t.experience.lede} />

      <ExperienceHero />
      <CareerTimeline />
      <ExperienceEntry entry={cun} />
      <TechnologyRail />
      <ExperienceEntry entry={homecenter} />
      <CareerEvolution />
      <CurrentScope />
      <ProfessionalPrinciples />
      <ExperienceCTA />
    </div>
  )
}
