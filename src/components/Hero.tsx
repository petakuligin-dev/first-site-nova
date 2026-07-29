import { siteContent } from '../data/content'
import { scrollToSection } from '../utils/scroll'
import { ResponsiveImage } from './ResponsiveImage'
import { Aurora } from './effects/Aurora'
import { SplitText } from './effects/SplitText'
import { BlurText } from './effects/BlurText'
import { MagneticButton } from './effects/MagneticButton'
import { TiltCard } from './effects/TiltCard'

export function Hero() {
  const fullTitle = `${siteContent.hero.title} ${siteContent.hero.titleAccent}${siteContent.hero.titleEnd}`

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
        <Aurora />
      </div>

      <div className="container hero__layout">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            {siteContent.company.tagline}
          </div>

          <h1 className="hero__title" aria-label={fullTitle}>
            <SplitText text={`${siteContent.hero.title} `} className="hero__title-plain" tag="span" />
            <span className="hero__title-accent">
              <SplitText text={siteContent.hero.titleAccent} delay={36} tag="span" />
            </span>
            <SplitText text={siteContent.hero.titleEnd} className="hero__title-plain" delay={42} tag="span" />
          </h1>

          <BlurText text={siteContent.hero.subtitle} className="hero__subtitle" tag="p" delay={35} />

          <div className="hero__actions">
            <MagneticButton className="btn btn--primary" onClick={() => scrollToSection('#services')}>
              {siteContent.hero.primaryCta}
            </MagneticButton>
            <MagneticButton className="btn btn--secondary" onClick={() => scrollToSection('#contact')}>
              {siteContent.hero.secondaryCta}
            </MagneticButton>
          </div>
        </div>

        <TiltCard className="hero__media">
          <ResponsiveImage
            src={siteContent.images.hero}
            alt={siteContent.images.alts.hero}
            className="hero__image"
            loading="eager"
            width={800}
            height={500}
          />
        </TiltCard>
      </div>
    </section>
  )
}
