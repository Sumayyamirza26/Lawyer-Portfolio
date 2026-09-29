import { useReveal } from '../hooks/useReveal'
import { contact } from '../data/content'
import { Mail, Clock, MapPin, ArrowRight } from 'lucide-react'

export default function Contact() {
  const sectionRef = useReveal()

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-navy"
      aria-labelledby="contact-heading"
    >
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="section-eyebrow reveal">Get in Touch</p>
            <h2
              id="contact-heading"
              className="section-title-light mb-4 reveal delay-100"
            >
              {contact.heading}
            </h2>
            <div className="gold-line mb-8 reveal delay-200" aria-hidden="true" />
            <p className="font-body text-white/60 leading-relaxed max-w-md mb-10 reveal delay-300">
              {contact.subheading}
            </p>

            {/* Contact info items */}
            <div className="space-y-5 reveal delay-400">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 group"
                aria-label={`Email: ${contact.email}`}
              >
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-200">
                  <Mail size={16} className="text-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body text-[10px] uppercase tracking-wider text-white/30 mb-0.5">Email</p>
                  <p className="font-body text-white/80 text-sm group-hover:text-gold transition-colors duration-200">
                    {contact.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-white/40" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body text-[10px] uppercase tracking-wider text-white/30 mb-0.5">
                    Consultation Hours
                  </p>
                  <p className="font-body text-white/60 text-sm">
                    Mon – Sat, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-white/40" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body text-[10px] uppercase tracking-wider text-white/30 mb-0.5">
                    Location
                  </p>
                  <p className="font-body text-white/60 text-sm">Kashmir, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right – CTA banner card */}
          <div className="reveal-right delay-200">
            <div className="relative border border-white/10 bg-white/3 backdrop-blur-sm p-10 lg:p-12">
              {/* Gold corner ornaments */}
              <div
                className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold"
                aria-hidden="true"
              />

              <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-4">
                Ready to Resolve
                <br />
                Your Legal Matter?
              </h3>
              <p className="font-body text-white/50 text-sm leading-relaxed mb-8">
                Schedule a confidential consultation to discuss your case. Every client deserves expert
                guidance and a clear path forward.
              </p>

              {/* Process steps */}
              <div className="space-y-4 mb-10">
                {[
                  'Reach out via email or inquiry form',
                  'Schedule a confidential consultation',
                  'Receive clear, actionable legal guidance',
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-6 h-6 bg-gold/15 border border-gold/30 flex items-center justify-center font-body text-gold text-xs font-bold"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <p className="font-body text-white/60 text-sm pt-0.5">{step}</p>
                  </div>
                ))}
              </div>

              <a
                href={`mailto:${contact.email}`}
                className="btn-primary w-full justify-center group"
                aria-label="Send an email to book a consultation"
              >
                Book a Consultation
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
