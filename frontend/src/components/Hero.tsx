import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/70 to-background"></div>
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              <span className="block mb-2">Stop guessing.</span>
              <span>
                Know exactly what your marketing <span className="text-accent">earns</span>.
              </span>
            </h1>
            <p className="mb-9 text-lg md:text-xl text-ink-2 leading-relaxed max-w-lg">
              Attach a Moola Drop to any campaign. Track every customer who walks in, every dollar they spend, every channel that worked. Pay only on redemption.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="#book"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Book a demo
                <svg viewBox="0 0 18 18" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M3 9h12M10 4l5 5-5 5"></path>
                </svg>
              </Link>
              <Link
                href="#results"
                className="inline-flex items-center justify-center rounded-full border border-line bg-bg-elev px-6 py-3.5 text-base font-medium text-white transition-colors hover:border-ink-3"
              >
                See live results
              </Link>
            </div>
            
            <div className="mt-9 flex flex-wrap items-center gap-7 text-sm font-medium text-ink-2">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M2.5 6.5l2.5 2.5 4.5-5"></path>
                </svg>
                <span>Avg. 500%+ ROAS</span>
              </div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M2.5 6.5l2.5 2.5 4.5-5"></path>
                </svg>
                <span>Pay only on redemption</span>
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-md perspective-1000">
            {/* The Mock Card */}
            <div className="relative z-10 rounded-2xl bg-white p-7 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="relative mb-5 h-36 w-full overflow-hidden rounded-xl bg-neutral-200">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-300 to-neutral-400"></div>
                <div className="absolute inset-0 flex items-center justify-center text-neutral-500 font-medium">Promo Image</div>
              </div>
              <h3 className="mb-1 text-xl font-bold tracking-tight text-neutral-900">Free $10 Gift Card</h3>
              <p className="mb-4 text-sm text-neutral-500">For dine-in at any Hello Nori location</p>
              
              <div className="mb-4 font-semibold text-accent flex items-baseline gap-1.5">
                <span className="text-xl">9,997</span> 
                <span className="text-sm text-neutral-600">already claimed</span>
              </div>
              
              <div className="mb-5 flex justify-center gap-1.5">
                {['06', '14', '27', '25'].map((num, i) => (
                  <React.Fragment key={i}>
                    <div className="w-10 rounded-md bg-accent px-1 py-1.5 text-center text-background">
                      <div className="font-mono text-base font-bold leading-none">{num}</div>
                      <div className="text-[9px] uppercase tracking-wider opacity-80 mt-0.5">
                        {['D', 'H', 'M', 'S'][i]}
                      </div>
                    </div>
                    {i < 3 && <div className="flex items-center text-base font-bold text-accent">:</div>}
                  </React.Fragment>
                ))}
              </div>
              
              <div className="mt-2 w-full rounded-lg bg-accent py-3 text-center text-sm font-semibold text-background hover:bg-opacity-90 cursor-pointer">
                Claim my gift
              </div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -bottom-6 -left-8 z-20 rounded-xl border border-line bg-bg-elev p-4 shadow-xl backdrop-blur-md transform -rotate-3">
              <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-ink-3">Today&#39;s revenue</div>
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                $8,420
                <span className="inline-flex items-center text-xs font-semibold text-green-400">
                  <svg viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M5 8V2M2 5l3-3 3 3"></path>
                  </svg>
                  24%
                </span>
              </div>
            </div>
            
            <div className="absolute top-10 -right-6 z-20 rounded-xl border border-line bg-bg-elev p-4 shadow-xl backdrop-blur-md transform rotate-3">
              <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-ink-3">ROAS · live</div>
              <div className="text-2xl font-bold text-white">597%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
