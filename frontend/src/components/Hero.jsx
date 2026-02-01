const Hero = ({ ...headers }) => {
  const { header, paragraph, buttontext } = headers;
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{header}</h1>
        <p>{paragraph}</p>
        <button className="cta-btn">{buttontext}</button>
      </div>
    </section>
  );
};

export default Hero;
