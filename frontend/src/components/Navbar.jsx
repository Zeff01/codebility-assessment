import { useState } from "react";
import Menu from "../assets/icons/menu.svg";
import Close from "../assets/icons/close.svg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav>
          <a href="#" className="nav-logo-link">
            <img
              className="nav-brand-logo"
              src="https://content.moola.com/wp-content/uploads/2019/10/Logo_Desktop_purple.svg"
              alt="Brand Logo"
            />
          </a>
          <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Winter Holiday Sale
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                How it Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Refer & Earn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Merchant Solutions
              </a>
            </li>
          </ul>

          <div className={`nav-cta ${menuOpen ? "open" : ""}`}>
            <button className="nav-cta-button">DOWNLOAD NOW</button>
            <div className="nav-cta-currency">
              <img
                className="nav-cta-flag"
                src="https://www.moola.com/assets/media/icons/flags/ca.svg"
                alt="Canada Flag"
              />
              <span className="nav-cta-code">CAD</span>
            </div>
          </div>

          <div className="nav-actions">
            <div className="nav-cta-currency">
              <img
                className="nav-cta-flag"
                src="https://www.moola.com/assets/media/icons/flags/ca.svg"
                alt="Canada Flag"
              />
              <span className="nav-cta-code">CAD</span>
            </div>
            <a
              className="nav-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? (
                <img className="nav-icon" src={Close} alt="" />
              ) : (
                <img className="nav-icon" src={Menu} alt="" />
              )}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
