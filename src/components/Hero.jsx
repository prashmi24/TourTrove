import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div
      className="hero-section bg-cover bg-center h-screen flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage:
          "url('/assets/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg')",
      }}
    >
      {/* navbar */}
      <Navbar />

      {/* content */}
      <div className="max-w-lg text-white p-6 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Experience the World, Your Way!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover exciting destinations, find amazing deals, and book your
          dream vacation hassle-free.
        </p>

        {/* buttons */}
        <div className="mt-2 space-x-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Explore
          </button>
          <button className="px-6 py-2 bg-transparent border border-blue-500 text-white rounded-lg hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
