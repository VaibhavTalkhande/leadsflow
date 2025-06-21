import React from 'react';
import ribbon from "../assets/ribbon_Vector-p-2600.png"
import AnimatedTitle from './Animated';
import Card from './Card.jsx'
import conso from '../assets/conso.png';
import ark from '../assets/ark.png';
import dental from '../assets/dental.png';
import blissfull from '../assets/blissfull.png';
import quickfintax from '../assets/quickfintax.png';
import karma from '../assets/karma.png';
const clients = [
  {
    name: 'CA Shubham Patel',
    title: 'Founder and CEO Conso AI',
    image: conso,
  },
  {
    name: 'Rohit Purohit',
    title: 'Managing Director ARK2Construct',
    image: ark,
  },
  {
    name: 'Dr. Ankita Agrawal',
    title: 'Co Founder Agrawal Dental Clinic',
    image: dental,
  },
  {
    name: 'Dr. Vrutika Patel',
    title: 'Founder Blissful hands',
    image: blissfull,
  },
  {
    name: 'CA CS Harshwardhan Bissa',
    title: 'Co-founder - Quick Fintax',
    image: quickfintax,
  },
  {
    name: 'CA Pratik Patel',
    title: 'Co-founder - Quick Fintax',
    image: karma
  }
];

const ClientCards = () => {
  return (
    <section className="w-full py-10 md:py-16 relative overflow-hidden">
          <img src={ribbon} alt="Ribbon" className="absolute -z-0 top-0 left-0 w-full h-auto object-fit opacity-20 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4">
        <AnimatedTitle>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-[#53c926] mb-8 text-center animate-fadeInUp">Top Clients We Have Served</h2>
        </AnimatedTitle>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {clients.map((client, idx) => (
            <Card
              key={idx}
              name={client.name}
              title={client.title}
              image={client.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCards; 