import React from "react";
import { Button } from "./ui/button";
import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="text-center py-16 lg:py-20 border-b border-gray-700">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Ready to Drive Excellence?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Schedule a test drive today and experience the pinnacle of
              automotive performance. Our expert team is ready to assist you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="white" size="lg" className="min-w-[200px]">
              Schedule Test Drive
            </Button>
            <Button
              variant="dark"
              size="lg"
              className="border border-white min-w-[200px]"
            >
              Contact Sales
            </Button>
          </div>
        </div>

        {/* Links Section */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-2xl font-bold tracking-tighter">
                Elite<span className="text-[#8c1007]">Motors</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Premium automotive solutions for the discerning driver.
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#8c1007] transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#8c1007] transition-colors duration-300"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#8c1007] transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#8c1007] transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-white">Quick Links</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Vehicles
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Blog
                </a>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-white">Support</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Warranty
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  FAQ
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-white">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <p className="hover:text-white transition-colors duration-300">
                  +1 (555) 123-4567
                </p>
                <p className="hover:text-white transition-colors duration-300">
                  info@elitemotors.com
                </p>
                <p className="hover:text-white transition-colors duration-300 leading-relaxed">
                  123 Luxury Drive
                  <br />
                  Premium City, PC 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Copyright size={16} />
              <p className="text-sm">2025 Elite Motors. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
