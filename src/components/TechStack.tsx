import { motion } from 'framer-motion'
import { 
  SiPython, SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiNumpy, SiPandas, SiMysql, SiFigma,
  SiGooglecolab, SiTailwindcss, SiGithub,
  SiCanva, SiVercel, SiFramer, SiVite,
  SiMongodb, SiFlask, SiAnaconda, SiJupyter,
  SiNotion
} from 'react-icons/si'
import { 
  FaJava
} from 'react-icons/fa'
import { 
  VscCode
} from 'react-icons/vsc'
import { BidirectionalAnimation } from './BidirectionalAnimation'

const TechStack = () => {
  // Skill categories arranged in 4 horizontal scrolling rows
  const skillRows = [
    {
      title: "Languages",
      skills: [
        { name: 'Python', icon: <SiPython />, color: '#3776AB' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Framer Motion', icon: <SiFramer />, color: '#0055FF' },
        { name: 'Flask', icon: <SiFlask />, color: '#00D2FF' },
        { name: 'NumPy', icon: <SiNumpy />, color: '#013243' },
        { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
        { name: 'Lenis', icon: <div className="text-2xl font-bold">L</div>, color: '#FF6B6B' },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
        { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
        { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Canva', icon: <SiCanva />, color: '#00C4CC' },
        { name: 'Notion', icon: <SiNotion />, color: '#FFFFFF' },
      ]
    },
    {
      title: "Development Environment",
      skills: [
        { name: 'VS Code', icon: <VscCode />, color: '#007ACC' },
        { name: 'Google Colab', icon: <SiGooglecolab />, color: '#F9AB00' },
        { name: 'GitHub', icon: <SiGithub />, color: '#FF6B6B' },
        { name: 'Jupyter', icon: <SiJupyter />, color: '#F37626' },
        { name: 'Anaconda', icon: <SiAnaconda />, color: '#44A833' },
      ]
    }
  ]

  const SkillItem = ({ skill, index }: { skill: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20, skewX: 5 }}
      animate={{ opacity: 1, x: 0, skewX: 0 }}
      transition={{ 
        delay: index * 0.05, 
        duration: 0.4,
        ease: [0.175, 0.885, 0.32, 1.275]
      }}
      whileHover={{ 
        scale: 1.1,
        y: -5,
        transition: { 
          duration: 0.15,
          ease: "easeOut"
        }
      }}
      whileTap={{
        scale: 1.1,
        y: -5,
        transition: { duration: 0.1 }
      }}
      className="group relative flex-shrink-0 flex flex-col items-center justify-center bg-transparent rounded-xl p-4 w-20 h-20 md:w-24 md:h-24 transition-all duration-150 cursor-pointer"
    >
      <div 
        className="text-2xl md:text-3xl transition-all duration-300 mb-2"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </div>
      <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  )

  const SkillRow = ({ row, index }: { row: any; index: number }) => (
    <div className="mb-6 md:mb-8">
      <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 font-orbitron tracking-wide">
        {row.title}
      </h3>
      <div className="overflow-hidden">
        <div className={`flex gap-4 md:gap-6 ${index % 2 === 0 ? "animate-scroll" : "animate-scroll-reverse"}`}>
          {/* Triple the skills for seamless loop */}
          {row.skills.concat(row.skills, row.skills).map((skill: any, skillIndex: number) => (
            <SkillItem key={`${skill.name}-${skillIndex}`} skill={skill} index={skillIndex} />
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-12 px-4 md:py-24 md:px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <BidirectionalAnimation animationType="fadeUp" delay={0.1}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-wider font-orbitron relative">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent relative z-10">
                My Skills
              </span>
              {/* Sharp red glow layers */}
              <div className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-red-700 blur-sm opacity-50">
                My Skills
              </div>
              <div className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-red-600 blur-lg opacity-25">
                My Skills
              </div>
            </h2>
            <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto font-cinzel tracking-wide px-4">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </BidirectionalAnimation>

        {/* 4 Horizontal Scrolling Rows */}
        <BidirectionalAnimation animationType="scale" delay={0.3}>
          <div className="space-y-0">
            {skillRows.map((row, index) => (
              <BidirectionalAnimation key={row.title} animationType="fadeLeft" delay={0.5 + index * 0.2}>
                <SkillRow row={row} index={index} />
              </BidirectionalAnimation>
            ))}
          </div>
        </BidirectionalAnimation>
      </div>
    </section>
  )
}

export default TechStack