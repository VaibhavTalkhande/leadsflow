import React, { useState } from 'react'
import LeadsflowMediaLogo from '../assets/leadsflowmedialogo.png'
import Sublogo from '../assets/Asset 6.png'
import arrow from '../assets/arrow.png'
import CountUp from 'react-countup'
import { FaUsers, FaEye } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer';

const navLinks = [
  { label: 'Our Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Founders', href: '#founders' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact Us', href: '#contact', isButton: true },
];

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clientsKey, setClientsKey] = useState(0);
  const [viewsKey, setViewsKey] = useState(0);
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: false, threshold: 0.3 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll for anchor links
  React.useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.hash) {
        const el = document.querySelector(e.target.hash);
        if (el) {
          e.preventDefault();
          setIsMenuOpen(false);
          window.scrollTo({
            top: el.offsetTop - 40,
            behavior: 'smooth',
          });
        }
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, [isMenuOpen]);

  return (
    <div className="relative flex flex-col bg-linear-60 items-center justify-center font-semibold text-center pt-5"
      style={{
        background: 'radial-gradient(circle at center, #00181c 0%,#000 100%)'
      }}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 md:px-12 items-center relative  pb-4 mb-4">
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
            {navLinks.map(link => link.isButton ? (
              <li key={link.label}>
                <a href={link.href} className="px-6 py-3 bg-[#53c926] text-black rounded-4xl hover:bg-green-700 transition duration-300 text-xl block" onClick={() => setIsMenuOpen(false)}>{link.label}</a>
              </li>
            ) : (
              <li key={link.label}>
                <a href={link.href} className="text-gray-300 hover:text-white text-2xl block py-2 px-4" onClick={() => setIsMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row items-center space-x-8 text-xl font-semibold">
          {navLinks.map(link => link.isButton ? (
            <li key={link.label}>
              <a href={link.href} className="px-6 py-2 bg-[#53c926] text-black border-2 border-white shadow-[4px_4px_0px_0px_#53c926] rounded-md hover:bg-green-700 transition duration-300">{link.label}</a>
            </li>
          ) : (
            <li key={link.label}>
              <a href={link.href} className="text-gray-300 hover:text-white block py-2 px-4">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 w-full items-center justify-center bg-cover bg-center pt-16"
        style={{
          background: 'radial-gradient(circle at center, #00181c 0%,#000 100%)'
        }}>
        <div className="relative w-full sm:h-screen md:h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={arrow}
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
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
        <div className="w-full py-10 md:py-20">
          <div className='flex flex-col items-center justify-center text-center'>
            <img src={Sublogo} alt="Sublogo" className="w-32 sm:w-40 md:w-48 mb-4 animate-fadeInUp" />
            <p className="text-lg sm:text-xl md:text-2xl text-white animate-fadeInUp animate-delay-200">

              We are a leading video marketing agency, specializing in creating high-quality videos that drive results.
            </p>
        </div>
          {/* stats section */}
          <div className="w-full mt-0 py-6 sm:py-8 flex justify-center items-center">
            <div
              ref={statsRef}
              className="backdrop-blur-md bg-black/40 border border-white/20 rounded-2xl shadow-lg px-4 xs:px-6 sm:px-8 md:px-10 py-4 sm:py-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 max-w-[340px] sm:max-w-2xl md:max-w-3xl mx-auto w-auto"
              style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.18)' }}
            >
              <div
                className="flex flex-row items-center gap-2 mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-[#53c926] min-w-[120px] sm:min-w-0 px-2 py-2 rounded-lg hover:bg-white/5 transition"
                tabIndex={0}
                onFocus={() => setClientsKey(prev => prev + 1)}
                onClick={() => setClientsKey(prev => prev + 1)}
                aria-label="Clients stat: focus to animate count up"
              >
                <FaUsers className="text-[#53c926] text-2xl sm:text-3xl md:text-4xl" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-light text-[#53c926] leading-none">
                  {(statsInView || clientsKey > 0) ? <CountUp key={clientsKey} end={30} duration={2} /> : '0'}+
                </span>
                <span className="text-sm sm:text-base md:text-lg text-white font-light ml-1">Clients</span>
              </div>
              <span className="block sm:hidden w-2/3 h-px bg-white/30 my-1 mx-auto"></span>
              <span className="hidden sm:block mx-2 sm:mx-4 text-xl sm:text-2xl text-white font-light">|</span>
              <div
                className="flex flex-row items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#53c926] min-w-[120px] sm:min-w-0 px-2 py-2 rounded-lg hover:bg-white/5 transition"
                tabIndex={0}
                onFocus={() => setViewsKey(prev => prev + 1)}
                onClick={() => setViewsKey(prev => prev + 1)}
                aria-label="Views stat: focus to animate count up"
              >
                <FaEye className="text-[#53c926] text-2xl sm:text-3xl md:text-4xl" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-light text-[#53c926] leading-none">
                  {(statsInView || viewsKey > 0) ? <CountUp key={viewsKey} end={5} duration={2} decimals={1} /> : '0'} Million+
                </span>
                <span className="text-sm sm:text-base md:text-lg text-white font-light ml-1">Views</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero