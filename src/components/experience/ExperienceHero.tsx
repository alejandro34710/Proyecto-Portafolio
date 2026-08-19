import { Reveal } from '@/components/design-system'
import { careerSnapshot } from '@/data/experience'
import { useLocale } from '@/hooks/useLocale'

export function ExperienceHero() {
  const { t } = useLocale()
  const snapshot = t.experience.snapshot

  return (
    <section className="experience-hero">
      <Reveal className="experience-hero__copy" preset="slideUp">
        <p className="page-eyebrow">{t.experience.eyebrow}</p>
        <h1 className="page-title experience-hero__title">
          {t.experience.titleLine1}
          <span>
            {t.experience.titleLine2}
            <br />
            {t.experience.titleLine3}
          </span>
        </h1>
        <p className="page-lede experience-hero__lede">{t.experience.lede}</p>
      </Reveal>

      <Reveal className="experience-snapshot" preset="slideLeft">
        <div className="experience-snapshot__frame">
          <span className="experience-mark" aria-hidden="true">
            ○
          </span>
          <span className="experience-snapshot__coords" aria-hidden="true">
            [ CAREER_01 ]
          </span>
          <p className="experience-snapshot__title">{snapshot.title}</p>

          <dl className="experience-snapshot__grid">
            <div>
              <dt>{snapshot.experiencesLabel}</dt>
              <dd>{careerSnapshot.experienceCount}</dd>
            </div>
            <div>
              <dt>{snapshot.startLabel}</dt>
              <dd>{careerSnapshot.startYear}</dd>
            </div>
            <div>
              <dt>{snapshot.roleLabel}</dt>
              <dd>{careerSnapshot.currentRole}</dd>
            </div>
            <div>
              <dt>{snapshot.baseLabel}</dt>
              <dd>{careerSnapshot.base}</dd>
            </div>
          </dl>

          <div className="experience-snapshot__focus">
            <span>{snapshot.currentFocus}</span>
            <strong>{careerSnapshot.focus.join(' · ')}</strong>
          </div>

          <p className="experience-snapshot__status">
            <span className="experience-snapshot__pulse" aria-hidden="true" />
            {snapshot.currentlyBuilding}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
