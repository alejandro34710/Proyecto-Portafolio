import type { LucideIcon } from 'lucide-react'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'
import { Button, type ButtonSize, type ButtonVariant } from './Button'

export interface IconButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> {
  icon: LucideIcon
  label: string
  size?: ButtonSize
  variant?: Exclude<ButtonVariant, 'link'>
  loading?: boolean
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      label,
      size = 'md',
      variant = 'icon',
      className,
      loading,
      ...props
    },
    ref,
  ) => (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      leadingIcon={icon}
      loading={loading}
      loadingLabel={label}
      className={cn('aspect-square rounded-full px-0', className)}
      aria-label={label}
      {...props}
    />
  ),
)

IconButton.displayName = 'IconButton'
