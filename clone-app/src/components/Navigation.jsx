import React, { useState } from 'react';
import logo from '../assets/Logo.svg';
import flag from '../assets/ca.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); 

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);

  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-4">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" height="24" />
        </a>

        <div className="d-flex align-items-center gap-3 order-lg-2">
          <button className="btn btn-primary dl-button rounded-pill px-4 d-none d-lg-block">
            DOWNLOAD NOW
          </button>

          <div className="fw-bold d-flex align-items-center gap-2 text-sm">
            <img src={flag} alt="Flag" height="15" />
            CAD
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            onClick={toggleCollapse}
          >
            <FontAwesomeIcon icon={isCollapsed ? faBars : faTimes} size="lg" />
          </button>
        </div>

        <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarNav">
          <div className="d-lg-flex w-100 justify-content-between align-items-center">
            <ul className="navbar-nav mx-auto gap-4 mb-2 mb-lg-0 small-on-mobile">
              <li className="nav-item">
                <a className="nav-link" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Winter Holiday Sale</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">How it Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Refer & Earn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Merchant Solutions</a>
              </li>
            </ul>

            <div className="d-lg-none mt-3 mt-lg-0">
              <button className="btn btn-primary dl-button rounded-pill px-4">
                DOWNLOAD NOW
              </button>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
