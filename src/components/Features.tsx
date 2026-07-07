import { siteContent } from '../data/content'
import { useFadeIn } from '../hooks/useFadeIn'

export function Features() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="features" className="section section--muted" aria-labelledby="features-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{siteContent.features.title}</span>
          <h2 id="features-title" className="section-title">
            {siteContent.features.subtitle}
          </h2>
        </div>

        <div ref={ref} className={`fade-in ${isVisible ? 'fade-in--visible' : ''}`}>
          <div className="features__stats">
            {siteContent.features.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-card__value">{stat.value}</div>
                <div className="stat-card__label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="features__grid">
            {siteContent.features.items.map((item, index) => (
              <div key={item.title} className="feature-item">
                <div className="feature-item__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="feature-item__title">{item.title}</h3>
                  <p className="feature-item__description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
