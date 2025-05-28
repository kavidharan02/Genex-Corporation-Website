import React, { useState, useEffect } from "react";
import { FaHome, FaBriefcase, FaCloud, FaShoppingCart, FaTools, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { TechnologyCarousel, MarqueeSlider } from './Portfolio';

import qlikview from '../assets/qlikview.png';
import tableau from '../assets/tableau.jpg';
import hive from '../assets/hive.jpg';
import cloudera from '../assets/cloudera.png';
import informatica from '../assets/informatica.png';
import sap from '../assets/sap.png';
import ecommerce from '../assets/ecommerce.jpg';
import manufacturing from '../assets/manufacturing.png';
import retail from '../assets/retail.jpg';
import lifescience from '../assets/lifescience.jpg';
import insurance from '../assets/insurance.jpg';
import banking from '../assets/banking.png';
import logistics from '../assets/logistics.jpg';
import warehousing from '../assets/warehousing.jpg';

const cn = (...classes) => classes.filter(Boolean).join(" ");

const iconMap = {
  "ECommerce Websites": <FaShoppingCart className="text-red-500 text-xl" />,
  "Cloud Deployments": <FaCloud className="text-red-500 text-xl" />,
  "DevOps Solutions": <FaTools className="text-red-500 text-xl" />,
};

const technologyAreas = [
  { label: "Qlik", image: qlikview },
  { label: "Tableau", image: tableau },
  { label: "Hive", image: hive },
  { label: "Cloudera", image: cloudera },
  { label: "Informatica", image: informatica },
  { label: "SAP NetWeaver", image: sap },
];

const functionalAreas = [
  { label: "E-commerce", image: ecommerce },
  { label: "Manufacturing", image: manufacturing },
  { label: "Retail", image: retail },
  { label: "Life Science", image: lifescience },
  { label: "Insurance", image: insurance },
  { label: "Banking", image: banking },
  { label: "Logistics", image: logistics },
  { label: "Effective Warehousing", image: warehousing },
];

// Updated Card component with featured hover effect
export const Card = ({ className, children, isHovered }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={isHovered ? { scale: 1.05, boxShadow: "0 20px 30px rgba(0,0,0,0.25)" } : { scale: 1, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className={cn(
        "relative rounded-3xl h-full w-full overflow-hidden bg-white border border-transparent shadow-md p-6 flex flex-col justify-between text-justify cursor-pointer",
        className
      )}
      style={{ minHeight: "280px" }}
    >
      {/* Overlay effect on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ mixBlendMode: "multiply" }}
          />
        )}
      </AnimatePresence>

      {/* Content wrapper with slight upward move on hover */}
      <motion.div
        animate={isHovered ? { y: -6 } : { y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Updated HoverEffect component that passes isHovered prop
export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Card isHovered={hoveredIndex === idx}>
            <div className="flex justify-between items-center mb-2">
              <CardTitle>{item.title}</CardTitle>
              <div className="text-red-500 text-xl">
                {iconMap[item.role]}
              </div>
            </div>

            <div className="flex-grow">
              <CardDescription>{item.description}</CardDescription>
            </div>

            <div className="mt-4 flex justify-between items-center"></div>
          </Card>
        </div>
      ))}
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const jobListings = [
    {
      role: "ECommerce Websites",
      title: "ECommerce Websites",
      description:
        "We specialize in developing comprehensive ECommerce platforms that combine modern design with powerful functionality. Our full-stack solutions include user-friendly interfaces, secure payment gateways, inventory management, and seamless checkout processes — all tailored to enhance your customers’ shopping experience and boost your online sales.",
    },
    {
      role: "Cloud Deployments",
      title: "Cloud Deployments",
      description:
        "Our cloud deployment services provide scalable, secure, and cost-effective alternatives to traditional on-premise infrastructure. Leveraging a variety of AWS services like API Gateway, Twilio, Redshift, RDS, Lambda, Glue, and EMR, we help businesses migrate smoothly to the cloud while optimizing performance and reducing operational expenses.",
    },
    {
      role: "DevOps Solutions",
      title: "DevOps Solutions",
      description:
        "We deliver end-to-end DevOps automation to improve your software development lifecycle. Our solutions include automated CI/CD pipelines, infrastructure as code, monitoring, and proactive maintenance to reduce downtime, speed up deployments, and cut down operational costs — empowering your teams to innovate faster and more reliably.",
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
          <Link to="/" className="text-red-500 font-medium ">
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <FaBriefcase className="text-red-500" />
          <span className="text-red-500 font-medium ">
            Services
          </span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-700">Product Development</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Empowering Businesses with Scalable Tech Solutions
        </h1>
        <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto ">
          At GenexCorp, our collective passion lies in harnessing the power of information technology to drive meaningful business transformation. This dedication informs our methodology and underpins the consistent excellence and success we deliver to our clients.
        </p>
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
          <MarqueeSlider
            items={functionalAreas}
            direction="right"
            speed={isMobile ? 80 : 40} // example: faster speed on mobile
          />
        </section>
      </div>
    </div>
  );
}
