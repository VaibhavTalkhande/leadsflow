import React, { useState, useEffect } from 'react'

const reviews = [
  {
    name: 'CA Shubham Patel',
    title: 'Founder and CEO Conso AI',
    text: "LeadsFlow Media transformed our online presence. Their video strategies brought us real engagement and a steady stream of clients. The team is creative, responsive, and truly understands what works in today's digital world.",
  },
  {
    name: 'Rohit Purohit',
    title: 'Managing Director ARK2Construct',
    text: "We saw a huge boost in our brand's visibility and credibility. The content was not just viral, but meaningful. I appreciate their hands-on approach and the way they tailor everything to our goals.",
  },
  {
    name: 'Dr. Ankita Agrawal',
    title: 'Co Founder Agrawal Dental Clinic',
    text: "I was amazed by the results! The team made the process effortless and fun. Our clinic's social media now attracts the right audience, and we've seen a clear increase in patient inquiries.",
  },
  {
    name: 'Dr. Vrutika Patel',
    title: 'Founder Blissful hands',
    text: "LeadsFlow Media helped me build a personal brand I'm proud of. Their creative ideas and constant support made all the difference. I recommend them to anyone serious about growth.",
  },
  {
    name: 'CA CS Harshwardhan Bissa',
    title: 'Co-founder - Quick Fintax',
    text: "From strategy to execution, everything was top-notch. The videos not only looked great but actually brought in leads. The reporting and updates kept us confident every step of the way.",
  },
]

const getCardsPerView = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
  }
  return 1;
}

const AUTO_ADVANCE = 10000; // ms

const Reviews = () => {
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= Math.ceil(reviews.length / cardsPerView) ? 0 : nextIndex;
      });
    }, AUTO_ADVANCE);
    return () => clearInterval(timer);
  }, [cardsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= Math.ceil(reviews.length / cardsPerView) ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? Math.ceil(reviews.length / cardsPerView) - 1 : nextIndex;
    });
  };

  const totalSlides = Math.ceil(reviews.length / cardsPerView);

  return (
    <section className="w-full py-12 sm:py-16 bg-black relative overflow-hidden flex flex-col justify-center" id="reviews">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 flex flex-col justify-center h-full">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 text-center text-[#53c926]">Words from Our Clients</h2>
        <div className="relative max-w-7xl mx-auto flex flex-col justify-center h-auto">
          <div className="relative flex items-center justify-center h-auto min-h-[320px] sm:min-h-[360px] md:min-h-[400px]">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#53c926] text-black p-2 rounded-full shadow-lg border-2 border-white hover:bg-green-700 hover:text-white transition-colors duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 px-10 lg:grid-cols-3 gap-6 items-stretch">
                      {reviews
                        .slice(
                          slideIndex * cardsPerView,
                          (slideIndex + 1) * cardsPerView
                        )
                        .map((review, idx) => (
                          <div key={idx} className="bg-black border-4 border-white rounded-lg shadow-[-8px_8px_0px_0px_#53c926] p-4 sm:p-7 md:p-10 flex flex-col items-center text-center min-h-[320px] sm:min-h-[360px] md:min-h-[400px] h-[320px] sm:h-[360px] md:h-[400px] max-w-full transition-all duration-500 justify-between">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 text-[#53c926]" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 8A5.001 5.001 0 0 1 12 3v2a3 3 0 0 0-3 3c0 1.31.84 2.42 2.03 2.83A3.001 3.001 0 0 1 15 15v2a5.001 5.001 0 0 1-4.83-7H7.17z"/></svg>
                            <p className="text-sm sm:text-lg md:text-xl text-white font-medium mb-4 sm:mb-6 break-words whitespace-pre-line flex-1">{review.text}</p>
                            <div className="mt-auto pt-2">
                              <div className="text-[#53c926] font-bold text-sm sm:text-lg">{review.name}</div>
                              <div className="text-gray-300 text-xs sm:text-sm md:text-base">{review.title}</div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Button */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#53c926] text-black p-2 rounded-full shadow-lg border-2 border-white hover:bg-green-700 hover:text-white transition-colors duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 border-2 border-[#53c926] ${index === currentIndex ? 'bg-[#53c926]' : 'bg-black'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Add keyframes for slide animations
// In your global CSS (e.g., index.css):
// @keyframes slideLeftIn { from { opacity: 0; transform: translateX(32px); } to { opacity: 1; transform: translateX(0); } }
// @keyframes slideLeftOut { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(-32px); } }
// @keyframes slideRightIn { from { opacity: 0; transform: translateX(-32px); } to { opacity: 1; transform: translateX(0); } }
// @keyframes slideRightOut { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(32px); } }
// .animate-slideLeftIn { animation: slideLeftIn 0.4s both; }
// .animate-slideLeftOut { animation: slideLeftOut 0.4s both; }
// .animate-slideRightIn { animation: slideRightIn 0.4s both; }
// .animate-slideRightOut { animation: slideRightOut 0.4s both; }

export default Reviews