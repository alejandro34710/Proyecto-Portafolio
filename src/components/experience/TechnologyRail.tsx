import { experienceTechRail } from '@/data/experience'
import { useLocale } from '@/hooks/useLocale'

export function TechnologyRail() {
  const { t } = useLocale()
  const sequence = [...experienceTechRail, ...experienceTechRail]

  return (
    <section
      className="experience-rail"
      aria-label={t.experience.techRailLabel}
    >
      <div className="experience-rail__viewport">
        <ul className="experience-rail__track">
          {sequence.map((tech, index) => (
            <li
              className="experience-rail__item"
              key={`${tech.name}-${index}`}
              aria-hidden={index >= experienceTechRail.length || undefined}
            >
              {tech.slug && (
                <img
                  className="experience-rail__icon"
                  src={`https://cdn.simpleicons.org/${tech.slug}`}
                  alt=""
                  width={18}
                  height={18}
                  loading="lazy"
                  decoding="async"
                />
              )}
              <span>{tech.name}</span>
              <span className="experience-rail__sep" aria-hidden="true">
                +
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
