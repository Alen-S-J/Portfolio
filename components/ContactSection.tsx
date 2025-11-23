'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import anime from 'animejs'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Using EmailJS - You'll need to install: npm install @emailjs/browser
      // And set up your EmailJS account at https://www.emailjs.com/
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

      // Dynamic import to avoid SSR issues
      const emailjs = await import('@emailjs/browser')
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Alan Sabu John',
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      anime({
        targets: '.submit-btn',
        scale: [1, 0.95, 1],
        duration: 300,
      })
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
      
      // Fallback: Open mail client as backup
      const mailtoLink = `mailto:alansabuiohn@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`
      window.location.href = mailtoLink
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-network opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-10 relative z-10">
        <motion.h2
          className="text-6xl md:text-7xl font-black text-white mb-20 tracking-tighter uppercase text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tight">
                Get In Touch
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                Ready to collaborate on data-driven AI solutions? Let's connect and explore how we can transform insights into intelligent systems.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/10 transition-all">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide mb-1 text-white">
                    Location
                  </h4>
                  <p className="text-sm text-white/70 font-mono">Thiruvalla, Kerala, India</p>
                </div>
              </div>
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/10 transition-all">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide mb-1 text-white">
                    Phone
                  </h4>
                  <p className="text-sm text-white/70 font-mono">+91-8590790018</p>
                </div>
              </div>
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/10 transition-all">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide mb-1 text-white">
                    Email
                  </h4>
                  <p className="text-sm text-white/70 font-mono">alansabuiohn@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-white text-white placeholder-white/40 outline-none transition-colors text-sm uppercase tracking-wider font-mono"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-white text-white placeholder-white/40 outline-none transition-colors text-sm uppercase tracking-wider font-mono"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-white text-white placeholder-white/40 outline-none transition-colors resize-none text-sm uppercase tracking-wider font-mono"
                required
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn w-full px-8 py-4 bg-transparent border-2 border-white text-white text-sm uppercase tracking-wider font-bold hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent!' : submitStatus === 'error' ? 'Try Again' : 'Send Message'}
              </span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: isSubmitting ? '-100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-sm text-center mt-4"
              >
                Message sent successfully!
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm text-center mt-4"
              >
                Error sending message. Opening mail client as fallback...
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
