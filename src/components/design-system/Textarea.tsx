import {
  forwardRef,
  useId,
  type ReactNode,
  type TextareaHTMLAttributes,
} from 'react'
import { cn } from '@/utils/cn'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode
  hint?: ReactNode
  error?: ReactNode
  containerClassName?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      hint,
      error,
      containerClassName,
      className,
      id: providedId,
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
        <textarea
          ref={ref}
          id={id}
          required={required}
          className={cn(
            'min-h-[var(--space-128)] w-full resize-y rounded-md border border-border bg-surface px-[var(--space-12)] py-[var(--space-12)] text-[length:var(--font-size-body-sm)] text-text-primary shadow-soft transition-interface placeholder:text-text-muted hover:border-border-strong focus:border-border-accent focus:outline-none disabled:cursor-not-allowed disabled:bg-[var(--ds-interaction-disabled)] disabled:text-text-disabled',
            error &&
              'border-border-danger focus:border-border-danger focus:shadow-[0_0_0_3px_color-mix(in_oklch,var(--ds-danger)_24%,transparent)]',
            className,
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy || undefined}
          {...props}
        />
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

Textarea.displayName = 'Textarea'
