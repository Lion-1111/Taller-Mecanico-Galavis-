import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Tour from './components/Tour'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Quotation from './components/Quotation'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0A0A0B] text-[#E0E2ED] min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <Tour />
        <Services />
        <Gallery />
        <Quotation />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
