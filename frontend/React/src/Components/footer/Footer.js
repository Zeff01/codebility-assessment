import React from "react";
import "./Footers.css";

const Footer = () => {
  return (
    <>
      <div className="footerPayment">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                <p className="mb-0 me-2">Accepted Payment Methods</p>
                <img src="img/payment.png" alt="Accepted Payments" />
              </div>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                <p className="mb-0 me-2">Payment Powered by</p>
                <img
                  src="img/moneris.png"
                  alt="Moneris"
                  style={{ paddingBottom: "10px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footerLinks">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-3 text-md-start text-center mb-4 mb-md-0">
              <img
                className="logo navbar-brand img-fluid"
                src="/img/logo2.svg"
                alt="Logo"
              />
            </div>

            <div className="col-md-6 text-center  mt-md-0 ">
              <div className="d-flex flex-md-row flex-column align-items-center justify-content-center justify-content-md-center ">
                <a href="#" className="text-decoration-none  mb-md-0">
                  Privacy Policy
                </a>
                <a href="#" className="text-decoration-none  mb-md-0">
                  Terms and Conditions
                </a>
                <a href="#" className="text-decoration-none  mb-md-0">
                  Help Center
                </a>
                <a href="#" className="text-decoration-none  mb-md-0">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="text-center  mt-md-0">
              <div className="d-flex justify-content-center mt-4 ">
                <a href="#">
                  <img src="/img/ig.png" alt="Instagram" className="mx-2" />
                </a>
                <a href="#">
                  <img src="/img/twitter.png" alt="Twitter" className="mx-2" />
                </a>
                <a href="#">
                  <img src="/img/youtube.png" alt="YouTube" className="mx-2" />
                </a>
                <a href="#">
                  <img src="/img/ld.png" alt="LinkedIn" className="mx-2" />
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-4">
              <p
                className="text-center "
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                Designated trademarks and brands are the property of their
                respective owners. Moola Inc. and its products are not
                affiliated or endorsed by such owners. Use of this (website/app)
                constitutes acceptance of Moola Inc. Privacy Policy and Terms of
                Use.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottom d-flex justify-content-center align-items-center">
        <p className="mb-0">&copy; 2025 Moola Inc. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
