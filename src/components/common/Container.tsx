import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'

type ContainerProps = ComponentPropsWithoutRef<'div'>

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-[var(--container-xl)] px-[var(--space-16)] sm:px-[var(--space-24)] lg:px-[var(--space-32)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
