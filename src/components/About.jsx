import React from 'react'
import Sublogo from '../assets/leadsflowmedialogo.png'
import arrow from '../assets/arrow.png'
import ribbon from '../assets/ribbon_Vector-p-2600.png'
const About = () => {
  return (
    <div className="relative w-full py-20 px-4 md:px-12 bg-[#000] text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={ribbon}
          alt="Background" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 relative z-10">
        {/* Left side: Title and Image */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
          <h2 className="text-4xl font-sans sm:text-5xl md:text-6xl font-bold mb-8">About LeadsFlow</h2>
          <img src={Sublogo} alt="Green Swirl Arrow" className="w-64 sm:w-80 md:w-96 lg:w-[30rem] h-auto object-contain mt-4" />
        </div>

        {/* Right side: Text Content */}
        <div className="md:w-1/2 text-lg sm:text-xl md:text-2xl leading-relaxed">
          <p className="mb-4">At Leads flowMedia, We help coaches, consultants, founders, personal brands turn videos into lead machines.</p>
          <p className="mb-4">Our strategy blends storytelling, hooks, and automation—so your content doesn't just get seen, it brings you clients.</p>
          <p className="mb-4">We believe that every reel, post, and video view should bring you one step closer to business growth.</p>
          <p>From visibility to conversions, we build systems that grow your brand and your business.</p>
        </div>
      </div>
    </div>
  )
}

export default About