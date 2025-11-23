'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TrailPoint {
  x: number
  y: number
  id: number
}

export default function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let pointId = 0

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Add new point to trail
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: pointId++,
      }

      setTrail((prev) => {
        const updated = [newPoint, ...prev].slice(0, 15) // Keep last 15 points
        return updated
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {/* Main cursor dot */}
      <motion.div
        className="absolute w-4 h-4 bg-white rounded-full mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Trail points */}
      <AnimatePresence>
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            className="absolute w-2 h-2 bg-white rounded-full mix-blend-difference"
            style={{
              left: point.x - 4,
              top: point.y - 4,
            }}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.03,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

