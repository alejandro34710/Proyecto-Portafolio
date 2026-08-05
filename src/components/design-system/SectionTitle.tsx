import type { ElementType, ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface SectionTitleProps {
  title: ReactNode
  eyebrow?: ReactNode
  description?: ReactNode
  action?: ReactNode
  align?: 'left' | 'center'
  as?: ElementType
  className?: string
}

export function SectionTitle({
  title,
  eyebrow,
  description,
  action,
  align = 'left',
  as: Heading = 'h2',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'flex gap-[var(--space-24)]',
        align === 'center'
          ? 'mx-auto max-w-[var(--container-md)] flex-col items-center text-center'
          : 'items-end justify-between',
        className,
      )}
    >
      <div className="grid gap-[var(--space-12)]">
        {eyebrow && <p className="type-overline text-text-accent">{eyebrow}</p>}
        <Heading className="type-heading-2 text-text-primary">{title}</Heading>
        {description && (
          <p className="type-body-lg max-w-[var(--container-sm)] text-pretty text-text-secondary">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
