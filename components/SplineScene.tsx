'use client'

import { Suspense, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function SplineScene() {
  const [splineLoaded, setSplineLoaded] = useState(false)
  const [Spline, setSpline] = useState<React.ComponentType<any> | null>(null)
  const [error, setError] = useState(false)

  // Replace with your actual Spline scene URL
  // Get this from spline.design after creating your 3D scene
  const splineSceneUrl = process.env.NEXT_PUBLIC_SPLINE_SCENE_URL || ''

  useEffect(() => {
    // Only load if URL is provided
    if (!splineSceneUrl) {
      return
    }

    // Load Spline component on client side only
    if (typeof window !== 'undefined') {
      // Try importing the module
      const loadSpline = async () => {
        try {
          // Try regular export first (works with Next.js 16+)
          const module = await import('@splinetool/react-spline')
          const SplineExport = module.default
          if (SplineExport) {
            setSpline(() => SplineExport)
          } else {
            throw new Error('No default export found')
          }
        } catch (err1) {
          try {
            // Fallback to Next.js specific export
            const module = await import('@splinetool/react-spline/next')
            const SplineExport = module.default
            setSpline(() => SplineExport)
          } catch (err2) {
            console.warn('Spline 3D not available. Make sure @splinetool/react-spline is properly installed.')
            setError(true)
          }
        }
      }
      loadSpline()
    }
  }, [splineSceneUrl])

  // Don't render if no URL, error, or not loaded
  if (!splineSceneUrl || error || !Spline) {
    return null
  }

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: splineLoaded ? 0.2 : 0 }}
      transition={{ duration: 2 }}
    >
      <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100" />}>
        <Spline
          scene={splineSceneUrl}
          className="w-full h-full"
          onLoad={() => setSplineLoaded(true)}
        />
      </Suspense>
    </motion.div>
  )
}

