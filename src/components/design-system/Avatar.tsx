import { useState, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const avatarSizes: Record<AvatarSize, string> = {
  xs: 'size-[var(--space-24)] text-[length:var(--font-size-overline)]',
  sm: 'size-[var(--space-32)] text-[length:var(--font-size-caption)]',
  md: 'size-[var(--space-40)] text-[length:var(--font-size-body-sm)]',
  lg: 'size-[var(--space-48)] text-[length:var(--font-size-body)]',
  xl: 'size-[var(--space-64)] text-[length:var(--font-size-body-lg)]',
}

export interface AvatarProps extends ComponentPropsWithoutRef<'span'> {
  src?: string
  alt?: string
  fallback: string
  size?: AvatarSize
  status?: 'online' | 'away' | 'busy' | 'offline'
}

const statusColors = {
  online: 'bg-success',
  away: 'bg-warning',
  busy: 'bg-danger',
  offline: 'bg-text-muted',
} as const

export function Avatar({
  src,
  alt = '',
  fallback,
  size = 'md',
  status,
  className,
  ...props
}: AvatarProps) {
  const [hasError, setHasError] = useState(false)

  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface-tertiary font-semibold text-text-secondary shadow-soft',
        avatarSizes[size],
        className,
      )}
      {...props}
    >
      {src && !hasError ? (
        <img
          className="size-full rounded-[inherit] object-cover"
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
        />
      ) : (
        <span role="img" aria-label={alt || fallback}>
          {fallback.slice(0, 2).toUpperCase()}
        </span>
      )}
      {status && (
        <span
          className={cn(
            'absolute right-0 bottom-0 size-[22%] min-h-[6px] min-w-[6px] rounded-full ring-2 ring-surface',
            statusColors[status],
          )}
          aria-label={status}
          role="status"
        />
      )}
    </span>
  )
}
