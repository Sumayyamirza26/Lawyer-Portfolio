import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import WhatsAppButton from '../components/WhatsAppButton'
import LoadingScreen from '../components/LoadingScreen'

export default function MainLayout() {
  const [scrollPct, setScrollPct] = useState(0)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setScrollPct(pct)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <div
        id="scroll-progress"
        style={{ width: `${scrollPct}%`, opacity: loading ? 0 : 1 }}
        aria-hidden="true"
      />
      <Navbar />
      <main className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  )
}

