import { useId } from 'react'
import { siteContent } from '../data/content'

interface LogoProps {
  showText?: boolean
  className?: string
}

export function Logo({ showText = true, className = '' }: LogoProps) {
  const gradId = `logo-grad-${useId().replace(/:/g, '')}`

  return (
    <span className={`logo ${className}`.trim()}>
      <svg
        className="logo__mark"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradId} x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c8f542" />
            <stop offset="1" stopColor="#86efac" />
          </linearGradient>
        </defs>
        <rect width="36" height="36" rx="9" fill={`url(#${gradId})`} />
        <path
          d="M18 8L26 13.5V24.5L18 30L10 24.5V13.5L18 8Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="18" r="3.5" fill="white" />
        <path
          d="M18 14.5V11M18 25V21.5M21.5 18H25M11 18H14.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      {showText && <span className="logo__text">{siteContent.company.name}</span>}
    </span>
  )
}
