import type { ComponentPropsWithoutRef, CSSProperties } from 'react'
import { cn } from '@/utils/cn'

export interface SkeletonProps extends ComponentPropsWithoutRef<'div'> {
  variant?: 'text' | 'rectangle' | 'circle'
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  animated?: boolean
}

export function Skeleton({
  variant = 'rectangle',
  width,
  height,
  animated = true,
  className,
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        animated ? 'ds-skeleton' : 'bg-surface-tertiary',
        variant === 'circle' && 'aspect-square rounded-full',
        variant === 'rectangle' && 'rounded-md',
        variant === 'text' && 'h-[0.75em] rounded-xs',
        className,
      )}
      style={{ width, height, ...style }}
      aria-hidden="true"
      {...props}
    />
  )
}

export interface SkeletonTextProps extends ComponentPropsWithoutRef<'div'> {
  lines?: number
}

export function SkeletonText({
  lines = 3,
  className,
  ...props
}: SkeletonTextProps) {
  return (
    <div
      className={cn('grid gap-[var(--space-8)]', className)}
      aria-hidden="true"
      {...props}
    >
      {Array.from({ length: lines }, (_, index) => (
        <Skeleton
          key={index}
          variant="text"
          className={cn(index === lines - 1 && lines > 1 && 'w-[72%]')}
        />
      ))}
    </div>
  )
}

export function SkeletonCard({ className, ...props }: SkeletonTextProps) {
  return (
    <div
      className={cn(
        'grid gap-[var(--space-20)] rounded-xl border border-border-subtle bg-surface p-[var(--space-24)] shadow-soft',
        className,
      )}
      role="status"
      aria-label="Loading content"
      {...props}
    >
      <Skeleton className="aspect-[16/9] w-full" />
      <div className="grid gap-[var(--space-12)]">
        <Skeleton variant="text" className="h-[var(--space-16)] w-[48%]" />
        <SkeletonText lines={2} />
      </div>
    </div>
  )
}

export function SkeletonMetric({ className, ...props }: SkeletonTextProps) {
  return (
    <div
      className={cn(
        'grid gap-[var(--space-12)] rounded-lg border border-border-subtle bg-surface p-[var(--space-20)]',
        className,
      )}
      role="status"
      aria-label="Loading metric"
      {...props}
    >
      <Skeleton variant="text" className="w-[36%]" />
      <Skeleton className="h-[var(--space-32)] w-[62%]" />
      <Skeleton variant="text" className="w-[52%]" />
    </div>
  )
}
