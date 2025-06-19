import React from 'react'
import AnimatedTitle from './Animated'

const expertise = [
  {
    title: 'Strategy',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    desc: 'Strategic guidance and competitive analysis to grow brand identity.',
  },
  {
    title: 'Content Research',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    desc: 'Detailed value addition content that connects and sparks action.',
  },
  {
    title: 'Storytelling',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    desc: 'Connect emotionally with your audience through storytelling.',
  },
  {
    title: 'Video Production',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    desc: 'From concept to creation, we bring your vision to life on screen.',
  },
  {
    title: 'Video Editing',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80',
    desc: 'Turn your raw footages into captivating videos that tell stories.',
  },
  {
    title: 'Graphic Design',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    desc: 'Turn ideas into stunning carousels, thumbnails and posters.',
  },
]

const Expertise = () => {
  return (
    <section className="w-full py-16 bg-black" id="expertise">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedTitle>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#53c926] ">Our Expertise</h2>
        </AnimatedTitle>
        <AnimatedTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {expertise.map((item, idx) => (
            <div key={idx} className="bg-black border-4 border-white rounded-lg shadow-[-8px_8px_0px_0px_#53c926] p-0 flex flex-col min-h-[340px] overflow-hidden transition-transform hover:scale-[1.025]">
              <img src={item.img} alt={item.title} className="w-full h-40 object-cover object-center border-b-2 border-[#53c926]" loading="lazy" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#53c926]">{item.title}</h3>
                <hr className="my-2 border-gray-700" />
                <p className="text-base md:text-lg text-gray-200 font-medium break-words whitespace-pre-line w-full">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        </AnimatedTitle>
      </div>
    </section>
  )
}

export default Expertise