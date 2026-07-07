import { siteContent } from '../data/content'
import { useFadeIn } from '../hooks/useFadeIn'
import { ResponsiveImage } from './ResponsiveImage'

export function Portfolio() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="portfolio" className="section section--light" aria-labelledby="portfolio-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{siteContent.portfolio.title}</span>
          <h2 id="portfolio-title" className="section-title">
            {siteContent.portfolio.subtitle}
          </h2>
        </div>

        <div
          ref={ref}
          className={`portfolio__grid fade-in ${isVisible ? 'fade-in--visible' : ''}`}
        >
          {siteContent.portfolio.items.map((item, index) => (
            <article
              key={item.title}
              className={`portfolio-card fade-in fade-in--delay-${Math.min(index + 1, 4)} ${isVisible ? 'fade-in--visible' : ''}`}
            >
              <div className="portfolio-card__image-wrap">
                <ResponsiveImage
                  src={item.image}
                  alt={item.title}
                  className="portfolio-card__image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <span className="portfolio-card__tag">{item.tag}</span>
              </div>
              <div className="portfolio-card__body">
                <h3 className="portfolio-card__title">{item.title}</h3>
                <p className="portfolio-card__description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
