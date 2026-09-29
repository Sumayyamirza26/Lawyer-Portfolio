import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

export default function LoadingScreen({ onDone }) {
  const [mounted, setMounted] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => {
      setDone(true)
      window.setTimeout(() => {
        onDone?.()
      }, 350)
    }, 1200)

    setMounted(true)
    return () => {
      window.clearTimeout(t)
    }
  }, [onDone])

  const seed = useMemo(() => Math.random().toString(16).slice(2), [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key={`loading-${seed}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-[999] bg-navy flex items-center justify-center overflow-hidden"
          role="status"
          aria-live="polite"
        >
          {/* animated background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 50% 35% at 50% 40%, rgba(212,175,55,0.18) 0%, rgba(15,23,42,0) 70%)',
            }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute inset-0"
            initial={{ backgroundPosition: '0% 0%' }}
            animate={{ backgroundPosition: '100% 0%' }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0.18) 50%, rgba(212,175,55,0) 100%)',
              backgroundSize: '200% 100%',
            }}
          />

          <div className="relative w-full max-w-md px-6">
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: mounted ? 0 : 0.05 }}
              className="rounded-none border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center shadow-navy"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold shadow-gold animate-pulse" />
                </div>
              </div>

              <p className="font-body text-white/70 text-xs uppercase tracking-[0.25em] mb-6">
                Preparing the chamber
              </p>

              <div className="h-1 w-full bg-white/10 overflow-hidden">
                <motion.div
                  aria-hidden="true"
                  className="h-full bg-gradient-to-r from-gold/40 via-gold to-gold/40"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.05, ease: 'easeInOut', repeat: Infinity }}
                />
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-gold/80"
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

