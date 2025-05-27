import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon, BriefcaseIcon, AcademicCapIcon, UserGroupIcon, LifebuoyIcon } from "@heroicons/react/24/outline";
import { FaHome } from "react-icons/fa";
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
  { name: "Services", icon: <BriefcaseIcon className="w-5 h-5 mr-2" />, dropdown: ["Product Development", "IT Consulting", "IT Resourcing"] },
  { name: "Trainings", icon: <AcademicCapIcon className="w-5 h-5 mr-2" />, dropdown: ["Training / Internships", "R  eal Time Internships", "Corporate Training"] },
  { name: "Jobs", icon: <UserGroupIcon className="w-5 h-5 mr-2" />, to: "/jobs" },
  { name: "Support", icon: <LifebuoyIcon className="w-5 h-5 mr-2" />, to: "/support" },
];

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-0 py-3 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center -ml-16 hover:opacity-80 transition">
          <img
            src={logo}
            alt="Genex Corp Logo"
            className="h-15 w-auto object-contain"
            style={{ minWidth: "64px" }}
          />
          <span className="ml-3 font-bold text-1xl text-gray-900 tracking-wide whitespace-nowrap">
            <span className="text-red-500">GENEX</span> CORPORATE SERVICES PVT. LTD
          </span>
        </Link>
        {/* Nav Links */}
        <div className="flex items-center space-x-8">
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
                  to={link.to}
                  className="flex items-center space-x-1 text-gray-900 hover:text-red-500 font-medium focus:outline-none"
                >
                  {link.icon}
                  <span>{link.name}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      open === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div
                  className={`
                    absolute left-0 mt-2 w-56 bg-white shadow-xl border border-red-400 rounded-lg z-10
                    transition-all duration-300 ease-out origin-top
                    ${open === idx
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"}
                  `}
                >
                  {link.dropdown.map((item, i) => {
                    // If item is an object with label and to, use those
                    if (typeof item === "object" && item.label && item.to) {
                      return (
                        <Link
                          key={item.label}
                          to={item.to}
                          className="block px-6 py-3 text-gray-900 hover:bg-red-400/10 hover:text-red-400 transition-all duration-300"
                          style={{
                            transitionDelay: open === idx ? `${i * 60}ms` : "0ms"
                          }}
                        >
                          {item.label}
                        </Link>
                      );
                    }
                    // Otherwise, treat as a string and generate a path
                    return (
                      <Link
                        key={item}
                        to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                        className="block px-6 py-3 text-gray-900 hover:bg-red-400/10 hover:text-red-400 transition-all duration-300"
                        style={{
                          transitionDelay: open === idx ? `${i * 60}ms` : "0ms"
                        }}
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
    </nav>
  );
}