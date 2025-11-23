'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ExperienceSection from '@/components/ExperienceSection'
import EducationSection from '@/components/EducationSection'
import AchievementsSection from '@/components/AchievementsSection'
import BlogSection from '@/components/BlogSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import RobotNavigator from '@/components/RobotNavigator'
import SpaceBackground from '@/components/SpaceBackground'
import CursorTrail from '@/components/CursorTrail'
import ParallaxSection from '@/components/ParallaxSection'
import SocialStats from '@/components/SocialStats'
import AnalyticsDashboard from '@/components/AnalyticsDashboard'

// Dynamically import Spline to avoid SSR issues (optional - only loads if scene URL is provided)
// Comment out if you don't have a Spline scene URL yet
const SplineScene = dynamic(() => import('@/components/SplineScene'), {
  ssr: false,
  loading: () => null,
})

export default function Home() {
  useEffect(() => {
    // Initialize any global animations or effects here
    if (typeof window !== 'undefined') {
      import('animejs').then((anime) => {
        // Global animation setup
        console.log('Anime.js loaded')
      })
    }
  }, [])

  return (
    <>
      <LoadingScreen />
      <CursorTrail />
      <SpaceBackground />
      <main className="min-h-screen bg-black/50 relative z-0">
        <Navigation />
        <HeroSection />
        <ParallaxSection speed={0.2}>
          <AboutSection />
        </ParallaxSection>
        <ParallaxSection speed={0.15}>
          <SkillsSection />
        </ParallaxSection>
        <ParallaxSection speed={0.2}>
          <ProjectsSection />
        </ParallaxSection>
        <ParallaxSection speed={0.15}>
          <ExperienceSection />
        </ParallaxSection>
        <EducationSection />
        <AchievementsSection />
        <BlogSection />
        <ContactSection />
        <Footer />
        <RobotNavigator />
        <AnalyticsDashboard />
      </main>
    </>
  )
}

