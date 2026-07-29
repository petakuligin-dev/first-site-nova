export function Aurora({ className = '' }: { className?: string }) {
  return (
    <div className={`aurora ${className}`.trim()} aria-hidden="true">
      <div className="aurora__blob aurora__blob--1" />
      <div className="aurora__blob aurora__blob--2" />
      <div className="aurora__blob aurora__blob--3" />
      <div className="aurora__noise" />
    </div>
  )
}
