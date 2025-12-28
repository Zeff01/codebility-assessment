import React, { useRef } from 'react';

function Slider1() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    // Check if the ref is attached to the element
    if (scrollRef.current) {
      const scrollAmount = 300; // Increased for better visible movement
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const categories = [
    { name: "Recreation", icon: "🏂" },
    { name: "Home", icon: "🛋️" },
    { name: "Grocery", icon: "🛒" },
    { name: "Fun & Games", icon: "🎮" },
    { name: "Health & Beauty", icon: "💖" },
    { name: "Travel", icon: "✈️" },
    { name: "Promotional Banner", icon: "😊" },
    { name: "Restaurants", icon: "🍔" },
    { name: "Fashion", icon: "👕" },
    { name: "Games", icon: "😶‍🌫️" },
    { name: "Music", icon: "🎶" },
  ];

  return (
    <div className="w-full bg-white py-8 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto relative flex items-center">
        
        {/* Scrollable Area - Ensure overflow-x-auto is present */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto space-x-8 sm:space-x-12 scrollbar-hide scroll-smooth pb-4 pr-32"
          style={{ 
            msOverflowStyle: 'none', 
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch' // Ensures smooth momentum scroll on iOS
          }} 
        >
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center min-w-fit cursor-pointer group">
              {/* Icon Circle */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#f3e8ff] flex items-center justify-center text-2xl transition-transform group-hover:scale-110 shadow-sm">
                <span>{cat.icon}</span>
              </div>
              {/* Category Name */}
              <span className="mt-3 text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider text-center">
                {cat.name}
              </span>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute right-0 flex space-x-2 bg-white pl-4 py-2 z-10">
          <button 
            type="button" // Explicitly set type to prevent form submission issues
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm bg-white"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            type="button"
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm bg-white"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}

export default Slider1;