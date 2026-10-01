import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Layers,
  Server,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/config/routes.config'
import { useLocale } from '@/hooks/useLocale'

const layerIcons: LucideIcon[] = [Layers, Code2, Server, Database, BrainCircuit]

export function HomeSystem() {
  const { t } = useLocale()
  const system = t.home.system

  return (
    <section className="home-system home-section" id="system" data-home-chapter>
      <div className="home-system__ambient" aria-hidden="true" />
      <div className="home-container">
        <header className="home-section-header">
          <p className="home-eyebrow">{system.eyebrow}</p>
          <h2 className="home-section-title">
            {system.titleLine1}
            <span>{system.titleLine2}</span>
          </h2>
          <p className="home-section-lede">{system.lede}</p>
        </header>

        <div className="home-system__topology">
          <div className="home-system__telemetry">
            <span className="home-system__telemetry-badge">
              TOPOLOGY // 05 LAYERS
            </span>
            <span className="home-system__telemetry-status">
              END-TO-END INTEGRATION
            </span>
          </div>

          <div className="home-system__layers">
            {system.layers.map((layer, index) => {
              const Icon = layerIcons[index] || Layers
              return (
                <motion.article
                  key={layer.index}
                  className="home-system-layer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="home-system-layer__left">
                    <span className="home-system-layer__index">
                      L-{layer.index}
                    </span>
                    <div className="home-system-layer__icon-wrap">
                      <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="home-system-layer__main">
                    <h3 className="home-system-layer__title">{layer.title}</h3>
                    <p className="home-system-layer__desc">
                      {layer.description}
                    </p>
                  </div>

                  <div className="home-system-layer__tech">
                    <span className="home-system-layer__tech-label">STACK</span>
                    <p className="home-system-layer__tech-text">{layer.tech}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>

          <div className="home-system__footer">
            <Link className="home-system__cta" to={ROUTES.STACK}>
              <span>{system.inspectStack}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
