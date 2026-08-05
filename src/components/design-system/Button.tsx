import type { LucideIcon } from 'lucide-react'
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { Icon } from './Icon'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'outline'
  | 'danger'
  | 'success'
  | 'link'
  | 'icon'

export type ButtonSize = 'sm' | 'md' | 'lg'

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    'border-transparent bg-primary text-text-on-color shadow-soft hover:bg-primary-hover hover:shadow-medium active:bg-primary-active',
  secondary:
    'border-border-subtle bg-surface-tertiary text-text-primary shadow-soft hover:border-border hover:bg-hover active:bg-selected',
  ghost:
    'border-transparent bg-transparent text-text-secondary hover:bg-hover hover:text-text-primary active:bg-selected',
  outline:
    'border-border bg-surface text-text-primary hover:border-border-strong hover:bg-hover active:bg-selected',
  danger:
    'border-transparent bg-danger text-text-on-color shadow-soft hover:bg-danger-hover hover:shadow-medium',
  success:
    'border-transparent bg-success text-text-on-color shadow-soft hover:brightness-95 hover:shadow-medium',
  link: 'h-auto border-transparent bg-transparent px-0 text-text-accent underline-offset-4 shadow-none hover:underline',
  icon: 'border-border-subtle bg-surface text-text-secondary shadow-soft hover:border-border hover:bg-hover hover:text-text-primary',
}

const buttonSizes: Record<ButtonSize, string> = {
  sm: 'h-[var(--size-control-sm)] gap-[var(--space-4)] px-[var(--space-12)] text-[length:var(--font-size-caption)] [&[data-icon-only=true]]:w-[var(--size-control-sm)] [&[data-icon-only=true]]:px-0',
  md: 'h-[var(--size-control-md)] px-[var(--space-16)] text-[length:var(--font-size-body-sm)] [&[data-icon-only=true]]:w-[var(--size-control-md)] [&[data-icon-only=true]]:px-0',
  lg: 'h-[var(--size-control-lg)] px-[var(--space-20)] text-[length:var(--font-size-body)] [&[data-icon-only=true]]:w-[var(--size-control-lg)] [&[data-icon-only=true]]:px-0',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  loadingLabel?: string
  leadingIcon?: LucideIcon
  trailingIcon?: LucideIcon
  children?: ReactNode
}

function getButtonClassName({
  variant = 'primary',
  size = 'md',
  className,
}: Pick<ButtonProps, 'variant' | 'size' | 'className'>) {
  return cn(
    'relative inline-flex shrink-0 select-none items-center justify-center gap-[var(--space-8)] whitespace-nowrap rounded-md border font-medium tracking-[-0.01em] transition-interface focus-visible:z-[var(--z-raised)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-45',
    buttonSizes[size],
    buttonVariants[variant],
    className,
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      loadingLabel = 'Loading',
      leadingIcon,
      trailingIcon,
      className,
      disabled,
      children,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const iconSize = size === 'lg' ? 'lg' : 'md'
    const iconOnly = variant === 'icon'

    return (
      <button
        ref={ref}
        type={type}
        className={getButtonClassName({ variant, size, className })}
        disabled={disabled || loading}
        data-loading={loading || undefined}
        data-icon-only={iconOnly || undefined}
        aria-busy={loading || undefined}
        {...props}
      >
        <span
          className={cn(
            'inline-flex items-center justify-center gap-[var(--space-8)]',
            loading && 'invisible',
          )}
        >
          {leadingIcon && <Icon icon={leadingIcon} size={iconSize} />}
          {children}
          {trailingIcon && <Icon icon={trailingIcon} size={iconSize} />}
        </span>
        {loading && (
          <span
            className="absolute inset-0 flex items-center justify-center gap-[3px]"
            role="status"
          >
            <span className="ds-loading-bar" />
            <span className="ds-loading-bar" />
            <span className="ds-loading-bar" />
            <span className="sr-only">{loadingLabel}</span>
          </span>
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'
