type WaveFill = 'surface' | 'light' | 'muted' | 'dark'

const FILL_MAP: Record<WaveFill, string> = {
  surface: 'var(--color-surface)',
  light: 'var(--color-bg-light)',
  muted: 'var(--color-bg-muted)',
  dark: 'var(--color-bg-darker)',
}

interface SectionWaveProps {
  from: WaveFill
  to: WaveFill
  className?: string
}

export function SectionWave({ from, to, className = '' }: SectionWaveProps) {
  return (
    <div
      className={`section-wave ${className}`.trim()}
      style={{
        backgroundColor: FILL_MAP[from],
        color: FILL_MAP[to],
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,28 C240,56 480,8 720,32 C960,56 1200,12 1440,36 L1440,56 L0,56 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
