import { siteContent } from '../data/content'
import { CountUp } from './effects/CountUp'
import { SpotlightCard } from './effects/SpotlightCard'
import { SplitText } from './effects/SplitText'

export function Features() {
  return (
    <section id="features" className="section section--surface" aria-labelledby="features-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{siteContent.features.title}</span>
          <h2 id="features-title" className="section-title">
            <SplitText text={siteContent.features.subtitle} tag="span" />
          </h2>
        </div>

        <div className="features__stats">
          {siteContent.features.stats.map((stat) => (
            <SpotlightCard key={stat.label} className="stat-card">
              <div className="stat-card__value">
                <CountUp value={stat.value} />
              </div>
              <div className="stat-card__label">{stat.label}</div>
            </SpotlightCard>
          ))}
        </div>

        <div className="features__grid">
          {siteContent.features.items.map((item, index) => (
            <SpotlightCard key={item.title} className="feature-item">
              <div className="feature-item__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="feature-item__title">{item.title}</h3>
                <p className="feature-item__description">{item.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
