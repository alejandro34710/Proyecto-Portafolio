import { BrainCircuit, Braces, CloudCog, Database, Network } from 'lucide-react'
import { Seo } from '@/components/common/Seo'
import { stackGroups } from '@/data/stack'
import { getLocalized } from '@/data/projects'
import { useLocale } from '@/hooks/useLocale'

export function StackPage() {
  const { t, locale } = useLocale()

  return (
    <div className="page-shell">
      <Seo title={t.header.nav.stack} description={t.stackPage.lede} />

      <header className="stack-page__hero">
        <div>
          <p className="page-eyebrow">{t.stackPage.eyebrow}</p>
          <h1 className="page-title">
            {t.stackPage.titleLine1}
            <span>{t.stackPage.titleLine2}</span>
          </h1>
          <p className="page-lede">{t.stackPage.lede}</p>
        </div>
        <div className="stack-page__map" aria-hidden="true">
          <span className="stack-page__map-ring" />
          <span className="stack-page__map-ring" />
          <div className="stack-page__map-core">
            <Network size={24} strokeWidth={1.2} />
            <small>SYSTEM</small>
          </div>
          <div className="stack-page__map-node is-interface">
            <Braces size={14} /> <span>INTERFACE</span>
          </div>
          <div className="stack-page__map-node is-services">
            <Network size={14} /> <span>SERVICES</span>
          </div>
          <div className="stack-page__map-node is-data">
            <Database size={14} /> <span>DATA</span>
          </div>
          <div className="stack-page__map-node is-cloud">
            <CloudCog size={14} /> <span>CLOUD</span>
          </div>
          <div className="stack-page__map-node is-ai">
            <BrainCircuit size={14} /> <span>AI</span>
          </div>
          <span className="stack-page__map-status">05 / 05 CONNECTED</span>
        </div>
      </header>

      <hr className="page-rule" />

      <div className="stack-groups">
        {stackGroups.map((group) => (
          <section key={group.id} className="stack-group">
            <h2 className="stack-group__label">
              {getLocalized(group.label, locale)}
            </h2>
            <ul className="stack-group__items">
              {group.items.map((item) => (
                <li key={item.name}>
                  {item.name}
                  {item.note && (
                    <small>{getLocalized(item.note, locale)}</small>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
