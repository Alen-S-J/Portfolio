'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'

const education = [
  {
    date: 'July 2025 – Present',
    title: 'Diploma in Data Analytics',
    institution: 'Edure Learning',
    location: 'Online',
    details: [
      'Focus on data cleaning, visualization, business intelligence, and statistical modeling',
      'Real-world applications using Excel, SQL, and Python',
    ],
    icon: FaCertificate,
  },
  {
    date: 'June 2020 – June 2024',
    title: 'B.Tech in Computer Science & Engineering',
    institution: 'College of Engineering, Aranmula',
    location: 'Kerala, India',
    details: [
      'Understanding of core computer science concepts: algorithms, data structures, computer architecture, operating systems, and programming languages',
      'Specialized in Machine Learning, Deep Learning, and Data Analytics',
      'Completed projects in LLM fine-tuning, RAG systems, and computer vision',
    ],
    icon: FaGraduationCap,
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-32 bg-black relative overflow-hidden border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-network opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="max-w-5xl mx-auto px-10 relative z-10">
        <motion.h2
          className="text-6xl md:text-7xl font-black text-white mb-20 tracking-tighter uppercase text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>

        <div className="space-y-16">
          {education.map((edu, index) => {
            const IconComponent = edu.icon
            return (
              <motion.div
                key={index}
                className="relative pl-12 border-l-2 border-white/30 hover:border-white/60 transition-colors"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Timeline Dot with Icon */}
                <div className="absolute -left-8 w-12 h-12 bg-black border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                  <IconComponent className="text-white group-hover:text-black transition-colors text-lg" />
                </div>
                
                {/* Content Card */}
                <div className="border border-white/20 bg-white/5 backdrop-blur-sm p-8 hover:border-white/40 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <div className="text-xs text-white/40 uppercase tracking-wider font-mono mb-2">
                        {edu.date}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tight">
                        {edu.title}
                      </h3>
                      <h4 className="text-base md:text-lg text-white/80 font-semibold mb-1">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-white/60 font-mono">
                        {edu.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {edu.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="text-sm text-white/70 leading-relaxed pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-white/40"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

