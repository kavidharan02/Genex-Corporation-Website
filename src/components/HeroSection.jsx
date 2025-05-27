import React from "react";
import ImageSlider from "./ImageSlider";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-white via-red-100 to-red-500 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-500 opacity-10 rounded-full blur-3xl"></div>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#121212] bg-opacity-40"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-24">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="block text-white">Empowering</span>
            <span className="block text-red-500">Your Business</span>
            <span className="block text-white">with Next-Gen Solutions</span>
          </h1>
          <p className="text-base md:text-xl mb-8 text-gray-300 font-normal">
            Unlock your company's potential with innovative technology, expert
            consulting, and a people-first approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#features"
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg transition duration-200"
            >
              Ignite Your Vision
            </a>
            <a
              href="#about"
              className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-full font-semibold text-lg transition duration-200"
            >
              Discover Our Edge
            </a>
          </div>
        </div>

        {/* Right Content - Image Slider */}
        <div className="w-full h-full flex items-center">
          <ImageSlider />
        </div>
      </div>
    </section>
  );
}