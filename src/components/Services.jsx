import React from 'react'
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { MdSupportAgent } from 'react-icons/md'
import AnimatedTitle from './Animated'
import ServiceCard from './ServiceCard'

const services = [
   {
      icon: <FaLinkedin className="text-5xl md:text-6xl text-[#0077b5] drop-shadow" />, // LinkedIn
      pill: 'Lead Generation',
      title: <>Ace LinkedIn with <span className="text-[#53c926] font-extrabold italic">Brand Persona!</span></>,
      desc: "Let's make your brand standout with a full personalized profile optimization. We specialize in crafting creative banners and informative carousels. Our content includes strong CTA, strategic keywords, and engaging stories.",
    },
  {
    icon: <FaInstagram className="text-5xl md:text-6xl text-[#fd5949] drop-shadow" />, // Instagram
    pill: 'Organic Growth',
    title: <>Conquer Insta with <span className="text-[#53c926] font-extrabold italic">Viral Content!</span></>,
    desc: 'Short-form content is the future. At LeadFlowMedia, we craft your journey to getting viral on Insta with end-to-end management. We provide in-house production and confident creators who excel at hooking audiences.',
  },
  {
    icon: <FaYoutube className="text-5xl md:text-6xl text-[#ff0000] drop-shadow" />, // YouTube
    pill: 'Loyal Community',
    title: <>Rule YT with <span className="text-[#53c926] font-extrabold italic">Storytelling!</span></>,
    desc: "Let your brand story resonate with your target audience through our creative storytelling. From detailed research, scripting, and high production quality to seamless editing and insightful analytics, we've got your back.",
  },
  {
    icon: <MdSupportAgent className="text-5xl md:text-6xl text-[#53c926] drop-shadow" />, // Consultation
    pill: 'Consultation',
    title: <>Consultation by <span className="text-[#53c926] font-extrabold italic">Founder & Team</span></>,
    desc: "We've spent years growing multiple brands from scratch to communities of over 5M+ in total. We know how to make your content stand out and go viral. Want us to guide your in-house team to 2x your growth? Looking to build a strong personal brand?",
  }
]

const Services = () => {
  return (
    <section className="w-full py-16 " id="services">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedTitle>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#53c926]">Our Services</h2>
        </AnimatedTitle>
      <AnimatedTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              icon={service.icon}
              pill={service.pill}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>
      </AnimatedTitle>
      </div>
    </section>
  )
}

export default Services