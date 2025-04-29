// components/Footer.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faFacebookF,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-violet-700 text-white py-8 px-4">
      {/* Moola Logo + Links (Horizontal and Centered) */}
      <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
        <a href="https://www.moola.com">
          <img
            src="https://content.moola.com/wp-content/uploads/2019/10/Logo_Desktop_white.svg"
            alt="Moola Logo"
            width="140"
            height="28"
            className="moola-logo"
          />
        </a>
        <p className="cursor-pointer hover:underline">Privacy Policy</p>
        <p className="cursor-pointer hover:underline">Terms & Conditions</p>
        <p className="cursor-pointer hover:underline">Help Center</p>
        <p className="cursor-pointer hover:underline">Contact Us</p>
      </div>

      {/* Social Media Icons (Centered) */}
      <div className="flex justify-center space-x-5 mb-6">
        <FontAwesomeIcon icon={faInstagram} size="lg" className="hover:cursor-pointer" />
        <FontAwesomeIcon icon={faTwitter} size="lg" className="hover:cursor-pointer" />
        <FontAwesomeIcon icon={faFacebookF} size="lg" className="hover:cursor-pointer" />
        <FontAwesomeIcon icon={faYoutube} size="lg" className="hover: cursor-pointer" />
        <FontAwesomeIcon icon={faLinkedin} size="lg" className="hover: cursor-pointer" />
      </div>

      {/* Terms and Copyright (Centered) */}
      <p className="text-center text-sm max-w-3xl mx-auto px-4">
        Designated trademarks and brands are the property of their respective owners. Moola Inc. and its products are not affiliated or endorsed by such owners. Use of this website constitutes acceptance of Moola Inc. Privacy Policy and Terms of Use. <br />
        Copyright © 2025 Moola Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
