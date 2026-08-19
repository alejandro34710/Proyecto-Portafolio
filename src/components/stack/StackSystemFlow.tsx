import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Network,
  User,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useState } from 'react'
import { stackSystemNodes } from '@/data/stack'
import type { StackSystemNodeId } from '@/data/types'

const nodeIcons: Record<StackSystemNodeId, LucideIcon> = {
  user: User,
  interface: Code2,
  api: Network,
  data: Database,
  cloud: Cloud,
  ai: BrainCircuit,
}

const related: Record<StackSystemNodeId, readonly StackSystemNodeId[]> = {
  user: ['interface'],
  interface: ['user', 'api', 'ai'],
  api: ['interface', 'data', 'cloud'],
  data: ['api', 'cloud'],
  cloud: ['api', 'data'],
  ai: ['interface', 'api'],
}

export function StackSystemFlow() {
  const [activeId, setActiveId] = useState<StackSystemNodeId | null>(null)
  const active = stackSystemNodes.find((node) => node.id === activeId)
  const lit = activeId ? new Set([activeId, ...related[activeId]]) : null

  return (
    <div className="stack-system">
      <div className="stack-system__ai">
        <SystemNode
          id="ai"
          activeId={activeId}
          lit={lit}
          onSelect={setActiveId}
        />
        <span
          className={`stack-system__vlink${lit?.has('ai') ? ' is-on' : ''}`}
        />
      </div>

      <ol className="stack-system__main">
        {(['user', 'interface', 'api', 'data'] as const).map((id, index) => (
          <li key={id}>
            {index > 0 && (
              <span
                className={`stack-system__hlink${
                  lit?.has(id) &&
                  lit.has(
                    (['user', 'interface', 'api', 'data'] as const)[index - 1],
                  )
                    ? ' is-on'
                    : ''
                }`}
              />
            )}
            <SystemNode
              id={id}
              activeId={activeId}
              lit={lit}
              onSelect={setActiveId}
            />
          </li>
        ))}
      </ol>

      <div className="stack-system__cloud">
        <span
          className={`stack-system__vlink${lit?.has('cloud') ? ' is-on' : ''}`}
        />
        <SystemNode
          id="cloud"
          activeId={activeId}
          lit={lit}
          onSelect={setActiveId}
        />
      </div>

      <p className="stack-system__caption">
        {active?.stack || 'USER → INTERFACE → API → DATA → CLOUD'}
      </p>
    </div>
  )
}

type SystemNodeProps = {
  id: StackSystemNodeId
  activeId: StackSystemNodeId | null
  lit: Set<StackSystemNodeId> | null
  onSelect: (id: StackSystemNodeId | null) => void
}

function SystemNode({ id, activeId, lit, onSelect }: SystemNodeProps) {
  const node = stackSystemNodes.find((item) => item.id === id)
  if (!node) return null
  const Icon = nodeIcons[id]
  const isActive = activeId === id
  const isLit = lit ? lit.has(id) : true

  return (
    <button
      type="button"
      className={`stack-system__node${isActive ? ' is-active' : ''}${isLit ? '' : ' is-dim'}`}
      onMouseEnter={() => onSelect(id)}
      onMouseLeave={() => onSelect(null)}
      onFocus={() => onSelect(id)}
      onBlur={() => onSelect(null)}
      onClick={() => onSelect(isActive ? null : id)}
      aria-pressed={isActive}
    >
      <Icon size={14} strokeWidth={1.4} />
      <strong>{node.label}</strong>
    </button>
  )
}
