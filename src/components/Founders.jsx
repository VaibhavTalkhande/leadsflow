import React from 'react';
import ribbon from '../assets/ribbon_Vector-p-2600.png';
import { FaLinkedin } from 'react-icons/fa';
import AnimatedTitle from './Animated';
const founders = [
  {
    name: 'Mr. Pratik Patel',
    position: 'Co-Founder',
    image: 'https://via.placeholder.com/200x200?text=Pratik', // Replace with real image if available
    linkedin: 'https://www.linkedin.com/in/pratikpatel', // Replace with real URL
  },
  {
    name: 'Ms. Dhruvi Patel',
    position: 'Co-Founder',
    image: 'https://via.placeholder.com/200x200?text=Dhruvi', // Replace with real image if available
    linkedin: 'https://www.linkedin.com/in/dhruvipatel', // Replace with real URL
  },
];

const Founders = () => (
  <section className="w-full relative py-10 sm:py-14 md:py-20 bg-black flex flex-col items-center" id="founders">
    <img src={ribbon} alt="Ribbon" className="absolute -z-0 top-0 left-0 w-full h-auto object-fit opacity-20 pointer-events-none" />
    <AnimatedTitle>
      <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-10 text-center text-[#53c926]">Meet the Co-Founders</h2>
    </AnimatedTitle>
    <AnimatedTitle>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-14 justify-center items-center w-full px-2 sm:px-4 md:px-0">
        {founders.map((founder, idx) => (
          <div
            key={idx}
            className="bg-black border-4 border-white rounded-lg shadow-[-8px_8px_0px_0px_#53c926] p-6 sm:p-8 md:p-10 flex flex-col items-center text-center w-full max-w-xs sm:max-w-sm md:max-w-md min-h-[340px] sm:min-h-[400px] md:min-h-[420px] transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0"
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-[#53c926] object-cover shadow-lg mb-4"
            />
            <div className="text-[#53c926] font-bold text-lg sm:text-2xl md:text-3xl mb-1">{founder.name}</div>
            <div className="text-white text-base sm:text-lg md:text-xl mb-4 font-medium">{founder.position}</div>
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12  rounded-sm duration-300 mb-2"
              aria-label={`LinkedIn profile of ${founder.name}`}
            >
              <FaLinkedin className="w-10 h-10" />
            </a>
            <div className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-light mt-2">LeadsFlow Media's visionaries, blending creativity and strategy to drive success.</div>
          </div>
        ))}
      </div>
    </AnimatedTitle>
  </section>
);

export default Founders; 