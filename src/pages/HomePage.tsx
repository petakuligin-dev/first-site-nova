import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Portfolio } from '../components/Portfolio'
import { Features } from '../components/Features'
import { Contact } from '../components/Contact'
import { SectionDivider } from '../components/SectionDivider'
import { SectionBlend } from '../components/SectionBlend'

export function HomePage() {
  return (
    <main className="main-content">
      <Hero />
      <About />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Portfolio />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <Contact />
      <SectionBlend from="light" to="footer" />
    </main>
  )
}
