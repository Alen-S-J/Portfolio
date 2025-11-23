'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  { label: 'Projects Completed', value: 15, suffix: '+', icon: '💼' },
  { label: 'Years Experience', value: 2, suffix: '+', icon: '📈' },
  { label: 'Technologies', value: 50, suffix: '+', icon: '⚡' },
  { label: 'GitHub Repos', value: 25, suffix: '+', icon: '📦' },
]

export default function StatsDashboard() {
  const [counters, setCounters] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true)
            // Animate counters
            stats.forEach((stat, index) => {
              const duration = 2000
              const steps = 60
              const increment = stat.value / steps
              let current = 0

              const timer = setInterval(() => {
                current += increment
                if (current >= stat.value) {
                  setCounters((prev) => {
                    const newCounters = [...prev]
                    newCounters[index] = stat.value
                    return newCounters
                  })
                  clearInterval(timer)
                } else {
                  setCounters((prev) => {
                    const newCounters = [...prev]
                    newCounters[index] = Math.floor(current)
                    return newCounters
                  })
                }
              }, duration / steps)
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('stats-dashboard')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section id="stats-dashboard" className="py-20 bg-black/50 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center border border-white/20 bg-white/5 backdrop-blur-sm p-6 hover:border-white/40 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <motion.div
                className="text-5xl md:text-6xl font-black text-white mb-2 chrome-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: hasAnimated ? 1 : 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {counters[index]}
                {stat.suffix}
              </motion.div>
              <div className="text-sm text-white/60 uppercase tracking-wider font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

