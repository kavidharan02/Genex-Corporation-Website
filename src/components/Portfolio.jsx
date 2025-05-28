import React, { useState, useEffect } from "react";
import { FaHome, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

const MarqueeSlider = ({ items, direction = 'left' }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="overflow-hidden relative w-full py-4">
      <div 
        className={`flex ${direction === 'right' ? 'smooth-marquee-right' : 'smooth-marquee-left'}`}
        style={{
          width: "200%",
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-48 mx-4 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="w-full h-full bg-white/10 backdrop-blur rounded-xl p-4 flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-125 hover:z-20">
              <img
                src={item.image}
                alt={item.label}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .smooth-marquee-left {
          animation: scrollLeft 30s linear infinite;
        }
        .smooth-marquee-right {
          animation: scrollRight 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

const TechnologyCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }
    }, 1500); // Changed to 1.5 seconds

    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const visibleIndices = [
    (currentIndex - 1 + items.length) % items.length,
    currentIndex,
    (currentIndex + 1) % items.length,
  ];

  const visibleItems = visibleIndices.map((index) => items[index]);

  return (
    <div 
      className="relative h-[400px] w-full max-w-[1200px] mx-auto overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm p-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        onClick={handlePrev}
        className="absolute left-4 top-[50%] z-20 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
      >
        <FaChevronLeft className="text-2xl text-red-500" />
      </div>
      <div
        onClick={handleNext}
        className="absolute right-4 top-[50%] z-20 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
      >
        <FaChevronRight className="text-2xl text-red-500" />
      </div>

      {visibleItems.map((item, index) => (
        <div
          key={index}
          className="absolute left-[50%] top-[20%] z-10 h-[180px] w-[320px] animate-fadeIn rounded-lg"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
            transform:
              index === 1
                ? "translateX(-50%) scale(1.1)"
                : index === 0
                ? "translateX(-150%) rotate(-20deg)"
                : "translateX(50%) rotate(20deg)",
            transition: "all 0.5s ease-in-out",
            filter: index === 1 ? "none" : "brightness(0.7) blur(1px)",
            boxShadow: index === 1 
              ? "0 10px 30px rgba(0, 0, 0, 0.2)" 
              : "0 5px 15px rgba(0, 0, 0, 0.1)",
            zIndex: index === 1 ? 3 : 1,
          }}
        >
          <div 
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/80 to-transparent p-3 text-center transform transition-all duration-500 ${index === 1 ? 'opacity-100' : 'opacity-0'}`}
          >
            <h3 className="text-lg font-semibold text-red-500">{item.label}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export { TechnologyCarousel, MarqueeSlider };

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // initial check

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
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
          <span className="text-gray-700">Portfolio</span>
        </nav>

        {/* Header */}
        <h1 className="text-center text-4xl md:text-4xl font-extrabold text-gray-900 mb-6">
          Converting non-possibilities to possibilities
        </h1>
        <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mt-2">
        At GenexCorp, we convert challenges into strategic opportunities and innovative ideas into impactful realities, delivering value-driven solutions with precision and purpose.
        </p>

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

        {/* Content Section */}
        {/* Add more content here if needed */}
      </div>
    </div>
  );
}