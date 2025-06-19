import React from 'react'

const Infosection = () => {
  return (
    <div className='relative w-full py-20 px-4 md:px-12 bg-[#000] text-white overflow-hidden'>
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12">Making Your Life Easier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
            <div className="bg-black border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] p-8 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">The Problems you are facing</h3>
              <ul className="list-disc list-inside text-base md:text-lg space-y-2 text-gray-300">
                <li>Low views and stuck follower/ subscriber count</li>
                <li>Stress about algorithm change</li>
                <li>Content curation and repurposing challenges</li>
                <li>Less time for other business activities</li>
              </ul>
            </div>
            <div className="bg-black border-4 border-white shadow-[-8px_8px_0px_0px_#53c926] p-8 rounded-lg">
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
    </div>
  )
}

export default Infosection