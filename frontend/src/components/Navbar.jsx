function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        Moola<span>Lite</span>
      </a>

      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#benefits">Benefits</a>
        <a href="#pricing">Pricing</a>
      </nav>

      <a href="#start" className="nav-button">
        Start for Free
      </a>
    </header>
  );
}

export default Navbar;