import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface DividerProps extends ComponentPropsWithoutRef<'div'> {
  orientation?: 'horizontal' | 'vertical'
  label?: ReactNode
  decorative?: boolean
}

export function Divider({
  orientation = 'horizontal',
  label,
  decorative = true,
  className,
  ...props
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        className={cn(
          'h-full min-h-[var(--space-24)] w-px bg-border-subtle',
          className,
        )}
        role={decorative ? 'presentation' : 'separator'}
        aria-orientation="vertical"
        {...props}
      />
    )
  }

  return (
    <div
      className={cn(
        'flex w-full items-center gap-[var(--space-12)]',
        className,
      )}
      role={decorative ? 'presentation' : 'separator'}
      aria-orientation="horizontal"
      {...props}
    >
      <span className="h-px flex-1 bg-border-subtle" />
      {label && (
        <span className="type-overline shrink-0 text-text-muted">{label}</span>
      )}
      {label && <span className="h-px flex-1 bg-border-subtle" />}
    </div>
  )
}
