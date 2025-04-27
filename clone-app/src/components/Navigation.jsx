import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/logo.png" alt="Logo" height="40" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-4">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Winter Holiday Sale</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">How it Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Refer & Earn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Merchant Solutions</a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-primary rounded-pill px-4" style={{background: 'linear-gradient(90deg, #b100f4, #8600f2)', border: 'none'}}>
              Download Now
            </button>
            <div className="fw-bold">
              🇨🇦 CAD
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
