'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
}

export default function SpaceBackground() {
  const [stars, setStars] = useState<Star[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Generate stars with deterministic positions
    const generatedStars: Star[] = []
    for (let i = 0; i < 150; i++) {
      const seed = i * 0.1
      generatedStars.push({
        x: (Math.sin(seed) * 50 + 50),
        y: (Math.cos(seed * 2) * 50 + 50),
        size: (Math.sin(seed * 3) * 0.5 + 0.5) * 2,
        opacity: (Math.cos(seed * 4) * 0.3 + 0.7),
        twinkleSpeed: (Math.sin(seed * 5) * 0.5 + 1.5),
      })
    }
    setStars(generatedStars)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base Space Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      
      {/* Nebula Clouds */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-white rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        />
      </div>

      {/* Stars Layer 1 - Large Stars */}
      {isClient && (
        <div className="absolute inset-0">
          {stars.slice(0, 50).map((star, i) => (
            <motion.div
              key={`star-large-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity})`,
              }}
              animate={{
                opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.5],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: star.twinkleSpeed,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      )}

      {/* Stars Layer 2 - Medium Stars */}
      {isClient && (
        <div className="absolute inset-0">
          {stars.slice(50, 100).map((star, i) => (
            <motion.div
              key={`star-medium-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size * 0.7}px`,
                height: `${star.size * 0.7}px`,
                boxShadow: `0 0 ${star.size}px rgba(255, 255, 255, ${star.opacity * 0.8})`,
              }}
              animate={{
                opacity: [star.opacity * 0.4, star.opacity * 0.9, star.opacity * 0.4],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: star.twinkleSpeed * 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      )}

      {/* Stars Layer 3 - Small Stars */}
      {isClient && (
        <div className="absolute inset-0">
          {stars.slice(100, 150).map((star, i) => (
            <motion.div
              key={`star-small-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size * 0.4}px`,
                height: `${star.size * 0.4}px`,
                boxShadow: `0 0 ${star.size * 0.5}px rgba(255, 255, 255, ${star.opacity * 0.6})`,
              }}
              animate={{
                opacity: [star.opacity * 0.3, star.opacity * 0.8, star.opacity * 0.3],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: star.twinkleSpeed * 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}

      {/* Shooting Stars */}
      {isClient && (
        <>
          {Array.from({ length: 3 }).map((_, i) => {
            const seed = i * 0.5
            const startX = (Math.sin(seed) * 30 + 50)
            const startY = (Math.cos(seed * 2) * 30 + 20)
            const angle = seed * 45
            
            return (
              <motion.div
                key={`shooting-star-${i}`}
                className="absolute"
                style={{
                  left: `${startX}%`,
                  top: `${startY}%`,
                  width: '2px',
                  height: '100px',
                  background: 'linear-gradient(to bottom, transparent, white, transparent)',
                  transformOrigin: 'top center',
                  transform: `rotate(${angle}deg)`,
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                }}
                animate={{
                  x: [0, 500],
                  y: [0, 500],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 5 + i * 2,
                  ease: 'easeOut',
                }}
              />
            )
          })}
        </>
      )}

      {/* Cosmic Dust Particles */}
      {isClient && (
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => {
            const seed = i * 0.3
            const x = (Math.sin(seed) * 50 + 50)
            const y = (Math.cos(seed * 3) * 50 + 50)
            const size = (Math.sin(seed * 2) * 0.3 + 0.5)
            
            return (
              <motion.div
                key={`dust-${i}`}
                className="absolute rounded-full bg-white/20"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                }}
                animate={{
                  x: [0, Math.sin(seed) * 20, 0],
                  y: [0, Math.cos(seed * 2) * 20, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 10 + Math.sin(seed) * 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5,
                }}
              />
            )
          })}
        </div>
      )}

      {/* Grid Overlay for Depth */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="spaceGrid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#spaceGrid)" />
        </svg>
      </div>

      {/* Radial Gradient Overlay for Depth */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.2) 100%)',
        }}
      />
    </div>
  )
}

