import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-violet-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 items-start text-center md:text-left">
            
            {/* Logo & Socials */}
            <div className="flex flex-col items-center md:items-start space-y-6">
              <img
                src="/moola-logo-white.svg"
                alt="Moola Inc. Logo"
                className="h-12"
              />
              <nav className="flex space-x-4">
                <a href="#" aria-label="Instagram">
                  <Icon icon="mdi:instagram" className="h-8 w-8 hover:text-violet-300 transition-colors" />
                </a>
                <a href="#" aria-label="Twitter">
                  <Icon icon="mdi:twitter" className="h-8 w-8 hover:text-violet-300 transition-colors" />
                </a>
                <a href="#" aria-label="Facebook">
                  <Icon icon="mdi:facebook" className="h-8 w-8 hover:text-violet-300 transition-colors" />
                </a>
                <a href="#" aria-label="YouTube">
                  <Icon icon="mdi:youtube" className="h-8 w-8 hover:text-violet-300 transition-colors" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <Icon icon="mdi:linkedin" className="h-8 w-8 hover:text-violet-300 transition-colors" />
                </a>
              </nav>
            </div>

            {/* Quicklinks */}
            <nav className="flex flex-col items-center md:items-start space-y-4 mt-8 md:mt-0">
              <h2 className="text-lg md:text-xl font-semibold">Quicklinks</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:underline">Privacy & Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Help Center</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Contact Us</a>
                </li>
              </ul>
            </nav>

            {/* Disclaimer */}
            <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
              <p className="text-sm md:text-xs leading-relaxed text-gray-200 text-justify md:text-left">
                Designated trademarks and brands are the property of their
                respective owners. Moola Inc. and its products are not
                affiliated or endorsed by such owners. Use of this website/app
                constitutes acceptance of Moola Inc. Privacy Policy and Terms of
                Use.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-violet-800 text-white py-6">
        <div className="max-w-7xl mx-auto text-center px-6">
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} Moola Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
