type TechCallout = {
  id: string
  category: string
  tools: readonly string[]
  x: number
  y: number
  anchorX: number
  anchorY: number
  connector: string
}

const lightTechCallouts: readonly TechCallout[] = [
  {
    id: 'frontend',
    category: 'FRONTEND',
    tools: ['React', 'TypeScript'],
    x: 292,
    y: 278,
    anchorX: 448,
    anchorY: 339,
    connector: 'M 292 302 H 448 V 339',
  },
  {
    id: 'backend',
    category: 'BACKEND',
    tools: ['NestJS', 'Node.js'],
    x: 268,
    y: 512,
    anchorX: 372,
    anchorY: 451,
    connector: 'M 268 536 H 372 V 451',
  },
  {
    id: 'database',
    category: 'DATABASE',
    tools: ['PostgreSQL'],
    x: 298,
    y: 668,
    anchorX: 398,
    anchorY: 579,
    connector: 'M 298 692 H 398 V 579',
  },
  {
    id: 'cloud',
    category: 'CLOUD',
    tools: ['GCP', 'Cloud Run', 'Cloud SQL'],
    x: 1488,
    y: 264,
    anchorX: 1471,
    anchorY: 164,
    connector: 'M 1488 288 H 1471 V 164',
  },
  {
    id: 'ai',
    category: 'AI LAYER',
    tools: ['Gemini', 'AI APIs'],
    x: 1488,
    y: 528,
    anchorX: 1398,
    anchorY: 562,
    connector: 'M 1488 552 H 1398 V 562',
  },
  {
    id: 'infrastructure',
    category: 'INFRASTRUCTURE',
    tools: ['Docker', 'CI / CD'],
    x: 1488,
    y: 700,
    anchorX: 1578,
    anchorY: 648,
    connector: 'M 1488 724 H 1578 V 648',
  },
] as const

const darkTechCallouts: readonly TechCallout[] = [
  {
    id: 'frontend',
    category: 'FRONTEND',
    tools: ['React', 'TypeScript'],
    x: 310,
    y: 290,
    anchorX: 460,
    anchorY: 343,
    connector: 'M 310 314 H 460 V 343',
  },
  {
    id: 'backend',
    category: 'BACKEND',
    tools: ['NestJS', 'Node.js'],
    x: 280,
    y: 530,
    anchorX: 390,
    anchorY: 438,
    connector: 'M 280 554 H 390 V 438',
  },
  {
    id: 'database',
    category: 'DATABASE',
    tools: ['PostgreSQL'],
    x: 310,
    y: 680,
    anchorX: 420,
    anchorY: 555,
    connector: 'M 310 704 H 420 V 555',
  },
  {
    id: 'cloud',
    category: 'CLOUD',
    tools: ['GCP', 'Cloud Run', 'Cloud SQL'],
    x: 1470,
    y: 275,
    anchorX: 1433,
    anchorY: 176,
    connector: 'M 1470 299 H 1433 V 176',
  },
  {
    id: 'ai',
    category: 'AI LAYER',
    tools: ['Gemini', 'AI APIs'],
    x: 1470,
    y: 545,
    anchorX: 1344,
    anchorY: 554,
    connector: 'M 1470 569 H 1344 V 554',
  },
  {
    id: 'infrastructure',
    category: 'INFRASTRUCTURE',
    tools: ['Docker', 'CI / CD'],
    x: 1470,
    y: 710,
    anchorX: 1520,
    anchorY: 642,
    connector: 'M 1470 734 H 1520 V 642',
  },
] as const

function TechCallout({ callout }: { callout: TechCallout }) {
  return (
    <g className={`hero-system-callout hero-system-callout--${callout.id}`}>
      <path
        className="hero-system-callout__connector"
        d={callout.connector}
        pathLength="1"
      />
      <circle
        className="hero-system-callout__pulse"
        cx={callout.anchorX}
        cy={callout.anchorY}
        r="13"
      />
      <circle
        className="hero-system-callout__anchor"
        cx={callout.anchorX}
        cy={callout.anchorY}
        r="3.5"
      />
      <rect
        className="hero-system-callout__index"
        x={callout.x}
        y={callout.y - 10}
        width="5"
        height="5"
      />
      <text
        className="hero-system-callout__title"
        x={callout.x + 15}
        y={callout.y - 4}
      >
        {callout.category}
      </text>
      {callout.tools.map((tool, index) => (
        <text
          className="hero-system-callout__tool"
          x={callout.x + 15}
          y={callout.y + 15 + index * 15}
          key={tool}
        >
          {tool}
        </text>
      ))}
    </g>
  )
}

export function HeroIsometricGraphic() {
  return (
    <div className="hero-iso" aria-hidden="true">
      <svg
        className="hero-system-map"
        viewBox="0 0 1858 887"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="hero-quiet-zone" cx="50%" cy="48%" r="50%">
            <stop offset="0" stopColor="var(--home-bg)" stopOpacity="1" />
            <stop offset="0.42" stopColor="var(--home-bg)" stopOpacity="1" />
            <stop offset="0.72" stopColor="var(--home-bg)" stopOpacity="0.88" />
            <stop offset="1" stopColor="var(--home-bg)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <image
          className="hero-system-map__image hero-system-map__image--light"
          href="/Formas/heroclaro.png"
          x="0"
          y="20.5"
          width="1858"
          height="846"
        />
        <image
          className="hero-system-map__image hero-system-map__image--dark"
          href="/Formas/herooscuro.png"
          x="42"
          y="0"
          width="1774"
          height="887"
        />
        <ellipse
          className="hero-system-map__quiet-zone"
          cx="929"
          cy="420"
          rx="420"
          ry="210"
        />
        <g
          className="hero-system-map__callouts hero-system-map__callouts--light"
          transform="translate(0 20.5)"
        >
          {lightTechCallouts.map((callout) => (
            <TechCallout callout={callout} key={callout.id} />
          ))}
        </g>
        <g className="hero-system-map__callouts hero-system-map__callouts--dark">
          {darkTechCallouts.map((callout) => (
            <TechCallout callout={callout} key={callout.id} />
          ))}
        </g>
        <g className="hero-system-map__telemetry">
          <text x="42" y="38">
            SYS / 01
          </text>
          <text x="1816" y="38" textAnchor="end">
            ARCHITECTURE MAP / LIVE
          </text>
          <path d="M 42 48 H 118" />
          <path d="M 1740 48 H 1816" />
        </g>
      </svg>
    </div>
  )
}
