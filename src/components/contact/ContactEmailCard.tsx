import { useState, useCallback } from 'react'
import { Mail, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react'
import { CONTACT_CONFIG } from '@/config/contact.config'
import { useLocale } from '@/hooks/useLocale'

export function ContactEmailCard() {
  const { t } = useLocale()
  const [copied, setCopied] = useState(false)

  const email = CONTACT_CONFIG.email

  const handleCopy = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      try {
        await navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2600)
      } catch {
        // Fallback for environments where clipboard API might be restricted
        const textarea = document.createElement('textarea')
        textarea.value = email
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
        setCopied(true)
        setTimeout(() => setCopied(false), 2600)
      }
    },
    [email],
  )

  return (
    <div className="contact-email-feature">
      <div className="contact-email-feature__ambient" aria-hidden="true" />

      {/* Header bar */}
      <div className="contact-email-feature__header">
        <span className="contact-email-feature__badge">
          <Sparkles size={13} className="contact-email-feature__sparkle" />
          {t.contact.directEmail.label}
        </span>
        <span className="contact-email-feature__status">
          <span
            className="contact-email-feature__status-dot"
            aria-hidden="true"
          />
          {t.contact.emailStatus}
        </span>
      </div>

      {/* Hero Email display anchor */}
      <div className="contact-email-feature__body">
        <a
          href={`mailto:${email}`}
          className="contact-email-feature__address-link"
          aria-label={`${t.contact.directEmail.action}: ${email}`}
          title={`${t.contact.directEmail.action}: ${email}`}
        >
          <span className="contact-email-feature__address-text">{email}</span>
          <span className="contact-email-feature__arrow" aria-hidden="true">
            <ArrowUpRight size={22} strokeWidth={2} />
          </span>
        </a>
        <p className="contact-email-feature__hint">
          {t.contact.directEmail.hint}
        </p>
      </div>

      {/* Action controls with glass styling */}
      <div className="contact-email-feature__actions">
        <a
          href={`mailto:${email}`}
          className="contact-email-btn contact-email-btn--primary"
        >
          <Mail size={16} strokeWidth={1.8} aria-hidden="true" />
          <span>{t.contact.directEmail.openClient}</span>
        </a>

        <button
          type="button"
          onClick={handleCopy}
          className={`contact-email-btn contact-email-btn--copy ${
            copied ? 'is-copied' : ''
          }`}
          aria-label={
            copied
              ? t.contact.directEmail.copiedFeedback
              : t.contact.directEmail.copyAction
          }
        >
          {copied ? (
            <>
              <Check
                size={16}
                className="contact-email-btn__check"
                aria-hidden="true"
              />
              <span>{t.contact.directEmail.copiedFeedback}</span>
            </>
          ) : (
            <>
              <Copy size={16} strokeWidth={1.8} aria-hidden="true" />
              <span>{t.contact.directEmail.copyAction}</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
