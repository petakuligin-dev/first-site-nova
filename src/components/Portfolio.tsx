import { siteContent } from '../data/content'
import { ResponsiveImage } from './ResponsiveImage'
import { TiltCard } from './effects/TiltCard'
import { SplitText } from './effects/SplitText'

export function Portfolio() {
  return (
    <section id="portfolio" className="section section--light" aria-labelledby="portfolio-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{siteContent.portfolio.title}</span>
          <h2 id="portfolio-title" className="section-title">
            <SplitText text={siteContent.portfolio.subtitle} tag="span" />
          </h2>
        </div>

        <div className="portfolio__grid">
          {siteContent.portfolio.items.map((item, index) => (
            <TiltCard key={item.title} className="portfolio-card">
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
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
