import { BrainCircuit, Braces, CloudCog, Database, Network } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useState } from 'react'
import { stackDomains } from '@/data/stack'
import { getLocalized } from '@/data/projects'
import { useLocale } from '@/hooks/useLocale'
import type { StackDomain, StackDomainId } from '@/data/types'

const domainIcons: Record<StackDomainId, LucideIcon> = {
  interface: Braces,
  services: Network,
  data: Database,
  cloud: CloudCog,
  ai: BrainCircuit,
}

export function StackSystemVisual() {
  const { locale } = useLocale()
  const [activeId, setActiveId] = useState<StackDomainId | null>(null)
  const active = stackDomains.find((domain) => domain.id === activeId) ?? null

  function select(domain: StackDomain) {
    setActiveId((current) => (current === domain.id ? null : domain.id))
  }

  return (
    <div
      className={`stack-page__map${activeId ? ' has-active' : ''}`}
      aria-label="SYSTEM"
    >
      <span className="stack-page__map-ring" aria-hidden="true" />
      <span className="stack-page__map-ring" aria-hidden="true" />
      <div className="stack-page__map-core">
        <Network size={24} strokeWidth={1.2} />
        <small>SYSTEM</small>
      </div>

      {stackDomains.map((domain) => {
        const Icon = domainIcons[domain.id]
        const isActive = activeId === domain.id

        return (
          <button
            type="button"
            key={domain.id}
            className={`stack-page__map-node ${domain.nodeClass}${isActive ? ' is-active' : ''}`}
            onMouseEnter={() => setActiveId(domain.id)}
            onMouseLeave={() => setActiveId(null)}
            onFocus={() => setActiveId(domain.id)}
            onBlur={() => setActiveId(null)}
            onClick={() => select(domain)}
            aria-pressed={isActive}
          >
            <Icon size={14} strokeWidth={1.5} />
            <span>{domain.label}</span>
          </button>
        )
      })}

      <p className="stack-page__map-hint">
        {active ? (
          <>
            <strong>{active.label}</strong>
            {getLocalized(active.hint, locale)}
          </>
        ) : (
          <span>05 / 05 CONNECTED</span>
        )}
      </p>
    </div>
  )
}
