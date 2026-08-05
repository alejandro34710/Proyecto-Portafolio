import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'

type SectionProps = ComponentPropsWithoutRef<'section'>

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'py-[var(--space-64)] sm:py-[var(--space-80)] lg:py-[var(--space-96)]',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}
