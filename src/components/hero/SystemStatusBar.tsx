import { useEffect, useState } from 'react'

const consoleLines = [
  '> Initializing portfolio system...',
  '> Loading modules',
  '> Establishing connections',
  '> System ready.',
]

function useLiveClock() {
  const [time, setTime] = useState(() => formatTime(new Date()))

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(formatTime(new Date()))
    }, 1000)
    return () => window.clearInterval(interval)
  }, [])

  return time
}

function formatTime(date: Date) {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })
}

export function SystemStatusBar() {
  const time = useLiveClock()
  const [visibleLines, setVisibleLines] = useState(1)

  useEffect(() => {
    if (visibleLines >= consoleLines.length) return

    const timeout = window.setTimeout(() => {
      setVisibleLines((current) => current + 1)
    }, 700)

    return () => window.clearTimeout(timeout)
  }, [visibleLines])

  return (
    <footer className="system-status-bar" aria-label="System status">
      <div className="system-status-bar__console">
        <span className="system-status-bar__label">SYSTEM CONSOLE</span>
        <div className="system-status-bar__logs">
          {consoleLines.slice(0, visibleLines).map((line) => (
            <code key={line}>{line}</code>
          ))}
        </div>
      </div>
      <div className="system-status-bar__segment">
        <span className="system-status-bar__label">STATUS</span>
        <span className="system-status-bar__online">
          <i aria-hidden="true" />
          Online
        </span>
      </div>
      <div className="system-status-bar__segment">
        <span className="system-status-bar__label">LOCATION</span>
        <span className="system-status-bar__coords">
          <span>Lat: -12.0464</span>
          <span>Lng: -77.0428</span>
        </span>
      </div>
      <div className="system-status-bar__segment">
        <span className="system-status-bar__label">TIME</span>
        <time className="system-status-bar__time" dateTime={time}>
          {time}
        </time>
      </div>
      <div className="system-status-bar__segment system-status-bar__copyright">
        <span>© 2024 All rights reserved</span>
        <span className="system-status-bar__pause" aria-hidden="true">
          <i />
          <i />
        </span>
      </div>
    </footer>
  )
}
