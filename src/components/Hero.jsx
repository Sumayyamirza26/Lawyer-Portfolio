import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'
import { hero } from '../data/content'

import portraitPlaceholder from '../assets/images/image.png'

export default function Hero() {
  const scrollRef = useRef(null)

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy pt-20 pb-12"
      aria-label="Hero section"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(212,175,55,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Vertical gold lines */}
      <div
        className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[45%_55%] gap-10 lg:gap-14 items-stretch">
          {/* Left portrait */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[390px] sm:max-w-[430px] lg:max-w-[490px]">
              {/* Radial glow behind portrait */}
              <div
                className="absolute -inset-10 opacity-100"
                aria-hidden="true"
                style={{
                  background:
                    'radial-gradient(ellipse 55% 55% at 50% 35%, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.06) 35%, transparent 70%)',
                }}
              />

              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                whileHover={{ scale: 1.01 }}
                className="relative z-10"
              >
                <div
                  className="rounded-none border border-gold/30 bg-white/5 backdrop-blur-sm shadow-gold-lg overflow-hidden"
                  style={{ boxShadow: '0 8px 56px rgba(212,175,55,0.13)' }}
                >
                  {/* Glass highlight */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    aria-hidden="true"
                    style={{
                      background:
                        'linear-gradient(120deg, rgba(212,175,55,0.14) 0%, rgba(212,175,55,0.04) 35%, rgba(255,255,255,0.02) 60%, transparent 80%)',
                    }}
                  />

                  {/* Image frame */}
                  <motion.div
                    aria-hidden="true"
                    initial={{ y: 8 }}
                    animate={{ y: [8, 2, 8] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="p-2"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-none bg-navy" style={{ minHeight: 520 }} >
                      <img
                        src={portraitPlaceholder}
                        alt="Adv. Sajad Ahmad Mir"
                        className="absolute inset-0 w-full h-full object-cover scale-90"
                      />
                      {/* soft vignette */}
                      <div
                        className="absolute inset-0"
                        aria-hidden="true"
                        style={{
                          background:
                            'radial-gradient(ellipse 70% 60% at 50% 30%, transparent 0%, rgba(15,23,42,0.35) 70%, rgba(15,23,42,0.65) 100%)',
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Founder nameplate card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.35 }}
                className="mt-5"
              >
                <div className="border border-gold/30 bg-white/5 backdrop-blur-sm px-6 py-4 flex items-center justify-center gap-2.5">
                  <Scale size={13} className="text-gold" aria-hidden="true" />
                  <span className="font-body text-gold/80 text-[10.5px] uppercase tracking-[0.2em] font-semibold">
                    {hero.firm}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right content */}
          <div className="flex items-center">
            <div className="w-full max-w-[640px] mx-auto text-center">
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
                className="font-display font-bold text-white"
                style={{
                  fontSize: 'clamp(2.1rem, 6vw, 4.2rem)',
                  lineHeight: 1.05,
                  marginBottom: '12px',
                }}
              >
                Adv. Sajad
                <br />
                <span
                  className="gold-gradient-text"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37 0%, #E8C84A 45%, #B8962B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Ahmad Mir
                </span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: 0.33 }}
                className="font-body text-white/50 text-xs uppercase tracking-[0.3em] mb-5"
                style={{ lineHeight: 1.4 }}
                aria-label="Advocate, Legal Consultant, Public Speaker"
              >
                {hero.tagline}
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: 0.4 }}
                className="flex items-center justify-center gap-4 mb-6"
                aria-hidden="true"
              >
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold/40" />
                <div className="w-1.5 h-1.5 bg-gold/60 rotate-45" />
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold/40" />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: 0.48 }}
                className="font-body text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
              >
                {hero.description}
              </motion.p>

              

              {/* Media tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: 0.7 }}
                className="mt-12 flex justify-center"
              >
                <div className="inline-flex items-center gap-2.5">
                  <span className="w-4 h-px bg-gold/40" aria-hidden="true" />
                  <span className="font-body text-white/35 text-xs">{hero.media}</span>
                  <span className="w-4 h-px bg-gold/40" aria-hidden="true" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

