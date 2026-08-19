import { Stagger, StaggerItem } from '@/components/design-system'
import { useLocale } from '@/hooks/useLocale'

export function ProfessionalPrinciples() {
  const { t } = useLocale()
  const copy = t.experience.principles

  return (
    <section
      className="experience-principles"
      aria-labelledby="experience-principles-title"
    >
      <h2
        id="experience-principles-title"
        className="experience-section__title"
      >
        {copy.title}
      </h2>

      <Stagger className="experience-principles__grid">
        {copy.items.map((item) => (
          <StaggerItem key={item.index} className="experience-principles__item">
            <span className="experience-principles__index">{item.index}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
