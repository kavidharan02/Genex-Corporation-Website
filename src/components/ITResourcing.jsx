import React, { useState, useEffect } from "react";
import {
    FaHome, FaCloud, FaBriefcase, FaChevronDown, FaChevronUp,
    FaLaptopCode, FaProjectDiagram, FaChartLine, FaTools,
    FaPaintBrush, FaHeadset, FaUserTie
} from "react-icons/fa";
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
    "Full Stack Developer": <FaLaptopCode className="text-red-500 text-xl" />,
    "AWS Cloud Engineer": <FaCloud className="text-red-500 text-xl" />,
    "DevOps Engineer": <FaTools className="text-red-500 text-xl" />,
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

const experts = [
    { title: "BPM Designers", desc: "Business Blueprint creators with domain-specific process insights.", icon: <FaProjectDiagram /> },
    { title: "KPI Analysts", desc: "Focused analysts ensuring measurable business success.", icon: <FaChartLine /> },
    { title: "Tool Developers", desc: "Tailored tools for your industry's unique challenges.", icon: <FaTools /> },
    { title: "UI/UX Designers", desc: "Intuitive interfaces that elevate user experience.", icon: <FaPaintBrush /> },
    { title: "Support Engineers", desc: "Always-on technical support for smooth operations.", icon: <FaHeadset /> },
    { title: "Senior Consultants", desc: "Strategic functional & technical guidance.", icon: <FaUserTie /> },
];

export const HoverEffect = ({ items, className }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);

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
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleDropdown(idx);
                                }}
                                className="p-1 rounded hover:bg-red-100 text-red-500 focus:outline-none"
                                aria-label={openIndex === idx ? "Collapse description" : "Expand description"}
                            >
                                {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                        </div>

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

export const Card = ({ className, children, icon }) => (
    <div className="relative rounded-3xl h-full w-full overflow-hidden group">
        <div className={cn("relative z-10 rounded-3xl p-6 bg-white border shadow-md transition-transform duration-300 transform", className)}>
            <div className="flex items-center justify-between mb-4">{icon}</div>
            {children}
        </div>
    </div>
);

export const CardTitle = ({ className, children }) => (
    <h4 className={cn("text-gray-900 font-bold tracking-wide text-lg", className)}>{children}</h4>
);

export const CardDescription = ({ className, children }) => (
    <p className={cn("text-gray-600 tracking-wide leading-relaxed text-sm", className)}>{children}</p>
);

export default function ITResourcing() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // initial check

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className="relative min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 pb-12">
            <div className="max-w-7xl mx-auto px-4 pt-16">
                <nav className="flex items-center text-sm text-gray-500 space-x-2 mb-8 mt-6" aria-label="Breadcrumb">
                    <FaHome className="text-red-500" />
                    <Link to="/" className="text-red-500 font-medium">Home</Link>
                    <span className="text-gray-400">›</span>
                    <FaBriefcase className="text-red-500" />
                    <span className="text-red-500 font-medium">Services</span>
                    <span className="text-gray-400">›</span>
                    <span className="text-gray-700">IT Resourcing</span>
                </nav>

                <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
                    Strategic IT Resourcing for Business Success
                </h1>
                <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
                    At GenexCorp, we provide skilled IT specialists to meet your unique business needs. Our experts collaborate with you to solve challenges, boost efficiency, and drive growth through trusted partnerships.
                </p>

                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-white shadow-xl rounded-3xl px-8 py-12 max-w-7xl mx-auto"
                >
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-800">Expertise that Drives Your Business Forward</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {experts.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-3 border rounded-md shadow bg-gray-50 hover:bg-white transition-all flex flex-col items-start text-sm"
                                    >
                                        <div className="flex justify-between items-center w-full mb-2">
                                            <h4 className="text-md font-semibold text-gray-800">{item.title}</h4>
                                            <div className="text-red-600 text-2xl">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm leading-snug">{item.desc}</p>
                                    </div>

                                ))}
                            </div>
                        </div>

                        <div className="space-y-5 p-10 text-justify">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="p-6 bg-gray-50 rounded-2xl border-l-4 border-red-500"
                            >
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    We listen, understand, and co-create. Our methods are built around your business - not ours. Before defining solutions, we take time to understand your goals and environment with complete clarity.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="p-6 bg-gray-50 rounded-2xl border-l-4 border-red-500"
                            >
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Our consultants work seamlessly with your internal IT teams, external vendors, or any third-party providers — building partnerships that unlock your organization’s full potential.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                <section className="mt-12 mb-16">
                    <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
                        Technology Consulting Arena
                    </h2>
                    <TechnologyCarousel items={technologyAreas} />
                </section>

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
