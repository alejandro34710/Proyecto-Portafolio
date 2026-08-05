import { cloneElement, useId, type ReactElement, type ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface TooltipProps {
  children: ReactElement<{ 'aria-describedby'?: string }>
  content: ReactNode
  position?: 'top' | 'right' | 'bottom' | 'left'
  className?: string
}

const positions = {
  top: 'bottom-[calc(100%+var(--space-8))] left-1/2 -translate-x-1/2 translate-y-1 group-hover:translate-y-0 group-focus-within:translate-y-0',
  right:
    'left-[calc(100%+var(--space-8))] top-1/2 -translate-y-1/2 -translate-x-1 group-hover:translate-x-0 group-focus-within:translate-x-0',
  bottom:
    'top-[calc(100%+var(--space-8))] left-1/2 -translate-x-1/2 -translate-y-1 group-hover:translate-y-0 group-focus-within:translate-y-0',
  left: 'right-[calc(100%+var(--space-8))] top-1/2 -translate-y-1/2 translate-x-1 group-hover:translate-x-0 group-focus-within:translate-x-0',
} as const

export function Tooltip({
  children,
  content,
  position = 'top',
  className,
}: TooltipProps) {
  const id = useId()
  const describedBy = [children.props['aria-describedby'], id]
    .filter(Boolean)
    .join(' ')

  return (
    <span className="group relative inline-flex">
      {cloneElement(children, { 'aria-describedby': describedBy })}
      <span
        id={id}
        role="tooltip"
        className={cn(
          'pointer-events-none absolute z-[var(--z-tooltip)] w-max max-w-56 rounded-sm border border-border-subtle bg-surface-inverse px-[var(--space-8)] py-[var(--space-4)] text-[length:var(--font-size-caption)] font-medium text-text-inverse opacity-0 shadow-floating transition-[opacity,transform] duration-[var(--duration-fast)] ease-[var(--ease-out)] group-hover:opacity-100 group-focus-within:opacity-100',
          positions[position],
          className,
        )}
      >
        {content}
      </span>
    </span>
  )
}
