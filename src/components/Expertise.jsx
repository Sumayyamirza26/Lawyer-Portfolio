import { useReveal } from '../hooks/useReveal'
import { expertise } from '../data/content'
import {
  Scale, Shield, Heart, Home, ShieldCheck,
  FileText, PenLine, Briefcase,
} from 'lucide-react'

const iconMap = { Scale, Shield, Heart, Home, ShieldCheck, FileText, PenLine, Briefcase }

export default function Expertise() {
  const sectionRef = useReveal()

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="section-padding bg-surface"
      aria-labelledby="expertise-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="section-eyebrow reveal">Areas of Practice</p>
          <h2 id="expertise-heading" className="section-title mb-4 reveal delay-100">
            Legal Expertise
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #B8962B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Across Key Domains
            </span>
          </h2>
          <div className="gold-line reveal delay-200" aria-hidden="true" />
        </div>

        {/* Cards grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10"
          role="list"
          aria-label="Practice areas"
        >
          {expertise.map(({ title, icon, description }, i) => {
            const Icon = iconMap[icon] || Scale
            const delays = [0, 100, 200, 300, 0, 100, 200, 300]
            return (
          <article
                key={title}
                className={`bg-white p-8 group hover:bg-navy transition-all duration-400 cursor-default reveal delay-${delays[i]} border border-gold/45 hover:border-gold/70 shadow-[0_0_0_1px_rgba(212,175,55,0.12),0_10px_30px_rgba(15,23,42,0.22)] hover:shadow-[0_0_0_1px_rgba(212,175,55,0.22),0_14px_34px_rgba(15,23,42,0.28)]`}
                role="listitem"
              >
                {/* Icon */}
                <div className="w-12 h-12 border border-gold/35 flex items-center justify-center mb-6 group-hover:border-gold/70 group-hover:bg-gold/10 transition-all duration-300">
                  <Icon
                    size={20}
                    className="text-gold group-hover:scale-110 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-navy text-lg mb-3 group-hover:text-white transition-colors duration-300">
                  {title}
                </h3>

                {/* Divider */}
                <div
                  className="w-8 h-px bg-gold/60 mb-4 group-hover:w-12 group-hover:bg-gold/70 transition-all duration-300"
                  aria-hidden="true"
                />

                {/* Description */}
                <p className="font-body text-charcoal/60 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                  {description}
                </p>

                {/* Corner arrow */}
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-body text-gold text-xs uppercase tracking-wider">
                    Learn More
                  </span>
                  <span className="text-gold text-sm" aria-hidden="true">→</span>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center reveal delay-400">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline-dark"
          >
            Discuss Your Case
          </button>
        </div>
      </div>
    </section>
  )
}
