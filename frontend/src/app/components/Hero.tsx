"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    // Added id="hero" for scroll anchor
    <section id="hero" className="hero bg-blue-500 text-white flex flex-col items-center justify-center min-h-screen p-8 text-center animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to Moola Clone
      </h1>
      <p className="text-lg md:text-2xl mb-6">
        Manage your finances effortlessly.
      </p>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Get Started
      </button>

      {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default Hero;
