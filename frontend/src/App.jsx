import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="page">
      <header className="navbar">
        <a className="logo" href="/">
          moola
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#features">How it works</a>
          <a href="#why">Why Moola</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="#contact">
          Get started
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          <a href="#features" onClick={() => setMenuOpen(false)}>
            How it works
          </a>
          <a href="#why" onClick={() => setMenuOpen(false)}>
            Why Moola
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      )}

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Smart money guidance</p>
          <h1>Take the guesswork out of money.</h1>
          <p className="hero-text">
            Build a clearer financial plan with simple tools, expert support,
            and everyday steps that help you feel more in control.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Start planning
            </a>
            <a className="secondary-button" href="#features">
              See how it works
            </a>
          </div>

          <div className="hero-stats" aria-label="Product highlights">
            <div>
              <strong>24/7</strong>
              <span>money clarity</span>
            </div>
            <div>
              <strong>3 steps</strong>
              <span>to a plan</span>
            </div>
          </div>
        </div>

        <div className="dashboard-card" aria-label="Financial dashboard preview">
          <div className="status-pill">On track</div>

          <div className="card-header">
            <span>Monthly snapshot</span>
            <strong>$4,820</strong>
          </div>

          <div className="progress-group">
            <div>
              <span>Emergency fund</span>
              <strong>72%</strong>
            </div>
            <div className="progress-track">
              <span className="progress-fill emergency"></span>
            </div>
          </div>

          <div className="progress-group">
            <div>
              <span>Investing goal</span>
              <strong>48%</strong>
            </div>
            <div className="progress-track">
              <span className="progress-fill investing"></span>
            </div>
          </div>

          <div className="mini-cards">
            <article>
              <span>Saved</span>
              <strong>$960</strong>
            </article>
            <article>
              <span>Next step</span>
              <strong>Review plan</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Trusted by customers">
        <span>Budgeting</span>
        <span>Saving</span>
        <span>Investing</span>
        <span>Planning</span>
      </section>

      <section className="features" id="features">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Simple support for real-life financial decisions.</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <span className="feature-number">01</span>
            <h3>Connect your goals</h3>
            <p>
              Add what matters most, from paying down debt to saving for a home.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-number">02</span>
            <h3>Get a clear plan</h3>
            <p>
              Turn your numbers into practical next steps you can follow each month.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-number">03</span>
            <h3>Track your progress</h3>
            <p>
              See what is improving, what needs attention, and what to do next.
            </p>
          </article>
        </div>
      </section>

      <section className="why-section" id="why">
        <div className="why-content">
          <div>
            <p className="eyebrow">Why Moola</p>
            <h2>Feel confident before you make your next money move.</h2>
          </div>

          <article className="quote-card">
            <p>
              "Moola helped me understand where my money was going and what to
              focus on first. The plan felt simple enough to actually follow."
            </p>
            <strong>Jamie R.</strong>
            <span>New investor</span>
          </article>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>Start building a clearer plan today.</h2>
        </div>
        <a className="primary-button" href="mailto:hello@moola.com">
          Contact us
        </a>
      </section>

      <footer className="footer">
        <a className="logo" href="/">
          moola
        </a>
        <p>Simple tools for smarter everyday money decisions.</p>
      </footer>
    </main>
  );
}

export default App;
