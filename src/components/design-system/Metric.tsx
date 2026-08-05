import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/utils/cn'

export type MetricTrend = 'positive' | 'negative' | 'neutral'

const trendStyles: Record<MetricTrend, string> = {
  positive: 'bg-success-subtle text-[var(--ds-success-text)]',
  negative: 'bg-danger-subtle text-[var(--ds-danger-text)]',
  neutral: 'bg-surface-tertiary text-text-secondary',
}

export interface MetricProps extends ComponentPropsWithoutRef<'div'> {
  label: ReactNode
  value: ReactNode
  trend?: ReactNode
  trendTone?: MetricTrend
  helper?: ReactNode
}

export function Metric({
  label,
  value,
  trend,
  trendTone = 'neutral',
  helper,
  className,
  ...props
}: MetricProps) {
  return (
    <div className={cn('grid gap-[var(--space-8)]', className)} {...props}>
      <p className="type-caption text-text-tertiary">{label}</p>
      <div className="flex flex-wrap items-end gap-[var(--space-8)]">
        <p className="font-display text-[length:var(--font-size-heading-3)] leading-none font-semibold tracking-[var(--tracking-tight)] text-text-primary">
          {value}
        </p>
        {trend && (
          <span
            className={cn(
              'inline-flex min-h-[var(--space-20)] items-center rounded-full px-[var(--space-8)] text-[length:var(--font-size-caption)] font-medium',
              trendStyles[trendTone],
            )}
          >
            {trend}
          </span>
        )}
      </div>
      {helper && <p className="type-caption text-text-muted">{helper}</p>}
    </div>
  )
}
