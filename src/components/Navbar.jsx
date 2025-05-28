import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  UserGroupIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import logo from '../assets/logo.png';

const navLinks = [
  {
    name: "Home",
    icon: <HomeIcon className="w-5 h-5 mr-2" />,
    to: "/",
    dropdown: [
      { label: "Our Objective", to: "/our-objective" },
      { label: "Portfolio", to: "/portfolio" }
    ]
  },
  {
    name: "Services",
    icon: <BriefcaseIcon className="w-5 h-5 mr-2" />,
    dropdown: [
      { label: "Product Development", to: "/product-development" },
      { label: "IT Consulting", to: "/it-consulting" },
      { label: "IT Resourcing", to: "/it-resourcing" }
    ]
  },
  {
    name: "Trainings",
    icon: <AcademicCapIcon className="w-5 h-5 mr-2" />,
    dropdown: [
      { label: "Trainings / Internships", to: "/train-intern" },
      { label: "Real Time Internships", to: "/real-time-internships" },
      { label: "Corporate Training", to: "/corporate-training" }
    ]
  },
  {
    name: "Jobs",
    icon: <UserGroupIcon className="w-5 h-5 mr-2" />,
    to: "/jobs"
  },
  {
    name: "Support",
    icon: <LifebuoyIcon className="w-5 h-5 mr-2" />,
    to: "/support"
  },
];


export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center hover:opacity-80 transition">
          <img src={logo} alt="Genex Logo" className="h-12 w-auto object-contain" />
          <span className="ml-3 font-bold text-lg text-gray-900 tracking-wide">
            <span className="text-red-500">GENEX</span> CORPORATE SERVICES PVT. LTD
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="relative w-8 h-8 flex items-center justify-center z-50 focus:outline-none"
          >
            <span
              className={`absolute h-0.5 w-6 bg-gray-800 transition-transform duration-300 ease-in-out origin-center ${isMobileMenuOpen ? "rotate-45" : "-translate-y-2"
                }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-gray-800 transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-gray-800 transition-transform duration-300 ease-in-out origin-center ${isMobileMenuOpen ? "-rotate-45" : "translate-y-2"
                }`}
            />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => {
                  if (hoverTimeout) clearTimeout(hoverTimeout);
                  setOpen(idx);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => setOpen(null), 300);
                  setHoverTimeout(timeout);
                }}
              >
                <Link
                  to={link.to || "#"}
                  className="flex items-center text-gray-900 hover:text-red-500 font-medium"
                >
                  {link.icon}
                  {link.name}
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform ${open === idx ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div
                  className={`absolute left-0 mt-2 w-56 bg-white shadow-xl border border-red-400 rounded-lg z-10 transition duration-300 ${open === idx ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                >
                  {link.dropdown.map((item, i) => {
                    if (typeof item === "object" && item.label && item.to) {
                      return (
                        <Link
                          key={item.label}
                          to={item.to}
                          className="block px-6 py-3 text-gray-900 hover:bg-red-100 hover:text-red-500"
                        >
                          {item.label}
                        </Link>
                      );
                    }
                    return (
                      <Link
                        key={item}
                        to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                        className="block px-6 py-3 text-gray-900 hover:bg-red-100 hover:text-red-500"
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.to || "#"}
                className="flex items-center text-gray-900 hover:text-red-500 font-medium"
              >
                {link.icon}
                {link.name}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="flex flex-col space-y-2">
                  <span className="text-gray-800 font-semibold border-b border-gray-300 pb-1">{link.name}</span>
                  {link.dropdown.map((item, i) => {
                    if (typeof item === "object" && item.label && item.to) {
                      return (
                        <Link
                          key={item.label}
                          to={item.to}
                          className="text-gray-700 hover:text-red-500 ml-4"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      );
                    }
                    return (
                      <Link
                        key={item}
                        to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                        className="text-gray-700 hover:text-red-500 ml-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.to || "#"}
                  className="text-gray-800 font-semibold hover:text-red-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
