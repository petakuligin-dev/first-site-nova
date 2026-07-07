import { siteContent } from '../data/content'
import { scrollToSection } from '../utils/scroll'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="logo__icon">Н</span>
              {siteContent.company.name}
            </div>
            <p className="footer__desc">{siteContent.company.tagline}. {siteContent.hero.subtitle}</p>
          </div>

          <div>
            <h3 className="footer__heading">Навигация</h3>
            <ul className="footer__links">
              {siteContent.footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">Соцсети</h3>
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
