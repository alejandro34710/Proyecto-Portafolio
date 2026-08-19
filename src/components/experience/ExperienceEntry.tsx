import type { ExperienceEntry as ExperienceEntryData } from '@/data/types'
import { getLocalized } from '@/data/projects'
import { Reveal } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'
import { ResponsibilityList } from './ResponsibilityList'
import { ScopeMatrix } from './ScopeMatrix'

type ExperienceEntryProps = {
  entry: ExperienceEntryData
}

export function ExperienceEntry({ entry }: ExperienceEntryProps) {
  const { locale } = useLocale()
  const company = getLocalized(entry.company, locale)
  const role = getLocalized(entry.role, locale)
  const period = getLocalized(entry.period, locale)
  const description = getLocalized(entry.description, locale)
  const location = entry.location ? getLocalized(entry.location, locale) : null
  const roleSecondary = entry.roleSecondary
    ? getLocalized(entry.roleSecondary, locale)
    : null

  return (
    <article
      className={`experience-block experience-block--${entry.layout}`}
      id={entry.id}
    >
      <Reveal preset="slideUp">
        <header className="experience-block__header">
          <p className="experience-block__meta">
            <span>EXPERIENCE / {entry.index}</span>
            <span>{period}</span>
          </p>
          <span className="experience-block__mark" aria-hidden="true">
            [ CAREER_{entry.index} ]
          </span>
        </header>

        <h2 className="experience-block__company">{company}</h2>
        <p className="experience-block__role">{role}</p>
        {roleSecondary && (
          <p className="experience-block__role-secondary">{roleSecondary}</p>
        )}
        {location && <p className="experience-block__location">{location}</p>}
        {entry.current && (
          <p className="experience-block__status" aria-hidden="true">
            ROLE / FULL STACK · STATUS / ACTIVE
          </p>
        )}
        <p className="experience-block__body">{description}</p>
      </Reveal>

      {entry.layout === 'primary' && entry.scope && (
        <ScopeMatrix items={entry.scope} />
      )}
      {entry.layout === 'primary' && entry.responsibilities && (
        <ResponsibilityList items={entry.responsibilities} />
      )}

      {entry.layout === 'split' && entry.columns && (
        <div className="experience-split">
          {entry.columns.map((column) => (
            <section key={column.id} className="experience-split__col">
              <h3>{getLocalized(column.title, locale)}</h3>
              <ul>
                {column.items[locale].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      {entry.layout === 'split' && entry.technologies.length > 0 && (
        <ul className="experience-tools">
          {entry.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      )}
    </article>
  )
}
