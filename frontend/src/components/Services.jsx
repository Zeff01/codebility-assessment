import { CircleGauge, Headset, Shield, Zap } from "lucide-react";
import React from "react";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const serviceData = [
    {
      icon: Zap,
      title: "Performance",
      description:
        "Experience unmatched speed and agility with our top-tier vehicles designed for optimal performance.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Our vehicles are equipped with the latest safety technologies to ensure your peace of mind on every journey.",
    },
    {
      icon: Headset,
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any needs or inquiries.",
    },
    {
      icon: CircleGauge,
      title: "Precision Tuning",
      description:
        "Each vehicle is meticulously tuned to deliver a driving experience that is both exhilarating and refined.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="text-center space-y-4">
        <p className=" text-highlight font-bold">WHY CHOOSE US</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Premium Service & Features
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
        {serviceData.map((service, index) => {
          return <ServiceCard key={index} service={service} />;
        })}
      </div>
    </div>
  );
};
