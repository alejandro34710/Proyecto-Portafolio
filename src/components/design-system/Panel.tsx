import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface PanelProps extends Omit<
  ComponentPropsWithoutRef<'section'>,
  'title'
> {
  title?: ReactNode
  description?: ReactNode
  action?: ReactNode
  footer?: ReactNode
}

export function Panel({
  title,
  description,
  action,
  footer,
  className,
  children,
  ...props
}: PanelProps) {
  const hasHeader = title || description || action

  return (
    <section
      className={cn(
        'overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-soft',
        className,
      )}
      {...props}
    >
      {hasHeader && (
        <header className="flex items-start justify-between gap-[var(--space-20)] border-b border-border-subtle px-[var(--space-24)] py-[var(--space-20)]">
          <div className="grid gap-[var(--space-4)]">
            {title && (
              <h3 className="font-display text-[length:var(--font-size-body)] font-semibold tracking-[var(--tracking-snug)] text-text-primary">
                {title}
              </h3>
            )}
            {description && (
              <p className="type-body-sm text-text-secondary">{description}</p>
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </header>
      )}
      <div className="p-[var(--space-24)]">{children}</div>
      {footer && (
        <footer className="border-t border-border-subtle bg-surface-secondary px-[var(--space-24)] py-[var(--space-16)]">
          {footer}
        </footer>
      )}
    </section>
  )
}
