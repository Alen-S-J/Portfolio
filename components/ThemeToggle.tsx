'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
      document.documentElement.classList.toggle('light', savedTheme === 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    document.documentElement.classList.toggle('light', !newTheme)
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-8 z-50 w-12 h-12 bg-black/80 backdrop-blur-sm border-2 border-white/30 rounded-full flex items-center justify-center hover:border-white/60 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FaMoon className="text-white text-lg" />
        ) : (
          <FaSun className="text-white text-lg" />
        )}
      </motion.div>
    </motion.button>
  )
}

