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

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">

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
      <section id="work" className="py-16 md:py-20 bg-[#00181c] border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-xl mx-2 md:mx-8 my-8">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12">Our Work</h2>
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-6 mb-8 md:mb-12">
            <button className="px-4 py-1 md:px-6 md:py-2 bg-green-600 text-white rounded-lg text-sm md:text-base">Instagram</button>
            <button className="px-4 py-1 md:px-6 md:py-2 bg-zinc-800 text-gray-300 rounded-lg hover:bg-green-600 transition duration-300 text-sm md:text-base">Youtube</button>
            <button className="px-4 py-1 md:px-6 md:py-2 bg-zinc-800 text-gray-300 rounded-lg hover:bg-green-600 transition duration-300 text-sm md:text-base">LinkedIn</button>
          </div>
          {/* Placeholder for Instagram embeds - actual embeds would require a different approach for security/privacy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-black p-4 border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg">
              <p className="text-sm md:text-gray-400">Instagram post by KodNest</p>
              <a href="https://www.instagram.com/kodnest/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline text-sm md:text-base">View on Instagram</a>
            </div>
            <div className="bg-black p-4 border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg">
              <p className="text-sm md:text-gray-400">Instagram post by Coding Ninjas</p>
              <a href="https://www.instagram.com/coding.ninjas/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline text-sm md:text-base">View on Instagram</a>
            </div>
            <div className="bg-black p-4 border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg">
              <p className="text-sm md:text-gray-400">Instagram post by GeeksforGeeks</p>
              <a href="https://www.instagram.com/geeks_for_geeks/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline text-sm md:text-base">View on Instagram</a>
            </div>
            <div className="bg-black p-4 border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg">
              <p className="text-sm md:text-gray-400">Instagram post by pwvidyapeeth tamil nadu</p>
              <a href="https://www.instagram.com/pwvidyapeeth_tamilnadu/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline text-sm md:text-base">View on Instagram</a>
            </div>
            <div className="bg-black p-4 border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg">
              <p className="text-sm md:text-gray-400">Instagram post by Siddharth Tiwari (Hypertroph)</p>
              <a href="https://www.instagram.com/hypertroph/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline text-sm md:text-base">View on Instagram</a>
            </div>
            <div className="bg-black p-4 border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg">
              <p className="text-sm md:text-gray-400">Instagram post by Spectrum</p>
              <a href="https://www.instagram.com/spectrumddn/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline text-sm md:text-base">View on Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* Words From Our Clients Section */}
      <section className="py-16 md:py-20 bg-[#00181c] border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-xl mx-2 md:mx-8 my-8">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12">Words From Our Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="p-6 md:p-8 bg-black border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Top coding platform, GFG, is with us!</h3>
              <p className="text-sm md:text-gray-400 mb-2 md:mb-4">BrandFlow has consistently delivered exceptional content on our main YouTube channel, covering trending topics with engaging edits and thumbnails.</p>
              <p className="text-base md:text-lg font-semibold">GFG</p>
              <p className="text-sm md:text-gray-500">Edtech</p>
            </div>
            <div className="p-6 md:p-8 bg-black border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Sahil from Canada went viral from scratch!</h3>
              <p className="text-sm md:text-gray-400 mb-2 md:mb-4">I couldn't believe it when my first reel got 2 million views and my followers jumped from 500 to 50,000 in just a month. BrandFlow's services are top-notch.</p>
              <p className="text-base md:text-lg font-semibold">Sahil Gogna</p>
              <p className="text-sm md:text-gray-500">Lifestyle</p>
            </div>
            <div className="p-6 md:p-8 bg-black border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Uttrakhand's best JEE institute, Spectrum, believes in us!</h3>
              <p className="text-sm md:text-gray-400 mb-2 md:mb-4">Through creative storytelling and thorough research, BrandFlow effectively communicates our vision to the target audience, especially the youth.</p>
              <p className="text-base md:text-lg font-semibold">Spectrum</p>
              <p className="text-sm md:text-gray-500">Edtech</p>
            </div>
            <div className="p-6 md:p-8 bg-black border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Top fitness influencer, Hypertroph, likes our content strategy!</h3>
              <p className="text-sm md:text-gray-400 mb-2 md:mb-4">BrandFlow really helped me to boost my performance through compelling edits, catchy ideas and strategic management.</p>
              <p className="text-base md:text-lg font-semibold">Hypertroph</p>
              <p className="text-sm md:text-gray-500">Fitness</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Team Section */}
      <section className="py-16 md:py-20 bg-[#00181c] border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-xl mx-2 md:mx-8 my-8">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12">About Team</h2>
          <div className="max-w-xl md:max-w-4xl mx-auto text-base md:text-lg leading-relaxed mb-8 md:mb-12">
            <p className="mb-2 md:mb-4"><strong>BrandFlow Media</strong></p>
            <p className="mb-2 md:mb-4">Branding Strategist, Self-Growth Coach & a Storyteller</p>
            <p className="mb-2 md:mb-4">Co-founded by Sandeep Verma, a Computer Science graduate from IIITD, BrandFlow Media is powered by a team of experienced professionals from top institutes like IITs and NITs.</p>
            <p className="mb-2 md:mb-4">From skilled writers, strategists, and content creators to creative directors, cameramen, and production heads, we're united by a shared passion for storytelling and quality. With strong industry exposure and expertise across popular niches, we deliver top-notch creative work, all at affordable rates.</p>
            <p className="italic">With strong industry exposure and expertise across popular niches, we deliver top-notch creative work, all at affordable rates.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
            <div className="p-4 md:p-6 bg-black border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Designing Brand Identity.</h3>
            </div>
            <div className="p-4 md:p-6 bg-black border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Optimizing content strategies to go viral.</h3>
            </div>
            <div className="p-4 md:p-6 bg-black border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Hooking audiences through storytelling.</h3>
            </div>
            <div className="p-4 md:p-6 bg-black border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Improving engagement through call-to-action.</h3>
            </div>
          </div>
          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 mb-8 md:mb-12">
            <div><h3 className="text-4xl md:text-5xl font-bold">500k+</h3></div>
            <div><h3 className="text-4xl md:text-5xl font-bold">400k+</h3></div>
            <div><h3 className="text-4xl md:text-5xl font-bold">50k+</h3></div>
            <div><h3 className="text-4xl md:text-5xl font-bold">750k+</h3></div>
            <div><h3 className="text-4xl md:text-5xl font-bold">30M+</h3></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="p-4 md:p-6 bg-black border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Harman Singh</h3>
              <p className="text-sm md:text-gray-400">Branding Strategist</p>
              <p className="text-sm md:text-gray-400">Direction & Production</p>
              <p className="text-sm md:text-gray-400">Storyteller</p>
            </div>
            <div className="p-4 md:p-6 bg-black border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Sandeep Verma</h3>
              <p className="text-sm md:text-gray-400">Marketing & Sales</p>
              <p className="text-sm md:text-gray-400">Relationship Manager</p>
              <p className="text-sm md:text-gray-400">Operations</p>
            </div>
            <div className="p-4 md:p-6 bg-black border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Anushka Singh</h3>
              <p className="text-sm md:text-gray-400">Content Marketing</p>
              <p className="text-sm md:text-gray-400">Research & Analytics</p>
              <p className="text-sm md:text-gray-400">Human Resource</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-[#00181c] border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] rounded-xl mx-2 md:mx-8 my-8 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Got Query?</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8">For pricing, Reach out to us</h3>
          <button className="px-6 py-3 md:px-8 md:py-4 bg-[#53c926] text-black text-base md:text-xl font-extrabold border-4 border-white shadow-[-4px_4px_0px_0px_#00181c] rounded-none hover:bg-green-700 transition duration-300">Get In Touch</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-400 p-6 md:p-8 text-center text-xs md:text-sm border-t-4 border-white mt-8">
        <p>&copy; 2024 Welcome. All right reserved.</p>
        <div className="flex justify-center space-x-2 md:space-x-4 mt-2">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </footer>
    </div>
  )
}

export default App
