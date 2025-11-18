"use client";
import React from "react";

const features = [
  { icon: "💰", title: "Easy Wallet Management", description: "Track your income and expenses effortlessly." },
  { icon: "📊", title: "Smart Analytics", description: "Get insights and reports to improve your finances." },
  { icon: "🔒", title: "Secure & Private", description: "Your financial data is safe with us." },
];

const Features = () => {
  return (
    // Added id="features" for scroll anchor
    <section id="features" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12 animate-fadeIn">Features</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 animate-fadeIn"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
