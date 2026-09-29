import { useState, useEffect } from 'react'
import { Scale, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Media', href: '#media' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      // Active section detection
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-navy border-b border-white/5'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 h-18 flex items-center justify-between py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          className="flex items-center gap-3 group"
          aria-label="Adv. Sajad Ahmad Mir – Home"
        >
          <div className="w-9 h-9 border border-gold/60 flex items-center justify-center group-hover:border-gold transition-colors">
            <Scale size={16} className="text-gold" aria-hidden="true" />
          </div>
          <div className="hidden sm:block">
            <p className="font-display font-semibold text-white text-sm leading-tight">
              Adv. Sajad Ahmad Mir
            </p>
            <p className="font-body text-gold/70 text-[10px] uppercase tracking-[0.15em]">
              Advocate & Legal Consultant
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            return (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                  className={`relative font-body text-sm font-medium transition-colors duration-200 py-1 group ${
                    isActive ? 'text-gold' : 'text-white/75 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            className="btn-primary text-xs px-5 py-2.5"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-1 focus:ring-offset-navy"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-navy border-t border-white/10 transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <ul className="px-6 py-4 flex flex-col gap-1" role="list">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            return (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                  className={`block py-3 font-body text-sm font-medium border-b border-white/5 transition-colors ${
                    isActive ? 'text-gold' : 'text-white/75 hover:text-gold'
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="btn-primary w-full justify-center text-xs"
            >
              Book Consultation
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
