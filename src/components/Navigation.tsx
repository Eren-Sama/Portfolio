import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isManuallyScrolling, setIsManuallyScrolling] = useState(false)
  const { scrollY } = useScroll()

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tech', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    const handleScroll = () => {
      if (isManuallyScrolling) return // Skip automatic detection during manual scroll
      
      const sections = navItems.map(item => document.getElementById(item.id))
      const currentSection = sections.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    // Listen for manual navigation events from other components
    const handleManualNavigation = (event: CustomEvent) => {
      const { targetSection } = event.detail
      setActiveSection(targetSection)
      setIsManuallyScrolling(true)
      
      // Re-enable auto detection after scroll completes
      setTimeout(() => {
        setIsManuallyScrolling(false)
      }, 1500) // Increased timeout for smoother transition
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('manualNavigation', handleManualNavigation as EventListener)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('manualNavigation', handleManualNavigation as EventListener)
    }
  }, [isManuallyScrolling])

  const scrollToSection = (sectionId: string) => {
    // Set active section immediately and prevent auto-detection
    setActiveSection(sectionId)
    setIsManuallyScrolling(true)
    
    const element = document.getElementById(sectionId)
    if (element) {
      // Use Lenis scrollTo for smooth scrolling if available
      const lenis = (window as any).lenis
      if (lenis) {
        lenis.scrollTo(element, { offset: -80 })
      } else {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      
      // Re-enable auto detection after scroll completes
      setTimeout(() => {
        setIsManuallyScrolling(false)
      }, 1500) // Increased timeout for smoother transition
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        width: '100%',
      }}
    >
      <div className="flex items-center justify-center w-full px-3 sm:px-4 py-3 sm:py-3 md:py-5">
        <motion.div 
          className={`relative transition-all duration-700 ease-in-out ${
            isScrolled 
              ? 'backdrop-blur-xl shadow-2xl shadow-crimson-500/15' 
              : 'backdrop-blur-lg shadow-lg shadow-crimson-500/10'
          } rounded-full sm:rounded-2xl md:rounded-full px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-2.5 md:py-3 w-fit sm:w-full md:w-auto max-w-4xl mx-auto border border-white/10`}
          style={{
            borderRadius: window.innerWidth <= 640 ? '9999px' : '',
            width: window.innerWidth <= 640 ? 'fit-content' : '',
            margin: window.innerWidth <= 640 ? '0 auto' : '',
          }}
          whileHover={{ 
            scale: 1.005,
            background: 'rgba(139, 0, 0, 0.18)'
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Centered Navigation Layout */}
          <div className="flex items-center justify-center w-full">
            {/* Navigation items - Centered with proper spacing */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ 
                    scale: 1.05,
                    y: -1,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-all duration-500 ease-in-out rounded-full sm:rounded-xl md:rounded-full ${
                    activeSection === item.id
                      ? 'text-white shadow-lg shadow-crimson-500/25'
                      : 'text-gray-300 hover:text-white hover:shadow-md hover:shadow-crimson-500/15'
                  }`}
                  style={{
                    borderRadius: window.innerWidth <= 640 ? '9999px' : '',
                  }}
                >
                  <span className="relative z-10 whitespace-nowrap">{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute inset-0 bg-gradient-to-r from-crimson-500/30 to-red-600/30 ${window.innerWidth <= 640 ? 'rounded-full' : 'rounded-lg sm:rounded-xl md:rounded-full'}`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation
