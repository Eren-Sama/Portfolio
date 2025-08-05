import { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Lenis from 'lenis'

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenis

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      {/* Dual-color scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-crimson via-neon-red to-neon-crimson origin-left"
          style={{ scaleX }}
        />
        {/* Secondary glow layer */}
        <motion.div
          className="absolute top-0 h-full bg-gradient-to-r from-neon-crimson/50 via-neon-red/50 to-neon-crimson/50 origin-left blur-sm"
          style={{ scaleX }}
        />
      </div>

      {/* Circular scroll indicator */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative w-16 h-16">
          {/* Background circle */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="4"
            />
            {/* Progress circle with dual colors */}
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="url(#scrollGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 28}
              style={{
                strokeDashoffset: useSpring(
                  scrollYProgress.get() === 0 
                    ? 2 * Math.PI * 28 
                    : 2 * Math.PI * 28 - (scrollYProgress.get() * 2 * Math.PI * 28),
                  { stiffness: 100, damping: 30 }
                )
              }}
            />
            {/* Gradient definition */}
            <defs>
              <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span 
              className="text-xs font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(scrollYProgress.get() * 100)}%
            </motion.span>
          </div>

          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-crimson/20 to-neon-red/20 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.2 }}
          />
        </div>
      </div>

      {children}
    </>
  )
}

export default SmoothScroll
