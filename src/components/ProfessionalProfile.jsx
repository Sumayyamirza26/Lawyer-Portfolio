import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/content'
import { Scale, Award, Users, BookOpen } from 'lucide-react'

const pillars = [
  { icon: Scale, label: 'Legal Representation' },
  { icon: Award, label: 'Professional Excellence' },
  { icon: Users, label: 'Client Advocacy' },
  { icon: BookOpen, label: 'Legal Advisory' },
]

export default function ProfessionalProfile() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef}
      className="bg-navy section-padding overflow-hidden"
      aria-label="Professional Profile"
    >
      <div className="container-max">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left content – 3 cols */}
          <div className="lg:col-span-3">
            <p className="section-eyebrow reveal">Professional Profile</p>
            <h2 className="section-title-light mb-2 reveal delay-100">
              {profile.role}
            </h2>
            <p
              className="font-body text-gold text-lg font-medium mb-6 reveal delay-200"
            >
              {profile.firm}
            </p>
            <div className="gold-line mb-8 reveal delay-200" aria-hidden="true" />
            <p className="font-body text-white/60 leading-relaxed max-w-lg reveal delay-300">
              {profile.description}
            </p>

            {/* Pillar grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {pillars.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 border border-white/10 px-5 py-4 group hover:border-gold/40 transition-colors duration-300 reveal delay-${(i + 3) * 100}`}
                >
                  <Icon
                    size={16}
                    className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                    aria-hidden="true"
                  />
                  <span className="font-body text-white/70 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – decorative card – 2 cols */}
          <div className="lg:col-span-2 reveal-right delay-300">
            <div className="relative">
              {/* Main card */}
              <div className="border border-gold/20 p-8 bg-white/3 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="font-body text-gold/60 text-[10px] uppercase tracking-[0.2em] mb-1">
                      Established
                    </p>
                    <p className="font-display text-white font-bold text-2xl">
                      Sajad Mir
                    </p>
                    <p className="font-body text-white/40 text-sm">& Associates</p>
                  </div>
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center">
                    <Scale size={20} className="text-gold" aria-hidden="true" />
                  </div>
                </div>

                <div
                  className="w-full h-px bg-gradient-to-r from-gold/40 to-transparent mb-6"
                  aria-hidden="true"
                />

                <p className="font-display italic text-white/60 text-sm leading-relaxed mb-6">
                  "A practice built on integrity, diligence, and an unwavering commitment to client success."
                </p>

                <div className="space-y-3">
                  {['Civil & Criminal Matters', 'Family & Property Law', 'Business Advisory'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-gold/60 flex-shrink-0" aria-hidden="true" />
                      <p className="font-body text-white/50 text-xs">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner ornaments */}
              <div
                className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-gold/50"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-gold/50"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
