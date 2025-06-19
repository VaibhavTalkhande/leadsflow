import React from 'react'
import { FaCheckCircle, FaTimesCircle, FaRocket } from 'react-icons/fa'

const problems = [
  "You're posting content but getting no real engagement or clients",
  'Stuck with low reach and slow follower growth',
  'Too busy to focus on marketing or building a lead system',
  'Struggling to keep up with trends and content ideas',
]
const solutions = [
  'Hook-based video strategies built to convert views into leads',
  'Done-for-you viral content tailored to your niche and audience',
  'Clear growth roadmap with automated funnels + lead magnets',
  'Weekly updates, real-time analytics, and growth reporting',
]

const Infosection = () => {
  return (
    <div className='relative w-full py-16 px-2 sm:px-4 md:px-12 bg-black text-white overflow-hidden'>
        
      <div className="container mx-auto px-2 sm:px-4 md:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-[#53c926] drop-shadow break-words leading-tight text-center">
          Making Your Life Easier
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto justify-center items-stretch">
          {/* Problems Card */}
          <div className="bg-black border-4 border-white rounded-lg shadow-[8px_8px_0_0_#ff234b] p-5 sm:p-8 md:p-10 flex flex-col items-start md:items-center relative animate-fadeInUp max-w-xl w-full mx-auto font-bold min-h-[340px]">
            <div className="bg-white text-[#ff234b] text-lg sm:text-xl md:text-2xl font-semibold rounded-lg px-4 sm:px-6 py-2 mb-4 sm:mb-6 w-full text-center shadow-[4px_4px_0_0_#ff234b]">
              😡Problems you face
            </div>
            <ul className="space-y-3 sm:space-y-4 w-full">
              {problems.map((item, idx) => (
                <div key={idx} className="bg-white/10 rounded-lg p-3 sm:p-4 mb-1 flex flex-row items-center gap-3 sm:gap-4 w-full backdrop-blur-sm">
                  <span className="flex-shrink-0 flex items-center justify-center"><FaTimesCircle className="text-[#ff234b] text-xl sm:text-2xl md:text-3xl" /></span>
                  <span className="flex-1 text-white text-sm sm:text-base md:text-lg text-left break-words whitespace-pre-line">{item}</span>
                </div>
              ))}
            </ul>
          </div>
          {/* Solutions Card */}
          <div className="bg-black border-4 border-white rounded-lg shadow-[8px_8px_0_0_#53c926] p-5 sm:p-8 md:p-10 flex flex-col items-start md:items-center relative animate-fadeInUp max-w-xl w-full mx-auto font-bold min-h-[340px]">
            <div className="bg-[#53c926] text-white text-lg sm:text-xl md:text-2xl font-semibold rounded-lg px-4 sm:px-6 py-2 mb-4 sm:mb-6 w-full text-center flex items-center justify-center gap-2 shadow-[4px_4px_0_0_#50A837]">
              <FaRocket className="inline-block text-white text-2xl sm:text-3xl md:text-4xl mr-2 align-middle" /> The Solutions We Bring
            </div>
            <ul className="space-y-3 sm:space-y-4 w-full">
              {solutions.map((item, idx) => (
                <div key={idx} className="bg-[#53c926]/10 rounded-lg p-3 sm:p-4 mb-1 flex flex-row items-center gap-3 sm:gap-4 w-full backdrop-blur-sm">
                  <span className="flex-shrink-0 flex items-center justify-center"><FaCheckCircle className="text-[#53c926] text-xl sm:text-2xl md:text-3xl" /></span>
                  <span className="flex-1 text-white text-sm sm:text-base md:text-lg text-left break-words whitespace-pre-line">{item}</span>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Infosection