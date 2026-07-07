import { useState, type KeyboardEvent } from 'react'

interface Tab {
  id: string
  label: string
}

interface TabsProps {
  tabs: Tab[]
  children: (activeId: string) => React.ReactNode
}

export function Tabs({ tabs, children }: TabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? '')

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault()
      const next = e.key === 'ArrowRight'
        ? (index + 1) % tabs.length
        : (index - 1 + tabs.length) % tabs.length
      setActiveId(tabs[next].id)
    }
  }

  return (
    <div className="tabs">
      <div className="tabs__list" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeId === tab.id}
            className={`tabs__tab ${activeId === tab.id ? 'tabs__tab--active' : ''}`}
            onClick={() => setActiveId(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs__panel" role="tabpanel">
        {children(activeId)}
      </div>
    </div>
  )
}
