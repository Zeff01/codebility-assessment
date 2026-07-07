import Image from "next/image";
import BookingPass from "./BookingPass";

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-12 md:pb-16 md:pt-16">
      <Image
        src="/background.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-paper/80 via-paper/70 to-paper" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <div className="mb-5 flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.08em] text-ember">
            <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_0_4px_#2a3324]" />
            Sustainable escapes, booked simply
          </div>

          <h1 className="mb-5 font-display text-[2.3rem] font-semibold leading-[1.08] tracking-[-0.015em] sm:text-[2.8rem] md:text-[3.4rem]">
            Escape the noise.
            <br />
            Stay somewhere that{" "}
            <em className="font-medium italic text-ember">
              gives back to the land.
            </em>
          </h1>

          <p className="mb-8 max-w-[46ch] text-[17px] leading-relaxed text-ink-soft md:text-[17.5px]">
            Search off-grid eco-lodges and sustainable resorts, powered by
            renewable energy and rooted in the land they sit on. Free
            cancellation on every stay.
          </p>

          <div className="mb-8 flex flex-wrap gap-3.5">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-sm bg-ember px-5 py-3 text-[14px] font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              Search stays <ArrowIcon />
            </a>
            <a
              href="#stays"
              className="inline-flex items-center gap-2 rounded-sm border border-line-dark px-5 py-3 text-[14px] font-semibold text-ink transition-colors hover:bg-ink/5"
            >
              See featured stays
            </a>
          </div>

          <div className="flex flex-wrap gap-7">
            <Stat n="10,000+" l="Stays booked" />
            <Stat n="100%" l="Renewable-powered" />
            <Stat n="4.9★" l="Avg. guest rating" />
          </div>
        </div>

        <BookingPass />
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-display text-[22px] font-semibold text-moss">
        {n}
      </span>
      <span className="text-[12.5px] text-ink-soft">{l}</span>
    </div>
  );
}