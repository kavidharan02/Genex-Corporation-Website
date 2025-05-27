import React from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 pt-6 pb-0 border-t border-gray-300">
      {/* Main Section: About, Quick Links & Contact Info */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start pb-4">
        {/* About */}
        <div className="flex flex-col h-full justify-start">
          <h2 className="text-2xl font-bold mb-1 text-red-500">About Genexcorp</h2>
          <p className="mb-3 text-gray-600 leading-relaxed text-sm">
            Some believe in the power of numbers. Some believe in the power of technology. We believe in the power of people, power of human touch which brings best out of the best and the impact people can have on technology.
          </p>
          <div className="flex space-x-2 mt-1">
            <a href="#" className="rounded-full bg-gray-200 shadow hover:bg-red-500 transition p-2 text-red-500 hover:text-white text-base">
              <FaFacebookF />
            </a>
            <a href="#" className="rounded-full bg-gray-200 shadow hover:bg-red-500 transition p-2 text-red-400 hover:text-white text-base">
              <FaTwitter />
            </a>
            <a href="#" className="rounded-full bg-gray-200 shadow hover:bg-red-500 transition p-2 text-red-400 hover:text-white text-base">
              <FaGooglePlusG />
            </a>
            <a href="#" className="rounded-full bg-gray-200 shadow hover:bg-red-500 transition p-2 text-red-400 hover:text-white text-base">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-red-500">Genexcorp Quick Links</h2>
          <ul className="space-y-2">
            {[
              { label: "Home", to: "/" },
              { label: "Our Objective", to: "/our-objective" },
              { label: "Portfolio", to: "/portfolio" },
              { label: "Corporate Training", to: "/corporate-training" },
              { label: "Career Augmentation Training", to: "/career-augmentation-training" },
              { label: "Jobs", to: "/jobs" },
              { label: "Support", to: "/support" },
            ].map(link => (
              <li key={link.label}>
                <a
                  href={link.to}
                  className="flex items-center text-gray-600 hover:text-red-500 transition group text-sm"
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2 text-red-500 group-hover:translate-x-1 group-hover:text-red-500 transition" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col h-full justify-start">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Contact Information</h2>
          <div className="flex-1 w-full">
            <ul className="space-y-4 text-gray-600 text-base">
              <li className="flex items-start">
                <MapPinIcon className="w-6 h-6 mr-3 text-red-500 flex-shrink-0 mt-1" />
                <span className="leading-relaxed">
                  VT Plaza, 4th Floor, KPHB Colony, Kukatpally,<br />
                  Road # 1, Hyderabad - 500085, Telangana, India
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-6 h-6 mr-3 text-red-500 flex-shrink-0" />
                <a href="tel:+919920779995" className="hover:text-red-400 transition font-medium">
                  +91-9920779995
                </a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="w-6 h-6 mr-3 text-red-500 flex-shrink-0" />
                <a href="mailto:hr@genexcorp.com" className="hover:text-red-400 transition font-medium">
                  hr@genexcorp.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-red-500"></div>
      {/* Bottom Section */}
      <div className="bg-red-500 py-2 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0 text-left w-full md:w-auto">
            <img src="/public/images/logo.png" alt="Genex Corp Logo" className="h-8 w-8 mr-3 rounded bg-white p-1 shadow" />
            <span>&copy; {new Date().getFullYear()} <span className="font-semibold">Genex Corp</span>. All rights reserved.</span>
          </div>
          <div className="space-x-6 text-right w-full md:w-auto">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style>
        {`
          .animate-fade-in-up {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.7s forwards;
          }
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </footer>
  );
}
