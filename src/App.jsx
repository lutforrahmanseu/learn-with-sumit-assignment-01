import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import DreamArea from './components/DreamArea'
import AboutSection from './components/AboutSection'
import CtaSection from './components/CtaSection'
import FaqSection from './components/FaqSection'
import TeamSection from './components/TeamSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <DreamArea/>
      <AboutSection/>
      <CtaSection/>
      <FaqSection/>
      <TeamSection/>
      <Contact/>
      <Footer/>
    </div>
  )
}
