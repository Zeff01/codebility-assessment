const features = [
  {
    title: "Automated Payments",
    description:
      "Send, receive, and track business payments without switching between tools."
  },
  {
    title: "Smart Expense Control",
    description:
      "Monitor team spending and keep every transaction organized in one dashboard."
  },
  {
    title: "Simple Reports",
    description:
      "Get a clear view of balances, invoices, and financial activity anytime."
  }
];

function FeatureSection() {
  return (
    <section className="features" id="features">
      <div className="section-heading">
        <p className="eyebrow">Why choose us</p>
        <h2>Everything your business needs to manage money better</h2>
        <p>
          A simplified finance experience designed for startups, growing teams,
          and modern businesses.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <div className="feature-icon">✓</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;