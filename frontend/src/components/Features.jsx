import FeatureCard from "./FeatureCard";

const Features = ({ ...headers }) => {
  return (
    <section className="features">
      <h2>How It Works</h2>

      <div className="features-grid">
        <FeatureCard {...headers[0]} />
        <FeatureCard {...headers[1]} />
        <FeatureCard {...headers[2]} />
      </div>
    </section>
  );
};

export default Features;
