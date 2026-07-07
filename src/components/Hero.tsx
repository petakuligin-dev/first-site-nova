import { siteContent } from '../data/content'
import { scrollToSection } from '../utils/scroll'
import { useFadeIn } from '../hooks/useFadeIn'
import { ResponsiveImage } from './ResponsiveImage'

export function Hero() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="hero" aria-label="Главный экран">
      <div className="hero__bg" aria-hidden="true">
        <ResponsiveImage
          src={siteContent.images.hero}
          alt=""
          className="hero__bg-image"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="hero__overlay" />
        <div className="hero__gradient hero__gradient--1" />
        <div className="hero__gradient hero__gradient--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__layout">
        <div
          ref={ref}
          className={`hero__content fade-in ${isVisible ? 'fade-in--visible' : ''}`}
        >
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            {siteContent.company.tagline}
          </div>

          <h1 className="hero__title">
            {siteContent.hero.title}{' '}
            <span className="hero__title-accent">{siteContent.hero.titleAccent}</span>
            {siteContent.hero.titleEnd}
          </h1>

          <p className="hero__subtitle">{siteContent.hero.subtitle}</p>

          <div className="hero__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => scrollToSection('#services')}
            >
              {siteContent.hero.primaryCta}
            </button>
            <button
              type="button"
              className="btn btn--secondary"
              onClick={() => scrollToSection('#contact')}
            >
              {siteContent.hero.secondaryCta}
            </button>
          </div>
        </div>

        <div className={`hero__media fade-in fade-in--delay-2 ${isVisible ? 'fade-in--visible' : ''}`}>
          <ResponsiveImage
            src={siteContent.images.hero}
            alt={siteContent.images.alts.hero}
            className="hero__image"
            loading="eager"
            width={800}
            height={500}
          />
          <div className="hero__image-glow" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
