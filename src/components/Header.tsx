import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { siteContent } from '../data/content'
import { scrollToSection } from '../utils/scroll'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

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

  const goContact = () => {
    setIsMenuOpen(false)
    if (isHome) {
      scrollToSection('#contact')
    } else {
      navigate('/', { state: { scrollTo: 'contact' } })
    }
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav__link ${isActive ? 'nav__link--active' : ''}`

  const mobileLinkClass = (href: string) => {
    const isActive = location.pathname === href
    return `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
  }

  return (
    <>
      <header className={`header ${isScrolled || !isHome ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <NavLink to="/" className="logo-link" aria-label={`${siteContent.company.name} — на главную`}>
            <Logo />
          </NavLink>

          <nav className="nav" aria-label="Основная навигация">
            {siteContent.nav.map((item) =>
              item.type === 'contact' ? (
                <button key={item.href} type="button" className="nav__link" onClick={goContact}>
                  {item.label}
                </button>
              ) : (
                <NavLink key={item.href} to={item.href} className={navLinkClass} end={item.href === '/'}>
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="header__actions">
            <ThemeToggle />
            <button type="button" className="btn btn--primary" onClick={goContact}>
              {siteContent.header.cta}
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
        {siteContent.nav.map((item) =>
          item.type === 'contact' ? (
            <button
              key={item.href}
              type="button"
              className="mobile-menu__link"
              onClick={goContact}
            >
              {item.label}
            </button>
          ) : (
            <NavLink
              key={item.href}
              to={item.href}
              className={mobileLinkClass(item.href)}
              onClick={() => setIsMenuOpen(false)}
              end={item.href === '/'}
            >
              {item.label}
            </NavLink>
          ),
        )}
        <div className="mobile-menu__theme">
          <ThemeToggle />
        </div>
        <button type="button" className="btn btn--primary btn--full mobile-menu__cta" onClick={goContact}>
          {siteContent.header.cta}
        </button>
      </nav>
    </>
  )
}
