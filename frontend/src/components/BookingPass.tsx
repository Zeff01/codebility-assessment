"use client";

import { useEffect, useState } from "react";

export default function BookingPass() {
  const [spotsLeft, setSpotsLeft] = useState(4);
  const [viewing, setViewing] = useState(9);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const id = setInterval(() => {
      setViewing((v) => Math.max(4, v + Math.floor(Math.random() * 5) - 2));
      setSpotsLeft((s) => (Math.random() > 0.7 ? Math.max(1, s - 1) : s));
    }, 2600);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <span className="absolute -top-3 right-4 -rotate-3 rounded-sm bg-char px-2.5 py-1 font-mono text-[10.5px] tracking-wide text-paper">
        BOOKING PASS
      </span>

      <div
        className="torn-top torn-bottom relative rotate-1 border border-line bg-surface px-6 pb-6 pt-7 font-mono text-[13px] text-ink shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]"
        aria-live="polite"
      >
        <div className="mb-3.5 border-b border-dashed border-line pb-3.5 text-center">
          <div className="font-display text-[17px] font-semibold italic">
            Serene Valley — Canopy Suite
          </div>
          <div className="mt-1 text-[11px] text-ink-soft">
            RAINFOREST VIEW · SOLAR POWERED
          </div>
        </div>

        <Row label="Check-in" value="Fri, Aug 14" />
        <Row label="Check-out" value="Mon, Aug 17" />
        <Row label="Guests" value="2 adults" />
        <Row label="Nights" value="3" />

        <div className="mt-3 flex justify-between border-t border-dashed border-line pt-3 text-[15px] font-semibold">
          <span>Total · 3 nights</span>
          <span>$540</span>
        </div>

        <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-wide text-ember">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
            {spotsLeft} lodges left this week
          </span>
          <span className="text-ink-soft normal-case tracking-normal">
            {viewing} viewing now
          </span>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-1">
      <span className="text-ink-soft">{label}</span>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  );
}