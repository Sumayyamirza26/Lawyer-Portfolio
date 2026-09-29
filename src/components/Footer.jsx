import { Scale, Mail, ArrowRight } from 'lucide-react'
import { footer, contact } from '../data/content'

const handleNav = (label) => {
  const id = label.toLowerCase() === 'home' ? 'home'
    : label.toLowerCase() === 'media' ? 'media'
    : label.toLowerCase()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="bg-[#070E1D] border-t border-white/5"
      aria-label="Site footer"
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 border border-gold/40 flex items-center justify-center">
                <Scale size={15} className="text-gold" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display font-semibold text-white text-sm">Adv. Sajad Ahmad Mir</p>
                <p className="font-body text-gold/50 text-[10px] uppercase tracking-[0.15em]">Advocate & Consultant</p>
              </div>
            </div>
            <p className="font-body text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
              {footer.tagline}
            </p>
            <p className="font-display italic text-gold/50 text-sm">
              {footer.quote}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30 mb-5">
              Navigation
            </p>
            <ul className="space-y-3" role="list">
              {footer.links.map((label) => (
                <li key={label}>
                  <button
                    onClick={() => handleNav(label)}
                    className="font-body text-white/50 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group focus:outline-none focus:text-gold"
                  >
                    <ArrowRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                      aria-hidden="true"
                    />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30 mb-5">
              Contact
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 group mb-6"
              aria-label={`Email: ${contact.email}`}
            >
              <Mail size={14} className="text-gold flex-shrink-0" aria-hidden="true" />
              <span className="font-body text-white/50 text-sm group-hover:text-gold transition-colors duration-200 break-all">
                {contact.email}
              </span>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="btn-primary text-xs px-5 py-3"
            >
              Book Consultation
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"
          aria-hidden="true"
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/25 text-xs">
            © {year} Adv. Sajad Ahmad Mir. All rights reserved.
          </p>
          <p className="font-body text-white/15 text-xs">
            Sajad Mir & Associates — Kashmir, India
          </p>
        </div>
      </div>
    </footer>
  )
}
