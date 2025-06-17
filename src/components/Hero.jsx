import React, { useState } from 'react'
import Particles from '../blocks/Backgrounds/Particles/Particles'
import Threads from '../blocks/Backgrounds/Threads/Threads'
import LeadsflowMediaLogo from '../assets/leadsflowmedialogo.png'
import Sublogo from '../assets/Asset 6.png'
import About from './About'

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex flex-col bg-linear-60 items-center justify-center font-semibold text-center pt-5" 
    style={{
        background: 'radial-gradient(circle at center, #00181c 0%,#000 100%)'}} >
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 md:px-12 items-center relative">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src={LeadsflowMediaLogo} alt="Leadsflow Media Logo" className="h-16 md:h-20" />
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black bg-opacity-95 z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            <li><a href="#services" className="text-gray-300 hover:text-white text-2xl block py-2 px-4" onClick={() => setIsMenuOpen(false)}>Our Services</a></li>
            <li><a href="#work" className="text-gray-300 hover:text-white text-2xl block py-2 px-4" onClick={() => setIsMenuOpen(false)}>Our Work</a></li>
            <li><button className="px-6 py-3 bg-[#53c926] text-black rounded-4xl hover:bg-green-700 transition duration-300 text-xl" onClick={() => setIsMenuOpen(false)}>Contact Us</button></li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row items-center space-x-8 text-xl font-semibold">
          <li><a href="#services" className="text-gray-300 hover:text-white block py-2 px-4">Our Services</a></li>
          <li><a href="#work" className="text-gray-300 hover:text-white block py-2 px-4">Our Work</a></li>
          <li><button className="px-6 py-2 bg-[#53c926] text-black border-2 border-white shadow-[4px_4px_0px_0px_#53c926] rounded-md hover:bg-green-700 transition duration-300">Contact Us</button></li>
        </ul>
      </div>

      <div className="flex-1 w-full items-center justify-center bg-cover bg-center pt-16"
        style={{
          background: 'radial-gradient(circle at center, #00181c 0%,#000 100%)'
        }}>
        <div className="relative w-full sm:h-screen md:h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://cdn.prod.website-files.com/65ee85d8d9a1a95a5fb24c11/65ee98c6675af0c080af1fbb_Asset%208%201-p-1600.png"
              alt="Background" className="w-full h-full object-cover opacity-40" />
          </div>
          <div className="relative z-10 p-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 animate-fadeInUp text-white">
              LeadsFlow Media
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white animate-fadeInUp animate-delay-100">
              Your Vision Our Videos,<br /><span className="text-green-500">Endless Leads.</span>
            </p>
          </div>
        </div>

        <div className="w-full py-10 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
              <div className="p-6 bg-black border-2 border-white rounded-lg shadow-[-8px_8px_0px_0px_#53c926] transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#53c926] mb-2 animate-fadeInUp">200M+</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 animate-fadeInUp animate-delay-100">Views</p>
              </div>
              <div className="p-6 bg-black border-2 border-white rounded-lg shadow-[-8px_8px_0px_0px_#53c926] transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#53c926] mb-2 animate-fadeInUp animate-delay-200">5M+</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 animate-fadeInUp animate-delay-300">Community</p>
              </div>
              <div className="p-6 bg-black border-2 border-white rounded-lg shadow-[-8px_8px_0px_0px_#53c926] transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#53c926] mb-2 animate-fadeInUp animate-delay-400">1B+</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 animate-fadeInUp animate-delay-500">Accounts Reached</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero