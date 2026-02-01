const FeatureCard = ({ ...headers }) => {
  const { header, paragraph } = headers;
  return (
    <div className="feature-card">
      <h3>{header}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default FeatureCard;
