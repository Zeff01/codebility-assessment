// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen flex items-center justify-center px-6 py-20">
           <div className="max-w-3xl text-center">
           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Smarter Money. Made Simple.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
                Manage your finances effortlessly and grow your wealth with ease.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition">
                Get Started
            </button>
           </div>
            
        </section>
    )
};

export default HeroSection;