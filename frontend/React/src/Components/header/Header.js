import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg pt-5">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <img
          // id="logo"
          className="navbar-brand img-fluid logo"
          src="img/logo.svg"
          alt=""
        />

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item px-3">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Shop
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link " href="#">
                Work Holiday Sale
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link " href="#">
                Refer & Earn
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link " href="#">
                Merchant Solutions
              </a>
            </li>
          </ul>
          <form id="search" className="d-flex" role="search">
            <input
              id="input"
              className="form-control"
              type="search"
              placeholder="Search Gift Cards"
              aria-label="Search"
            />
            <button type="submit" className="btn p-0 border-0 bg-transparent">
              <img className="imgLogo" src="img/srchbtn.png" alt="Search" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
