import Image from "next/image";
import type { ReactNode } from "react";
import ContactTabs from "./ContactTabs";

const stats = [
  ["500%+", "Avg. ROAS", true],
  ["$60+", "Avg. bill on redemption", false],
  ["22%+", "Avg. redemption rate", false],
  ["$0", "Fees until redemption", false],
] as const;

const resultCards = [
  {
    label: "A-Frame QR campaign",
    image: "/assets/campaign-cafe.png",
    eyebrow: "Generated revenue",
    value: "$197,966",
    featured: false,
    metrics: [
      ["605%", "ROAS", true],
      ["3,271", "Customers in", false],
      ["7,414", "Claimed", false],
    ],
  },
  {
    label: "Takeout box sticker",
    image: "/assets/campaign-burger.png",
    eyebrow: "Generated revenue",
    value: "$30,645",
    featured: false,
    metrics: [
      ["27.5%", "Redemption", true],
      ["1,751", "Claimed", false],
      ["6,828", "Boxes", false],
    ],
  },
  {
    label: "SMS retargeting drive",
    image: "/assets/campaign-patio.png",
    eyebrow: "Incremental revenue",
    value: "$169,458",
    featured: true,
    metrics: [
      ["+22.9%", "YoY lift", true],
      ["2,255", "Customers back", false],
      ["$138K", "Direct revenue", false],
    ],
  },
] as const;

const featureItems = [
  {
    title: "Pay-per-redemption",
    text: "No clicks, no impressions, no fluff. You pay platform fees only when a card is actually spent in-store.",
    icon: "target",
  },
  {
    title: "Trackable everywhere",
    text: "QR-coded across A-frames, takeout boxes, social, programmatic: one source of truth, one dashboard.",
    icon: "grid",
  },
  {
    title: "Closed-loop attribution",
    text: "POS-integrated tracking from impression to bill total. See average ticket, repeat rate, true incremental lift.",
    icon: "chart",
  },
  {
    title: "Multi-unit ready",
    text: "Roll out one campaign across 5 or 500 locations. Per-store performance, brand-level rollups.",
    icon: "store",
  },
  {
    title: "Re-marketing built in",
    text: "Every claim ties a customer to their in-store spend. Build a database of proven high-spenders you can SMS-retarget when traffic dips.",
    icon: "users",
  },
  {
    title: "Creator attribution",
    text: "See which influencers actually drove paying customers, not just likes. Stop paying creators who can't move bills.",
    icon: "mic",
  },
] as const;

const HomeSections = () => {
  return (
    <>
      <ProblemSection />
      <ResultsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PosPartnersSection />
      <ContactSection />
    </>
  );
};

const SectionShell = ({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>
    <div className="mx-auto w-full max-w-[1176px] px-5 sm:px-8 xl:px-0">
      {children}
    </div>
  </section>
);

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="mb-5 flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.34em] text-[#8c00ff]">
    <span className="h-1.5 w-1.5 rounded-full bg-[#8c00ff]" />
    {children}
  </p>
);

const SectionTitle = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h2
    className={`text-[clamp(2.55rem,4.15vw,4rem)] font-black leading-[1.08] tracking-[-0.055em] text-white ${className}`}
  >
    {children}
  </h2>
);

