import { NavLink } from 'react-router-dom'
import { siteContent } from '../data/content'
import { Icon } from './Icon'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <Logo />
            </div>
            <p className="footer__desc">{siteContent.company.tagline}. {siteContent.hero.subtitle}</p>
          </div>

          <div>
            <h3 className="footer__heading">{siteContent.footer.headings.nav}</h3>
            <ul className="footer__links">
              {siteContent.footer.links.map((link) => (
                <li key={link.href}>
                  <NavLink to={link.href} className="footer__link">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">{siteContent.footer.headings.social}</h3>
            <div className="footer__social">
              {siteContent.footer.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Icon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>{siteContent.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
