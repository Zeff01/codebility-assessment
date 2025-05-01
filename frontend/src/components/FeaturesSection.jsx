// src/components/FeaturesSection.jsx
import React from "react";

const features = [
    {
      title: "Automated Budgeting",
      description: "Let our AI manage your monthly budgets effortlessly.",
      icon: "💰",
    },
    {
      title: "Instant Transfers",
      description: "Move your money between accounts instantly, anytime.",
      icon: "⚡",
    },
    {
      title: "Spending Insights",
      description: "Understand your habits and grow your savings.",
      icon: "📊",
    },
  ];

const FeatureSection = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                        Why Choose Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature,index)=>(
                        <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}



export default FeatureSection;