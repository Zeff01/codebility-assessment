"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Moola Clone. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
