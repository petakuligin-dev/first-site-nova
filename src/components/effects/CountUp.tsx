import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: string
  className?: string
}

function parseValue(value: string) {
  const match = value.match(/^(\d+(?:[.,]\d+)?)(.*)$/)
  if (!match) return { num: 0, suffix: value, decimals: 0 }
  const raw = match[1].replace(',', '.')
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0
  return { num: Number(raw), suffix: match[2], decimals }
}

export function CountUp({ value, className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const { num, suffix, decimals } = parseValue(value)
  const [display, setDisplay] = useState(num === 0 && suffix === value ? value : `0${suffix}`)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (Number.isNaN(num) || (num === 0 && suffix === value)) {
      setDisplay(value)
      return
    }

    let frame = 0
    let start: number | null = null
    const duration = 1200

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const tick = (time: number) => {
          if (start === null) start = time
          const progress = Math.min((time - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = num * eased
          setDisplay(`${current.toFixed(decimals)}${suffix}`)
          if (progress < 1) frame = requestAnimationFrame(tick)
        }

        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [decimals, num, suffix, value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
