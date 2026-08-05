import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface PageHeaderProps {
  title: ReactNode
  eyebrow?: ReactNode
  description?: ReactNode
  meta?: ReactNode
  actions?: ReactNode
  className?: string
}

export function PageHeader({
  title,
  eyebrow,
  description,
  meta,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        'grid gap-[var(--space-24)] border-b border-border-subtle py-[var(--space-48)] sm:py-[var(--space-64)]',
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-[var(--space-16)]">
        {eyebrow && <p className="type-overline text-text-accent">{eyebrow}</p>}
        {meta && <div className="type-caption text-text-tertiary">{meta}</div>}
      </div>
      <div className="flex flex-col items-start justify-between gap-[var(--space-24)] md:flex-row md:items-end">
        <div className="grid max-w-[var(--container-lg)] gap-[var(--space-16)]">
          <h1 className="type-display text-text-primary">{title}</h1>
          {description && (
            <p className="type-body-lg max-w-[var(--container-sm)] text-pretty text-text-secondary">
              {description}
            </p>
          )}
        </div>
        {actions && (
          <div className="flex shrink-0 flex-wrap gap-[var(--space-12)]">
            {actions}
          </div>
        )}
      </div>
    </header>
  )
}
