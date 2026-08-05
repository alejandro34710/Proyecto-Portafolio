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
    x: 218,
    y: 286,
    anchorX: 418,
    anchorY: 339,
    connector: 'M 218 310 H 418 V 339',
  },
  {
    id: 'backend',
    category: 'BACKEND',
    tools: ['NestJS', 'Node.js'],
    x: 136,
    y: 546,
    anchorX: 341,
    anchorY: 451,
    connector: 'M 136 570 H 341 V 451',
  },
  {
    id: 'database',
    category: 'DATABASE',
    tools: ['PostgreSQL'],
    x: 232,
    y: 730,
    anchorX: 375,
    anchorY: 579,
    connector: 'M 232 754 H 375 V 579',
  },
  {
    id: 'cloud',
    category: 'CLOUD',
    tools: ['GCP', 'Cloud Run', 'Cloud SQL'],
    x: 1518,
    y: 264,
    anchorX: 1471,
    anchorY: 164,
    connector: 'M 1518 288 H 1471 V 164',
  },
  {
    id: 'ai',
    category: 'AI LAYER',
    tools: ['Gemini', 'AI APIs'],
    x: 1518,
    y: 528,
    anchorX: 1398,
    anchorY: 562,
    connector: 'M 1518 552 H 1398 V 562',
  },
  {
    id: 'infrastructure',
    category: 'INFRASTRUCTURE',
    tools: ['Docker', 'CI / CD'],
    x: 1518,
    y: 724,
    anchorX: 1578,
    anchorY: 648,
    connector: 'M 1518 748 H 1578 V 648',
  },
] as const

const darkTechCallouts: readonly TechCallout[] = [
  {
    id: 'frontend',
    category: 'FRONTEND',
    tools: ['React', 'TypeScript'],
    x: 250,
    y: 300,
    anchorX: 440,
    anchorY: 343,
    connector: 'M 250 324 H 440 V 343',
  },
  {
    id: 'backend',
    category: 'BACKEND',
    tools: ['NestJS', 'Node.js'],
    x: 150,
    y: 565,
    anchorX: 364,
    anchorY: 438,
    connector: 'M 150 589 H 364 V 438',
  },
  {
    id: 'database',
    category: 'DATABASE',
    tools: ['PostgreSQL'],
    x: 245,
    y: 752,
    anchorX: 401,
    anchorY: 555,
    connector: 'M 245 776 H 401 V 555',
  },
  {
    id: 'cloud',
    category: 'CLOUD',
    tools: ['GCP', 'Cloud Run', 'Cloud SQL'],
    x: 1500,
    y: 275,
    anchorX: 1433,
    anchorY: 176,
    connector: 'M 1500 299 H 1433 V 176',
  },
  {
    id: 'ai',
    category: 'AI LAYER',
    tools: ['Gemini', 'AI APIs'],
    x: 1485,
    y: 545,
    anchorX: 1344,
    anchorY: 554,
    connector: 'M 1485 569 H 1344 V 554',
  },
  {
    id: 'infrastructure',
    category: 'INFRASTRUCTURE',
    tools: ['Docker', 'CI / CD'],
    x: 1485,
    y: 740,
    anchorX: 1520,
    anchorY: 642,
    connector: 'M 1485 764 H 1520 V 642',
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
          <radialGradient id="hero-quiet-zone">
            <stop offset="0" stopColor="var(--home-bg)" stopOpacity="1" />
            <stop offset="0.58" stopColor="var(--home-bg)" stopOpacity="0.96" />
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
          cy="443.5"
          rx="390"
          ry="210"
        />
        <g className="hero-system-map__center-signal">
          <path d="M 929 520 V 700" />
          <circle cx="929" cy="555" r="10" />
          <circle cx="929" cy="555" r="3" />
        </g>
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
