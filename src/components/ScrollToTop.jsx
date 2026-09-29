import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollUp}
      className={`fixed bottom-24 right-5 md:right-8 z-50 w-11 h-11 bg-navy border border-gold/40 flex items-center justify-center transition-all duration-300 hover:bg-gold hover:border-gold group focus:outline-none focus:ring-2 focus:ring-gold ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp
        size={15}
        className="text-gold group-hover:text-navy transition-colors duration-200"
        aria-hidden="true"
      />
    </button>
  )
}
