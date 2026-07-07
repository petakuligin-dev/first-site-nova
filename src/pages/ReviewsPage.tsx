import { siteContent } from '../data/content'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="review-card__stars" aria-label={`Рейтинг: ${rating} из 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill={i < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export function ReviewsPage() {
  const { reviews } = siteContent

  return (
    <main className="main-content">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">{reviews.title}</span>
          <h1 className="page-hero__title">{reviews.subtitle}</h1>
          <div className="reviews__stats">
            <div className="reviews__stat">
              <span className="reviews__stat-value">{reviews.stats.rating}</span>
              <Stars rating={5} />
              <span className="reviews__stat-label">{reviews.stats.ratingLabel}</span>
            </div>
            <div className="reviews__stat">
              <span className="reviews__stat-value">{reviews.stats.count}</span>
              <span className="reviews__stat-label">{reviews.stats.label}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="reviews__grid">
            {reviews.items.map((review) => (
              <article key={review.author} className="review-card">
                <Stars rating={review.rating} />
                <blockquote className="review-card__text">&ldquo;{review.text}&rdquo;</blockquote>
                <div className="review-card__author">
                  <strong>{review.author}</strong>
                  <span>{review.company}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
