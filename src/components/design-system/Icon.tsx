import type { LucideIcon } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'

export type IconSize = 'sm' | 'md' | 'lg' | 'xl'

const iconSizes: Record<IconSize, string> = {
  sm: 'size-[var(--size-icon-sm)]',
  md: 'size-[var(--size-icon-md)]',
  lg: 'size-[var(--size-icon-lg)]',
  xl: 'size-[var(--space-24)]',
}

export interface IconProps extends Omit<
  ComponentPropsWithoutRef<'svg'>,
  'children'
> {
  icon: LucideIcon
  size?: IconSize
  label?: string
  strokeWidth?: number
}

export function Icon({
  icon: Lucide,
  size = 'md',
  label,
  strokeWidth = 1.75,
  className,
  ...props
}: IconProps) {
  return (
    <Lucide
      className={cn('shrink-0', iconSizes[size], className)}
      strokeWidth={strokeWidth}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
      {...props}
    />
  )
}
