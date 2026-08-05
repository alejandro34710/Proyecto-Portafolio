import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'

export type PillTone = 'neutral' | 'success' | 'warning' | 'danger' | 'info'

const pillTones: Record<PillTone, string> = {
  neutral: 'bg-text-muted',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  info: 'bg-info',
}

export interface PillProps extends ComponentPropsWithoutRef<'span'> {
  tone?: PillTone
  showIndicator?: boolean
}

export function Pill({
  tone = 'neutral',
  showIndicator = true,
  className,
  children,
  ...props
}: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex min-h-[var(--space-24)] items-center gap-[var(--space-8)] rounded-full border border-border-subtle bg-surface px-[var(--space-12)] text-[length:var(--font-size-caption)] font-medium text-text-secondary shadow-soft',
        className,
      )}
      {...props}
    >
      {showIndicator && (
        <span
          className={cn('size-[6px] rounded-full', pillTones[tone])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}