const ProblemSection = () => (
  <SectionShell className="border-t border-white/[0.06] bg-[#08070d] py-20 sm:py-24 lg:py-28">
    <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
      <div>
        <Eyebrow>The problem</Eyebrow>
        <SectionTitle className="max-w-[480px]">
          You&apos;re spending on marketing you can&apos;t measure.
        </SectionTitle>
      </div>
      <div className="border-[#8c00ff] lg:border-l lg:pl-10">
        <h3 className="text-[clamp(2.2rem,3.2vw,3.3rem)] font-black leading-none tracking-[-0.055em] text-[#8c00ff]">
          We fixed that.
        </h3>
        <p className="mt-6 max-w-[520px] text-base font-medium leading-8 text-white/64 sm:text-lg">
          Customers claim a small digital gift card with their phone number.
          When they redeem it at your POS, Moola captures the visit, the spend,
          and exactly which channel brought them in: down to the dollar.
        </p>
        <ul className="mt-8 space-y-5 text-sm font-black text-white">
          {["Track every channel", "Zero upfront cost", "Know your real ROI"].map(
            (item) => (
              <li className="flex items-center gap-3" key={item}>
                <CheckIcon />
                {item}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  </SectionShell>
);

const ResultsSection = () => (
  <SectionShell id="results" className="bg-[#08070d] pb-20 sm:pb-24 lg:pb-28">
    <Eyebrow>Real campaigns, real numbers</Eyebrow>
    <SectionTitle className="max-w-[620px]">
      Ads that pay for themselves &mdash; measurably.
    </SectionTitle>
    <p className="mt-6 max-w-[690px] text-base font-medium leading-8 text-white/64 sm:text-lg">
      Every drop is tracked end-to-end. We close the loop from impression to
      redeemed gift card to in-store spend, so you see exactly what worked.
    </p>

    <div className="mt-16 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#14131b]">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label, accent], index) => (
          <div
            className={`px-8 py-9 sm:px-9 lg:px-8 ${
              index > 0 ? "border-white/10 lg:border-l" : ""
            } ${index > 1 ? "sm:border-t lg:border-t-0" : ""}`}
            key={label}
          >
            <p
              className={`text-[clamp(2rem,3vw,3rem)] font-black leading-none tracking-[-0.055em] ${
                accent ? "text-[#8c00ff]" : "text-white"
              }`}
            >
              {value}
            </p>
            <p className="mt-4 text-[0.66rem] font-black uppercase tracking-[0.32em] text-white/45">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-7 grid gap-5 lg:grid-cols-3">
      {resultCards.map((card) => (
        <article
          className={`rounded-[1.35rem] border bg-[#14131b] p-7 shadow-[0_22px_60px_rgba(0,0,0,0.26)] border-white/10 hover:border-[#8c00ff] hover:-translate-y-1 transition-all`}
          key={card.label}
        >
          <div className="relative aspect-[1.62] overflow-hidden rounded-lg bg-white/5">
            <Image
              src={card.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 330px, 90vw"
              className="object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-black text-[#14131b]">
              {card.label}
            </span>
          </div>
          <p className="mt-7 text-[0.68rem] font-black uppercase tracking-[0.32em] text-white/45">
            {card.eyebrow}
          </p>
          <p className="mt-6 text-[clamp(2rem,3vw,2.55rem)] font-black leading-none tracking-[-0.05em] text-white">
            {card.value}
          </p>
          <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
            {card.metrics.map(([value, label, accent]) => (
              <div key={label}>
                <p
                  className={`text-lg font-black leading-none ${
                    accent ? "text-[#8c00ff]" : "text-white"
                  }`}
                >
                  {value}
                </p>
                <p className="mt-3 text-[0.55rem] font-black uppercase tracking-[0.25em] text-white/42">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  </SectionShell>
);

const HowItWorksSection = () => (
  <SectionShell
    id="how-it-works"
    className="border-t border-white/[0.06] bg-[#08070d] py-20 sm:py-24 lg:py-28"
  >
    <Eyebrow>How it works</Eyebrow>
    <SectionTitle>Three steps.</SectionTitle>

    <div className="mt-20 grid gap-8 lg:grid-cols-3 lg:gap-0">
      <StepCard
        step="Step 01"
        title="Design your drop"
        text="Pick a creative: A-frame QR, social post, takeout sticker. Attach a stored-value gift card, and set the redemption window. We help you tune the offer to your margins."
      >
        <div className="rounded-xl border border-white/10 bg-[#14131b] p-5 text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="flex items-center gap-2 text-[#8c00ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8c00ff]" />
              Drop builder
            </span>
            <span className="text-white/45">draft</span>
          </div>
          {[
            ["offer.amount", "$10.00"],
            ["redemption.window", "7 days"],
            ["locations", "14 active"],
          ].map(([label, value]) => (
            <div className="mt-4 flex items-center justify-between" key={label}>
              <span className="text-white/58">{label}</span>
              <span className="font-black text-white">{value}</span>
            </div>
          ))}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-white/45">est. ROAS</span>
            <span className="text-[#8c00ff]">~520%</span>
          </div>
        </div>
      </StepCard>

      <StepCard
        step="Step 02"
        title="Distribute everywhere"
        text="QR codes, programmatic placements, geo-targeted social, door-hangers: every surface drives back to one trackable landing page tied to your locations."
      >
        <div className="rounded-xl border border-white/10 bg-[#14131b] p-6">
          <div className="grid grid-cols-2 gap-2">
            {[
              ["QR - A-frame", "4,201"],
              ["Social - IG", "8,402"],
              ["Programmatic", "11,540"],
              ["Sticker - Box", "3,214"],
            ].map(([label, value]) => (
              <div className="rounded-md bg-white/[0.04] p-3" key={label}>
                <p className="text-[0.56rem] font-black uppercase tracking-[0.22em] text-white/44">
                  {label}
                </p>
                <p className="mt-2 text-xl font-black tracking-[-0.04em]">
                  {value}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[0.65rem] font-bold text-white/42">
            views · last 24h
          </p>
        </div>
      </StepCard>

      <StepCard
        step="Step 03"
        title="Pay only when they show"
        text="Customers redeem in-store. We track average bill, repeat visits, and full attribution. You only pay platform fees on cards that actually get spent."
      >
        <div className="rounded-xl border border-white/10 bg-[#14131b] p-5 text-xs">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-white/58">Recent redemptions</span>
            <span className="flex items-center gap-2 text-[#5ee678]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5ee678]" />
              live
            </span>
          </div>
          {[
            ["12:42 Williams Ave", "$58.20"],
            ["12:38 Downtown", "$74.10"],
            ["12:31 Northside", "$41.90"],
          ].map(([place, amount]) => (
            <div
              className="flex justify-between border-t border-dashed border-white/10 py-3"
              key={place}
            >
              <span className="text-white/58">{place}</span>
              <span className="font-black text-white">{amount}</span>
            </div>
          ))}
        </div>
      </StepCard>
    </div>
  </SectionShell>
);

const StepCard = ({
  step,
  title,
  text,
  children,
}: {
  step: string;
  title: string;
  text: string;
  children: ReactNode;
}) => (
  <article className="border-white/10 lg:border-l lg:px-12 first:lg:border-l-0 first:lg:pl-0 last:lg:pr-0">
    <p className="flex items-center gap-3 text-[0.72rem] font-black tracking-[0.26em] text-[#8c00ff]">
      <span className="h-px w-6 bg-[#8c00ff]" />
      {step}
    </p>
    <h3 className="mt-5 text-2xl font-black tracking-[-0.055em] text-white sm:text-[1.7rem]">
      {title}
    </h3>
    <p className="mt-5 min-h-[6.5rem] text-base font-medium leading-7 text-white/64">
      {text}
    </p>
    <div className="mt-7">{children}</div>
  </article>
);

const FeaturesSection = () => (
  <SectionShell id="features" className="bg-[#08070d] py-20 sm:py-24 lg:py-28">
    <Eyebrow>Built for chain operators</Eyebrow>
    <SectionTitle className="max-w-[760px]">
      Marketing infrastructure, not a marketing campaign.
    </SectionTitle>

    <div className="mt-16 overflow-hidden rounded-[1.35rem] border border-white/10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {featureItems.map((item, index) => (
          <article
            className={`min-h-60 p-9 sm:p-10 ${featureBorders(index)}`}
            key={item.title}
          >
            <IconBox name={item.icon} />
            <h3 className="mt-8 text-xl font-black tracking-[-0.04em] text-white">
              {item.title}
            </h3>
            <p className="mt-5 text-base font-medium leading-7 text-white/64">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </div>
  </SectionShell>
);

const PosPartnersSection = () => (
  <section
    id="pos-partners"
    className="border-y border-white/[0.06] bg-[radial-gradient(circle_at_center,rgba(140,0,255,0.14),transparent_34%),#08070d] py-20 text-center sm:py-24"
  >
    <div className="mx-auto w-full max-w-[1176px] px-5 sm:px-8 xl:px-0">
      <Eyebrow>POS partners</Eyebrow>
      <SectionTitle>Plugs into the POS you already run.</SectionTitle>
      <div className="mt-16 flex items-center justify-center gap-4 text-white/72">
        <span className="grid h-16 w-16 place-items-center rounded-full border-4 border-white/72 text-3xl font-black tracking-[-0.08em]">
          ap
        </span>
        <span className="text-[clamp(2.6rem,4vw,3.4rem)] font-medium tracking-[-0.06em]">
          Auphan
        </span>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="demo" className="bg-[#08070d] py-20 sm:py-24">
    <div className="mx-auto w-full max-w-[1176px] px-5 sm:px-8 xl:px-0">
      <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(110deg,#15141d_0%,#15141d_67%,#3a0d65_100%)] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-12 lg:p-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <Eyebrow>Get in touch</Eyebrow>
            <SectionTitle className="max-w-[520px]">
              Ready to make every marketing dollar accountable?
            </SectionTitle>
            <p className="mt-6 max-w-[500px] text-base font-medium leading-8 text-white/64 sm:text-lg">
              Two ways to start the conversation. Book a discovery call with
              our team, or send a quick note and we&apos;ll get back to you.
            </p>
            <ul className="mt-9 space-y-5 text-sm font-medium text-white/68">
              {[
                "Concept-fit discussion",
                "Honest ROAS expectations",
                "POS integration discovery",
              ].map((item) => (
                <li className="flex items-center gap-3" key={item}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <ContactTabs />
        </div>
      </div>
      <footer className="pt-16 text-center text-sm font-medium text-white/45">
        &copy; 2026 Moola Drops &middot; Performance marketing for restaurants
      </footer>
    </div>
  </section>
);

const CheckIcon = () => (
  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#8c00ff]/12 text-[#8c00ff]">
    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m6 12 4 4 8-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const featureBorders = (index: number) => {
  const mobile = index < featureItems.length - 1 ? "border-b border-white/10" : "";
  const tabletBottom = index < 4 ? "md:border-b" : "md:border-b-0";
  const tabletColumn = index % 2 === 0 ? "md:border-r md:border-white/10" : "";
  const desktopBottom = index < 3 ? "lg:border-b" : "lg:border-b-0";
  const desktopColumn =
    index % 3 !== 2 ? "lg:border-r lg:border-white/10" : "lg:border-r-0";

  return `${mobile} ${tabletBottom} ${tabletColumn} ${desktopBottom} ${desktopColumn}`;
};

const IconBox = ({ name }: { name: string }) => (
  <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#8c00ff]/10 text-[#8c00ff]">
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {name === "target" ? (
        <>
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        </>
      ) : null}
      {name === "grid" ? (
        <>
          <rect x="4" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <rect x="4" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <path d="M17 14v6m-3-3h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : null}
      {name === "chart" ? (
        <>
          <path d="M5 19h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M7 16v-4m5 4V8m5 8V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : null}
      {name === "store" ? (
        <>
          <path d="M5 10h14l-1-5H6l-1 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M7 10v9h10v-9M10 19v-5h4v5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </>
      ) : null}
      {name === "users" ? (
        <>
          <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM15 10a2.5 2.5 0 1 0 0-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 19a5 5 0 0 1 10 0M14 15a4 4 0 0 1 5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : null}
      {name === "mic" ? (
        <>
          <rect x="9" y="4" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M6 11a6 6 0 0 0 12 0M12 17v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : null}
    </svg>
  </span>
);

export default HomeSections;
