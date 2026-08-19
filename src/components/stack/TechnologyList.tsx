import type { StackFeaturedTech } from '@/data/types'
import { getLocalized } from '@/data/projects'
import { Stagger, StaggerItem } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'

type TechnologyListProps = {
  featured: readonly StackFeaturedTech[]
  tags: readonly string[]
  highlights?: readonly string[]
}

export function TechnologyList({
  featured,
  tags,
  highlights,
}: TechnologyListProps) {
  const { t, locale } = useLocale()

  return (
    <div className="stack-techs">
      <h3 className="stack-capability__label">
        {t.stackPage.coreTechnologies}
      </h3>
      <Stagger className="stack-techs__featured">
        {featured.map((tech) => (
          <StaggerItem key={tech.name} className="stack-techs__item">
            {tech.slug && (
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}`}
                alt=""
                width={18}
                height={18}
                loading="lazy"
                decoding="async"
              />
            )}
            <strong>{tech.name}</strong>
            <span>{getLocalized(tech.role, locale)}</span>
          </StaggerItem>
        ))}
      </Stagger>

      {highlights && highlights.length > 0 && (
        <ul className="stack-techs__highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {tags.length > 0 && (
        <ul className="stack-techs__tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
