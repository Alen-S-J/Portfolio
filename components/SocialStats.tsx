'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface SocialStats {
  github: {
    followers: number
    stars: number
    repos: number
  }
  linkedin: {
    connections: number
  }
  medium: {
    followers: number
    views: number
  }
}

export default function SocialStats() {
  const [stats, setStats] = useState<SocialStats>({
    github: { followers: 0, stars: 0, repos: 0 },
    linkedin: { connections: 0 },
    medium: { followers: 0, views: 0 },
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // GitHub Stats - Using GitHub API
        // Replace 'Alen-S-J' with your GitHub username
        const githubResponse = await fetch('https://api.github.com/users/Alen-S-J')
        if (githubResponse.ok) {
          const githubData = await githubResponse.json()
          
          // Fetch starred repos count
          const starredResponse = await fetch('https://api.github.com/users/Alen-S-J/starred?per_page=1', {
            headers: {
              'Accept': 'application/vnd.github.v3.star+json'
            }
          })
          // Note: GitHub API doesn't provide total stars directly, so we'll use a workaround
          // You can manually set this or use a different approach
          
          setStats(prev => ({
            ...prev,
            github: {
              followers: githubData.followers || 0,
              stars: 0, // Will need manual update or different API
              repos: githubData.public_repos || 0,
            }
          }))
        }

        // LinkedIn and Medium stats would need manual input or different APIs
        // LinkedIn API requires OAuth and is restricted
        // Medium API is also limited
        // For now, we'll use placeholder values that you can update manually
        
        setStats(prev => ({
          ...prev,
          linkedin: {
            connections: 500, // Update manually or use LinkedIn API if you have access
          },
          medium: {
            followers: 100, // Update manually
            views: 5000, // Update manually
          }
        }))
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const statCards = [
    {
      label: 'GitHub Followers',
      value: stats.github.followers,
      icon: '👥',
      color: 'from-blue-500/20 to-blue-600/20',
    },
    {
      label: 'GitHub Repos',
      value: stats.github.repos,
      icon: '📦',
      color: 'from-purple-500/20 to-purple-600/20',
    },
    {
      label: 'LinkedIn Connections',
      value: stats.linkedin.connections,
      icon: '🔗',
      color: 'from-cyan-500/20 to-cyan-600/20',
    },
    {
      label: 'Medium Followers',
      value: stats.medium.followers,
      icon: '✍️',
      color: 'from-green-500/20 to-green-600/20',
    },
    {
      label: 'Medium Views',
      value: stats.medium.views,
      icon: '👁️',
      color: 'from-orange-500/20 to-orange-600/20',
    },
  ]

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-24 bg-white/5 border border-white/10 animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {statCards.map((stat, index) => (
        <motion.div
          key={index}
          className="border border-white/20 bg-gradient-to-br bg-white/5 backdrop-blur-sm p-4 hover:border-white/40 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative z-10">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-black text-white mb-1">
              {stat.value.toLocaleString()}
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider font-mono">
              {stat.label}
            </div>
          </div>
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        </motion.div>
      ))}
    </motion.div>
  )
}

