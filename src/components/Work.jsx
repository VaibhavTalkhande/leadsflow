import React, { useState } from 'react'
import ribbon from '../assets/ribbon_Vector-p-2600.png'
const reels = [{
  src: 'https://www.youtube.com/embed/JUEdUm_pTuo',
},{
    src: 'https://www.youtube.com/embed/620DeC8dF6Y',
},
{
    src:'https://www.youtube.com/embed/Lp_ab3gPVHA',
},
{
    src: 'https://www.youtube.com/embed/8jzZI49KfKo',
},{
    src: 'https://www.youtube.com/embed/vPvv9GMEpJI',
},{
    src: 'https://www.youtube.com/embed/Z6eYzn5ADg4',
},{
    src: 'https://www.youtube.com/embed/XaL4uijU3q4',
}
]

const getVisibleCount = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
  }
  return 1;
}

const Work = () => {
  const [start, setStart] = useState(0);
  const [visible, setVisible] = useState(getVisibleCount());

  React.useEffect(() => {
    const handleResize = () => setVisible(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const end = start + visible;
  const canPrev = start > 0;
  const canNext = end < reels.length;

  const goPrev = () => setStart(s => Math.max(0, s - visible));
  const goNext = () => setStart(s => Math.min(reels.length - visible, s + visible));
  const goTo = (idx) => setStart(idx * visible);

  // Calculate number of dot sets
  const dotCount = Math.ceil(reels.length / visible);
  const activeDot = Math.floor(start / visible);

  return (
    <section className="relative w-full py-16 bg-black" id="work">
        <img src={ribbon} alt="Ribbon" className="absolute -z-0 top-0 left-0 w-full h-auto object-fit opacity-20 pointer-events-none" />
      <div className=" max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#53c926]">Our Work</h2>
        <div className="relative flex items-center justify-center">
          {canPrev && (
            <button onClick={goPrev} className="absolute left-1 sm:left-0 z-10 bg-[#53c926] text-black rounded-full p-2 sm:p-2.5 shadow-lg hover:bg-green-700 transition top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15.5 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          )}
          <div className="flex gap-3 sm:gap-6 w-full justify-center overflow-x-auto scrollbar-hide px-1 sm:px-0">
            {reels.slice(start, end).map((reel, idx) => (
              <div key={idx} className="bg-black border-4 border-white rounded-xl shadow-[-6px_6px_0px_0px_#53c926] overflow-hidden flex flex-col items-center min-w-[200px] max-w-[90vw] sm:min-w-[320px] sm:max-w-xs w-full transition-all duration-500" style={{transitionTimingFunction:'cubic-bezier(.4,2,.6,1)'}}>
                <iframe
                  width="180"
                  height="320"
                  src={reel.src}
                  title={`Reel ${start + idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-[56vw] max-h-[400px] min-h-[200px] sm:h-[56vw] sm:max-h-[566px] sm:min-h-[320px] bg-black"
                  style={{ aspectRatio: '9/16' }}
                ></iframe>
              </div>
            ))}
          </div>
          {canNext && (
            <button onClick={goNext} className="absolute right-1 sm:right-0 z-10 bg-[#53c926] text-black rounded-full p-2 sm:p-2.5 shadow-lg hover:bg-green-700 transition top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M8.5 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          )}
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#53c926] transition-all duration-300 ${i === activeDot ? 'bg-[#53c926]' : 'bg-black'}`}
              aria-label={`Go to slide set ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work