import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { about, stats } from '../data/content'

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 50
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export default function About() {
  const sectionRef = useReveal()
  const paragraphs = about.body.split('\n\n')

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-surface"
      aria-labelledby="about-heading"
    >
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left – text */}
          <div>
            <p className="section-eyebrow reveal">{about.eyebrow}</p>
            <h2
              id="about-heading"
              className="section-title mb-6 reveal delay-100"
            >
              A Practitioner
              <br />
              <em className="not-italic"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37, #B8962B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Dedicated to Justice
              </em>
            </h2>
            <div className="gold-line mb-8 reveal delay-200" aria-hidden="true" />

            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`font-body text-charcoal/70 leading-relaxed mb-5 reveal delay-${(i + 2) * 100}`}
              >
                {p}
              </p>
            ))}

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline-dark mt-4 reveal delay-400"
            >
              Get in Touch
            </button>
          </div>

          {/* Right – stats + accent box */}
          <div className="relative">
            {/* Gold accent block */}
            <div
              className="absolute -top-6 -right-6 w-48 h-48 border border-gold/15 hidden lg:block"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/5 hidden lg:block"
              aria-hidden="true"
            />

            {/* Stats grid */}
            <div className="relative grid grid-cols-2 gap-px bg-navy/10 reveal delay-200">
              {stats.map(({ value, suffix, label }) => (
                <div
                  key={label}
                  className="bg-white p-8 flex flex-col items-center justify-center text-center group hover:bg-navy transition-colors duration-400"
                >
                  <p className="font-display font-bold text-4xl md:text-5xl text-navy group-hover:text-gold transition-colors duration-400 mb-2">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </p>
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-charcoal/50 group-hover:text-white/50 transition-colors duration-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote strip */}
            <div
              className="bg-navy px-8 py-6 flex items-center gap-4 mt-px reveal delay-300"
            >
              <div className="w-1 h-10 bg-gold flex-shrink-0" aria-hidden="true" />
              <p className="font-display italic text-white/80 text-sm leading-relaxed">
                "Making legal services accessible, understandable, and effective for every client."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
