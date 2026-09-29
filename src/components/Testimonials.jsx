import { useState, useEffect, useCallback } from 'react'
import { useReveal } from '../hooks/useReveal'
import { testimonials } from '../data/content'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function Testimonials() {
  const sectionRef = useReveal()
  const [active, setActive] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const go = useCallback((dir) => {
    if (isAnimating) return
    setIsAnimating(true)
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 400)
  }, [isAnimating])

  // Auto-play
  useEffect(() => {
    const t = setInterval(() => go(1), 5000)
    return () => clearInterval(t)
  }, [go])

  const current = testimonials[active]

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-surface"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="section-eyebrow reveal">Client Voices</p>
          <h2
            id="testimonials-heading"
            className="section-title mb-4 reveal delay-100"
          >
            What Clients
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #B8962B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Are Saying
            </span>
          </h2>
          <div className="gold-line mx-auto reveal delay-200" aria-hidden="true" />
        </div>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto reveal delay-200">
          <div className="relative bg-white border border-navy/8 shadow-card p-10 md:p-14">
            {/* Gold top strip */}
            <div
              className="absolute top-0 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
              aria-hidden="true"
            />

            {/* Big quote icon */}
            <div className="absolute top-8 right-8 opacity-5" aria-hidden="true">
              <Quote size={80} className="text-navy" />
            </div>

            {/* Small gold quote */}
            <div className="w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center mb-8">
              <Quote size={16} className="text-gold" aria-hidden="true" />
            </div>

            {/* Quote text */}
            <blockquote
              key={active}
              className="font-display italic text-navy text-xl md:text-2xl leading-relaxed mb-8"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'translateY(8px)' : 'translateY(0)',
                transition: 'opacity 0.35s ease, transform 0.35s ease',
              }}
            >
              "{current.quote}"
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              <div className="w-px h-8 bg-gold/40" aria-hidden="true" />
              <div>
                <p className="font-body font-semibold text-navy text-sm">{current.name}</p>
                <p className="font-body text-charcoal/40 text-xs">{current.role}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-navy/8">
              {/* Dots */}
              <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setActive(i) }}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold ${
                      i === active
                        ? 'w-8 h-1 bg-gold'
                        : 'w-2 h-1 bg-navy/20 hover:bg-navy/40'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 border border-navy/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="w-10 h-10 border border-navy/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
