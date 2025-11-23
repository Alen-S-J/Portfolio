'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaMedium, FaExternalLinkAlt, FaStackOverflow } from 'react-icons/fa'
import { FaXTwitter, FaInstagram } from 'react-icons/fa6'

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alan-sabu-john/',
    icon: FaLinkedin,
    color: 'text-[#0077B5]',
    hoverColor: 'hover:text-[#005885]',
    bgColor: 'bg-[#0077B5]/10',
    borderColor: 'border-[#0077B5]/30',
    hoverBorderColor: 'hover:border-[#0077B5]/60',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Alen-S-J',
    icon: FaGithub,
    color: 'text-white',
    hoverColor: 'hover:text-[#181717]',
    bgColor: 'bg-white/10',
    borderColor: 'border-white/30',
    hoverBorderColor: 'hover:border-white/60',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@alenxsj',
    icon: FaMedium,
    color: 'text-[#00AB6C]',
    hoverColor: 'hover:text-[#008055]',
    bgColor: 'bg-[#00AB6C]/10',
    borderColor: 'border-[#00AB6C]/30',
    hoverBorderColor: 'hover:border-[#00AB6C]/60',
  },
  {
    name: 'X',
    url: 'https://x.com/alan_45797',
    icon: FaXTwitter,
    color: 'text-white',
    hoverColor: 'hover:text-black',
    bgColor: 'bg-black/10',
    borderColor: 'border-white/30',
    hoverBorderColor: 'hover:border-white/60',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/allen_s_john/?igsh=eDZxOG9sdTNmbTRz#',
    icon: FaInstagram,
    color: 'text-[#E4405F]',
    hoverColor: 'hover:text-[#C13584]',
    bgColor: 'bg-[#E4405F]/10',
    borderColor: 'border-[#E4405F]/30',
    hoverBorderColor: 'hover:border-[#E4405F]/60',
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/21915198/alan-sabu-john',
    icon: FaStackOverflow,
    color: 'text-[#F48024]',
    hoverColor: 'hover:text-[#BC6229]',
    bgColor: 'bg-[#F48024]/10',
    borderColor: 'border-[#F48024]/30',
    hoverBorderColor: 'hover:border-[#F48024]/60',
  },
]

    // Your actual Medium blog posts
    const blogPosts = [
      {
        title: 'A Comprehensive 200-Day Roadmap to Mastering Machine Learning and Deep Learning',
        excerpt: 'A structured learning path covering everything from fundamentals to advanced deep learning concepts, designed to take you from beginner to expert in 200 days...',
        date: '2024',
        readTime: '15 min read',
        url: 'https://medium.com/@alenxsj/a-comprehensive-200-day-roadmap-to-mastering-machine-learning-and-deep-learning-f674b234b322',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&q=80',
      },
      {
        title: 'Performing Security Testing with OWASP ZAP API and Python: My Cybersecurity College Project',
        excerpt: 'Exploring how to integrate OWASP ZAP API with Python for automated security testing, including vulnerability scanning and penetration testing workflows...',
        date: '2024',
        readTime: '10 min read',
        url: 'https://medium.com/@alenxsj/performing-security-testing-with-owasp-zap-api-and-python-my-cybersecurity-college-project-4675d9a27571',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&q=80',
      },
      {
        title: 'Ensuring Ethical Machine Learning Practices in the Financial Technology Industry',
        excerpt: 'A deep dive into ethical considerations, bias mitigation, and responsible AI implementation in fintech applications, achieving fairness and transparency...',
        date: '2024',
        readTime: '12 min read',
        url: 'https://medium.com/@alenxsj/ensuring-ethical-machine-learning-practices-in-the-financial-technology-industry-achieving-a-f721f5716d6e',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&q=80',
      },
    ]

export default function BlogSection() {
  return (
    <section id="blog" className="py-32 bg-black relative overflow-hidden border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-network opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        {/* Social Links Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-black text-white mb-12 tracking-tighter uppercase text-center">
            Connect
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative border-2 ${social.borderColor} ${social.bgColor} backdrop-blur-sm p-6 ${social.hoverBorderColor} hover:bg-opacity-20 transition-all duration-300`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <IconComponent className={`${social.color} ${social.hoverColor} text-4xl mb-3 group-hover:scale-110 transition-transform`} />
                  <p className="text-sm text-white/80 uppercase tracking-wider font-mono">
                    {social.name}
                  </p>
                  <div className={`absolute top-0 right-0 w-8 h-8 border-t border-r ${social.borderColor} ${social.hoverBorderColor} transition-colors`} />
                  <div className={`absolute bottom-0 left-0 w-8 h-8 border-b border-l ${social.borderColor} ${social.hoverBorderColor} transition-colors`} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Blog Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-6xl md:text-7xl font-black text-white mb-12 tracking-tighter uppercase text-center">
            Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-white/20 bg-white/5 backdrop-blur-sm hover:border-white/40 hover:bg-white/10 transition-all duration-300 overflow-hidden relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Blog Image */}
                <div className="w-full h-48 relative overflow-hidden border-b border-white/20">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  {/* Medium icon overlay */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaMedium className="text-medium-green text-2xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-white/40 uppercase tracking-wider font-mono">
                      {post.date}
                    </span>
                    <span className="text-xs text-white/40 uppercase tracking-wider font-mono">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight leading-tight group-hover:text-white/80 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-white/60 group-hover:text-white/80 transition-colors">
                    <span className="uppercase tracking-wider font-mono">Read More</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 group-hover:border-white/40 transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 group-hover:border-white/40 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

