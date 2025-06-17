import { useState } from 'react'
import './App.css'
import LeadsflowMediaLogo from './assets/leadsflowmedialogo.png'
import Hero from './components/Hero'
import About from './components/About'


function App() {
  return (
    <div className="min-h-screen bg-[#00181c] text-white font-sans"
    style={{
      background: 'radial-gradient(circle at center, #00181c 0%,#00181c 100%)'}}>

      {/* Hero Section */}

      <Hero />

      {/* Our Super Happy Clients Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12">Our Super Happy Clients</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="p-4 bg-zinc-900 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold">Geeks For Geeks</h3>
              <p className="text-sm md:text-gray-400">Edtech</p>
            </div>
            <div className="p-4 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold">Physicswallah</h3>
              <p className="text-sm md:text-gray-400">Edtech</p>
            </div>
            <div className="p-4 bg-zinc-900 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold">IIT Delhi</h3>
              <p className="text-sm md:text-gray-400">Education</p>
            </div>
            <div className="p-4 bg-zinc-900 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold">Internshala</h3>
              <p className="text-sm md:text-gray-400">Education</p>
            </div>
            <div className="p-4 bg-zinc-900 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold">Coding Ninja</h3>
              <p className="text-sm md:text-gray-400">Coding</p>
            </div>
            <div className="p-4 bg-zinc-900 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold">Kodnest</h3>
              <p className="text-sm md:text-gray-400">Coding</p>
            </div>
            <div className="p-4 bg-zinc-900 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold">Sahil</h3>
              <p className="text-sm md:text-gray-400">Canadian Lifestyle</p>
            </div>
            <div className="p-4 bg-zinc-900 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold">Hypertroph</h3>
              <p className="text-sm md:text-gray-400">Fitness</p>
            </div>
            <div className="p-4 bg-zinc-900 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-semibold">Spectrum</h3>
              <p className="text-sm md:text-gray-400">JEE</p>
            </div>
          </div>
        </div>
      </section>

      {/* About BrandFlow Section */}
      <About />

      {/* Making Your Life Easier Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12">Making Your Life Easier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">The Problems you are facing</h3>
              <ul className="list-disc list-inside text-base md:text-lg space-y-2 text-gray-300">
                <li>Low views and stuck follower/ subscriber count</li>
                <li>Stress about algorithm change</li>
                <li>Content curation and repurposing challenges</li>
                <li>Less time for other business activities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">The Solutions we propose</h3>
              <ul className="list-disc list-inside text-base md:text-lg space-y-2 text-gray-300">
                <li>Viral and shareable content</li>
                <li>Storytelling for emotional connection</li>
                <li>Tailored strategies to meet your unique goals</li>
                <li>Real time updates and weekly meetings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16 md:py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="p-6 md:p-8 bg-zinc-950 rounded-lg shadow-md">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">Organic Growth</h3>
              <p className="text-green-500 text-lg md:text-xl mb-4">Conquer Insta with<br/>‍Viral Content!</p>
              <p className="text-sm md:text-base text-gray-400">Short-form content is the future. At BrandFlowMedia, we craft your journey to getting viral on Insta with end-to-end management. We provide in-house production and confident creators who excel at hooking audiences.</p>
            </div>
            <div className="p-6 md:p-8 bg-zinc-950 rounded-lg shadow-md">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">Loyal Community</h3>
              <p className="text-green-500 text-lg md:text-xl mb-4">Rule YT with<br/>‍Storytelling!</p>
              <p className="text-sm md:text-base text-gray-400">Let your brand story resonate with your target audience through our creative storytelling. From detailed research, scripting, and high production quality to seamless editing and insightful analytics, we've got your back.</p>
            </div>
            <div className="p-6 md:p-8 bg-zinc-950 rounded-lg shadow-md">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">Consultation</h3>
              <p className="text-green-500 text-lg md:text-xl mb-4">Consultation by<br/>Founder & Team</p>
              <p className="text-sm md:text-base text-gray-400">We've spent years growing multiple brands from scratch to communities of over 5M+ in total. We know how to make your content stand out and go viral.Want us to guide your in-house team to 2x your growth?Looking to build a strong personal brand?</p>
            </div>
            <div className="p-6 md:p-8 bg-zinc-950 rounded-lg shadow-md">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">Lead Generation</h3>
              <p className="text-green-500 text-lg md:text-xl mb-4">Ace LinkedIn with<br/>‍Brand Persona!</p>
              <p className="text-sm md:text-base text-gray-400">Let's make your brand standout with a full personalized profile optimization. We specialize in crafting creative banners and informative carousels. Our content includes strong CTA, strategic keywords, and engaging stories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 md:py-20 ">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="p-6 bg-zinc-900 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Strategy</h3>
              <p className="text-sm md:text-gray-400">Strategic guidance and competitive analysis to grow brand identity.</p>
            </div>
            <div className="p-6 bg-zinc-900 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Content Research</h3>
              <p className="text-sm md:text-gray-400">Detailed value addition content that connects and sparks action.</p>
            </div>
            <div className="p-6 bg-zinc-900 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Storytelling</h3>
              <p className="text-sm md:text-gray-400">Connect emotionally with your audience through storytelling.</p>
            </div>
            <div className="p-6 bg-zinc-900 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Video Production</h3>
              <p className="text-sm md:text-gray-400">From concept to creation, we bring your vision to life. on screen.</p>
            </div>
            <div className="p-6 bg-zinc-900 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Video Editing</h3>
              <p className="text-sm md:text-gray-400">Turn your raw footages into captivating videos that tell stories.</p>
            </div>
            <div className="p-6 bg-zinc-900 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Graphic Design</h3>
              <p className="text-sm md:text-gray-400">Turn ideas into stunning carousels, thumbnails and posters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-16 md:py-20 ">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12">Our Work</h2>
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-6 mb-8 md:mb-12">
            <button className="px-4 py-1 md:px-6 md:py-2 bg-green-600 text-white rounded-lg text-sm md:text-base">Instagram</button>
            <button className="px-4 py-1 md:px-6 md:py-2 bg-zinc-800 text-gray-300 rounded-lg hover:bg-green-600 transition duration-300 text-sm md:text-base">Youtube</button>
            <button className="px-4 py-1 md:px-6 md:py-2 bg-zinc-800 text-gray-300 rounded-lg hover:bg-green-600 transition duration-300 text-sm md:text-base">LinkedIn</button>
          </div>
          {/* Placeholder for Instagram embeds - actual embeds would require a different approach for security/privacy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p className="text-sm md:text-gray-400">Instagram post by KodNest</p>
              <a href="https://www.instagram.com/kodnest/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline text-sm md:text-base">View on Instagram</a>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p className="text-sm md:text-gray-400">Instagram post by Coding Ninjas</p>
              <a href="https://www.instagram.com/coding.ninjas/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline text-sm md:text-base">View on Instagram</a>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p className="text-sm md:text-gray-400">Instagram post by GeeksforGeeks</p>
              <a href="https://www.instagram.com/geeks_for_geeks/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline text-sm md:text-base">View on Instagram</a>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p className="text-sm md:text-gray-400">Instagram post by pwvidyapeeth tamil nadu</p>
              <a href="https://www.instagram.com/pwvidyapeeth_tamilnadu/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline text-sm md:text-base">View on Instagram</a>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p className="text-sm md:text-gray-400">Instagram post by Siddharth Tiwari (Hypertroph)</p>
              <a href="https://www.instagram.com/hypertroph/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline text-sm md:text-base">View on Instagram</a>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p className="text-sm md:text-gray-400">Instagram post by Spectrum</p>
              <a href="https://www.instagram.com/spectrumddn/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline text-sm md:text-base">View on Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* Words From Our Clients Section */}
      <section className="py-16 md:py-20 ">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12">Words From Our Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="p-6 md:p-8 bg-zinc-900 rounded-lg shadow-md text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Top coding platform, GFG, is with us!</h3>
              <p className="text-sm md:text-gray-400 mb-2 md:mb-4">BrandFlow has consistently delivered exceptional content on our main YouTube channel, covering trending topics with engaging edits and thumbnails.</p>
              <p className="text-base md:text-lg font-semibold">GFG</p>
              <p className="text-sm md:text-gray-500">Edtech</p>
            </div>
            <div className="p-6 md:p-8 bg-zinc-900 rounded-lg shadow-md text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Sahil from Canada went viral from scratch!</h3>
              <p className="text-sm md:text-gray-400 mb-2 md:mb-4">I couldn't believe it when my first reel got 2 million views and my followers jumped from 500 to 50,000 in just a month. BrandFlow's services are top-notch.</p>
              <p className="text-base md:text-lg font-semibold">Sahil Gogna</p>
              <p className="text-sm md:text-gray-500">Lifestyle</p>
            </div>
            <div className="p-6 md:p-8 bg-zinc-900 rounded-lg shadow-md text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Uttrakhand's best JEE institute, Spectrum, believes in us!</h3>
              <p className="text-sm md:text-gray-400 mb-2 md:mb-4">Through creative storytelling and thorough research, BrandFlow effectively communicates our vision to the target audience, especially the youth.</p>
              <p className="text-base md:text-lg font-semibold">Spectrum</p>
              <p className="text-sm md:text-gray-500">Edtech</p>
            </div>
            <div className="p-6 md:p-8 bg-zinc-900 rounded-lg shadow-md text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Top fitness influencer, Hypertroph, likes our content strategy!</h3>
              <p className="text-sm md:text-gray-400 mb-2 md:mb-4">BrandFlow really helped me to boost my performance through compelling edits, catchy ideas and strategic management.</p>
              <p className="text-base md:text-lg font-semibold">Hypertroph</p>
              <p className="text-sm md:text-gray-500">Fitness</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Team Section */}
      <section className="py-16 md:py-20">
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
            <div className="p-4 md:p-6 bg-zinc-950 rounded-lg shadow-md text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Designing Brand Identity.</h3>
            </div>
            <div className="p-4 md:p-6 bg-zinc-950 rounded-lg shadow-md text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Optimizing content strategies to go viral.</h3>
            </div>
            <div className="p-4 md:p-6 bg-zinc-950 rounded-lg shadow-md text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Hooking audiences through storytelling.</h3>
            </div>
            <div className="p-4 md:p-6 bg-zinc-950 rounded-lg shadow-md text-left">
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
            <div className="p-4 md:p-6 bg-zinc-950 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Harman Singh</h3>
              <p className="text-sm md:text-gray-400">Branding Strategist</p>
              <p className="text-sm md:text-gray-400">Direction & Production</p>
              <p className="text-sm md:text-gray-400">Storyteller</p>
            </div>
            <div className="p-4 md:p-6 bg-zinc-950 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Sandeep Verma</h3>
              <p className="text-sm md:text-gray-400">Marketing & Sales</p>
              <p className="text-sm md:text-gray-400">Relationship Manager</p>
              <p className="text-sm md:text-gray-400">Operations</p>
            </div>
            <div className="p-4 md:p-6 bg-zinc-950 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Anushka Singh</h3>
              <p className="text-sm md:text-gray-400">Content Marketing</p>
              <p className="text-sm md:text-gray-400">Research & Analytics</p>
              <p className="text-sm md:text-gray-400">Human Resource</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20  text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Got Query?</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8">For pricing, Reach out to us</h3>
          <button className="px-6 py-3 md:px-8 md:py-4 bg-green-600 text-white text-base md:text-xl font-semibold rounded-lg hover:bg-green-700 transition duration-300">Get In Touch</button>
        </div>
      </section>

      {/* Footer */}
      <footer className=" text-gray-400 p-6 md:p-8 text-center text-xs md:text-sm">
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
