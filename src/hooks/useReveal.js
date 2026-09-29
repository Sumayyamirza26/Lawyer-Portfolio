import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    // Observe the container and all reveal elements inside
    const elements = el.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    if (elements.length === 0) {
      // If no children, observe the element itself
      observer.observe(el)
    } else {
      elements.forEach((child) => observer.observe(child))
    }

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
