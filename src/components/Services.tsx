import { siteContent } from '../data/content'
import { Icon } from './Icon'
import { ResponsiveImage } from './ResponsiveImage'
import { SpotlightCard } from './effects/SpotlightCard'
import { SplitText } from './effects/SplitText'

export function Services() {
  return (
    <section id="services" className="section section--muted" aria-labelledby="services-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{siteContent.services.title}</span>
          <h2 id="services-title" className="section-title">
            <SplitText text={siteContent.services.subtitle} tag="span" />
          </h2>
        </div>

        <div className="services__banner">
          <ResponsiveImage
            src={siteContent.images.servicesBanner}
            alt={siteContent.images.alts.servicesBanner}
            className="services__banner-image"
            loading="lazy"
            width={1200}
            height={400}
          />
          <div className="services__banner-overlay">
            <p className="services__banner-text">{siteContent.services.bannerText}</p>
          </div>
        </div>

        <div className="services__grid">
          {siteContent.services.items.map((service) => (
            <SpotlightCard key={service.title} className="service-card">
              {'image' in service && service.image ? (
                <div className="service-card__image-wrap">
                  <ResponsiveImage
                    src={service.image}
                    alt={service.title}
                    className="service-card__image"
                    loading="lazy"
                  />
                </div>
              ) : null}
              <div className="service-card__body">
                <div className="service-card__icon">
                  <Icon name={service.icon} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
