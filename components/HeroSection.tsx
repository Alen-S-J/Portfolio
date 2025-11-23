'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import anime from 'animejs'
import Image from 'next/image'
import SocialStats from './SocialStats'

export default function HeroSection() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const morphRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particlePositions, setParticlePositions] = useState<Array<{ left: number; top: number }>>([])
  const [neuralLines, setNeuralLines] = useState<Array<{ x1: number; y1: number; x2: number; y2: number }>>([])
  const [neuralNodes, setNeuralNodes] = useState<Array<{ x: number; y: number; connections: Array<{ x: number; y: number }> }>>([])
  const [vectorParticles, setVectorParticles] = useState<Array<{ left: number; top: number; delay: number }>>([])
  const [isClient, setIsClient] = useState(false)
  const [activeSide, setActiveSide] = useState<'left' | 'right' | null>(null)

  useEffect(() => {
    // Set client-side flag and generate random positions
    setIsClient(true)
    
    // Generate particle positions
    setParticlePositions(
      Array.from({ length: 50 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
      }))
    )
    
    // Generate neural network line positions
    setNeuralLines(
      Array.from({ length: 15 }).map(() => ({
        x1: Math.random() * 100,
        y1: Math.random() * 100,
        x2: Math.random() * 100,
        y2: Math.random() * 100,
      }))
    )
    
    // Generate neural network nodes
    const nodes = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      connections: Array.from({ length: 1 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
      })),
    }))
    setNeuralNodes(nodes)
    
    // Generate vector embedding particles
    setVectorParticles(
      Array.from({ length: 30 }).map((_, i) => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: i * 0.2,
      }))
    )
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    // Removed conflicting anime.js slide animations - Framer Motion handles these now

    // Morph transition animation - ensure it's visible
    if (morphRef.current) {
      // Initial animation
      anime({
        targets: morphRef.current,
        opacity: [0, 1],
        scaleX: [0, 1],
        duration: 2000,
        delay: 1000,
        easing: 'easeInOutCubic',
      })

      // Continuous pulse animation
      setTimeout(() => {
        if (morphRef.current) {
          anime({
            targets: morphRef.current,
            opacity: [0.7, 1, 0.7],
            duration: 3000,
            easing: 'easeInOutSine',
            loop: true,
          })
        }
      }, 3000)
    }

    // Glitch effect loop
    const glitchInterval = setInterval(() => {
      if (morphRef.current) {
      anime({
          targets: morphRef.current,
          translateX: [0, -2, 2, -1, 1, 0],
          duration: 200,
          easing: 'easeInOutQuad',
      })
    }
    }, 3000)

    // Particle animation
    if (particlesRef.current) {
      const particles = particlesRef.current.querySelectorAll('.particle')
      particles.forEach((particle, index) => {
        anime({
          targets: particle,
          translateY: [
            { value: 0 },
            { value: -100 },
            { value: -200 },
            { value: -300 },
          ],
          translateX: [
            { value: 0 },
            { value: Math.random() * 100 - 50 },
            { value: Math.random() * 100 - 50 },
            { value: Math.random() * 100 - 50 },
          ],
          opacity: [0, 1, 1, 0],
          scale: [0, 1, 1, 0],
          duration: 4000 + Math.random() * 2000,
          delay: index * 200,
          easing: 'easeOutQuad',
          loop: true,
        })
      })
    }

    // Neural network lines animation
    const neuralLines = document.querySelectorAll('.neural-line')
    neuralLines.forEach((line, index) => {
      const svgLine = line as SVGLineElement
      if (svgLine) {
        anime({
          targets: svgLine,
          strokeDashoffset: [anime.setDashoffset(svgLine), 0],
          opacity: [0, 0.3, 0.3, 0],
          duration: 3000,
          delay: index * 300,
          easing: 'easeInOutSine',
          loop: true,
        })
      }
    })

    // Holographic overlay animation
    const hologram = document.querySelector('.hologram-overlay')
    if (hologram) {
      anime({
        targets: hologram,
        opacity: [0.1, 0.3, 0.1],
        duration: 2000,
        easing: 'easeInOutSine',
        loop: true,
      })
    }

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(glitchInterval)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isClient])

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 bg-black relative overflow-hidden">
      {/* Background Particles - Enhanced */}
      {isClient && (
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="particle absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={{
                y: [0, -30, -60, -90, -120],
                x: [0, Math.sin(i) * 20, Math.cos(i) * 20, Math.sin(i * 2) * 15, 0],
                opacity: [0, 1, 1, 0.5, 0],
                scale: [0, 1, 1.5, 1, 0],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.1,
                ease: 'easeOut',
              }}
            />
          ))}
          {/* Additional floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`float-${i}`}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${(i * 7) % 100}%`,
              }}
              animate={{
                y: ['0vh', '-100vh'],
                x: [0, Math.sin(i) * 50],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 8 + (i % 4),
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      )}

      {/* Neural Network Background - Animated */}
      {isClient && (
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="white" stopOpacity="0.8">
                <animate attributeName="stop-opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="white" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          {neuralLines.map((line, i) => (
            <motion.line
              key={i}
              className="neural-line"
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="url(#neuralGradient)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3 + (i % 2),
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
          {/* Animated nodes */}
          {Array.from({ length: 15 }).map((_, i) => {
            const x = (i * 7) % 100
            const y = (i * 11) % 100
            return (
              <motion.circle
                key={`node-${i}`}
                cx={`${x}%`}
                cy={`${y}%`}
                r="3"
                fill="white"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
        </svg>
      )}
      
      {/* Animated Grid Pattern */}
      {isClient && (
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0 0', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      )}
      
      {/* Animated Radial Gradient */}
          <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, white 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-10 w-full relative z-10">
        {/* Hero Heading */}
            <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
            >
          <h1 className="text-8xl md:text-9xl font-black text-white mb-4 tracking-tighter leading-none">
            ALAN SABU JOHN
              </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white/80 tracking-wider uppercase">
            Data Analyst → AI/ML Engineer
          </h2>
            </motion.div>

        {/* Split Hero Images - Clean Sliding Effect (Adham Dannaway Style) */}
        <div className="relative w-full max-w-7xl mx-auto h-[70vh] md:h-[80vh] overflow-hidden">
          {/* Container for both images */}
          <div className="relative w-full h-full">
            {/* Hover Detection Areas */}
            <div className="absolute left-0 top-0 bottom-0 w-1/2 z-20 cursor-pointer" 
                 onMouseEnter={() => setActiveSide('right')}
                 onMouseLeave={() => setActiveSide(null)} />
            <div className="absolute right-0 top-0 bottom-0 w-1/2 z-20 cursor-pointer"
                 onMouseEnter={() => setActiveSide('left')}
                 onMouseLeave={() => setActiveSide(null)} />

            {/* Left Side - Data Analyst (50% visible initially) */}
            <motion.div
              ref={leftRef}
              className="absolute inset-0 pointer-events-none z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="absolute inset-0 overflow-hidden"
                animate={{
                  clipPath: activeSide === 'right' 
                    ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' 
                    : activeSide === 'left'
                    ? 'polygon(0 0, 0% 0, 0% 100%, 0 100%)'
                    : 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <div className="absolute inset-0 w-full h-full bg-black">
                  <Image
                    src="/images/me.png"
                    alt="Alan Sabu John - Data Analyst"
                    fill
                    className="object-contain object-center grayscale transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    unoptimized
                    style={{
                      objectPosition: 'center center',
                    }}
                  />
                </div>

                {/* Label - Data Analyst */}
                <motion.div
                  className="absolute bottom-8 left-8 z-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeSide === 'right' || activeSide === null ? 1 : 0,
                    y: activeSide === 'right' || activeSide === null ? 0 : 20
                  }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-2">
                    DATA ANALYST
                  </h3>
                  <p className="text-sm md:text-base text-white/90 font-light">
                    Transforming Data Into Actionable Insights
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - AI/ML Engineer (50% visible initially) */}
            <motion.div
              ref={rightRef}
              className="absolute inset-0 pointer-events-none z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div 
                className="absolute inset-0 overflow-hidden"
                animate={{
                  clipPath: activeSide === 'left'
                    ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                    : activeSide === 'right'
                    ? 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
                    : 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <div className="absolute inset-0 w-full h-full bg-black">
                  <Image
                    src="/images/robot.png"
                    alt="AI/ML Engineer - Robot Persona"
                    fill
                    className="object-contain object-center grayscale transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    unoptimized
                    style={{
                      objectPosition: 'center center',
                    }}
                  />
                </div>

                {/* Label - AI/ML Engineer */}
                <motion.div
                  className="absolute bottom-8 right-8 z-20 text-right"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeSide === 'left' || activeSide === null ? 1 : 0,
                    y: activeSide === 'left' || activeSide === null ? 0 : 20
                  }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-2">
                    AI/ML ENGINEER
                  </h3>
                  <p className="text-sm md:text-base text-white/90 font-light">
                    Building Intelligent Systems & AI Solutions
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Center Divider Line - Only visible when not hovering */}
            <motion.div
              ref={morphRef}
              className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30 z-30 pointer-events-none"
              style={{
                transform: 'translateX(-50%)',
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeSide === null ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
        </div>
        </div>

        {/* Social Stats */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <SocialStats />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.a
            href="#portfolio"
            className="inline-block px-12 py-4 border-2 border-white text-white font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden group touch-manipulation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore My Work</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        .clip-path-left {
          clip-path: polygon(0 0, 49.5% 0, 49.5% 100%, 0 100%);
        }
        .clip-path-right {
          clip-path: polygon(50.5% 0, 100% 0, 100% 100%, 50.5% 100%);
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
