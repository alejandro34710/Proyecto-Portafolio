import type { ArchitectureLayer } from '@/data/types'
import { getLocalized } from '@/data/projects'
import { useLocale } from '@/hooks/useLocale'

type SystemDiagramProps = {
  architecture: readonly ArchitectureLayer[]
}

export function SystemDiagram({ architecture }: SystemDiagramProps) {
  const { locale } = useLocale()
  const mainLayers = architecture.filter((layer) => layer.id !== 'ai')
  const aiLayer = architecture.find((layer) => layer.id === 'ai')

  return (
    <div className="system-diagram" aria-label="System architecture">
      <div className="system-diagram__main">
        {mainLayers.map((layer, index) => (
          <div key={layer.id} className="system-diagram__node-wrap">
            {index > 0 && (
              <span className="system-diagram__arrow" aria-hidden="true">
                ↓
              </span>
            )}
            <div className="system-diagram__node">
              <span className="system-diagram__node-label">
                {getLocalized(layer.label, locale)}
              </span>
              {layer.technologies && layer.technologies.length > 0 && (
                <span className="system-diagram__node-tech">
                  {layer.technologies.join(' / ')}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {aiLayer && (
        <div className="system-diagram__ai">
          <span className="system-diagram__ai-connector" aria-hidden="true" />
          <div className="system-diagram__node system-diagram__node--ai">
            <span className="system-diagram__node-label">
              {getLocalized(aiLayer.label, locale)}
            </span>
            {aiLayer.technologies && aiLayer.technologies.length > 0 && (
              <span className="system-diagram__node-tech">
                {aiLayer.technologies.join(' / ')}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
