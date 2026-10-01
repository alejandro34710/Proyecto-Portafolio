import { Mail, FileDown, ArrowUpRight } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from './ContactIcons'
import { CONTACT_CONFIG } from '@/config/contact.config'
import { useLocale } from '@/hooks/useLocale'

export function ContactChannelsList() {
  const { t } = useLocale()

  const channelsData = [
    {
      id: 'email',
      number: '01',
      tag: t.contact.channels.email.tag,
      title: t.contact.channels.email.title,
      description: t.contact.channels.email.description,
      actionLabel: t.contact.channels.email.action,
      href: `mailto:${CONTACT_CONFIG.email}`,
      target: undefined,
      rel: undefined,
      download: undefined,
      icon: Mail,
      isPrimary: true,
      badge: t.contact.channels.email.badge,
    },
    {
      id: 'cv',
      number: '02',
      tag: t.contact.channels.cv.tag,
      title: t.contact.channels.cv.title,
      description: t.contact.channels.cv.description,
      actionLabel: t.contact.channels.cv.action,
      href: CONTACT_CONFIG.cvUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
      download: 'Alejandro-CV.pdf',
      icon: FileDown,
      isPrimary: false,
      badge: t.contact.channels.cv.badge,
    },
    {
      id: 'linkedin',
      number: '03',
      tag: t.contact.channels.linkedin.tag,
      title: t.contact.channels.linkedin.title,
      description: t.contact.channels.linkedin.description,
      actionLabel: t.contact.channels.linkedin.action,
      href: CONTACT_CONFIG.linkedin,
      target: '_blank',
      rel: 'noopener noreferrer',
      download: undefined,
      icon: LinkedinIcon,
      isPrimary: false,
      badge: t.contact.channels.linkedin.badge,
    },
    {
      id: 'github',
      number: '04',
      tag: t.contact.channels.github.tag,
      title: t.contact.channels.github.title,
      description: t.contact.channels.github.description,
      actionLabel: t.contact.channels.github.action,
      href: CONTACT_CONFIG.github,
      target: '_blank',
      rel: 'noopener noreferrer',
      download: undefined,
      icon: GithubIcon,
      isPrimary: false,
      badge: t.contact.channels.github.badge,
    },
  ]

  return (
    <section
      className="contact-channels-section"
      aria-labelledby="channels-heading"
    >
      <div className="contact-channels-section__header">
        <div>
          <p className="page-eyebrow">{t.contact.channelsSection.eyebrow}</p>
          <h2 id="channels-heading" className="contact-channels-section__title">
            {t.contact.channelsSection.title}
          </h2>
        </div>
        <p className="contact-channels-section__lede">
          {t.contact.channelsSection.lede}
        </p>
      </div>

      <div className="contact-channels-grid">
        {channelsData.map((channel) => {
          const Icon = channel.icon
          const isDownload = Boolean(channel.download)

          return (
            <a
              key={channel.id}
              href={channel.href}
              target={channel.target}
              rel={channel.rel}
              download={channel.download}
              className={`contact-channel-card ${
                channel.isPrimary ? 'contact-channel-card--primary' : ''
              }`}
            >
              {/* Glass background layers */}
              <div
                className="contact-channel-card__backdrop"
                aria-hidden="true"
              />
              <div
                className="contact-channel-card__highlight"
                aria-hidden="true"
              />

              <div className="contact-channel-card__top">
                <span className="contact-channel-card__number">
                  {channel.number}
                </span>
                <span className="contact-channel-card__badge">
                  {channel.badge}
                </span>
              </div>

              <div className="contact-channel-card__content">
                <div
                  className="contact-channel-card__icon-wrap"
                  aria-hidden="true"
                >
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div className="contact-channel-card__text">
                  <span className="contact-channel-card__tag">
                    {channel.tag}
                  </span>
                  <h3 className="contact-channel-card__heading">
                    {channel.title}
                  </h3>
                  <p className="contact-channel-card__desc">
                    {channel.description}
                  </p>
                </div>
              </div>

              <div className="contact-channel-card__footer">
                <span className="contact-channel-card__action-text">
                  {channel.actionLabel}
                </span>
                <span
                  className="contact-channel-card__arrow"
                  aria-hidden="true"
                >
                  {isDownload ? (
                    <FileDown size={17} strokeWidth={2} />
                  ) : (
                    <ArrowUpRight size={17} strokeWidth={2} />
                  )}
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
