import React from 'react'
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { MdSupportAgent } from 'react-icons/md'

const services = [
   {
      icon: <FaLinkedin className="text-5xl md:text-6xl text-[#0077b5] drop-shadow" />, // LinkedIn
      pill: { text: 'Lead Generation', className: 'bg-[#50A837] text-black' },
      title: <>Ace LinkedIn with <span className="text-[#53c926] font-extrabold italic">Brand Persona!</span></>,
      desc: "Let's make your brand standout with a full personalized profile optimization. We specialize in crafting creative banners and informative carousels. Our content includes strong CTA, strategic keywords, and engaging stories.",
    },
  {
    icon: <FaInstagram className="text-5xl md:text-6xl text-[#fd5949] drop-shadow" />, // Instagram
    pill: { text: 'Organic Growth', className: 'bg-[#53c926] text-black' },
    title: <>Conquer Insta with <span className="text-[#53c926] font-extrabold italic">Viral Content!</span></>,
    desc: 'Short-form content is the future. At BrandFlowMedia, we craft your journey to getting viral on Insta with end-to-end management. We provide in-house production and confident creators who excel at hooking audiences.',
  },
  {
    icon: <FaYoutube className="text-5xl md:text-6xl text-[#ff0000] drop-shadow" />, // YouTube
    pill: { text: 'Loyal Community', className: 'bg-[#50A837] text-black' },
    title: <>Rule YT with <span className="text-[#53c926] font-extrabold italic">Storytelling!</span></>,
    desc: "Let your brand story resonate with your target audience through our creative storytelling. From detailed research, scripting, and high production quality to seamless editing and insightful analytics, we've got your back.",
  },
  {
    icon: <MdSupportAgent className="text-5xl md:text-6xl text-[#53c926] drop-shadow" />, // Consultation
    pill: { text: 'Consultation', className: 'bg-[#53c926] text-black' },
    title: <>Consultation by <span className="text-[#53c926] font-extrabold italic">Founder & Team</span></>,
    desc: "We've spent years growing multiple brands from scratch to communities of over 5M+ in total. We know how to make your content stand out and go viral. Want us to guide your in-house team to 2x your growth? Looking to build a strong personal brand?",
  }
]

const Services = () => {
  return (
    <section className="w-full py-16 bg-black" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#53c926]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative bg-black border-4 border-white rounded-lg shadow-[-8px_8px_0px_0px_#53c926] p-5 sm:p-8 md:p-10 flex flex-col items-start md:items-center min-h-[340px] w-full max-w-xl mx-auto transition-transform hover:scale-[1.025]"
            >
              {/* Icon */}
              <div className="absolute top-7 left-7 z-10">
                {service.icon}
              </div>
              {/* Pill */}
              <div className={`absolute top-7 right-7 z-10 px-3 py-3 rounded-full font-semibold shadow text-xs sm:px-5 sm:py-2 sm:rounded-full sm:text-base md:text-lg ${service.pill.className}`}
                style={{ boxShadow: '0 4px 16px 0 rgba(80,168,55,0.08)' }}>
                {service.pill.text}
              </div>
              {/* Content */}
              <div className="pt-28 pb-2 px-2 flex-1 flex flex-col justify-start w-full text-left md:text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white leading-tight break-words whitespace-pre-line">{service.title}</h3>
                <hr className="my-2 border-gray-700 mx-auto w-full" />
                <p className="text-base md:text-lg text-gray-200 font-medium break-words whitespace-pre-line w-full text-left md:text-center">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services