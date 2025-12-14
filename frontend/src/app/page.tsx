const highlights = [
  {
    title: "Track every gift card",
    description:
      "Keep all of your cards, balances, and reminders in one easy dashboard.",
  },
  {
    title: "Shop smarter",
    description:
      "Browse curated deals and stretch your budget with exclusive discounts.",
  },
  {
    title: "Send perks fast",
    description:
      "Gift cards land instantly, so your friends and family can start saving right away.",
  },
];

export default function Home() {
  return (
    <div className="landing-page">
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="hero-badge">Gift cards that work harder</span>
            <h1 className="hero-title">Save more every time you shop with Moola</h1>
            <p className="hero-subtitle">
              Moola helps you discover discounted gift cards, track balances, and use smart reminders so every
              dollar goes further.
            </p>
            <div className="hero-actions">
              <a href="#download" className="button-primary">
                Get the app
              </a>
              <a href="#how-it-works" className="button-secondary">
                See how it works
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <span className="hero-stat-value">$500M+</span>
                Savings unlocked
              </div>
              <div>
                <span className="hero-stat-value">1M+</span>
                Happy shoppers
              </div>
              <div>
                <span className="hero-stat-value">24/7</span>
                Balance reminders
              </div>
            </div>
          </div>
          <div className="hero-card" aria-labelledby="todays-highlights">
            <h2 id="todays-highlights">Today&apos;s highlights</h2>
            <ul className="hero-card-list">
              <li className="hero-card-item">
                <p>Starbucks - 18% back</p>
                <p>Use before Friday and stack with your rewards card.</p>
              </li>
              <li className="hero-card-item">
                <p>Spotify - 3 months free</p>
                <p>New plans come with automatic balance tracking.</p>
              </li>
              <li className="hero-card-item">
                <p>Gas &amp; Groceries bundle</p>
                <p>Pair cards to cover essential spending and save an extra 5%.</p>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main id="how-it-works">
        <section className="features">
          <div className="features-header">
            <h2>Why shoppers choose Moola</h2>
            <p>
              These simple tools keep your savings organized from the moment you buy a card to the last dollar you
              spend.
            </p>
          </div>
          <div className="features-grid">
            {highlights.map((item) => (
              <article key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="page-footer" id="download">
        <div className="footer-inner">
          <p>Ready to start saving?</p>
          <div className="footer-actions">
            <a href="#" className="footer-link-primary">
              Download for iOS
            </a>
            <a href="#" className="footer-link-secondary">
              Download for Android
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
