
import { motion } from 'framer-motion'
// Removed unused lucide-react imports
import { BidirectionalAnimation } from './BidirectionalAnimation'
// @ts-ignore
import aboutMeImg from '../Shujinko/About--Me.jpg'

const About = () => {
  // Removed stats

  // Removed unused scrollToContact function

  return (
    <div className="py-12 px-4 md:py-24 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <BidirectionalAnimation animationType="fadeUp" delay={0.1}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-wider font-orbitron relative">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent relative z-10">
                About Me
              </span>
              {/* Sharp red glow layers */}
              <div className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-red-700 blur-sm opacity-50">
                About Me
              </div>
              <div className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-red-600 blur-lg opacity-25">
                About Me
              </div>
            </h2>
            <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto font-cinzel tracking-wide px-4">
              Passionate developer crafting digital experiences with creativity and precision
            </p>
          </div>
        </BidirectionalAnimation>

        {/* Main Content with Image */}
        <BidirectionalAnimation animationType="scale" delay={0.3}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            {/* Image Section */}
            <BidirectionalAnimation animationType="fadeLeft" delay={0.5} className="flex justify-center order-1 lg:order-1">
              <div className="relative">
                {/* Main image container with About Me.jpg and shiny animation */}
                <motion.div 
                  className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-sm relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={aboutMeImg}
                    alt="About Me"
                    className="w-full h-full object-cover rounded-2xl shadow-lg z-10"
                    loading="lazy"
                  />
                  {/* Shiny diagonal animation from bottom left to top right */}
                  <motion.div
                    className="absolute left-0 top-0 w-full h-full pointer-events-none z-20"
                    initial={{ x: -180, y: 180, opacity: 0.7, rotate: -25 }}
                    animate={{ x: 180, y: -180, opacity: [0.7, 0.2, 0] }}
                    transition={{ duration: 1.6, ease: 'easeInOut' }}
                    style={{
                      background: 'linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.45) 50%, transparent 60%)',
                      width: '120%',
                      height: '120%',
                      borderRadius: '1rem',
                    }}
                  />
                </motion.div>
              </div>
            </BidirectionalAnimation>

            {/* Description */}
            <BidirectionalAnimation animationType="fadeRight" delay={0.7} className="space-y-4 md:space-y-6 order-2 lg:order-2 text-center lg:text-left px-4 lg:px-0">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-mono max-w-3xl mx-auto lg:mx-0">
                Hi, I'm a frontend developer who loves turning complex ideas into clean, responsive interfaces—usually with React, TypeScript, and a passion for great design. 
                I enjoy breaking things just to understand how they work, then rebuilding them smarter and faster.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed font-cinzel max-w-2xl tracking-wide mx-auto lg:mx-0">
                Beyond the UI, I'm deeply curious about machine learning and always exploring how to blend intelligent systems with intuitive user experiences. 
                I'm always eager to learn new things, and when I'm not coding, you'll probably find me immersed in sound discovering new music or creating something fresh.
              </p>
            </BidirectionalAnimation>
          </div>
        </BidirectionalAnimation>

        {/* Stats removed as requested */}

        {/* Call to Action removed as requested */}
      </div>
    </div>
  )
}

export default About

