import { siteContent } from '../data/content'
import { useFadeIn } from '../hooks/useFadeIn'
import { ResponsiveImage } from './ResponsiveImage'

export function About() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="about" className="section section--light" aria-labelledby="about-title">
      <div className="container">
        <div className="section-header fade-in fade-in--visible">
          <span className="section-label">{siteContent.about.title}</span>
          <h2 id="about-title" className="section-title">
            {siteContent.about.subtitle}
          </h2>
        </div>

        <div
          ref={ref}
          className={`about__grid fade-in ${isVisible ? 'fade-in--visible' : ''}`}
        >
          <div className="about__visual">
            <ResponsiveImage
              src={siteContent.images.about}
              alt="Команда НоваТех на совещании"
              className="about__image"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="about__visual-badge">
              <span className="about__visual-badge-value">10+</span>
              <span className="about__visual-badge-label">лет опыта</span>
            </div>
          </div>

          <div className="about__content">
            <p>{siteContent.about.description}</p>
            <blockquote className="about__mission">{siteContent.about.mission}</blockquote>
            <ul className="about__highlights">
              {siteContent.about.highlights.map((item) => (
                <li key={item} className="about__highlight">
                  <span className="about__check" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
