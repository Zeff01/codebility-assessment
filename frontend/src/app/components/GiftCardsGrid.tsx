import React from 'react';
import doordashLogo from '../../image/doordash.png';
import petsmartLogo from '../../image/petsmart.png';
import essoLogo from '../../image/esso.png';
import amazonLogo from '../../image/amazon.png';
import starbucksLogo from '../../image/starbucks.png';


const giftCardsData = [
  { id: 1, name: "DoorDash", promoText: "Buy Now And Get", promoTag: "1.5% More", logoBg: "bg-white", logoElement: <img src={doordashLogo.src} alt="DoorDash" className="w-full h-full object-contain p-2" /> },
  { id: 2, name: "Petsmart", promoText: "Buy Now And Get", promoTag: "6% More", logoBg: "bg-white", logoElement: <img src={petsmartLogo.src} alt="Petsmart" className="w-full h-full object-contain p-2" /> },
  { id: 3, name: "Esso™ and Mobil...", promoText: "Buy Now And Get", promoTag: "1% More", logoBg: "bg-white", logoElement: <img src={essoLogo.src} alt="Esso" className="w-full h-full object-contain p-2" /> },
  { id: 4, name: "Amazon.ca", promoText: "", promoTag: "", logoBg: "bg-white", logoElement: <img src={amazonLogo.src} alt="Amazon" className="w-full h-full object-contain p-2" /> },
  { id: 5, name: "Starbucks", promoText: "", promoTag: "", logoBg: "bg-white", logoElement: <img src={starbucksLogo.src} alt="Starbucks" className="w-full h-full object-contain p-2" /> },
];

export default function GiftCardsGrid() {
  return (
    <section className="py-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#411195] mb-4 tracking-tight">Send A Gift Card and<br />Collect Rewards</h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed px-4">
          Moola provides unbeatable deals on the gift cards you love. Buy for a friend or better yet, for yourself and collect rewards. With Moola, giving the perfect gift and saving money on the brands you love has never been easier or more convenient. Shop over 250 brands across Canada.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {giftCardsData.map((card) => (
          <div key={card.id} className="bg-white rounded-[1.25rem] border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col cursor-pointer">
            <div className="bg-slate-100 h-36 w-full flex items-center justify-center p-4">
              <div className={`w-20 h-20 ${card.logoBg} rounded-[1rem] shadow-sm flex items-center justify-center overflow-hidden border border-black/5`}>
                {card.logoElement}
              </div>
            </div>
            <div className="p-5 flex flex-col justify-start h-32 bg-white">
              <h3 className="font-extrabold text-slate-900 text-[15px] mb-1 leading-tight">{card.name}</h3>
              {card.promoText && (
                <div className="mt-1 flex flex-col items-start gap-1.5">
                  <span className="text-[12px] text-slate-600 font-medium leading-none">{card.promoText}</span>
                  <span className="bg-[#22a039] text-white text-[12px] font-extrabold px-2.5 py-0.5 rounded-full leading-relaxed">{card.promoTag}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}