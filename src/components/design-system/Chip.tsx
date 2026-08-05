import type { LucideIcon } from 'lucide-react'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'
import { Icon } from './Icon'

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
  icon?: LucideIcon
}

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  (
    { selected = false, icon, className, children, type = 'button', ...props },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex h-[var(--size-control-sm)] items-center gap-[var(--space-8)] rounded-full border px-[var(--space-12)] text-[length:var(--font-size-body-sm)] font-medium whitespace-nowrap transition-interface disabled:pointer-events-none disabled:opacity-45',
        selected
          ? 'border-border-accent bg-primary-subtle text-text-accent shadow-soft'
          : 'border-border-subtle bg-surface text-text-secondary hover:border-border hover:bg-hover hover:text-text-primary',
        className,
      )}
      aria-pressed={selected}
      {...props}
    >
      {icon && <Icon icon={icon} size="sm" />}
      {children}
    </button>
  ),
)

Chip.displayName = 'Chip'
