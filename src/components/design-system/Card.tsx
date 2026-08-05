import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/utils/cn'

export type CardVariant =
  | 'default'
  | 'elevated'
  | 'glass'
  | 'interactive'
  | 'outline'
  | 'feature'
  | 'project'
  | 'panel'

const cardVariants: Record<CardVariant, string> = {
  default: 'border-border-subtle bg-surface shadow-soft',
  elevated: 'border-border-subtle bg-surface-elevated shadow-medium',
  glass: 'surface-glass',
  interactive:
    'interactive-lift cursor-pointer border-border-subtle bg-surface shadow-soft hover:border-border',
  outline: 'border-border-strong bg-transparent shadow-none',
  feature:
    'overflow-hidden border-border-subtle bg-[image:var(--gradient-surface)] shadow-soft before:absolute before:inset-x-[var(--space-24)] before:top-0 before:h-px before:bg-[image:var(--gradient-brand)] before:opacity-70',
  project:
    'group overflow-hidden border-border-subtle bg-surface shadow-soft transition-interface hover:border-border-strong hover:shadow-large hover:-translate-y-1',
  panel: 'border-border-subtle bg-surface-secondary shadow-soft',
}

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  variant?: CardVariant
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const cardPadding = {
  none: '',
  sm: 'p-[var(--space-16)]',
  md: 'p-[var(--space-24)]',
  lg: 'p-[var(--space-32)]',
} as const

export function Card({
  variant = 'default',
  padding = 'md',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'relative rounded-xl border',
        cardVariants[variant],
        cardPadding[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function GlassCard(props: Omit<CardProps, 'variant'>) {
  return <Card variant="glass" {...props} />
}

export function CardHeader({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn(
        'mb-[var(--space-20)] flex items-start justify-between gap-[var(--space-16)]',
        className,
      )}
      {...props}
    />
  )
}

export interface CardTitleProps extends ComponentPropsWithoutRef<'h3'> {
  as?: ElementType
}

export function CardTitle({
  as: Component = 'h3',
  className,
  ...props
}: CardTitleProps) {
  return (
    <Component
      className={cn('type-heading-4 text-text-primary', className)}
      {...props}
    />
  )
}

export function CardDescription({
  className,
  ...props
}: ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={cn('type-body-sm text-pretty text-text-secondary', className)}
      {...props}
    />
  )
}

export function CardContent({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('text-text-secondary', className)} {...props} />
}

export interface CardFooterProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      className={cn(
        'mt-[var(--space-24)] flex items-center gap-[var(--space-12)] border-t border-border-subtle pt-[var(--space-20)]',
        className,
      )}
      {...props}
    />
  )
}
