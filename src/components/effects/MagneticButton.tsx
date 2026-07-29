import { useRef, type MouseEvent, type ReactNode, type ButtonHTMLAttributes } from 'react'

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  strength?: number
}

export function MagneticButton({
  children,
  strength = 0.35,
  className = '',
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleMove = (event: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    onMouseMove?.(event)
  }

  const handleLeave = (event: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current
    if (el) el.style.transform = 'translate(0, 0)'
    onMouseLeave?.(event)
  }

  return (
    <button
      ref={ref}
      type="button"
      className={`magnetic-btn ${className}`.trim()}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      <span className="magnetic-btn__label">{children}</span>
    </button>
  )
}
