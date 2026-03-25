"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

/* ── SVG Icons ── */
const IconTag = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
    <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);
const IconCreditCard = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" /><path d="M6 15h4" />
  </svg>
);
const IconSmartphone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M12 18h.01" strokeWidth="2.5" />
  </svg>
);
const IconLayers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
  </svg>
);
const IconDollar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

/* ── Data ── */
const STEPS: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <IconTag />,        title: "Browse gift cards",    desc: "Shop thousands of brands — dining, retail, travel, and more — all in one place." },
  { icon: <IconCreditCard />, title: "Buy & earn cash back", desc: "Every purchase earns a percentage back. No membership fees, no complicated points." },
  { icon: <IconSmartphone />, title: "Redeem instantly",     desc: "Withdraw your cash back to your bank or PayPal. Funds hit your account fast." },
  { icon: <IconLayers />,     title: "Stack savings",        desc: "Combine Moola cash back with store promotions and credit card rewards for maximum returns." },
];

const REWARDS: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <IconDollar />, title: "Real Cash Back",   desc: "Earn actual dollars, not points. Cash back goes straight into your Moola wallet." },
  { icon: <IconClock />,  title: "Never Expires",    desc: "Your Moola Cash has no expiry date — save up and redeem whenever you feel like it." },
  { icon: <IconZap />,    title: "Instant Payouts",  desc: "Withdraw to your bank account or PayPal in minutes, not days or weeks." },
  { icon: <IconShield />, title: "Always Secure",    desc: "Bank-level encryption keeps your account and every dollar you earn completely safe." },
];

const TESTIMONIALS = [
  {
    name:   "Sarah K.",
    role:   "Freelance Designer",
    avatar: "SK",
    color:  "#d4edda",
    quote:  "I saved over $300 last year just buying gift cards before grocery runs. It takes 10 seconds and I never think about it.",
    stars:  5,
  },
  {
    name:   "James R.",
    role:   "Software Engineer",
    avatar: "JR",
    color:  "#dce8fb",
    quote:  "Best cash-back app I've used. No points, no nonsense — just real money back in my PayPal every month.",
    stars:  5,
  },
  {
    name:   "Priya M.",
    role:   "Small Business Owner",
    avatar: "PM",
    color:  "#fde8d8",
    quote:  "Stacking Moola with my credit card rewards is genuinely life-changing. My last Nike order was effectively 18% off.",
    stars:  5,
  },
];

const BRANDS = [
  "Amazon", "Starbucks", "Target", "Nike", "Uber Eats",
  "Apple", "Walmart", "DoorDash", "Sephora", "Best Buy", "Airbnb", "H&M",
];

/* ── Reveal hook — root = #scroll-area ── */
function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el   = ref.current;
    const root = document.getElementById("scroll-area");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { root, threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function StepCard({ icon, title, desc, index }: { icon: ReactNode; title: string; desc: string; index: number }) {
  const ref = useReveal();
  return (
    <div className="step-card reveal" ref={ref as React.Ref<HTMLDivElement>} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="step-num">0{index + 1}</div>
      <div className="step-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, role, avatar, color, quote, stars, index }: {
  name: string; role: string; avatar: string; color: string;
  quote: string; stars: number; index: number;
}) {
  return (
    <div
      className="testimonial-card"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className="testimonial-stars">
        {Array.from({ length: stars }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="var(--accent)">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="testimonial-quote">&ldquo;{quote}&rdquo;</p>
      <div className="testimonial-author">
        <div className="testimonial-avatar" style={{ background: color }}>
          {avatar}
        </div>
        <div>
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-role">{role}</p>
        </div>
      </div>
    </div>
  );
}

function RewardCard({ icon, title, desc, index }: { icon: ReactNode; title: string; desc: string; index: number }) {
  const ref = useReveal();
  return (
    <div className="step-card reveal" ref={ref as React.Ref<HTMLDivElement>} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="step-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default function Features() {
  const howRef    = useReveal();
  const brandRef  = useReveal();
  const rewardRef = useReveal();

  return (
    <>
      {/* ── How it Works ── */}
      <section className="how" id="how-it-works">
        <p className="section-label">How it works</p>
        <h2 className="section-title reveal" ref={howRef as React.Ref<HTMLHeadingElement>}>
          Four steps to free money
        </h2>
        <p className="section-sub">
          No complicated reward programs. Moola turns everyday spending into real cash back — automatically.
        </p>
        <div className="steps-grid">
          {STEPS.map((s, i) => <StepCard key={s.title as string} {...s} index={i} />)}
        </div>
      </section>

      {/* ── Brands ── */}
      <div className="brands" id="brands">
        <p className="brands-label">200+ Partners</p>
        <h2 className="brands-heading">Shop the brands you love</h2>
        <p className="brands-sub">
          From your morning coffee to your next vacation — earn cash back everywhere you already spend.
        </p>
        <div className="brands-scroll" ref={brandRef as React.Ref<HTMLDivElement>}>
          {BRANDS.map((b) => <span className="brand-pill" key={b}>{b}</span>)}
        </div>
      </div>

      {/* ── Testimonials ── */}
      <section className="testimonials" id="testimonials">
        <p className="section-label">Reviews</p>
        <h2 className="section-title">
          Real people, real savings
        </h2>
        <p className="section-sub">
          Join millions who already save every time they shop with Moola.
        </p>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </section>

      {/* ── Rewards + Footer as one final screen ── */}
      <div className="final-screen" id="rewards">
        <section className="rewards-section">
          <p className="section-label">Your rewards</p>
          <h2 className="section-title reveal" ref={rewardRef as React.Ref<HTMLHeadingElement>}>
            Why Moola Cash is different
          </h2>
          <p className="section-sub">
            We keep it simple — real money, no hoops, no expiry. Here&apos;s what makes Moola rewards worth it.
          </p>
          <div className="steps-grid">
            {REWARDS.map((r, i) => <RewardCard key={r.title as string} {...r} index={i} />)}
          </div>
        </section>

        <footer className="footer">
          <span className="footer-logo">moola</span>
          <span className="footer-copy">© {new Date().getFullYear()} Moola. All rights reserved.</span>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </footer>
      </div>
    </>
  );
}
