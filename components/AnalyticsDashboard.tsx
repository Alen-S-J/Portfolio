'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface AnalyticsData {
  pageViews: number
  uniqueVisitors: number
  mostViewedSections: Array<{ section: string; views: number }>
  visitorLocations: Array<{ country: string; count: number }>
  referrers: Array<{ source: string; count: number }>
}

export default function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    mostViewedSections: [],
    visitorLocations: [],
    referrers: [],
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Track page view
    const trackPageView = () => {
      const views = parseInt(localStorage.getItem('portfolio_views') || '0') + 1
      localStorage.setItem('portfolio_views', views.toString())
      
      // Track unique visitors
      const visitorId = localStorage.getItem('visitor_id') || `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      if (!localStorage.getItem('visitor_id')) {
        localStorage.setItem('visitor_id', visitorId)
        const uniqueVisitors = parseInt(localStorage.getItem('unique_visitors') || '0') + 1
        localStorage.setItem('unique_visitors', uniqueVisitors.toString())
      }

      // Track section views
      const sectionViews = JSON.parse(localStorage.getItem('section_views') || '{}')
      const currentSection = window.location.hash || 'home'
      sectionViews[currentSection] = (sectionViews[currentSection] || 0) + 1
      localStorage.setItem('section_views', JSON.stringify(sectionViews))

      // Update analytics state
      const sectionViewsArray = Object.entries(sectionViews)
        .map(([section, views]) => ({ section, views: views as number }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 5)

      setAnalytics({
        pageViews: views,
        uniqueVisitors: parseInt(localStorage.getItem('unique_visitors') || '0'),
        mostViewedSections: sectionViewsArray,
        visitorLocations: [
          { country: 'Unknown', count: 1 }, // Placeholder - would need geolocation API
        ],
        referrers: [
          { source: document.referrer || 'Direct', count: 1 },
        ],
      })
    }

    trackPageView()

    // Track section changes
    const handleHashChange = () => {
      trackPageView()
    }
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  // Only show analytics in development or if explicitly enabled
  const [showAnalytics, setShowAnalytics] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShowAnalytics(
        process.env.NODE_ENV === 'development' || 
        localStorage.getItem('show_analytics') === 'true'
      )
    }
  }, [])

  if (!showAnalytics) return null

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-black/90 border border-white/20 p-4 rounded-lg backdrop-blur-sm z-50 max-w-xs"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      onHoverStart={() => setIsVisible(true)}
      onHoverEnd={() => setIsVisible(false)}
    >
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="text-white text-xs uppercase tracking-wider mb-2 w-full text-left"
      >
        {isVisible ? 'Hide' : 'Show'} Analytics
      </button>
      
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-3 text-xs"
        >
          <div>
            <div className="text-white/60 uppercase tracking-wider mb-1">Page Views</div>
            <div className="text-white font-bold text-lg">{analytics.pageViews}</div>
          </div>
          
          <div>
            <div className="text-white/60 uppercase tracking-wider mb-1">Unique Visitors</div>
            <div className="text-white font-bold text-lg">{analytics.uniqueVisitors}</div>
          </div>

          {analytics.mostViewedSections.length > 0 && (
            <div>
              <div className="text-white/60 uppercase tracking-wider mb-2">Top Sections</div>
              <div className="space-y-1">
                {analytics.mostViewedSections.slice(0, 3).map((section, index) => (
                  <div key={index} className="flex justify-between text-white/80">
                    <span>{section.section}</span>
                    <span>{section.views}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}

