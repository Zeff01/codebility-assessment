import React from "react";

const payment = [
    { src: "visa.png", alt: "Visa" },
    { src: "mastercard.png", alt: "MasterCard" },
    { src: "americanexpress.png", alt: "American Express" },
    ];
const footerLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
    { href: "/help-center", label: "Help Center" },
    { href: "/contact-us", label: "Contact Us" },
    ];

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-50 text-black text-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>Accepted Payment Methods</span>
            {payment.map((item, index) => (
              <img key={index} src={item.src} alt={item.alt} className="h-6 w-8 bg-white" />
            ))}
          </div>
          <div className="mt-4 md:mt-0">
            <span>Payments Powered by</span>
            <img src="moneris.png" alt="Moneris" className="h-6 w-8 inline-block mx-3 " />
          </div>
        </div>
        <div className="border-t border-gray-700 my-4"></div>

        <div className="flex flex-col md:flex-row justify-center items-center space-x-2 space-y-3 lg:space-y-0 ">
          <img src="producto.png" alt="Logo" className="w-6 h-auto" />
          {footerLinks.map((link, index) => (
          <div key={index} className="flex">
            <a  href={link.href} className="hover:text-gray-300">
                {link.label}
              </a>
          </div>
        ))}
        </div>

        <div className="border-t border-gray-700 my-4"></div>

        <div className="text-center">
          <p>
            Designated trademarks and brands are the property of their respective owners. Producto Inc. and its products are not affiliated or endorsed by such owners. Use of this (website/app) constitutes acceptance of Producto Inc.'s Privacy Policy and Terms of Use.
          </p>
          <p className="mt-2">
            Copyright © 2025 Producto Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;