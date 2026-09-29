import { useReveal } from '../hooks/useReveal'
import { whyChoose } from '../data/content'
import { Award, Users, ShieldCheck, Target } from 'lucide-react'

const iconMap = { Award, Users, ShieldCheck, Target }

export default function WhyChooseMe() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-navy"
      aria-labelledby="why-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="section-eyebrow reveal">Why Choose Me</p>
          <h2
            id="why-heading"
            className="section-title-light mb-4 reveal delay-100"
          >
            The Right Advocate
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #B8962B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              For Your Case
            </span>
          </h2>
          <div className="gold-line mx-auto reveal delay-200" aria-hidden="true" />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {whyChoose.map(({ icon, title, description }, i) => {
            const Icon = iconMap[icon] || Award
            const delays = [0, 100, 200, 300]
            return (
              <article
                key={title}
                className={`relative border border-white/10 p-8 group hover:border-gold/40 transition-all duration-400 reveal delay-${delays[i]}`}
                role="listitem"
              >
                {/* Gold corner */}
                <div
                  className="absolute top-0 left-0 w-5 h-5 border-t border-l border-gold/40 group-hover:border-gold transition-colors duration-300"
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-gold/40 group-hover:border-gold transition-colors duration-300"
                  aria-hidden="true"
                />

                {/* Icon */}
                <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all duration-300">
                  <Icon
                    size={20}
                    className="text-gold group-hover:scale-110 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-display font-semibold text-white text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                  {title}
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  {description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
