import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faFacebookF,
  faYoutube,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';


import moolaLogo from '../assets/Logo.svg';
import visaLogo from '../assets/visa.svg';
import mastercardLogo from '../assets/mastercard.svg';
import monerisLogo from '../assets/moneris.svg';

const MoolaFooter = () => {
  return (
    <footer className="moola-footer">
      <div className="payment-methods-bar">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="payment-methods">
              <span className="payment-text">Accepted Payment Methods</span>
              <img src={visaLogo} alt="Visa" className="payment-logo" />
              <img src={mastercardLogo} alt="Mastercard" className="payment-logo" />
            </Col>
            <Col md={6} className="powered-by text-md-end">
              <FontAwesomeIcon icon={faLock} className="lock-icon" />
              <span>Payments Powered by</span>
              <img src={monerisLogo} alt="Moneris" className="moneris-logo" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-content">
        <Container>
          <Row className="mb-4">
            <Col md={3} className="mb-4 mb-md-0">
              <img src={moolaLogo} alt="Moola" className="footer-logo" />
            </Col>
            <Col md={9}>
              <Row className="justify-content-md-end">
                <Col md="auto">
                  <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                </Col>
                <Col md="auto">
                  <a href="/terms" className="footer-link">Terms & Conditions</a>
                </Col>
                <Col md="auto">
                  <a href="/help" className="footer-link">Help Center</a>
                </Col>
                <Col md="auto">
                  <a href="/contact" className="footer-link">Contact Us</a>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center social-icons">
            <Col xs="auto">
              <a href="https://instagram.com" className="social-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </Col>
            <Col xs="auto">
              <a href="https://twitter.com" className="social-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </Col>
            <Col xs="auto">
              <a href="https://facebook.com" className="social-link">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </Col>
            <Col xs="auto">
              <a href="https://youtube.com" className="social-link">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </Col>
            <Col xs="auto">
              <a href="https://linkedin.com" className="social-link">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col className="disclaimer-text text-center">
              <p>
                Designated trademarks and brands are the property of their respective owners. Moola Inc. and its products are not
                affiliated or endorsed by such owners. Use of this (website/app) constitutes acceptance of Moola Inc. Privacy Policy
                and Terms of Use. Copyright © 2025 Moola Inc. All rights reserved.
              </p>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col className="copyright-text text-center">
              <p>Copyright © 2025 Moola Inc. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default MoolaFooter;