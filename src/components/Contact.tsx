import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Instagram, Twitter, Send, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import { BidirectionalAnimation } from './BidirectionalAnimation'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/Eren-Sama/', 
      color: 'hover:text-gray-300',
      bg: 'hover:bg-gray-800/20'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/eklavya16/', 
      color: 'hover:text-blue-400',
      bg: 'hover:bg-blue-500/20'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://instagram.com/noxiousweeb', 
      color: 'hover:text-pink-400',
      bg: 'hover:bg-pink-500/20'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://x.com/itsweebdom', 
      color: 'hover:text-cyan-400',
      bg: 'hover:bg-cyan-500/20'
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'eklavya1675@gmail.com' // Official email
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      
      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    <div className="min-h-screen py-12 px-4 md:py-20 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <BidirectionalAnimation animationType="fadeUp" delay={0.1}>
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-wider font-orbitron relative">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent relative z-10">
                Contact Me
              </span>
              {/* Sharp red glow layers */}
              <div className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-red-700 blur-sm opacity-50">
                Contact Me
              </div>
              <div className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-red-600 blur-lg opacity-25">
                Contact Me
              </div>
            </h2>
            <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto font-cinzel tracking-wide px-4">
              Let's build the future together. Ready to ship your next big thing?
            </p>
          </div>
        </BidirectionalAnimation>

        <BidirectionalAnimation animationType="scale" delay={0.3}>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 md:mb-6 text-center lg:text-left">
                Let's start a conversation
              </h3>
              
              <div className="space-y-3 md:space-y-4">
                {/* Mobile: Premium stacked cards */}
                <div className="flex flex-col gap-3 sm:hidden">
                  <div className="glass-morphism rounded-2xl px-4 py-3 flex flex-col items-center text-center shadow-lg border border-white/10">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-500 rounded-xl flex items-center justify-center mb-2">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-gray-400 text-xs mb-1">Email</div>
                    <div className="text-white font-medium text-sm">eklavya1675@gmail.com</div>
                  </div>
                  <div className="glass-morphism rounded-2xl px-4 py-3 flex flex-col items-center text-center shadow-lg border border-white/10">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-700 rounded-xl flex items-center justify-center mb-2">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-gray-400 text-xs mb-1">Location</div>
                    <div className="text-white font-medium text-sm">Varanasi, Uttar Pradesh</div>
                  </div>
                  <div className="glass-morphism rounded-2xl px-4 py-3 flex flex-col items-center text-center shadow-lg border border-white/10">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-700 to-red-600 rounded-xl flex items-center justify-center mb-2">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-gray-400 text-xs mb-1">Timezone</div>
                    <div className="text-white font-medium text-sm flex flex-col items-center gap-1">
                      IST (UTC +5:30)
                      <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mt-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-white text-xs font-medium">Available</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Desktop: Original layout */}
                <div className="hidden sm:block">
                  {/* ...existing code for desktop ... */}
                  <div className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-gray-400 text-xs md:text-sm">Email</div>
                      <div className="text-white font-medium text-sm md:text-base">eklavya1675@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start mt-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-xl flex items-center justify-center">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-gray-400 text-xs md:text-sm">Location</div>
                      <div className="text-white font-medium text-sm md:text-base">Varanasi, Uttar Pradesh</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start mt-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-700 to-red-600 rounded-xl flex items-center justify-center">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-gray-400 text-xs md:text-sm">Timezone</div>
                      <div className="text-white font-medium text-sm md:text-base flex items-center gap-2 justify-center lg:justify-start">
                        IST (UTC +5:30)
                        <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span className="text-white text-xs md:text-sm font-medium">Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Follow me</h4>
              <div className="flex gap-3 md:gap-4 justify-center lg:justify-start">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.1,
                        y: -5
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`group w-12 h-12 md:w-14 md:h-14 glass-morphism rounded-xl flex items-center justify-center border border-white/10 transition-all duration-300 ${social.bg} hover:border-white/20`}
                    >
                      <Icon className={`w-5 h-5 md:w-6 md:h-6 text-gray-400 transition-colors duration-300 ${social.color}`} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Fun Call-to-Action */}
            <motion.div 
              variants={itemVariants}
              className="glass-morphism rounded-2xl p-4 md:p-6 border border-red-500/20"
            >
              <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3 flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-xl md:text-2xl">🚀</span>
                Quick Connect
              </h4>
              <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 text-center lg:text-left">
                Have a quick question or just want to say hi? Feel free to reach out on any platform!
              </p>
              <div className="flex flex-col sm:flex-row gap-2 text-xs justify-center lg:justify-start">
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-center">Usually responds within 24h</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-center">Open to collaborations</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/3 to-white/5 rounded-3xl blur-xl"></div>
            
            <div className="relative glass-morphism rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                    Send me a message
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    Let's discuss your project and bring your ideas to life
                  </p>
                </div>

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-gray-300/50 focus:outline-none focus:ring-2 focus:ring-gray-300/20 transition-all duration-300 text-sm md:text-base"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-gray-300/50 focus:outline-none focus:ring-2 focus:ring-gray-300/20 transition-all duration-300 text-sm md:text-base"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-gray-300/50 focus:outline-none focus:ring-2 focus:ring-gray-300/20 transition-all duration-300 resize-none text-sm md:text-base"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 md:p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-sm md:text-base"
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 md:p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-sm md:text-base"
                  >
                    ❌ Failed to send message. Please try again or contact me directly.
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/30 hover:border-white/50 px-6 md:px-8 py-3 md:py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 md:gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base hover:bg-white/20"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 md:w-5 md:h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-center text-gray-400 text-xs md:text-sm">
                  I'll get back to you within 24 hours. Usually faster! ⚡
                </p>
              </form>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-8 h-8 md:w-12 md:h-12 bg-white/5 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-10 h-10 md:w-16 md:h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          </motion.div>
        </div>
        </BidirectionalAnimation>
      </div>
    </div>
  )
}

export default Contact
