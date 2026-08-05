import { X } from 'lucide-react'
import type { ComponentPropsWithoutRef, MouseEvent } from 'react'
import { cn } from '@/utils/cn'
import { Icon } from './Icon'

export interface TagProps extends ComponentPropsWithoutRef<'span'> {
  onRemove?: () => void
  removeLabel?: string
}

export function Tag({
  onRemove,
  removeLabel = 'Remove',
  className,
  children,
  ...props
}: TagProps) {
  const handleRemove = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    onRemove?.()
  }

  return (
    <span
      className={cn(
        'inline-flex h-[var(--space-24)] items-center gap-[var(--space-4)] rounded-sm border border-border-subtle bg-surface-tertiary px-[var(--space-8)] text-[length:var(--font-size-caption)] font-medium text-text-secondary',
        className,
      )}
      {...props}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          className="-mr-[var(--space-4)] inline-flex size-[var(--space-20)] items-center justify-center rounded-xs text-text-muted transition-interface hover:bg-hover hover:text-text-primary"
          onClick={handleRemove}
          aria-label={removeLabel}
        >
          <Icon icon={X} size="sm" />
        </button>
      )}
    </span>
  )
}
