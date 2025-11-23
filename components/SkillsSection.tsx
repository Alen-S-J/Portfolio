'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import anime from 'animejs'
import { 
  SiPython, SiMysql, SiPandas, SiNumpy,
  SiTensorflow, SiPytorch, SiOpenai, SiDocker, SiFastapi,
  SiRedis, SiJavascript, SiCplusplus, SiTableau, SiPostgresql, SiNotion
} from 'react-icons/si'
import { FaCode, FaDatabase, FaChartLine, FaBrain, FaEye, FaRobot, FaFileExcel, FaChartBar, FaGitAlt, FaCloud, FaFileWord, FaFilePowerpoint } from 'react-icons/fa'

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress')
            progressBars.forEach((bar, index) => {
              const width = bar.getAttribute('data-width')
              anime({
                targets: bar,
                width: [`0%`, `${width}%`],
                duration: 1500,
                delay: index * 100,
                easing: 'easeOutExpo',
              })
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const dataSkills = [
    { name: 'Python', level: 95, icon: SiPython, color: '#3776AB' },
    { name: 'Tableau', level: 90, icon: SiTableau, color: '#E97627' },
    { name: 'Power BI', level: 85, icon: FaChartBar, color: '#F2C811' },
    { name: 'Excel', level: 90, icon: FaFileExcel, color: '#217346' },
    { name: 'Microsoft PowerPoint', level: 85, icon: FaFilePowerpoint, color: '#D24726' },
    { name: 'Notion', level: 80, icon: SiNotion, color: '#FFFFFF' },
    { name: 'Microsoft Word', level: 85, icon: FaFileWord, color: '#2B579A' },
    { name: 'Business Analytics', level: 90, icon: FaDatabase, color: '#6C5CE7' },
    { name: 'Data Visualization', level: 92, icon: FaChartLine, color: '#4A90E2' },
    { name: 'PostgreSQL', level: 88, icon: SiPostgresql, color: '#336791' },
    { name: 'SQL', level: 90, icon: SiMysql, color: '#4479A1' },
  ]

  const aiSkills = [
    { name: 'LLMs & Transformers', level: 95, icon: FaBrain, color: '#FF6B6B' },
    { name: 'RAG Systems', level: 92, icon: FaCode, color: '#4ECDC4' },
    { name: 'LangChain & LlamaIndex', level: 90, icon: FaCode, color: '#45B7D1' },
    { name: 'OpenAI APIs', level: 95, icon: SiOpenai, color: '#412991' },
    { name: 'TensorFlow', level: 90, icon: SiTensorflow, color: '#FF6F00' },
    { name: 'PyTorch', level: 90, icon: SiPytorch, color: '#EE4C2C' },
    { name: 'scikit-learn', level: 88, icon: FaBrain, color: '#F7931E' },
    { name: 'NLTK & spaCy', level: 85, icon: FaBrain, color: '#A29BFE' },
    { name: 'OpenCV', level: 90, icon: FaEye, color: '#5C3EE8' },
    { name: 'Keras', level: 85, icon: SiTensorflow, color: '#D00000' },
    { name: 'Agentic AI', level: 90, icon: FaRobot, color: '#6C5CE7' },
    { name: 'NLP Pipelines', level: 88, icon: FaBrain, color: '#A29BFE' },
  ]

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-32 bg-black relative overflow-hidden border-t border-white/10"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 neural-network opacity-5" />

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <motion.h2
          className="text-6xl md:text-7xl font-black text-white mb-20 tracking-tighter uppercase text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Data Analytics Skills */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-12 bg-white" />
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                Data Skills
              </h3>
            </div>
            {dataSkills.map((skill, index) => {
              const IconComponent = skill.icon
              // Special handling for Notion (black icon needs white styling)
              const isNotion = skill.name === 'Notion'
              const iconColor = isNotion ? '#FFFFFF' : skill.color
              const bgColor = isNotion ? 'rgba(255,255,255,0.15)' : `${skill.color}15`
              const borderColor = isNotion ? 'rgba(255,255,255,0.4)' : `${skill.color}40`
              const progressColor = isNotion ? '#FFFFFF' : skill.color
              
              return (
                <motion.div
                  key={skill.name}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex justify-between items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-2 rounded border relative group/tooltip"
                        style={{ 
                          backgroundColor: bgColor,
                          borderColor: borderColor,
                          color: iconColor
                        }}
                      >
                        <IconComponent className="text-lg" style={{ color: iconColor }} />
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black/95 backdrop-blur-md border border-white/30 text-xs text-white font-mono uppercase tracking-wider whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                          {skill.name} - {skill.level}%
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/30" />
                        </div>
                      </div>
                      <span className="text-white font-semibold text-sm uppercase tracking-wider">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-white/60 text-xs font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/20">
                    <motion.div
                      className="skill-progress h-full rounded-full relative"
                      style={{ 
                        background: `linear-gradient(to right, ${progressColor}, ${progressColor}DD)`
                      }}
                      data-width={skill.level}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.05 }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* AI/ML Skills */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-12 bg-white" />
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                AI/ML Skills
              </h3>
            </div>
            {aiSkills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex justify-between items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-2 rounded border"
                        style={{ 
                          backgroundColor: `${skill.color}15`,
                          borderColor: `${skill.color}40`,
                          color: skill.color
                        }}
                      >
                        <IconComponent className="text-lg" style={{ color: skill.color }} />
                      </div>
                      <span className="text-white font-semibold text-sm uppercase tracking-wider">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-white/60 text-xs font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/20">
                    <motion.div
                      className="skill-progress h-full rounded-full relative"
                      style={{ 
                        background: `linear-gradient(to right, ${skill.color}, ${skill.color}DD)`
                      }}
                      data-width={skill.level}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.05 }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          className="mt-20 pt-20 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4 className="text-xl font-bold text-white/80 mb-8 text-center uppercase tracking-wider">
            Tech Stack
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
              { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
              { name: 'LangChain', icon: FaCode, color: '#1C3C3C' },
              { name: 'LlamaIndex', icon: FaCode, color: '#412991' },
              { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
              { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
              { name: 'ChromaDB', icon: FaDatabase, color: '#FFD700' },
              { name: 'FAISS', icon: FaDatabase, color: '#4A90E2' },
              { name: 'MongoDB Atlas', icon: FaDatabase, color: '#47A248' },
              { name: 'Docker', icon: SiDocker, color: '#2496ED' },
              { name: 'Redis', icon: SiRedis, color: '#DC382D' },
              { name: 'Git', icon: FaGitAlt, color: '#F05032' },
              { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
              { name: 'C/C++', icon: SiCplusplus, color: '#00599C' },
              { name: 'Tableau', icon: SiTableau, color: '#E97627' },
              { name: 'Notion', icon: SiNotion, color: '#FFFFFF' },
              { name: 'GCP Vertex AI', icon: FaCloud, color: '#4285F4' },
              { name: 'IBM Cloud', icon: FaCloud, color: '#1261FE' },
              { name: 'Azure', icon: FaCloud, color: '#0078D4' },
              { name: 'YOLO', icon: FaEye, color: '#FFEAA7' },
              { name: 'OCR', icon: FaEye, color: '#DDA15E' },
              { name: 'OWASP ZAP', icon: FaCode, color: '#FF6B6B' },
              { name: 'Tesseract', icon: FaEye, color: '#3D8FC6' },
            ].map((tech, index) => {
              const IconComponent = tech.icon
              // Special handling for Notion (black icon on white/light background)
              const isNotion = tech.name === 'Notion'
              return (
                <motion.div
                  key={tech.name}
                  className="px-6 py-3 border transition-all duration-300 flex items-center gap-2"
                  style={{
                    borderColor: isNotion ? 'rgba(255,255,255,0.4)' : `${tech.color}40`,
                    backgroundColor: isNotion ? 'rgba(255,255,255,0.1)' : `${tech.color}10`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    borderColor: isNotion ? 'rgba(255,255,255,0.8)' : `${tech.color}80`,
                    backgroundColor: isNotion ? 'rgba(255,255,255,0.2)' : `${tech.color}20`,
                  }}
                >
                  <IconComponent 
                    className="text-lg" 
                    style={{ color: isNotion ? '#FFFFFF' : tech.color }} 
                  />
                  <span className="text-white/80 text-sm font-mono uppercase tracking-wider">
                    {tech.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
