import { motion } from 'framer-motion'
import NextFlixImg from '../Shujinko/NextFlix.png'
import DribbleeImg from '../Shujinko/Dribblee.png'
import XenoTicImg from '../Shujinko/XenoTic.png'
import VeltriXImg from '../Shujinko/VeltriX.png'
import { ExternalLink, Github, Sparkles, Brain, Zap } from 'lucide-react'
import { BidirectionalAnimation } from './BidirectionalAnimation'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'NextFlix',
      description: 'NextFlix is an AI-powered entertainment recommender that delivers personalized movie, series, and anime suggestions using natural language processing and real-time user preferences.',
      image: NextFlixImg,
      tags: ['Python', 'Flask', 'HTML/CSS', 'JavaScript', 'ML', 'Scikit-learn'],
      liveUrl: '',
      githubUrl: 'https://github.com/Eren-Sama/CODSOFT/tree/main/NextFlix',
      featured: true,
      status: 'Live',
      category: 'Full-Stack',
      highlights: [
        'AI-powered recommendation engine',
        'Real-time content filtering',
        'TF-IDF with SVD optimization',
        'Flask backend with REST APIs'
      ]
    },
    {
      id: 3,
      title: 'VeltriX',
      description: 'A lightweight, rule-based chatbot powered by basic Natural Language Processing, offering real-time responses for weather, jokes, quotes, and solves your mathematical queries through a modern, dynamic web interface.',
      image: VeltriXImg,
      tags: ['Python', 'Flask', 'HTML/CSS', 'OpenWeather API'],
      liveUrl: '',
      githubUrl: 'https://github.com/Eren-Sama/CODSOFT/tree/main/VeltriX',
      featured: false,
      madeWithAI: false,
      status: 'Deploying soon',
      category: 'Full-Stack',
      highlights: [
        'Rule-based chatbot',
        'NLP for query handling',
        'Weather, jokes, quotes, math',
        'Modern dynamic UI'
      ]
    },
    {
      id: 2,
      title: 'XenoTic',
      description: 'An AI-driven Tic Tac Toe game implementing the Minimax algorithm for optimal move prediction, ensuring unbeatable gameplay and a smooth, interactive experience.',
      image: XenoTicImg,
      tags: ['Python', 'HTML/CSS', 'JavaScript', 'Flask', 'ML'],
      liveUrl: 'https://xenotic.onrender.com/',
      githubUrl: 'https://github.com/Eren-Sama/CODSOFT/tree/main/XenoTic',
      featured: false,
      madeWithAI: true,
      status: 'Live',
      category: 'Full-Stack',
      highlights: [
        'Minimax algorithm for AI moves',
        'Unbeatable gameplay',
        'Interactive UI',
        'Real-time move prediction'
      ]
    },
    {
      id: 4,
      title: 'BoxOffice Buddy',
      description: 'BoxOffice Buddy is a PyQt5-based movie booking app for selecting movies, seats, and snacks. It generates QR-coded digital tickets with a smooth, user-friendly interface.',
      image: DribbleeImg,
      tags: ['Python', 'PyQT5'],
      liveUrl: '',
      githubUrl: 'https://github.com/Eren-Sama/BoxOffice-Buddy',
      featured: false,
      madeWithAI: false,
      status: 'Deploying soon',
      category: 'Full-Stack',
      highlights: [
        'Movie selection and seat booking',
        'Snack ordering',
        'QR-coded digital tickets',
        'PyQt5 smooth UI'
      ]
    }
    // {
    //   id: 4,
    //   title: 'E-Commerce Dashboard',
    //   description: 'Comprehensive admin dashboard for e-commerce with real-time analytics, inventory management, and sales tracking.',
    //   image: '/api/placeholder/600/400',
    //   tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Chart.js', 'Stripe'],
    //   liveUrl: 'https://ecommerce-dashboard-demo.vercel.app',
    //   githubUrl: 'https://github.com/hrithiksethia/ecommerce-dashboard',
    //   featured: true,
    //   madeWithAI: false,
    //   status: 'In Progress',
    //   category: 'Full-Stack',
    //   highlights: [
    //     'Real-time analytics',
    //     'Inventory management',
    //     'Payment integration',
    //     'Advanced filtering'
    //   ]
    // },
    // {
    //   id: 5,
    //   title: 'Chat App with AI Assistant',
    //   description: 'Real-time chat application with integrated AI assistant for smart replies and conversation insights.',
    //   image: '/api/placeholder/600/400',
    //   tags: ['Socket.io', 'React', 'OpenAI', 'Express', 'Redis'],
    //   liveUrl: 'https://ai-chat-app-demo.herokuapp.com',
    //   githubUrl: 'https://github.com/hrithiksethia/ai-chat-assistant',
    //   featured: false,
    //   madeWithAI: true,
    //   status: 'Live',
    //   category: 'Full-Stack',
    //   highlights: [
    //     'Real-time messaging',
    //     'AI-powered suggestions',
    //     'Message sentiment analysis',
    //     'File sharing'
    //   ]
    // },
    // {
    //   id: 6,
    //   title: 'Recipe Finder ML',
    //   description: 'Machine learning powered recipe recommendation system based on dietary preferences and available ingredients.',
    //   image: '/api/placeholder/600/400',
    //   tags: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL'],
    //   liveUrl: 'https://recipe-finder-ml.streamlit.app',
    //   githubUrl: 'https://github.com/hrithiksethia/recipe-finder-ml',
    //   featured: false,
    //   madeWithAI: true,
    //   status: 'Live',
    //   category: 'AI/ML',
    //   highlights: [
    //     'Ingredient-based matching',
    //     'Dietary preference learning',
    //     'Nutritional analysis',
    //     'Recipe rating prediction'
    //   ]
    // }
  ]


  // Find VeltriX and XenoTic projects
  const veltrixProject = projects.find(p => p.title === 'VeltriX')
  const xenoticProject = projects.find(p => p.title === 'XenoTic')
  const otherProjects = projects.filter(p => p.title !== 'VeltriX' && p.title !== 'XenoTic' && p.title !== 'NextFlix')

  // Custom grid order: VeltriX (left), XenoTic (center), then others
  const gridProjects = [veltrixProject, xenoticProject, ...otherProjects].filter((p): p is typeof projects[0] => !!p)

  const featuredProject = projects[0]

  return (
    <div className="min-h-screen py-12 px-4 md:py-20 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <BidirectionalAnimation animationType="fadeUp" delay={0.1}>
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-wider font-orbitron relative">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent relative z-10">
                My Projects
              </span>
              {/* Sharp red glow layers */}
              <div className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-red-700 blur-sm opacity-50">
                My Projects
              </div>
              <div className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-red-600 blur-lg opacity-25">
                My Projects
              </div>
            </h2>
            <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto font-cinzel tracking-wide px-4">
              Building solutions that make a difference, one commit at a time
            </p>
          </div>
        </BidirectionalAnimation>

        {/* Featured Project Showcase */}
        <BidirectionalAnimation animationType="scale" delay={0.3}>
          <div className="mb-12 md:mb-20">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl cinematic-container p-4 md:p-8">
            {/* Enhanced cinematic background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/8 via-transparent to-red-700/6"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-800/4 to-transparent"></div>
            
            <div className="relative grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
              {/* Project Info */}
              <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <span className="px-2 md:px-3 py-1 bg-red-700/20 border border-red-600/30 rounded-full text-xs md:text-sm text-red-400 font-medium">
                    Featured Project
                  </span>
                  {featuredProject.madeWithAI && (
                    <span className="px-2 md:px-3 py-1 bg-red-800/20 border border-red-700/30 rounded-full text-xs md:text-sm text-red-300 font-medium flex items-center gap-1">
                      <Brain className="w-3 h-3" />
                      Made with AI
                    </span>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-cinzel font-bold text-white tracking-wide">
                  {featuredProject.title}
                </h3>

                <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs md:text-sm font-semibold text-red-400 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {featuredProject.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 text-gray-300 text-xs md:text-sm"
                      >
                        <Zap className="w-3 h-3 text-red-400 flex-shrink-0" />
                        {highlight}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {featuredProject.tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-2 md:px-3 py-1 bg-dark-300/50 border border-white/10 rounded-full text-xs md:text-sm text-gray-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <motion.div
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-700 to-red-600 px-4 md:px-6 py-2.5 md:py-3 rounded-full text-white font-semibold opacity-60 cursor-not-allowed text-sm md:text-base"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Deploying soon
                  </motion.div>
                  <motion.a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 glass-morphism px-4 md:px-6 py-2.5 md:py-3 rounded-full text-white font-semibold border border-white/20 hover:border-red-500/50 transition-all duration-300 text-sm md:text-base"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                </div>
              </div>

              {/* Project Preview */}
              <div className="relative order-1 lg:order-2">
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-dark-300 to-dark-400 p-0 aspect-video flex items-center justify-center border border-white/10 glass-morphism shadow-lg"
                >
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title + ' preview'}
                    className="absolute inset-0 w-full h-full object-cover rounded-xl md:rounded-2xl"
                    style={{ zIndex: 0 }}
                  />
                </motion.div>
              </div>
            </div>
            </div>
          </div>
        </BidirectionalAnimation>


        {/* Projects Grid - VeltriX left, XenoTic center, others follow */}
        <BidirectionalAnimation animationType="fadeUp" delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {gridProjects.map((project, index) =>
              project ? (
                <BidirectionalAnimation key={project.id} animationType="fadeUp" delay={0.7 + index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="group relative"
                  >
                    {/* Gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-gray-300/20 to-white/20 rounded-2xl md:rounded-3xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                    <div className="relative cinematic-container rounded-2xl md:rounded-3xl overflow-hidden border border-white/8 group-hover:border-white/15 transition-all duration-300">
                      {/* Enhanced project image background */}
                      <div className="relative h-44 sm:h-36 md:h-48 bg-gradient-to-br from-dark-300/80 to-dark-400/80 flex items-center justify-center overflow-hidden">
                        {/* Cinematic overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-gray-400/3"></div>
                        {/* Project image for VeltriX and XenoTic */}
                        {project.title === 'VeltriX' && (
                          <img
                            src={project.image}
                            alt={project.title + ' preview'}
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                            style={{ zIndex: 0, objectPosition: 'center top' }}
                          />
                        )}
                        {project.title === 'XenoTic' && (
                          <img
                            src={project.image}
                            alt={project.title + ' preview'}
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                            style={{ zIndex: 0 }}
                          />
                        )}
                        {project.title === 'BoxOffice Buddy' && (
                          <img
                            src={project.image}
                            alt={project.title + ' preview'}
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                            style={{ zIndex: 0 }}
                          />
                        )}
                        <div className="relative text-2xl md:text-4xl z-10">
                          {(project.title === 'XenoTic' || project.title === 'VeltriX' || project.title === 'BoxOffice Buddy') ? null : project.category === 'AI/ML' ? '🧠' : project.category === 'Full-Stack' ? '🌐' : '🎨'}
                        </div>
                        {/* Status badge */}
                        <div className={`absolute top-2 md:top-4 right-2 md:right-4 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full text-xs font-medium ${
                          project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                          'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}>
                          {project.status}
                        </div>
                        {/* AI badge */}
                        {project.madeWithAI && (
                          <div className="absolute top-2 md:top-4 left-2 md:left-4 px-1.5 md:px-2 py-0.5 md:py-1 bg-gray-700/20 border border-gray-600/30 rounded-full text-xs text-gray-300 font-medium flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3" />
                            AI
                          </div>
                        )}
                      </div>

                      {/* Project Info */}
                      <div className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-cinzel font-bold text-white mb-2 md:mb-3 group-hover:text-gray-200 transition-colors duration-300 tracking-wide line-clamp-2">
                          {project.title}
                        </h3>

                        <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-1.5 md:px-2 py-0.5 md:py-1 bg-dark-300/50 border border-white/10 rounded text-xs text-gray-400"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-1.5 md:px-2 py-0.5 md:py-1 text-xs text-gray-400">
                              +{project.tags.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-2 md:gap-3">
                          {(project.title === 'VeltriX' || project.title === 'BoxOffice Buddy') ? (
                            <motion.div
                              className="flex-1 flex items-center justify-center gap-1 md:gap-2 bg-gradient-to-r from-red-700 to-red-600 px-3 md:px-4 py-2 rounded-lg md:rounded-xl text-white font-medium opacity-60 cursor-not-allowed text-xs md:text-sm"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Deploying soon
                            </motion.div>
                          ) : (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1 flex items-center justify-center gap-1 md:gap-2 bg-gray-700/20 border border-gray-600/30 px-3 md:px-4 py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-medium text-gray-300 hover:bg-gray-700/30 hover:text-white transition-all duration-300"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Live
                            </motion.a>
                          )}
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 flex items-center justify-center gap-1 md:gap-2 bg-dark-300/50 border border-white/10 px-3 md:px-4 py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-medium text-gray-300 hover:text-white hover:border-white/20 transition-all duration-300"
                          >
                            <Github className="w-3 h-3" />
                            Code
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </BidirectionalAnimation>
              ) : null
            )}
          </div>
        </BidirectionalAnimation>

        {/* More Projects CTA */}
        <BidirectionalAnimation animationType="fadeUp" delay={1.0}>
          <div className="text-center mt-12 md:mt-16">
            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base px-4">
              Want to see more? Check out my GitHub.
            </p>
            <motion.a
              href="https://github.com/Eren-Sama?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 glass-morphism px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-semibold border border-white/20 hover:border-red-500/50 transition-all duration-300 text-sm md:text-base"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5" />
              View All Projects
            </motion.a>
          </div>
        </BidirectionalAnimation>
      </div>
    </div>
  )
}

export default Projects

