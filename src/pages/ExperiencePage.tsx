import { Seo } from '@/components/common/Seo'
import {
  CareerTransition,
  CunExperience,
  ExperienceCTA,
  ExperienceHero,
  ExperienceTrajectory,
  HomecenterExperience,
} from '@/components/experience'
import { useLocale } from '@/hooks/useLocale'
import '@/styles/experience.css'

export function ExperiencePage() {
  const { t } = useLocale()

  return (
    <div className="page-shell experience-page">
      <Seo title={t.header.nav.experience} description={t.experience.lede} />

      {/* 01 — Hero & Current Status */}
      <ExperienceHero />

      {/* 02 — Progression & Focus Trajectory */}
      <ExperienceTrajectory />

      {/* 03 — CUN (Primary Full Stack Experience · 70-75% Weight) */}
      <CunExperience />

      {/* 04 — Editorial Transition (Operations/Data → Full Stack Software) */}
      <CareerTransition />

      {/* 05 — Homecenter Sodimac (Operational Foundation · 25-30% Weight) */}
      <HomecenterExperience />

      {/* 06 — Closing & Project Proof Bridge */}
      <ExperienceCTA />
    </div>
  )
}
