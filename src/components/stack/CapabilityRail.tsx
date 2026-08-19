type CapabilityRailProps = {
  items: readonly string[]
  label: string
}

export function CapabilityRail({ items, label }: CapabilityRailProps) {
  const sequence = [...items, ...items]

  return (
    <div className="stack-rail" aria-label={label}>
      <div className="stack-rail__viewport">
        <ul className="stack-rail__track">
          {sequence.map((item, index) => (
            <li
              key={`${item}-${index}`}
              aria-hidden={index >= items.length || undefined}
            >
              <span>{item}</span>
              <em aria-hidden="true">/</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
