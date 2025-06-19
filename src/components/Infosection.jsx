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
      <div className="container mx-auto px-2 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-14 text-[#53c926] drop-shadow">Making Your Life Easier</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Problems Card */}
          <div className="bg-[#18181b] border-2 border-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-start relative animate-fadeInUp">
            <div className="bg-white text-[#ff234b] text-xl sm:text-2xl font-semibold rounded-xl px-6 py-2 mb-6 w-full text-center">Problems</div>
            <ul className="space-y-4 w-full">
              {problems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-base sm:text-lg text-white">
                  <FaTimesCircle className="text-[#ff234b] text-xl sm:text-2xl" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Solutions Card */}
          <div className="bg-[#00181c] border-2 border-[#53c926] rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-start relative animate-fadeInUp">
            <div className="bg-[#53c926] text-white text-xl sm:text-2xl font-semibold rounded-xl px-6 py-2 mb-6 w-full text-center flex items-center justify-center gap-2">
              <FaRocket className="inline-block text-white mr-2" /> The Solutions We Bring
            </div>
            <ul className="space-y-4 w-full">
              {solutions.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-base sm:text-lg text-white">
                  <FaCheckCircle className="text-[#53c926] text-xl sm:text-2xl" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Infosection