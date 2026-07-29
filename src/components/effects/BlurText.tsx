import { useEffect, useRef, useState, type ElementType } from 'react'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  tag?: ElementType
}

export function BlurText({ text, className = '', delay = 40, tag: Tag = 'p' }: BlurTextProps) {
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
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const words = text.split(' ')

  return (
    <Tag
      ref={ref as never}
      className={`blur-text ${visible ? 'blur-text--visible' : ''} ${className}`.trim()}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="blur-text__word"
          style={{ transitionDelay: `${index * delay}ms` }}
          aria-hidden="true"
        >
          {word}
          {index < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  )
}
