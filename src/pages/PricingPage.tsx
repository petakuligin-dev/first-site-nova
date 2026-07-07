import { useNavigate } from 'react-router-dom'
import { siteContent } from '../data/content'
import { Tabs } from '../components/Tabs'

export function PricingPage() {
  const navigate = useNavigate()
  const { pricing } = siteContent

  const handleOrder = () => {
    navigate('/', { state: { scrollTo: 'contact' } })
  }

  return (
    <main className="main-content">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">{pricing.title}</span>
          <h1 className="page-hero__title">{pricing.subtitle}</h1>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <Tabs tabs={pricing.tabs.map((t) => ({ id: t.id, label: t.label }))}>
            {(activeId) => {
              const tab = pricing.tabs.find((t) => t.id === activeId)
              if (!tab) return null
              return (
                <div className="pricing__grid">
                  {tab.plans.map((plan) => (
                    <article
                      key={plan.name}
                      className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}
                    >
                      {plan.featured && <span className="pricing-card__badge">{pricing.featuredBadge}</span>}
                      <h3 className="pricing-card__name">{plan.name}</h3>
                      <p className="pricing-card__desc">{plan.description}</p>
                      <div className="pricing-card__price">{plan.price}</div>
                      <div className="pricing-card__period">{plan.period}</div>
                      <ul className="pricing-card__features">
                        {plan.features.map((f) => (
                          <li key={f}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        className={`btn btn--full ${plan.featured ? 'btn--primary' : 'btn--outline'}`}
                        onClick={handleOrder}
                      >
                        {pricing.orderCta}
                      </button>
                    </article>
                  ))}
                </div>
              )
            }}
          </Tabs>
        </div>
      </section>
    </main>
  )
}
