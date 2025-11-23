'use client'

import { motion } from 'framer-motion'
import { FaTrophy, FaFlask } from 'react-icons/fa'

const achievements = [
  {
    type: 'Hackathon',
    title: 'Techathon 2023',
    subtitle: '6th Place Nationally',
    icon: FaTrophy,
    details: [
      'Led a team to secure 6th place nationally at Techathon 2023',
      'Developed an AI-Driven Personal Finance Tracker App, showcasing adaptability, problem-solving, and innovation in AI Gyration theme',
      'Mastered teamwork, project management, and advanced AI applications',
      'Theme: AI Gyration - focused on innovative AI solutions for personal finance',
    ],
    projects: [
      {
        name: 'Finance Chatbot',
        description: 'AI Driven Finance Tracker app using Google Gemini API and NLP for personalized finance advice',
        link: 'https://github.com/Alen-S-J/Techathlon',
      },
      {
        name: 'Sentiment Analysis',
        description: 'Extract Stock Sentiment From News Headlines using NLP and TensorFlow for data-driven investment decisions',
        link: 'https://github.com/Alen-S-J/Extract-Stock-Sentiment-From-News-Headlines',
      },
    ],
  },
  {
    type: 'Research',
    title: 'COEAI (SAMUDRA) Research Initiative',
    subtitle: 'Nationally Important Initiative',
    icon: FaFlask,
    details: [
      'Contributed to Ministry of Education (GOI) research initiative on AI for smart cities and infrastructure resilience',
      'Project recognized as a Nationally Important Initiative',
      'Became part of the AI Centre of Excellence (Sustainable Cities) at IIT Kanpur',
      'Worked under Dr. Prateek Negi on AI-powered systems for smart inspection and digital twin modeling',
      'Developed AI-based inspection systems for civil infrastructure using computer vision and photogrammetry',
    ],
  },
  {
    type: 'Volunteering',
    title: 'IEEE SB AEC',
    subtitle: 'Secretary (March 2022 - February 2024)',
    icon: FaTrophy,
    details: [
      'Spearheaded efforts to recruit and onboard new members, fostering growth and engagement within the organization',
      'Orchestrated the successful execution of 15 events, demonstrating adept project management and organizational skills',
      'Cultivated a robust network of relationships among students, facilitating collaboration and knowledge exchange within the academic community',
    ],
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-32 bg-black relative overflow-hidden border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-network opacity-5" />
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {Array.from({ length: 12 }).map((_, i) => {
          // Deterministic calculation - no Math.random()
          // Round to 2 decimal places to avoid floating-point precision issues
          const angle = (i * 30) * (Math.PI / 180)
          const x1 = Math.round((50 + 30 * Math.cos(angle)) * 100) / 100
          const y1 = Math.round((50 + 30 * Math.sin(angle)) * 100) / 100
          const x2 = Math.round((50 + 40 * Math.cos(angle)) * 100) / 100
          const y2 = Math.round((50 + 40 * Math.sin(angle)) * 100) / 100
          return (
            <line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="white"
              strokeWidth="0.5"
              opacity="0.3"
            />
          )
        })}
      </svg>

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <motion.h2
          className="text-6xl md:text-7xl font-black text-white mb-20 tracking-tighter uppercase text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                className="border border-white/20 bg-white/5 backdrop-blur-sm p-8 hover:border-white/40 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 border-2 border-white/40 flex items-center justify-center group-hover:border-white/80 group-hover:bg-white/10 transition-all">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                </div>

                {/* Type Badge */}
                <div className="mb-4">
                  <span className="text-xs text-white/40 uppercase tracking-wider font-mono">
                    {achievement.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
                  {achievement.title}
                </h3>
                <p className="text-sm text-white/60 font-mono mb-6">
                  {achievement.subtitle}
                </p>

                {/* Details */}
                <ul className="space-y-2 mb-6">
                  {achievement.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="text-sm text-white/70 leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-white/40"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Project Links (if available) */}
                {achievement.projects && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-white/40 uppercase tracking-wider font-mono mb-3">
                      Related Projects
                    </p>
                    {achievement.projects.map((project, projectIndex) => (
                      <a
                        key={projectIndex}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-2 text-sm text-white/60 hover:text-white transition-colors font-mono"
                      >
                        → {project.name}
                      </a>
                    ))}
                  </div>
                )}

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 group-hover:border-white/40 transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 group-hover:border-white/40 transition-colors" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

