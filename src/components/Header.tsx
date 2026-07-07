import { useEffect, useState } from 'react'
import { siteContent } from '../data/content'
import { scrollToSection } from '../utils/scroll'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleNavClick = (href: string) => {
    scrollToSection(href)
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <a
            href="#"
            className="logo"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            aria-label={`${siteContent.company.name} — на главную`}
          >
            <span className="logo__icon">Н</span>
            {siteContent.company.name}
          </a>

          <nav className="nav" aria-label="Основная навигация">
            {siteContent.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav__link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => handleNavClick('#contact')}
            >
              Связаться
            </button>
          </div>

          <button
            type="button"
            className={`burger ${isMenuOpen ? 'burger--open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
          >
            <span className="burger__line" />
            <span className="burger__line" />
            <span className="burger__line" />
          </button>
        </div>
      </header>

      <nav
        className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}
        aria-label="Мобильная навигация"
      >
        {siteContent.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="mobile-menu__link"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick(item.href)
            }}
          >
            {item.label}
          </a>
        ))}
        <button
          type="button"
          className="btn btn--primary btn--full mobile-menu__cta"
          onClick={() => handleNavClick('#contact')}
        >
          Связаться
        </button>
      </nav>
    </>
  )
}
