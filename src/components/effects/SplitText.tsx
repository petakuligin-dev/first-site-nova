import { useEffect, useRef, useState, type ElementType } from 'react'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  splitBy?: 'chars' | 'words'
  tag?: ElementType
  asFragment?: boolean
}

export function SplitText({
  text,
  className = '',
  delay = 28,
  splitBy = 'words',
  tag: Tag = 'span',
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const parts = splitBy === 'chars' ? [...text] : text.split(/(\s+)/)

  return (
    <Tag
      ref={ref as never}
      className={`split-text ${visible ? 'split-text--visible' : ''} ${className}`.trim()}
      aria-label={text}
    >
      {parts.map((part, index) => {
        if (/^\s+$/.test(part)) {
          return <span key={`s-${index}`}>{part}</span>
        }
        return (
          <span
            key={`${part}-${index}`}
            className="split-text__unit"
            style={{ transitionDelay: `${index * delay}ms` }}
            aria-hidden="true"
          >
            {part}
          </span>
        )
      })}
    </Tag>
  )
}
