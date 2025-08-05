import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
import { Github, Mail, Linkedin } from 'lucide-react'
import Lenis from 'lenis'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
    })

    // Make Lenis available globally for navigation
    ;(window as any).lenis = lenis

    // Animation frame for smooth scrolling
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cinematic creative loading effect
    const timer = setTimeout(() => setLoading(false), 4500)
    return () => {
      clearTimeout(timer)
      lenis.destroy()
      ;(window as any).lenis = null
    }
  }, [])
  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden" style={{
        background: `radial-gradient(ellipse 100% 120% at 50% 100%, rgba(75,29,63,0.9) 0%, rgba(45,25,35,0.6) 25%, rgba(25,15,20,0.4) 40%, rgba(15,10,15,0.2) 60%, transparent 80%), #000000`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        minHeight: '100vh',
      }}>
        {/* Cinematic premium loading screen */}
        <div className="relative flex flex-col items-center justify-center gap-12 sm:gap-16 px-4 py-8">
          {/* Premium typography showcase */}
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="relative pb-4">
              <div className="text-6xl sm:text-6xl md:text-8xl lg:text-9xl font-light bg-gradient-to-br from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-titleReveal tracking-tight" style={{ fontFamily: 'Imperial Script, cursive', lineHeight: '1.1' }}>
                Eklavya
              </div>
              {/* Subtle shadow layer for depth */}
              <div className="absolute inset-0 text-6xl sm:text-6xl md:text-8xl lg:text-9xl font-light text-red-500/20 blur-2xl animate-titleReveal tracking-tight" style={{ fontFamily: 'Imperial Script, cursive', animationDelay: '0.3s', lineHeight: '1.1' }}>
                Eklavya
              </div>
            </div>
            
            <div className="relative space-y-4 sm:space-y-6">
              <div className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-cinzel text-white/95 tracking-[0.2rem] sm:tracking-[0.4rem] md:tracking-[0.6rem] lg:tracking-[0.8rem] font-medium animate-subtitleSlide whitespace-nowrap" style={{ animationDelay: '0.8s' }}>
                DEVELOPER · DESIGNER
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-cinzel text-red-300/80 tracking-[0.15rem] sm:tracking-[0.2rem] md:tracking-[0.4rem] lg:tracking-[0.5rem] font-light animate-subtitleSlide whitespace-nowrap" style={{ animationDelay: '1.2s' }}>
                CRAFTING EXPERIENCE
              </div>
            </div>
          </div>
          
          {/* Refined elegant loading bar */}
          <div className="relative w-[280px] sm:w-[400px] h-[1px] bg-white/8 rounded-full overflow-hidden animate-fadeIn" style={{ animationDelay: '1.6s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/40 to-transparent animate-shimmer"></div>
            <div className="h-full bg-gradient-to-r from-red-600/70 via-red-500/80 to-red-600/70 rounded-full animate-progressBarCinematic shadow-sm shadow-red-500/30"></div>
          </div>
          
          {/* Simple status indicator */}
          <div className="text-center animate-fadeIn" style={{ animationDelay: '2.2s' }}>
            <div className="text-xs font-cinzel text-gray-300/70 tracking-[0.2rem] sm:tracking-[0.3rem] font-light">
              E N T E R I N G
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes titleReveal {
            0% { 
              opacity: 0; 
              transform: translateY(40px) scale(0.95);
              filter: blur(5px);
            }
            70% {
              opacity: 0.8;
              filter: blur(1px);
            }
            100% { 
              opacity: 1; 
              transform: translateY(0) scale(1);
              filter: blur(0px);
            }
          }
          
          @keyframes subtitleSlide {
            0% { 
              opacity: 0; 
              transform: translateY(30px);
              letter-spacing: 1rem;
            }
            100% { 
              opacity: 1; 
              transform: translateY(0);
              letter-spacing: 0.6rem;
            }
          }
          
          @keyframes progressBarCinematic {
            0% { 
              transform: translateX(-100%); 
            }
            100% { 
              transform: translateX(0);
            }
          }
          
          @keyframes shimmer {
            0% { 
              transform: translateX(-100%); 
            }
            100% { 
              transform: translateX(300%);
            }
          }
          
          @keyframes fadeIn {
            0% { 
              opacity: 0; 
              transform: translateY(20px); 
            }
            100% { 
              opacity: 1; 
              transform: translateY(0);
            }
          }
          
          .animate-titleReveal {
            animation: titleReveal 2.2s cubic-bezier(0.4, 0, 0.2, 1) both;
          }
          
          .animate-subtitleSlide {
            animation: subtitleSlide 1.8s cubic-bezier(0.4, 0, 0.2, 1) both;
          }
          
          .animate-progressBarCinematic {
            animation: progressBarCinematic 3.5s cubic-bezier(0.4, 0, 0.2, 1) both;
            animation-delay: 1.6s;
          }
          
          .animate-shimmer {
            animation: shimmer 4s ease-in-out infinite;
            animation-delay: 1.6s;
          }
          
          .animate-fadeIn {
            animation: fadeIn 1.2s ease-out both;
          }
        `}</style>
      </div>
    )
  }
  return (
    <div 
      className="min-h-screen text-white relative"
      style={{ backgroundColor: 'transparent' }}
    >
      <Navigation />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="tech"><TechStack /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <footer
        className="w-full bg-black/40 backdrop-blur-lg border-t border-white/10 px-8 sm:px-32 py-6"
      >
        <div
          className="w-full flex flex-col items-center justify-center gap-2 sm:gap-0 sm:grid sm:grid-cols-3 sm:items-center"
          style={{ minHeight: '80px', overflow: 'visible' }}
        >
          {/* Mobile: stacked layout, Desktop: grid left/center/right */}
          {/* Name/Logo */}
          <div className="flex items-center justify-center w-full sm:justify-start sm:pl-0 h-full mb-1 sm:mb-0" style={{ overflow: 'visible', paddingBottom: '8px' }}>
            <span
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent select-none tracking-wide leading-relaxed"
              style={{ fontFamily: 'Imperial Script, cursive', display: 'inline-block', lineHeight: '1.4' }}
            >
              Eklavya
            </span>
          </div>
          {/* Social Icons: mobile below name, desktop right aligned */}
          <div className="flex items-center justify-center gap-4 w-full mb-2 sm:mb-0 sm:justify-end sm:pr-0 sm:order-3">
            <a href="https://github.com/Eren-Sama/" target="_blank" rel="noopener noreferrer" className="group">
              <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            <a href="mailto:eklavya1675@gmail.com" target="_blank" rel="noopener noreferrer" className="group">
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/eklavya16/" target="_blank" rel="noopener noreferrer" className="group">
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
          {/* Made with ... and license: mobile at bottom, desktop center */}
          <div className="flex flex-col items-center justify-center text-center w-full mt-1 sm:mt-0 sm:col-span-1 sm:row-span-1 sm:mx-auto">
            <span className="flex items-center gap-2 text-gray-300 text-sm sm:text-base font-cinzel justify-center">
              Made with
              <span
                className="inline-block"
                onClick={e => {
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) {
                    if (svg.getAttribute('data-filled') === 'true') {
                      svg.querySelector('path')?.setAttribute('fill', 'none');
                      svg.querySelector('path')?.setAttribute('stroke', 'url(#footerHeartGradient)');
                      svg.querySelector('path')?.setAttribute('stroke-width', '1.1');
                      svg.querySelector('path')?.setAttribute('stroke-linecap', 'round');
                      svg.querySelector('path')?.removeAttribute('filter');
                      svg.setAttribute('data-filled', 'false');
                    } else {
                      svg.querySelector('path')?.setAttribute('fill', 'url(#footerHeartGradient)');
                      svg.querySelector('path')?.setAttribute('stroke', 'none');
                      svg.querySelector('path')?.setAttribute('filter', 'drop-shadow(0 2px 8px rgba(255,65,108,0.18))');
                      svg.setAttribute('data-filled', 'true');
                    }
                  }
                }}
              >
                {/* Premium Heart SVG: clean outline, no shadow or border in outline state, fills with gradient on click */}
                <svg width="24" height="24" viewBox="0 0 24 24" className="transition-all duration-300 cursor-pointer" data-filled="false">
                  <defs>
                    <linearGradient id="footerHeartGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ff4b2b" />
                      <stop offset="1" stopColor="#ff416c" />
                    </linearGradient>
                  </defs>
                  <path d="M12 20c-.22-.22-5.8-5.1-7.3-6.6A5 5 0 0 1 7.5 5c1.4 0 2.7.7 3.7 1.8C12.8 5.7 14.1 5 15.5 5a5 5 0 0 1 3.1 8.4c-1.5 1.5-7.08 6.38-7.3 6.6z" fill="none" stroke="url(#footerHeartGradient)" stroke-width="1.1" stroke-linecap="round" />
                </svg>
              </span>
              by <span
                className="cursor-pointer bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent font-bold"
                style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
                onClick={() => { if ((window as any).lenis) (window as any).lenis.scrollTo(0, { duration: 1.2 }); }}
              >Eklavya</span>
            </span>
            <span className="text-gray-500 text-xs mt-1">Think. Code. Ship.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

