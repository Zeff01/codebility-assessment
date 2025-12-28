import React from 'react';
import { ShoppingBag, Tag, Download, Star } from 'lucide-react'; // Optional icons

function Cards2() {
  const infoCards = [
    {
      title: "Deals Each Week",
      desc: "Each week, we feature new deals in the Moola Marketplace where you can save up to 15% on popular brands. Check out this week's feature deal.",
      btnText: "SHOP DEALS",
      icon: "🏷️"
    },
    {
      title: "Everyday Essentials",
      desc: "Moola has deals on all your everyday essentials such as grocery, fuel, pharmacy, food delivery, and more. It all adds up to great savings!",
      btnText: "SHOP ESSENTIALS",
      icon: "🛍️"
    },
    {
      title: "Download App",
      desc: "Download the Moola App and start collecting cash back and bonus gift vouchers.",
      btnText: "DOWNLOAD APP",
      icon: "📱"
    }
  ];

  const testimonials = [
    {
      text: "This is a great app that saves money. Saved over 200 dollars so far!",
      platform: "Apple Store",
      stars: 5,
      logo: "🍎"
    },
    {
      text: "Great way to save on the stuff you buy anyway. I always check Moola first when shopping online or in-store.",
      platform: "Google",
      stars: 4,
      logo: "🔍"
    },
    {
      text: "It's very easy to use, has more than 200 brands, and also lots of discounts and bonuses.",
      platform: "Google Play",
      stars: 5,
      logo: "▶️"
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* 1. TOP INFO CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {infoCards.map((card, index) => (
            <div key={index} className="bg-gray-100 rounded-[40px] p-8 sm:p-10 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-[#5b21b6] text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {card.desc}
              </p>
              <button className="bg-[#5b21b6] hover:bg-[#4c1d95] text-white px-8 py-3 rounded-full font-bold text-xs tracking-wider transition-all active:scale-95">
                {card.btnText}
              </button>
            </div>
          ))}
        </div>

        {/* 2. TESTIMONIALS SECTION */}
        <div className="text-center mb-12">
          <h2 className="text-[#5b21b6] text-3xl sm:text-4xl font-extrabold">
            What Do Customers Think About Moola
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col items-center text-center border border-gray-50">
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                "{item.text}"
              </p>
              
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    fill={i < item.stars ? "#eab308" : "none"} 
                    className={i < item.stars ? "text-yellow-500" : "text-gray-300"} 
                  />
                ))}
              </div>

              {/* Platform Logo Placeholder */}
              <div className="flex items-center space-x-2 mt-auto">
                <span className="text-xl">{item.logo}</span>
                <span className="font-bold text-gray-800 text-sm">{item.platform}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Cards2;