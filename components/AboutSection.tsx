'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import anime from 'animejs'

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  // Removed stats animation - no longer needed

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 bg-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 neural-network opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-10 relative z-10">
        <motion.h2
          className="text-6xl md:text-7xl font-black text-white mb-20 tracking-tighter uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {/* Narrative Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              <span className="font-bold text-white">AI Engineer & Data Analyst</span> specializing in building intelligent, data-driven systems using Machine Learning, Large Language Models, and Business Analytics. I transform complex data into actionable insights through scalable AI solutions.
            </p>
            
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Currently an <span className="font-semibold text-white">AI Engineer at Raftel Technologies</span>, I develop production-ready RAG systems, conversational agents, and enterprise AI applications. Previously, I worked as a <span className="font-semibold text-white">Project Associate at NIT Calicut</span> on COEAI (SAMUDRA), a Ministry of Education research initiative, where I built AI-powered inspection systems using computer vision and OCR pipelines.
            </p>

            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              My expertise includes <span className="font-semibold text-white">Python, SQL, TensorFlow, PyTorch, LangChain, LlamaIndex, FastAPI</span>, and cloud platforms (GCP, Azure, IBM Cloud). I'm also proficient in <span className="font-semibold text-white">Tableau, Power BI, PostgreSQL</span>, and data visualization. I combine analytical reasoning with technical innovation to solve complex problems and turn cutting-edge research into practical solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
