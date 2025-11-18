import React from "react";

export const ServiceCard = ({ index, service }) => {
  const IconComponent = service.icon;

  return (
    <div className="service-card rounded-2xl p-6 space-y-4 group">
      <div className="w-12 h-12 p-3 bg-red-50 text-highlight inline-flex items-center justify-center rounded-2xl ">
        <IconComponent size={24} />
      </div>
      <div className="space-y-2">
        <h3 className="service-card-title font-bold text-xl">
          {service.title}
        </h3>
        <p className="theme-text-secondary leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
};
