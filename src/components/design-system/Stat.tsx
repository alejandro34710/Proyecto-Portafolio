import type { LucideIcon } from 'lucide-react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { Icon } from './Icon'

export interface StatProps extends ComponentPropsWithoutRef<'div'> {
  label: ReactNode
  value: ReactNode
  description?: ReactNode
  icon?: LucideIcon
  accent?: boolean
}

export function Stat({
  label,
  value,
  description,
  icon,
  accent = false,
  className,
  ...props
}: StatProps) {
  return (
    <div
      className={cn(
        'relative grid gap-[var(--space-16)] rounded-lg border border-border-subtle bg-surface p-[var(--space-20)] shadow-soft',
        accent &&
          'overflow-hidden before:absolute before:inset-y-[var(--space-16)] before:left-0 before:w-[2px] before:rounded-full before:bg-primary',
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between gap-[var(--space-12)]">
        <p className="type-caption text-text-tertiary">{label}</p>
        {icon && (
          <span className="flex size-[var(--space-32)] items-center justify-center rounded-sm bg-primary-subtle text-text-accent">
            <Icon icon={icon} size="md" />
          </span>
        )}
      </div>
      <p className="font-display text-[length:var(--font-size-heading-2)] leading-none font-semibold tracking-[var(--tracking-tight)] text-text-primary">
        {value}
      </p>
      {description && (
        <p className="type-body-sm text-pretty text-text-secondary">
          {description}
        </p>
      )}
    </div>
  )
}
