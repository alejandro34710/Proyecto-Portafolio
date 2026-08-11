import { useReducedMotion } from 'motion/react'
import { useLocale } from '@/hooks/useLocale'
import { cn } from '@/utils/cn'

export type ProjectMediaProps = {
  title: string
  cover?: string | null
  video?: string | null
  poster?: string | null
  variant?: 'row' | 'hero'
  className?: string
}

export function ProjectMedia({
  title,
  cover,
  video,
  poster,
  variant = 'row',
  className,
}: ProjectMediaProps) {
  const reduceMotion = useReducedMotion()
  const { t } = useLocale()
  const staticImage = poster ?? cover ?? null
  const canAutoplay = Boolean(video) && !reduceMotion

  if (canAutoplay) {
    return (
      <div
        className={cn(
          'project-media',
          variant === 'hero' && 'project-media--hero',
          className,
        )}
      >
        <video
          className="project-media__asset"
          src={video!}
          poster={staticImage ?? undefined}
          autoPlay
          muted
          loop
          playsInline
          aria-label={title}
        />
      </div>
    )
  }

  if (staticImage) {
    return (
      <div
        className={cn(
          'project-media',
          variant === 'hero' && 'project-media--hero',
          className,
        )}
      >
        <img className="project-media__asset" src={staticImage} alt="" />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'project-media project-media--placeholder',
        variant === 'hero' && 'project-media--hero',
        className,
      )}
      aria-hidden="true"
    >
      <div className="project-media__grid" />
      <div className="project-media__concept">
        <div className="project-media__concept-bar">
          <span>
            <i />
            <i />
            <i />
          </span>
          <small>{title} / SYSTEM VIEW</small>
          <small>PRIVATE</small>
        </div>
        <div className="project-media__concept-body">
          <aside>
            <strong>{title.slice(0, 1)}</strong>
            <i className="is-active" />
            <i />
            <i />
            <i />
          </aside>
          <div className="project-media__concept-main">
            <div className="project-media__concept-heading">
              <span>OPERATIONS OVERVIEW</span>
              <i />
            </div>
            <div className="project-media__concept-chart">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="project-media__concept-cards">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="project-media__concept-flow">
            <span>FLOW</span>
            <i />
            <i />
            <i />
            <small>UI → API → DATA</small>
          </div>
        </div>
      </div>
      <div className="project-media__placeholder-meta">
        <span>{t.projectDetail.mediaPreview}</span>
        <span>{t.projectDetail.mediaPending}</span>
        <strong>{title}</strong>
      </div>
    </div>
  )
}
