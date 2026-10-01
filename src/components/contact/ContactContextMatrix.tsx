import { Layers, Workflow, ShieldCheck } from 'lucide-react'
import { useLocale } from '@/hooks/useLocale'

export function ContactContextMatrix() {
  const { t } = useLocale()

  const cards = [
    {
      key: 'discipline',
      icon: Layers,
      tag: t.contact.contextCards.discipline.tag,
      title: t.contact.contextCards.discipline.title,
      desc: t.contact.contextCards.discipline.desc,
    },
    {
      key: 'collaboration',
      icon: Workflow,
      tag: t.contact.contextCards.collaboration.tag,
      title: t.contact.contextCards.collaboration.title,
      desc: t.contact.contextCards.collaboration.desc,
    },
    {
      key: 'stackDelivery',
      icon: ShieldCheck,
      tag: t.contact.contextCards.stackDelivery.tag,
      title: t.contact.contextCards.stackDelivery.title,
      desc: t.contact.contextCards.stackDelivery.desc,
    },
  ]

  return (
    <section
      className="contact-context-matrix"
      aria-label="Professional collaboration framework"
    >
      <div className="contact-context-matrix__grid">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <div key={card.key} className="contact-context-card">
              <div className="contact-context-card__header">
                <span className="contact-context-card__icon" aria-hidden="true">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <span className="contact-context-card__tag">{card.tag}</span>
              </div>
              <h3 className="contact-context-card__title">{card.title}</h3>
              <p className="contact-context-card__desc">{card.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
