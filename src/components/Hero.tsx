import { motion } from 'framer-motion'
import { Eye, Mail, ArrowDown } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "Bringing ideas to life through AI, design & code."
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 50)
    
    return () => clearInterval(timer)
  }, [])

  const scrollToContact = () => {
    // Dispatch custom event to notify navbar about manual navigation
    window.dispatchEvent(new CustomEvent('manualNavigation', { 
      detail: { targetSection: 'contact' } 
    }))
    
    const element = document.getElementById('contact')
    if (element) {
      // Use Lenis scrollTo for smooth scrolling if available
      const lenis = (window as any).lenis
      if (lenis) {
        lenis.scrollTo(element, { offset: -80 })
      } else {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative px-3 sm:px-4 md:px-6 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl mx-auto w-full flex flex-col items-center justify-center min-h-screen py-16 sm:py-20"
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 md:mb-8"
        >
          <div className="w-2 h-2 bg-neon-crimson rounded-full animate-pulse"></div>
          <span className="text-xs sm:text-sm text-gray-400">Available for collaborations</span>
        </motion.div>

        {/* Main Heading - Cinematic fonts */}
        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-orbitron font-light mb-3 sm:mb-4 md:mb-6 leading-tight tracking-wider text-center px-2"
        >
          <span className="text-white">Hajimemashite, </span>
          <span className="bg-gradient-to-r from-neon-crimson via-neon-red to-neon-orange bg-clip-text text-transparent font-medium">
            Eklavya Mohan Agrawal
          </span>
          <span className="text-white"> desu.</span>
        </motion.h1>

        {/* Typewriter Subheading - Cinzel font */}
        <motion.div
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 mb-3 sm:mb-4 md:mb-6 min-h-[1.5rem] sm:min-h-[2rem] md:min-h-[2.5rem] flex items-center justify-center font-cinzel tracking-wide text-center px-2"
        >
          <span>{text}</span>
          <span className="animate-pulse ml-1 text-neon-crimson">|</span>
        </motion.div>

        {/* Description - JetBrains Mono */}
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-mono text-center px-4"
        >
          Smart. Sleek. Seamless.
        </motion.p>

        {/* CTA Buttons - Orbitron and Cinzel fonts */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 sm:mb-12 md:mb-20 w-full px-4 sm:px-0"
        >
          <motion.a
            href="https://drive.google.com/file/d/1DLlYioCcdodDdMOuz6ipCMBprJeRyNbx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 10px 30px rgba(220, 38, 38, 0.2)'
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 md:gap-3 bg-gradient-to-r from-neon-crimson to-neon-red px-5 sm:px-6 md:px-8 py-2.5 md:py-3 rounded-full text-white font-medium transition-all duration-300 font-orbitron tracking-wider text-sm md:text-base w-full sm:w-auto justify-center max-w-xs sm:max-w-none"
          >
            <Eye className="w-4 h-4" />
            View Resume
          </motion.a>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ 
              scale: 1.02,
              backgroundColor: 'rgba(220, 38, 38, 0.1)',
              borderColor: 'rgba(220, 38, 38, 0.5)'
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 md:gap-3 px-5 sm:px-6 md:px-8 py-2.5 md:py-3 rounded-full text-white font-medium transition-all duration-300 font-cinzel tracking-wide text-sm md:text-base w-full sm:w-auto justify-center max-w-xs sm:max-w-none border border-white/20 hover:border-red-500/50 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
