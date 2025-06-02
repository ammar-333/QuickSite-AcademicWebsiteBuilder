import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import FeaturesSection from '../components/FeaturesSection'
import ActionSection from '../components/ActionSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CustomizeSection from '../components/CustomizeSection'
import AcademicProfileSection from '../components/AcademicProfileSection'
import CommunitySection from '../components/CommunitySection'
import PricingSection from '../components/PricingSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <CustomizeSection />
      <AcademicProfileSection />
      <CommunitySection />
      <PricingSection />
      <TestimonialsSection />
      <ActionSection />
    </div>
  )
}

export default Home
