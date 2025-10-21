import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Logos from './Logos'
import Features from './Features'
import Showcase from './Showcase'
import Testimonials from './Testimonials'
import Cta from './Cta'
import Footer from './Footer'

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-white via-white to-brand-50/40">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Logos />
        <Features />
        <Showcase />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}