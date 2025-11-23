'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'Local LLM Finetuner App',
    description: 'A privacy-first, local-only application for fine-tuning Large Language Models on desktop/server machines with 6-24 GB GPU memory. Features parameter-efficient fine-tuning (LoRA, QLoRA), full fine-tuning, supervised fine-tuning, knowledge distillation, RLHF/DPO, RAG support, and multi-model orchestration.',
    tags: ['LLM', 'Fine-Tuning', 'LoRA', 'QLoRA', 'FastAPI', 'Streamlit', 'RAG'],
    category: 'AI/ML',
    url: 'https://github.com/Alen-S-J/LLM-finetuning-App',
  },
  {
    title: 'AutoML Data Scientist Application',
    description: 'An automated machine learning application that automatically selects and trains the most appropriate algorithms for datasets. Supports traditional ML, deep learning, NLP, computer vision, time series, clustering, and ensemble models with comprehensive visualization and report generation.',
    tags: ['AutoML', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Streamlit'],
    category: 'AI/ML',
    url: 'https://github.com/Alen-S-J/AutoML---Data-Scientist-Application',
  },
  {
    title: 'Real-Time Food Calorie Estimator',
    description: 'Computer vision and machine learning project for real-time food calorie estimation. Uses computer vision techniques to identify food items and estimate their nutritional content and calorie count.',
    tags: ['Computer Vision', 'YOLO', 'Machine Learning', 'Real-Time', 'Food Recognition'],
    category: 'AI/ML',
    url: 'https://github.com/Alen-S-J/Computer-Vision-Project-Real-Time-Food-Calorie-Estimator--CV---ML-',
  },
  {
    title: 'Visual Accessibility Assistant',
    description: 'An AI-powered visual accessibility assistant designed to help users with visual impairments. Utilizes computer vision and AI to provide real-time assistance and improve accessibility.',
    tags: ['Computer Vision', 'Accessibility', 'AI', 'Assistive Technology'],
    category: 'AI/ML',
    url: 'https://github.com/Alen-S-J/visual-accessibility-assistant',
  },
]

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All')
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Get all unique tags for filtering
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)))
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => 
        p.category === selectedFilter || 
        p.tags.some(tag => tag.toLowerCase().includes(selectedFilter.toLowerCase()))
      )

  // Swipe handlers for mobile
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    // You can add navigation logic here if needed
    // For now, we'll just log it
    if (isLeftSwipe || isRightSwipe) {
      console.log('Swipe detected:', isLeftSwipe ? 'left' : 'right')
    }
  }

  return (
    <section id="portfolio" className="py-32 bg-black relative overflow-hidden border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-network opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <motion.h2
          className="text-6xl md:text-7xl font-black text-white mb-12 tracking-tighter uppercase text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-2 text-sm font-mono uppercase tracking-wider border transition-all duration-300 touch-manipulation ${
                selectedFilter === category
                  ? 'bg-white text-black border-white'
                  : 'bg-white/5 text-white/80 border-white/20 hover:border-white/40 hover:bg-white/10 active:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {filteredProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-white/20 bg-white/5 backdrop-blur-sm p-8 hover:border-white/40 hover:bg-white/10 transition-all duration-300 overflow-hidden block cursor-pointer touch-manipulation"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Holographic Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Glitch Effect Border */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-300 animate-glitch" />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="text-xs text-white/40 uppercase tracking-wider font-mono">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-white/10 border border-white/20 text-white/80 rounded-sm uppercase tracking-wider font-mono hover:bg-white/20 hover:border-white/40 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 group-hover:border-white/40 transition-colors" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 group-hover:border-white/40 transition-colors" />
              
              {/* GitHub Link Indicator */}
              <div className="absolute bottom-4 right-4 text-white/40 group-hover:text-white/80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
