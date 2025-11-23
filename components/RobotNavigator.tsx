'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const sections = [
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'skills', label: 'Skills', icon: '⚡' },
  { id: 'portfolio', label: 'Projects', icon: '💼' },
  { id: 'experience', label: 'Experience', icon: '📈' },
  { id: 'achievements', label: 'Achievements', icon: '🏆' },
  { id: 'blog', label: 'Blog', icon: '📝' },
  { id: 'contact', label: 'Contact', icon: '📧' },
]

export default function RobotNavigator() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentSection, setCurrentSection] = useState('')
  const [showTooltip, setShowTooltip] = useState(false)
  const robotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Show robot after initial load
    const timer = setTimeout(() => setIsVisible(true), 2000)
    
    // Track scroll position to update current section
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsExpanded(false)
    }
  }

  if (!isVisible) return null

  return (
    <motion.div
      ref={robotRef}
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: 'spring', 
        stiffness: 200, 
        damping: 20,
        delay: 1 
      }}
    >
      {/* Navigation Menu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="absolute bottom-24 right-0 mb-4 bg-black/95 backdrop-blur-md border-2 border-white/30 p-4 min-w-[200px]"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-xs text-white/40 uppercase tracking-wider font-mono mb-3 border-b border-white/20 pb-2">
              Navigate To
            </div>
            <div className="space-y-2">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 text-sm font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                    currentSection === section.id
                      ? 'bg-white/20 text-white border-l-2 border-white'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-base">{section.icon}</span>
                  <span>{section.label}</span>
                  {currentSection === section.id && (
                    <motion.span
                      className="ml-auto text-xs"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ●
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isExpanded && (
          <motion.div
            className="absolute bottom-full right-0 mb-2 bg-black/95 backdrop-blur-md border border-white/30 px-3 py-2 text-xs text-white font-mono uppercase tracking-wider whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            Navigate Sections
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Robot Mascot */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Robot Container */}
        <div className="relative w-20 h-20 bg-black/80 backdrop-blur-sm border-2 border-white/40 rounded-full overflow-hidden group-hover:border-white/80 transition-all duration-300">
          <Image
            src="/images/robot.png"
            alt="Robot Navigator"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            unoptimized
          />
          
          {/* Scan Line Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none"
            animate={{
              y: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Pulse Indicator */}
          {currentSection && (
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-black"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )}
        </div>

        {/* Corner Accents */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-white/40 group-hover:border-white/80 transition-colors" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/40 group-hover:border-white/80 transition-colors" />
      </motion.button>

      {/* Floating Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}

