import type { SectionWave } from './SectionWave'

type WaveFill = Parameters<typeof SectionWave>[0]['from'] | 'footer'

const FILL_MAP: Record<WaveFill, string> = {
  surface: 'var(--color-surface)',
  light: 'var(--color-bg-light)',
  muted: 'var(--color-bg-muted)',
  dark: 'var(--color-bg-darker)',
  footer: 'var(--footer-bg)',
}

interface SectionBlendProps {
  from: WaveFill
  to: WaveFill
}

export function SectionBlend({ from, to }: SectionBlendProps) {
  if (from === to) return null

  return (
    <div
      className="section-blend"
      style={{
        background: `linear-gradient(to bottom, ${FILL_MAP[from]}, ${FILL_MAP[to]})`,
      }}
      aria-hidden="true"
    />
  )
}
