import { useReveal } from '../hooks/useReveal'
import { media } from '../data/content'

export default function MediaFeatures() {
  const sectionRef = useReveal()

  return (
    <section
      id="media"
      ref={sectionRef}
      className="section-padding bg-surface"
      aria-labelledby="media-heading"
    >
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="media-heading" className="section-title reveal delay-100">
            Featured On {media.platform}
          </h2>
          <p className="font-body text-charcoal/70 leading-relaxed mt-6 reveal delay-200">
            {media.description}
          </p>
        </div>
      </div>
    </section>
  )
}

