import { TechIcon } from '@/components/common/TechIcon'
import { techMarqueeItems } from '@/data/techMarquee'
import { useLocale } from '@/hooks/useLocale'

export function TechMarquee() {
  const { locale } = useLocale()
  const label = locale === 'es' ? 'Tecnologías del stack' : 'Stack technologies'
  const sequence = [...techMarqueeItems, ...techMarqueeItems]

  return (
    <section className="tech-marquee" aria-label={label}>
      <div
        className="tech-marquee__fade tech-marquee__fade--left"
        aria-hidden="true"
      />
      <div
        className="tech-marquee__fade tech-marquee__fade--right"
        aria-hidden="true"
      />

      <div className="tech-marquee__viewport">
        <ul className="tech-marquee__track">
          {sequence.map((tech, index) => (
            <li
              className="tech-marquee__item"
              key={`${tech.slug}-${index}`}
              aria-hidden={index >= techMarqueeItems.length || undefined}
            >
              <TechIcon
                slug={tech.slug}
                size={20}
                className="tech-marquee__icon"
                aria-hidden="true"
              />
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
