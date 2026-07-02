import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#08070d] pt-20 text-white">
      <Image
        src="/assets/restaurant-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_32%,rgba(140,0,255,0.25),transparent_30%),linear-gradient(90deg,rgba(8,7,13,0.86)_0%,rgba(8,7,13,0.66)_45%,rgba(8,7,13,0.88)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-[#08070d] to-transparent" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-[1190px] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-4 lg:py-6">
        <div className="max-w-[620px]">
          <h1 className="text-[clamp(3.2rem,5.7vw,5.55rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
            Stop guessing.
            <br />
            Know exactly
            <br />
            what your
            <br />
            marketing
            <br className="hidden md:block"/>
            <span className="text-[#8c00ff] font-normal italic tracking-normal ps-2">
              earns
            </span>
            .
          </h1>

          <p className="mt-8 max-w-[560px] text-lg font-medium leading-8 text-white/68 sm:text-xl">
            Attach a Moola Drop to any campaign. Track every customer who walks
            in, every dollar they spend, every channel that worked. Pay only on
            redemption.
          </p>

          <div className="mt-9 flex gap-4 sm:flex-row sm:items-center sm:gap-10">
            <a
              className="inline-flex flex-1/2 h-14 w-full items-center justify-center gap-3 rounded-full bg-[#8c00ff] px-7 text-sm font-extrabold text-white shadow-[0_0_35px_rgba(140,0,255,0.5)] transition hover:bg-[#9b20ff] sm:w-auto"
              href="#demo"
            >
              Book a demo
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              className="inline-flex flex-1/2 h-14 items-center justify-center text-sm font-extrabold text-white transition hover:text-[#b86cff]"
              href="#results"
            >
              See live results
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-white/70">
            <ProofPoint label="Avg. 500%+ ROAS" />
            <ProofPoint label="Pay only on redemption" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[505px] pb-8 pt-3 sm:pt-8 lg:mr-0 2xl:max-w-[540px]">
          <div className="absolute -right-2 top-10 z-20 hidden rounded-xl border border-white/10 bg-[#1a1824] px-5 py-4 shadow-2xl sm:block lg:-right-8 lg:top-12">
            <p className="text-[0.6rem] font-black uppercase tracking-[0.32em] text-white/45">
              ROAS - LIVE
            </p>
            <p className="mt-2 text-2xl font-black text-white">597%</p>
          </div>

          <div className="absolute bottom-7 left-0 z-20 hidden -rotate-1 rounded-xl border border-white/10 bg-[#1a1824] px-5 py-4 shadow-2xl sm:block lg:-left-10">
            <p className="text-[0.58rem] font-black uppercase tracking-[0.32em] text-white/45">
              Today&apos;s revenue
            </p>
            <div className="mt-2 flex items-end gap-2">
              <p className="text-2xl font-black text-white">$8,420</p>
              <p className="pb-1 text-xs font-black text-[#56d37f]">+24%</p>
            </div>
          </div>

          <div className="relative rounded-[1.35rem] bg-white p-4 text-[#111118] shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:rotate-[-1.8deg] sm:p-7">
            <div className="relative h-32 overflow-hidden rounded-xl bg-[#1f1f1f] sm:h-36">
              <Image
                src="/assets/sushi-offer.png"
                alt="Sushi offer preview"
                fill
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover"
              />
              <div className="absolute left-3 top-3 flex h-20 w-24 rotate-[-2deg] flex-col justify-center bg-[#c92c17] px-3 text-[1.5rem] font-black uppercase leading-[0.85] tracking-[0.03em] text-white sm:h-[5.4rem] sm:w-[6.8rem] sm:text-[1.8rem]">
                <span>Hello</span>
                <span>Nori</span>
              </div>
            </div>

            <div className="px-1 pt-6">
              <h2 className="text-2xl font-black tracking-[-0.03em] text-[#111118]">
                Free $10 Gift Card
              </h2>
              <p className="mt-1 text-sm font-medium text-[#6d6879]">
                For dine-in at any Hello Nori location
              </p>

              <p className="mt-6 text-lg font-black text-[#8c00ff]">
                10,000{" "}
                <span className="text-sm font-extrabold">
                  already claimed
                </span>
              </p>

              <div className="mt-4 flex items-center justify-center gap-2 text-[#8c00ff]">
                {[
                  ["06", "D"],
                  ["14", "H"],
                  ["27", "M"],
                  ["51", "S"],
                ].map(([value, label], index) => (
                  <div className="flex items-center gap-2" key={label}>
                    {index > 0 ? (
                      <span className="text-xl font-black">:</span>
                    ) : null}
                    <div className="flex h-11 w-11 flex-col items-center justify-center rounded-md bg-[#8c00ff] text-white shadow-[0_8px_20px_rgba(140,0,255,0.25)]">
                      <span className="text-base font-black leading-none">
                        {value}
                      </span>
                      <span className="mt-0.5 text-[0.55rem] font-black leading-none">
                        {label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-2">
                <div className="h-9 rounded-lg bg-[#efeee9]" />
                <div className="h-9 rounded-lg bg-[#efeee9]" />
              </div>

              <a
                className="mt-4 flex h-14 items-center justify-center rounded-lg bg-[#8c00ff] text-sm font-black text-white transition hover:bg-[#9b20ff]"
                href="#claim"
              >
                Claim my gift
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProofPoint = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-2">
    <svg
      className="h-4 w-4 text-[#8c00ff]"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    {label}
  </span>
);

export default Hero
