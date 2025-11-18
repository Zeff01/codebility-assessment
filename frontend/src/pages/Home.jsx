import { Featured } from "@/components/Featured";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import React from "react";

export const Home = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div id="hero" className="theme-bg-gray">
        <Hero />
      </div>
      <div id="featured" className="theme-bg-card">
        <Featured />
      </div>
      <div id="services" className="theme-bg-gray">
        <Services />
      </div>
      <div id="testimonials" className="theme-bg-card">
        <Testimonials />
      </div>
      <div id="contact" className="bg-black text-white">
        <Footer />
      </div>
    </div>
  );
};
