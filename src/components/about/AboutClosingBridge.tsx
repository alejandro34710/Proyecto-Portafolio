import { ArrowRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '@/hooks/useLocale'

export function AboutClosingBridge() {
  const { t } = useLocale()
  const { kicker, title, body, projectsCta, contactCta } = t.about.closing

  return (
    <section
      className="about-closing"
      aria-label="Closing bridge to work and contact"
    >
      <span className="about-closing__kicker">{kicker}</span>
      <h2 className="about-closing__title">{title}</h2>
      <p className="about-closing__body">{body}</p>

      <div className="about-closing__actions">
        <Link to="/projects" className="about-cta-btn about-cta-btn--primary">
          <span>{projectsCta}</span>
          <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
        </Link>
        <Link to="/contact" className="about-cta-btn about-cta-btn--secondary">
          <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
          <span>{contactCta}</span>
        </Link>
      </div>
    </section>
  )
}
