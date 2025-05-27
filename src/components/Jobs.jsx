import React, { useState } from "react";
import { FaHome, FaBriefcase, FaCloud, FaTools, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { TechnologyCarousel, MarqueeSlider } from './Portfolio';

const cn = (...classes) => classes.filter(Boolean).join(" ");

const iconMap = {
  "Full Stack Developer": <FaBriefcase className="text-red-500 text-xl" />,
  "AWS Cloud Engineer": <FaCloud className="text-red-500 text-xl" />,
  "DevOps Engineer": <FaTools className="text-red-500 text-xl" />,
};

const technologyAreas = [
  { label: "Qlik", image: "../src/assets/qlikview.png" },
  { label: "Tableau", image: "../src/assets/tableau.jpg" },
  { label: "Hive", image: "../src/assets/hive.jpg" },
  { label: "Cloudera", image: "../src/assets/cloudera.png" },
  { label: "Informatica", image: "../src/assets/informatica.png" },
  { label: "SAP NetWeaver", image: "./src/assets/sap.png" },
];

const functionalAreas = [
  { label: "E-commerce", image: "../src/assets/ecommerce.jpg" },
  { label: "Manufacturing", image: "../src/assets/manufacturing.png" },
  { label: "Retail", image: "../src/assets/retail.jpg" },
  { label: "Life Science", image: "../src/assets/lifescience.jpg" },
  { label: "Insurance", image: "./src/assets/insurance.jpg" },
  { label: "Banking", image: "./src/assets/banking.png" },
  { label: "Logistics", image: "./src/assets/logistics.jpg" },
  { label: "Effective Warehousing", image: "./src/assets/warehousing.jpg" },
];

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null); // Track which dropdown is open

  const toggleDropdown = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Card isHovered={hoveredIndex === idx} icon={iconMap[item.role]}>
            <div className="flex justify-between items-center">
              <CardTitle>{item.title}</CardTitle>
              {/* Dropdown toggle button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent hover state change on click
                  toggleDropdown(idx);
                }}
                className="p-1 rounded hover:bg-red-100 text-red-500 focus:outline-none"
                aria-label={openIndex === idx ? "Collapse description" : "Expand description"}
              >
                {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            {/* Show description only if open */}
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-2"
                >
                  <CardDescription>{item.description}</CardDescription>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer remains always visible */}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xs font-medium text-gray-500">
                Start: <span className="text-red-600">Immediate</span>
              </span>
              <Link
                to="/support"
                className="text-sm px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              >
                Apply Now
              </Link>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children, icon }) => {
  return (
    <div className="relative rounded-3xl h-full w-full overflow-hidden group">
      <div
        className={cn(
          "relative z-10 rounded-3xl p-6 bg-white border border-transparent shadow-md transition-transform duration-300 transform",
          className
        )}
      >
        <div className="flex items-center justify-between mb-4">
          {icon}
        </div>
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => (
  <h4 className={cn("text-gray-900 font-bold tracking-wide text-lg", className)}>{children}</h4>
);

export const CardDescription = ({ className, children }) => (
  <p
    className={cn(
      "text-gray-600 tracking-wide leading-relaxed text-sm",
      className
    )}
  >
    {children}
  </p>
);

export default function Jobs() {
  const jobListings = [
    {
      role: "Full Stack Developer",
      title: "1. Full Stack Developer",
      description:
        "Seeking 2–3 year experienced developer skilled in Payments, Messaging, Notifications, and performance optimization features.",
    },
    {
      role: "AWS Cloud Engineer",
      title: "2. AWS Cloud Engineer",
      description:
        "Looking for a Cloud Engineer with 2–3 years experience in AWS infrastructure, monitoring, and deployment automation.",
    },
    {
      role: "DevOps Engineer",
      title: "3. DevOps Engineer",
      description:
        "Hiring DevOps expert with 2–3 years of hands-on experience in CI/CD pipelines, container orchestration, and cloud automation.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 pb-12">
      <div className="max-w-7xl mx-auto px-4 pt-16">
        <nav
          className="flex items-center text-sm text-gray-500 space-x-2 mb-8 mt-6"
          aria-label="Breadcrumb"
        >
          <FaHome className="text-red-500" />
          <Link to="/" className="text-red-500 font-medium hover:underline">
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-700">Jobs</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          GenexCorp Jobs
        </h1>

        <HoverEffect items={jobListings} />

        {/* Technology Section */}
        <section className="mt-12 mb-16">
          <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
            Technology Consulting Arena
          </h2>
          <TechnologyCarousel items={technologyAreas} />
        </section>

        {/* Functional Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
            Functional Consulting Arena
          </h2>
          <MarqueeSlider items={functionalAreas} direction="left" />
        </section>
      </div>
    </div>
  );
}