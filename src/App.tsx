import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { HomePage } from './pages/HomePage'
import { PricingPage } from './pages/PricingPage'
import { TeamPage } from './pages/TeamPage'
import { ReviewsPage } from './pages/ReviewsPage'
import { FaqPage } from './pages/FaqPage'

const rawBase = import.meta.env.BASE_URL
const basename =
  !rawBase || rawBase === './' || rawBase === '/'
    ? undefined
    : rawBase.replace(/\/$/, '')

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
