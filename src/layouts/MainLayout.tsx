import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollToTop } from '../components/ScrollToTop'

export function MainLayout() {
  const { pathname, state } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' as ScrollBehavior : 'auto' })
  }, [pathname])

  useEffect(() => {
    if (state && typeof state === 'object' && 'scrollTo' in state && state.scrollTo === 'contact') {
      const timer = setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [state, pathname])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  )
}
