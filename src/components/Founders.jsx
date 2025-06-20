import React from 'react';
import ribbon from '../assets/ribbon_Vector-p-2600.png';
import AnimatedTitle from './Animated';
import FounderCard from './FounderCard';
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
  <section className="w-full relative py-10 sm:py-14 md:py-20  flex flex-col items-center" id="founders">
    <img src={ribbon} alt="Ribbon" className="absolute -z-0 top-0 left-0 w-full h-auto object-fit opacity-20 pointer-events-none" />
    <AnimatedTitle>
      <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-10 text-center text-[#53c926]">Meet the Co-Founders</h2>
    </AnimatedTitle>
    <AnimatedTitle>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-14 justify-center items-center w-full px-2 sm:px-4 md:px-0">
        {founders.map((founder, idx) => (
          <FounderCard
            key={idx}
            image={founder.image}
            name={founder.name}
            position={founder.position}
            linkedin={founder.linkedin}
          />
        ))}
      </div>
    </AnimatedTitle>
  </section>
);

export default Founders; 