"use client";
import React from "react";

const Contact = () => {
  return (
    // Added id="contact" for scroll anchor
    <section
      id="contact"
      className="py-20 bg-gray-100 text-center px-4 animate-fadeIn"
    >
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <p className="mb-6 text-gray-700">
        Have questions or want to get started? Fill out the form below!
      </p>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Message"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
