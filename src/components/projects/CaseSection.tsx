import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type CaseSectionProps = {
  index: string
  label?: string
  title?: string
  layout?: '30-70' | '40-60' | 'full'
  id?: string
  children: ReactNode
  className?: string
}

export function CaseSection({
  index,
  label,
  title,
  layout = '30-70',
  id,
  children,
  className,
}: CaseSectionProps) {
  const hasSidebar = layout !== 'full' && (label || title)

  return (
    <section
      id={id}
      className={cn('case-section', `case-section--${layout}`, className)}
    >
      {hasSidebar ? (
        <div className="case-section__layout">
          <div className="case-section__aside">
            <span className="case-section__index">{index}</span>
            {label && <span className="case-section__label">{label}</span>}
            {title &&
              title.split('\n').map((line) => (
                <h2 key={line} className="case-section__title">
                  {line}
                </h2>
              ))}
          </div>
          <div className="case-section__content">{children}</div>
        </div>
      ) : (
        <div className="case-section__content case-section__content--full">
          {children}
        </div>
      )}
    </section>
  )
}
