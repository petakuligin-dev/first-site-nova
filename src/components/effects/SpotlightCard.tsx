import { useRef, type MouseEvent, type ReactNode } from 'react'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
}

export function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    el.style.setProperty('--spot-x', `${x}px`)
    el.style.setProperty('--spot-y', `${y}px`)
  }

  return (
    <div ref={ref} className={`spotlight-card ${className}`.trim()} onMouseMove={handleMove}>
      <div className="spotlight-card__glow" aria-hidden="true" />
      <div className="spotlight-card__inner">{children}</div>
    </div>
  )
}
