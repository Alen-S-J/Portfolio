'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Neural Network */}
          <div className="absolute inset-0 neural-network opacity-10" />
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full">
              <defs>
                <pattern
                  id="grid"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Floating Particles - Client-side only */}
          {isClient && Array.from({ length: 20 }).map((_, i) => {
            // Use deterministic calculations based on index to avoid hydration mismatch
            const seed = i * 0.1
            const left = (Math.sin(seed) * 50 + 50)
            const top = (Math.cos(seed * 2) * 50 + 50)
            const xOffset = Math.sin(seed * 3) * 10
            const duration = 2 + (Math.sin(seed) * 0.5 + 0.5) * 2
            const delay = (Math.cos(seed) * 0.5 + 0.5) * 2
            
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, xOffset, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  ease: 'easeInOut',
                }}
              />
            )
          })}

          {/* Scan Lines */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none"
            animate={{
              y: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Logo/Name */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter chrome-text"
                animate={{
                  textShadow: [
                    '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6)',
                    '0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6)',
                    '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                ALAN SABU JOHN
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-white/60 uppercase tracking-wider font-mono mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              DATA ANALYST → AI/ML ENGINEER
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-80 md:w-96 max-w-full px-4">
              {/* Progress Bar Background */}
              <div className="h-1 bg-white/10 border border-white/20 rounded-full overflow-hidden relative">
                {/* Progress Fill */}
                <motion.div
                  className="h-full bg-gradient-to-r from-white via-white to-white/80 relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              </div>

              {/* Progress Percentage */}
              <motion.div
                className="text-center mt-4 text-white/80 font-mono text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {Math.round(progress)}%
              </motion.div>
            </div>

            {/* Loading Text */}
            <motion.div
              className="mt-8 text-white/40 uppercase tracking-wider font-mono text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                INITIALIZING SYSTEMS
              </motion.span>
            </motion.div>

            {/* Circuit Lines Animation */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.path
                    key={i}
                    d={`M ${20 + i * 20}% 0 L ${20 + i * 20}% 100%`}
                    stroke="white"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 0],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-white/30" />
          <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-white/30" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-white/30" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-white/30" />

          {/* Glitch Effect Overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: [0, 0.1, 0],
              x: [0, -2, 2, -1, 1, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <div className="absolute inset-0 bg-white/5" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }} />
            <div className="absolute inset-0 bg-white/5" style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

