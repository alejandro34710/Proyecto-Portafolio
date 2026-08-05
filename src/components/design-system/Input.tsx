import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'
import { cn } from '@/utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode
  hint?: ReactNode
  error?: ReactNode
  leading?: ReactNode
  trailing?: ReactNode
  containerClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      leading,
      trailing,
      containerClassName,
      className,
      id: providedId,
      disabled,
      required,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId()
    const id = providedId ?? generatedId
    const hintId = hint ? `${id}-hint` : undefined
    const errorId = error ? `${id}-error` : undefined
    const describedBy = [ariaDescribedBy, hintId, errorId]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={cn('grid gap-[var(--space-8)]', containerClassName)}>
        {label && (
          <label
            htmlFor={id}
            className="type-body-sm font-medium text-text-primary"
          >
            {label}
            {required && (
              <span
                className="ml-[var(--space-4)] text-danger"
                aria-hidden="true"
              >
                *
              </span>
            )}
          </label>
        )}
        <div className="relative">
          {leading && (
            <span className="pointer-events-none absolute inset-y-0 left-[var(--space-12)] flex items-center text-text-muted">
              {leading}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            required={required}
            className={cn(
              'h-[var(--size-control-md)] w-full rounded-md border border-border bg-surface px-[var(--space-12)] text-[length:var(--font-size-body-sm)] text-text-primary shadow-soft transition-interface placeholder:text-text-muted hover:border-border-strong focus:border-border-accent focus:outline-none disabled:cursor-not-allowed disabled:bg-[var(--ds-interaction-disabled)] disabled:text-text-disabled',
              leading && 'pl-[var(--space-40)]',
              trailing && 'pr-[var(--space-40)]',
              error &&
                'border-border-danger focus:border-border-danger focus:shadow-[0_0_0_3px_color-mix(in_oklch,var(--ds-danger)_24%,transparent)]',
              className,
            )}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy || undefined}
            {...props}
          />
          {trailing && (
            <span className="absolute inset-y-0 right-[var(--space-12)] flex items-center text-text-muted">
              {trailing}
            </span>
          )}
        </div>
        {hint && !error && (
          <p id={hintId} className="type-caption text-text-tertiary">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} className="type-caption text-[var(--ds-danger-text)]">
            {error}
          </p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
