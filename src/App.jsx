import { useState } from 'react'
import './App.css'
import LeadsflowMediaLogo from './assets/leadsflowmedialogo.png'
import Hero from './components/Hero'
import About from './components/About'
import ClientCards from './components/ClientCards'
import MarqueeSection from './components/MarqueeSection'
import Infosection from './components/Infosection'
import ribbon from './assets/ribbon_Vector-p-2600.png'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Work from './components/Work'
import Reviews from './components/Reviews'
import Founders from './components/Founders'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SplashCursor  from './blocks/Animations/SplashCursor/SplashCursor'
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <SplashCursor />
      {/* Hero Section */}

      <Hero />
      <ClientCards/>  
      <MarqueeSection />
 

      {/* About BrandFlow Section */}
      <About />
      
      {/* Making Your Life Easier Section */}
      <div className="relative w-full py-16 px-4 md:px-12 bg-black text-white overflow-hidden">
        <img src={ribbon} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
       <Infosection/>
      {/* Our Services Section */}
        <Services/>
      </div>

      {/* Our Expertise Section */}
      <Expertise/>

      {/* Our Work Section */}
      <Work/>
      {/* Words From Our Clients Section */}
      <Reviews/>

      {/* About Team Section */}
      <Founders/>

      {/* Contact Section */}

      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
