export default function HowItWorks() {
  return (
    <section id="how" className="border-t border-line py-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 max-w-2xl">
          <span className="uppercase tracking-widest text-xs font-semibold text-accent">How it works</span>
          <h2 className="my-4 text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Three steps.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8 relative">
          {/* Connecting lines for desktop */}
          <div className="hidden lg:block absolute top-10 left-1/6 right-1/6 h-px bg-line"></div>

          {/* Step 1 */}
          <div className="relative">
            <div className="mb-6 flex items-center gap-3 font-mono text-xs tracking-widest text-accent">
              <span className="h-px w-6 bg-accent"></span>Step 01
            </div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-white">Design your drop</h3>
            <p className="mb-7 text-ink-2 leading-relaxed text-sm md:text-base">
              Pick a creative — A-frame QR, social post, takeout sticker — attach a stored-value gift card, and set the redemption window. We help you tune the offer to your margins.
            </p>
            
            <div className="min-h-[160px] overflow-hidden rounded-2xl border border-line bg-bg-elev p-6 font-mono text-xs text-ink-2 flex flex-col gap-3 shadow-sm hover:border-ink-3 transition-colors">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-accent flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Drop builder</span>
                <span className="text-ink-3 border border-line px-1.5 py-0.5 rounded uppercase tracking-wider">draft</span>
              </div>
              <div className="my-1 h-px bg-line/50"></div>
              <div className="flex justify-between items-center">
                <span>offer.amount</span>
                <span className="text-white bg-line/30 px-2 py-1 rounded">$10.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>redemption.window</span>
                <span className="text-white bg-line/30 px-2 py-1 rounded">7 days</span>
              </div>
              <div className="flex justify-between items-center">
                <span>locations</span>
                <span className="text-white bg-line/30 px-2 py-1 rounded">14 active</span>
              </div>
              <div className="mt-auto flex items-center justify-between pt-3 border-t border-line/50">
                <span className="text-ink-3">est. ROAS</span>
                <span className="font-semibold text-accent text-sm">~520%</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="mb-6 flex items-center gap-3 font-mono text-xs tracking-widest text-accent">
              <span className="h-px w-6 bg-accent"></span>Step 02
            </div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-white">Distribute everywhere</h3>
            <p className="mb-7 text-ink-2 leading-relaxed text-sm md:text-base">
              QR codes, programmatic placements, geo-targeted social, door-hangers — every surface drives back to one trackable landing page tied to your locations.
            </p>
            
            <div className="min-h-[160px] overflow-hidden rounded-2xl border border-line bg-bg-elev p-6 font-mono text-xs text-ink-2 flex flex-col justify-between shadow-sm hover:border-ink-3 transition-colors">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-background/50 border border-line/50 p-3 flex flex-col gap-1">
                  <div className="text-[9px] uppercase tracking-wider text-ink-3">QR · A-frame</div>
                  <div className="text-base font-semibold text-white">4,201</div>
                </div>
                <div className="rounded-xl bg-background/50 border border-line/50 p-3 flex flex-col gap-1">
                  <div className="text-[9px] uppercase tracking-wider text-ink-3">Social · IG</div>
                  <div className="text-base font-semibold text-white">8,402</div>
                </div>
                <div className="rounded-xl bg-background/50 border border-line/50 p-3 flex flex-col gap-1">
                  <div className="text-[9px] uppercase tracking-wider text-ink-3">Programmatic</div>
                  <div className="text-base font-semibold text-white">11,540</div>
                </div>
                <div className="rounded-xl bg-background/50 border border-line/50 p-3 flex flex-col gap-1">
                  <div className="text-[9px] uppercase tracking-wider text-ink-3">Sticker · box</div>
                  <div className="text-base font-semibold text-white">3,214</div>
                </div>
              </div>
              <div className="mt-4 text-[10px] text-ink-3 flex items-center justify-between">
                <span>views · last 24h</span>
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-accent rounded-sm"></div>
                  <div className="w-1 h-4 bg-accent rounded-sm"></div>
                  <div className="w-1 h-2 bg-accent rounded-sm"></div>
                  <div className="w-1 h-5 bg-accent rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="mb-6 flex items-center gap-3 font-mono text-xs tracking-widest text-accent">
              <span className="h-px w-6 bg-accent"></span>Step 03
            </div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-white">Pay only when they show</h3>
            <p className="mb-7 text-ink-2 leading-relaxed text-sm md:text-base">
              Customers redeem in-store. We track average bill, repeat visits, and full attribution. You only pay platform fees on cards that actually get spent.
            </p>
            
            <div className="min-h-[160px] overflow-hidden rounded-2xl border border-line bg-bg-elev p-6 font-mono text-xs text-ink-2 flex flex-col shadow-sm hover:border-ink-3 transition-colors">
              <div className="flex items-center justify-between text-[11px] mb-4 border-b border-line/50 pb-3">
                <span>Recent redemptions</span>
                <span className="text-green-400 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> live</span>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-[45px_1fr_auto] items-center text-[11px]">
                  <span className="text-ink-3">12:42</span>
                  <span className="truncate pr-2">Williams Ave</span>
                  <span className="font-bold text-white text-sm bg-accent-soft text-accent px-2 py-0.5 rounded">$58.20</span>
                </div>
                <div className="grid grid-cols-[45px_1fr_auto] items-center text-[11px]">
                  <span className="text-ink-3">12:38</span>
                  <span className="truncate pr-2">Downtown</span>
                  <span className="font-bold text-white text-sm bg-accent-soft text-accent px-2 py-0.5 rounded">$74.10</span>
                </div>
                <div className="grid grid-cols-[45px_1fr_auto] items-center text-[11px]">
                  <span className="text-ink-3">12:31</span>
                  <span className="truncate pr-2">Northside</span>
                  <span className="font-bold text-white text-sm bg-accent-soft text-accent px-2 py-0.5 rounded">$41.90</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
