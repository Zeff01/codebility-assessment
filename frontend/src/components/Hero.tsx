"use client";

const STATS = [
  { num: "2M+",    label: "Members"        },
  { num: "$140M+", label: "Cash Back Paid" },
  { num: "1,000+", label: "Top Brands"     },
];

function scrollTo(id: string) {
  const area = document.getElementById("scroll-area");
  if (!area) return;
  const target = document.getElementById(id);
  if (!target) return;
  const areaRect   = area.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  area.scrollBy({ top: targetRect.top - areaRect.top, behavior: "smooth" });
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-noise" />
      <div className="hero-badge">Cash Back on Every Gift Card</div>
      <h1>
        Spend smarter.<br />
        <em>Earn always.</em>
      </h1>
      <p className="hero-sub">
        Buy gift cards from 1,000+ top brands and get cash back instantly — no
        subscriptions, no gimmicks, just real money back in your pocket.
      </p>
      <div className="hero-actions">
        <button className="btn-primary" onClick={() => scrollTo("rewards")}>
          Start Earning Free →
        </button>
        <button className="btn-ghost" onClick={() => scrollTo("how-it-works")}>
          See How It Works
        </button>
      </div>
      <div className="hero-stats">
        {STATS.map(({ num, label }) => (
          <div className="stat" key={label}>
            <span className="stat-num">{num}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
