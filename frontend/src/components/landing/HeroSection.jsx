import Image from "next/image";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-12">
      <div className="grid items-center gap-12 pb-[clamp(3.5rem,7vw,7rem)] pt-[clamp(2rem,6vw,5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="relative z-10 max-w-3xl text-center lg:text-left">
          <span className="inline-block rounded-full bg-fuchsia-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-fuchsia-700">
            The Future of Gifting
          </span>

          <h1 className="mt-7 text-balance text-[clamp(2.2rem,7vw,5rem)] font-extrabold leading-[1.04] tracking-tight text-slate-900">
            Gift Better,{" "}
            <span className="italic text-fuchsia-600">Instantly</span>
          </h1>

          <div className="glass-panel mt-8 rounded-[1.25rem] border border-white/60 p-2 shadow-[0_24px_56px_rgba(15,23,42,0.08)]">
            <form className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-3 px-4 text-slate-500">
                <Search
                  aria-hidden="true"
                  className="size-5"
                  strokeWidth={1.8}
                />
                <input
                  type="text"
                  placeholder="Search over 250 brands"
                  className="w-full border-none bg-transparent py-3 text-base font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  aria-label="Search over 250 brands"
                />
              </div>
              <button
                type="button"
                className="w-full rounded-2xl bg-fuchsia-600 px-7 py-3.5 text-base font-bold text-white transition hover:bg-fuchsia-500 sm:w-auto"
              >
                Shop Gift Cards
              </button>
            </form>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-balance text-base font-medium leading-relaxed text-slate-600 md:text-lg lg:mx-0">
            Curated selection of premium brands delivered straight to their
            inbox. No shipping, no plastic, just pure joy.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[460px]">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-fuchsia-200/60 blur-3xl" />

          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_30px_70px_rgba(15,23,42,0.08)]">
            <Image
              src="/images/birthday-gifts.png"
              alt="Colorful 3D birthday gift boxes"
              fill
              priority
              sizes="(min-width: 1024px) 34vw, (min-width: 768px) 48vw, 86vw"
              className="animate-float object-contain p-2"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)] sm:flex">
            <div className="relative size-14 overflow-hidden rounded-xl">
              <Image
                src="/images/thumbs-up.jpg"
                alt="Smiling customer giving thumbs up"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <p className="text-sm font-bold text-slate-700">
              Trusted by 10k+ givers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
