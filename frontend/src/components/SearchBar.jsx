import React from 'react';

function SearchBar() {
  return (
    /* Responsive container: thinner on mobile (py-3), thicker on desktop (sm:py-6) */
    <div className="w-full bg-[#a329f5] py-3 sm:py-6 px-4 sm:px-8 lg:px-12">
      
      {/* Constraints the width on large screens to match your navbar margins */}
      <div className="max-w-[1100px] mx-auto">
        
        <div className="relative flex items-center w-full">
          
          {/* THE WHITE TEXTBOX 
              - text-[13px] on mobile to prevent placeholder clipping
              - text-base on desktop for readability
              - py-2.5 on mobile for a slim look, py-4 on desktop for impact
          */}
          <input
            type="text"
            placeholder="Search over 250 gift card brands"
            className="w-full py-2.5 sm:py-4 px-5 sm:px-8 pr-14 sm:pr-16 rounded-full 
                       bg-white text-gray-900 placeholder-gray-400 
                       text-[13px] sm:text-base font-medium
                       focus:outline-none shadow-md border-none transition-all"
          />
          
          {/* THE PURPLE BUTTON 
              - Shrinks slightly on mobile (p-2 vs p-2.5)
              - Uses 'active:scale-95' for better touch feedback on phones
          */}
          <button 
            type="submit"
            className="absolute right-1 sm:right-2 bg-[#8e21d6] hover:bg-[#7a1bb8] 
                       text-white p-2 sm:p-2.5 rounded-full 
                       transition-all active:scale-95 flex items-center justify-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 sm:h-5 sm:w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default SearchBar;