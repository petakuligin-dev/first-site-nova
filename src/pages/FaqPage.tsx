import { siteContent } from '../data/content'
import { Accordion } from '../components/Accordion'

export function FaqPage() {
  const { faq } = siteContent

  return (
    <main className="main-content">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">{faq.title}</span>
          <h1 className="page-hero__title">{faq.subtitle}</h1>
        </div>
      </section>

      <section className="section section--light">
        <div className="container container--narrow">
          <Accordion items={[...faq.items]} />
        </div>
      </section>
    </main>
  )
}
