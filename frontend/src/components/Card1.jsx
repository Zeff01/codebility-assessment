import React from 'react';

function Card1() {
  return (
    <section className="w-full bg-white py-6 sm:py-10 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Top Grid: Adapts from 1 column to 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
          
          {/* Main Large Card (Left) 
              - Spans 2 columns on desktop
              - Full width on mobile
          */}
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden h-[320px] sm:h-[400px] lg:h-[480px] shadow-sm group">
            <img 
              src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1974&auto=format&fit=crop" 
              alt="Spring Savings" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 bg-gradient-to-r from-white/40 to-transparent">
              <span className="text-purple-700 font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-2">
                Spring Savings Are Here
              </span>
              <h2 className="text-purple-600 text-2xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 max-w-[280px] sm:max-w-md">
                ONE MONTH OF SUPER GIFT DEALS
              </h2>
              <button className="bg-[#a329f5] hover:bg-[#8e21d6] text-white w-fit px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all active:scale-95 shadow-lg">
                SHOP GIFT CARDS
              </button>
            </div>
          </div>

          {/* Right Column: Stacks two smaller cards vertically */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Top Right Card */}
            <div className="relative rounded-2xl overflow-hidden h-[160px] sm:h-[188px] lg:h-[228px] shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1760&auto=format&fit=crop" 
                alt="DoorDash" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5 p-5 sm:p-6 flex flex-col justify-start">
                <h3 className="text-gray-800 font-extrabold text-base sm:text-lg leading-tight">
                    Save On Lunch<br/>Take-Out
                </h3>
                <span className="text-gray-600 text-[10px] sm:text-xs font-bold mt-1">DoorDash</span>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="relative rounded-2xl overflow-hidden h-[160px] sm:h-[188px] lg:h-[228px] shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1770&auto=format&fit=crop" 
                alt="Spotify" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5 p-5 sm:p-6 flex flex-col justify-start">
                <h3 className="text-gray-800 font-extrabold text-base sm:text-lg leading-tight">
                    Gift Ad-Free<br/>Listening
                </h3>
                <span className="text-gray-600 text-[10px] sm:text-xs font-bold mt-1">Spotify</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Section: Responsive alignment */}
        <div className="max-w-4xl text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-800 mb-4">
            Shop Gift Cards
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
            Whether you're shopping for birthdays, holidays, or for herself, we have the 
            perfect gift card for everyone on your gift list. Earn cash back or bonus 
            rewards as you shop over 250 brands across Canada.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Card1;