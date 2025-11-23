'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-16 bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-network opacity-5" />
      
      <div className="max-w-7xl mx-auto px-10 text-center relative z-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">
            Alan Sabu John
          </h3>
          <p className="text-sm text-white/60 uppercase tracking-wider font-mono">
            Data Analyst × AI/ML Engineer
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <a
            href="mailto:alansabuiohn@gmail.com"
            className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider font-mono"
          >
            Email
          </a>
          <a
            href="tel:+918590790018"
            className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider font-mono"
          >
            Phone
          </a>
          <a
            href="#portfolio"
            className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider font-mono"
          >
            Portfolio
          </a>
        </motion.div>

        <motion.p
          className="text-xs text-white/40 mb-2 uppercase tracking-wider font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          &copy; 2025 Alan Sabu John. All rights reserved.
        </motion.p>
        <motion.p
          className="text-xs text-white/40 uppercase tracking-wider font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Human Intelligence × Artificial Intelligence
        </motion.p>
      </div>
    </footer>
  )
}
