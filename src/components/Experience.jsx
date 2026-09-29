import { useReveal } from '../hooks/useReveal'
import { experience } from '../data/content'

export default function Experience() {
  const sectionRef = useReveal()

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding bg-navy overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="section-eyebrow reveal">My Journey</p>
          <h2
            id="experience-heading"
            className="section-title-light mb-4 reveal delay-100"
          >
            Experience &
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #B8962B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Expertise
            </span>
          </h2>
          <div className="gold-line reveal delay-200" aria-hidden="true" />
        </div>

        {/* Timeline */}
        <div className="relative" aria-label="Career timeline">
          {/* Vertical line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden sm:block"
            aria-hidden="true"
          />

          <ol className="space-y-0">
            {experience.map(({ year, title, description }, i) => {
              const isEven = i % 2 === 0
              return (
                <li
                  key={title}
                  className={`relative grid sm:grid-cols-2 gap-0 ${
                    isEven ? '' : ''
                  }`}
                >
                  {/* Even: left content, right empty / Odd: left empty, right content */}
                  <div
                    className={`pb-12 sm:pb-16 ${
                      isEven
                        ? `sm:pr-16 text-left reveal delay-${i * 100}`
                        : `sm:col-start-2 sm:pl-16 text-left reveal delay-${i * 100}`
                    }`}
                  >
                    <div className="bg-white/5 border border-white/10 p-7 group hover:border-gold/30 transition-colors duration-300">
                      {/* Year tag */}
                      <span className="inline-block font-body text-[10px] uppercase tracking-[0.2em] text-gold/70 border border-gold/20 px-3 py-1 mb-4">
                        {year}
                      </span>
                      <h3 className="font-display font-semibold text-white text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                        {title}
                      </h3>
                      <p className="font-body text-white/50 text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 top-7 w-3 h-3 bg-gold border-4 border-navy rounded-full z-10 hidden sm:block"
                    aria-hidden="true"
                  />
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
