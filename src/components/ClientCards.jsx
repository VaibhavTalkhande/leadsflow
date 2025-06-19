import React from 'react';
import ribbon from "../assets/ribbon_Vector-p-2600.png"
import AnimatedTitle from './Animated';
const clients = [
  {
    name: 'CA Shubham Patel',
    title: 'Founder and CEO Conso AI',
    image: 'https://ui-avatars.com/api/?name=CA+Shubham+Patel&background=53c926&color=fff&size=128',
  },
  {
    name: 'Rohit Purohit',
    title: 'Managing Director ARK2Construct',
    image: 'https://ui-avatars.com/api/?name=Rohit+Purohit&background=53c926&color=fff&size=128',
  },
  {
    name: 'Dr. Ankita Agrawal',
    title: 'Co Founder Agrawal Dental Clinic',
    image: 'https://ui-avatars.com/api/?name=Dr+Ankita+Agrawal&background=53c926&color=fff&size=128',
  },
  {
    name: 'Dr. Vrutika Patel',
    title: 'Founder Blissful hands',
    image: 'https://ui-avatars.com/api/?name=Dr+Vrutika+Patel&background=53c926&color=fff&size=128',
  },
  {
    name: 'CA CS Harshwardhan Bissa',
    title: 'Co-founder - Quick Fintax',
    image: 'https://ui-avatars.com/api/?name=Harshwardhan+Bissa&background=53c926&color=fff&size=128',
  },
];

const ClientCards = () => {
  return (
    <section className="w-full py-10 md:py-16 bg-black relative overflow-hidden">
          <img src={ribbon} alt="Ribbon" className="absolute -z-0 top-0 left-0 w-full h-auto object-fit opacity-20 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4">
        <AnimatedTitle>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-[#53c926] mb-8 text-center animate-fadeInUp">Top Clients We Have Served</h2>
        </AnimatedTitle>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className=" border-4 border-white rounded-lg shadow-[-8px_8px_0px_0px_#53c926] flex flex-col items-center justify-center p-6 sm:p-8 min-h-[240px] w-full max-w-xs mx-auto hover:scale-105 transition-transform duration-300 animate-popUp"
              style={{ boxShadow: '-8px 8px 0px 0px #53c926' }}
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 object-cover border-4 border-black shadow"
                loading="lazy"
              />
              <div className="text-lg sm:text-xl font-bold text-white mb-1 text-center leading-tight">{client.name}</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300 text-center leading-snug font-semibold">{client.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCards; 