import React from "react";
import { FaHome } from "react-icons/fa";
import { FaLightbulb, FaChartLine, FaCloud, FaCogs, FaMobileAlt } from "react-icons/fa";

const specializations = [
  { label: "E-commerce", icon: <FaChartLine className="text-red-500" /> },
  { label: "Mobility and Smart Technology", icon: <FaMobileAlt className="text-red-500" /> },
  { label: "Enterprise Cloud", icon: <FaCloud className="text-red-500" /> },
  { label: "Business intelligence and Data Analytics", icon: <FaLightbulb className="text-red-500" /> },
  { label: "EAI / ERP solutions", icon: <FaCogs className="text-red-500" /> }
];

export default function OurObjective() {
  return (
    <div className="relative min-h-screen bg-white pb-12">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-16">
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center text-sm text-gray-500 space-x-2 mb-8 mt-6"
          aria-label="Breadcrumb"
        >
          <FaHome className="text-red-500" />
          <a href="/" className="text-red-500 font-medium hover:underline">
            Home
          </a>
          <span className="text-gray-400">›</span>
          <span className="text-gray-700">Our Objective</span>
        </nav>

        {/* Header */}
        <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 mb-6">
          At GenexCorp, “Converting non-possibilities to possibilities” is more than a slogan - it reflects our approach to every engagement
        </h1>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Text Content */}
          <div className="space-y-6 text-justify">
            <p className="text-gray-700">
              Some believe in the power of <span className="font-semibold text-red-500">NUMBERS</span>. Some believe in the power of <span className="font-semibold text-red-500">TECHNOLOGY</span>.
            </p>
            <p className="text-gray-700">
              We believe in the power of <span className="font-semibold text-red-500">PEOPLE</span>. We believe in the power of <span className="font-semibold text-red-500">HUMAN TOUCH</span>, that brings Talent out of the best, and the impact it can have on technology.
            </p>
            <p className="text-gray-700">
              Our roots grew from this belief that people with diverse points of view could come together and build a different kind of technology organization, one that puts <span className="font-semibold text-red-500">HUMANS</span> first. This belief drives our vision, to build technology experts who are focused on one goal - helping our clients succeed. Today, availability of information is opening up a world of possibilities. Realizing those possibilities takes more than numbers. It takes more than technology. It takes people. People who can turn the potential of information into meaningful solutions. Solutions that simplify businesses, support decision making, and improve business processes.
            </p>
            <p className="text-gray-700">
              Our Belief is to ensure a collaborative approach, partnering with you and improvising the information analytics that your business deserves. Our consultants understand your business needs, study the market you play within, and define the strategy that makes you succeed in what you do.
            </p>
            <p className="text-gray-700">
              Our consultants, with business insight, have delivered in the technology space accelerating growth for multiple global companies, solving complex business challenges, and providing innovative solutions that give your business an edge over the competition.
            </p>
          </div>

          {/* Right: Specializations */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 border border-gray-200 mb-12 mt-12">
            <h2 className="text-2xl font-bold text-red-500 mb-6 text-center">Our Specializations</h2>
            <ul className="grid grid-cols-1 gap-5">
              {specializations.map((item, idx) => (
                <li
                  key={item.label}
                  className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-gray-100"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-800 font-medium">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
