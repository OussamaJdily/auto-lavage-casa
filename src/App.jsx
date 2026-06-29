import { useEffect } from 'react'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import PageLoader from './components/PageLoader'
import Hero from './sections/Hero'
import Services from './sections/Services'
import BeforeAfter from './sections/BeforeAfter'
import WhyUs from './sections/WhyUs'
import Pricing from './sections/Pricing'
import Gallery from './sections/Gallery'
import Booking from './sections/Booking'
import Location from './sections/Location'
import Footer from './sections/Footer'
import { useStore } from './store/useStore'

export default function App() {
  const { language, setScrolled, scrolled } = useStore()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [setScrolled])

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-body antialiased overflow-x-hidden">
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar scrolled={scrolled} />
      <main className="relative">
        <Hero />
        <Services />
        <BeforeAfter />
        <WhyUs />
        <Pricing />
        <Gallery />
        <Booking />
        <Location />
      </main>
      <Footer />
    </div>
  )
}