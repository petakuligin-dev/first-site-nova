import { siteContent } from '../data/content'
import { useFadeIn } from '../hooks/useFadeIn'
import { Icon } from './Icon'
import { ResponsiveImage } from './ResponsiveImage'

export function Services() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="services" className="section section--muted" aria-labelledby="services-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{siteContent.services.title}</span>
          <h2 id="services-title" className="section-title">
            {siteContent.services.subtitle}
          </h2>
        </div>

        <div ref={ref} className={`fade-in ${isVisible ? 'fade-in--visible' : ''}`}>
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
              <p className="services__banner-text">
                {siteContent.services.bannerText}
              </p>
            </div>
          </div>

          <div className="services__grid">
            {siteContent.services.items.map((service, index) => (
              <article
                key={service.title}
                className={`service-card fade-in fade-in--delay-${Math.min(index + 1, 4)} ${isVisible ? 'fade-in--visible' : ''}`}
              >
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
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
