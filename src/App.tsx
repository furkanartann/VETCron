import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import AISection from './components/AISection'
import Comparison from './components/Comparison'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import { usePathname } from './router'

function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AISection />
        <Comparison />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const path = usePathname()

  if (path === '/privacy') return <PrivacyPolicy />
  if (path === '/terms') return <TermsOfService />

  return <LandingPage />
}
