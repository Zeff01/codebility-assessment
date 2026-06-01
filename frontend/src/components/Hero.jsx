function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Business finance made simple</p>

        <h1>Smart Finance for Growing Businesses</h1>

        <p className="hero-description">
          Manage payments, cards, invoices, and business spending in one clean
          platform built for modern teams.
        </p>

        <div className="hero-actions">
          <a href="#start" className="primary-button">
            Start for Free
          </a>
          <a href="#features" className="secondary-button">
            Explore Features
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>500+</strong>
            <span>Companies</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Support</span>
          </div>
          <div>
            <strong>Fast</strong>
            <span>Payments</span>
          </div>
        </div>
      </div>

      <div className="hero-card">
        <div className="card-header">
          <span>Business Wallet</span>
          <strong>Active</strong>
        </div>

        <div className="balance-card">
          <p>Total Balance</p>
          <h2>₱128,450.00</h2>
          <span>+12.5% this month</span>
        </div>

        <div className="transaction-list">
          <div className="transaction-item">
            <div>
              <strong>Invoice Paid</strong>
              <p>Client payment received</p>
            </div>
            <span>+₱18,000</span>
          </div>

          <div className="transaction-item">
            <div>
              <strong>Team Card</strong>
              <p>Software subscription</p>
            </div>
            <span>-₱2,500</span>
          </div>

          <div className="transaction-item">
            <div>
              <strong>Transfer</strong>
              <p>Bank transfer completed</p>
            </div>
            <span>+₱9,200</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;