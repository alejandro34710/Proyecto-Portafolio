import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'

export type BadgeTone =
  'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'outline'

const badgeTones: Record<BadgeTone, string> = {
  neutral: 'border-border-subtle bg-surface-tertiary text-text-secondary',
  primary: 'border-border-accent/20 bg-primary-subtle text-text-accent',
  success: 'border-success/20 bg-success-subtle text-[var(--ds-success-text)]',
  warning: 'border-warning/20 bg-warning-subtle text-[var(--ds-warning-text)]',
  danger: 'border-danger/20 bg-danger-subtle text-[var(--ds-danger-text)]',
  info: 'border-info/20 bg-info-subtle text-[var(--ds-info-text)]',
  outline: 'border-border bg-transparent text-text-secondary',
}

export interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  tone?: BadgeTone
  size?: 'sm' | 'md'
  dot?: boolean
}

export function Badge({
  tone = 'neutral',
  size = 'md',
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex w-fit shrink-0 items-center rounded-full border font-medium whitespace-nowrap',
        size === 'sm'
          ? 'h-[var(--space-20)] gap-[var(--space-4)] px-[var(--space-8)] text-[length:var(--font-size-overline)]'
          : 'h-[var(--space-24)] gap-[var(--space-8)] px-[var(--space-12)] text-[length:var(--font-size-caption)]',
        badgeTones[tone],
        className,
      )}
      {...props}
    >
      {dot && (
        <span
          className="size-[var(--space-4)] rounded-full bg-current"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}
