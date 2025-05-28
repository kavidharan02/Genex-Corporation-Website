import React from "react";
import { useState, useEffect } from "react";
import {
    FaHome,
    FaBriefcase,
    FaCloud,
    FaGlobe,
    FaShoppingCart,
    FaTools,
    FaRobot,
    FaAws,
    FaDatabase,
    FaLaptopCode,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { TechnologyCarousel, MarqueeSlider } from "./Portfolio";

import qlikview from "../assets/qlikview.png";
import tableau from "../assets/tableau.jpg";
import hive from "../assets/hive.jpg";
import cloudera from "../assets/cloudera.png";
import informatica from "../assets/informatica.png";
import sap from "../assets/sap.png";
import ecommerce from "../assets/ecommerce.jpg";
import manufacturing from "../assets/manufacturing.png";
import retail from "../assets/retail.jpg";
import lifescience from "../assets/lifescience.jpg";
import insurance from "../assets/insurance.jpg";
import banking from "../assets/banking.png";
import logistics from "../assets/logistics.jpg";
import warehousing from "../assets/warehousing.jpg";

const iconMap = {
    "DevOps Development": <FaTools className="text-red-500 text-4xl" />,
    "Splunk Development": <FaDatabase className="text-red-500 text-4xl" />,
    "FullStack Development": <FaLaptopCode className="text-red-500 text-4xl" />,
    "Web Development": <FaGlobe className="text-red-500 text-4xl" />,
    "ServiceNow Development": <FaCloud className="text-red-500 text-4xl" />,
    "ChatBot Development": <FaRobot className="text-red-500 text-4xl" />,
    "AWS Development": <FaAws className="text-red-500 text-4xl" />,
    "ECommerce Websites": <FaShoppingCart className="text-red-500 text-4xl" />,
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

const styles = `
  .perspective {
    perspective: 1000px;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }
`;

// 3D Flip Card Component
const FlipCard = ({ frontTitle, frontIcon, backDescription }) => {
    return (
        <div className="w-full h-60 perspective cursor-pointer">
            <div className="flip-card-inner rounded-3xl shadow-md border bg-white">
                {/* Front Side */}
                <div className="flip-card-front rounded-3xl">
                    <div className="text-red-500 mb-4">{frontIcon}</div>
                    <h3 className="text-xl font-bold text-gray-900 text-center">{frontTitle}</h3>
                </div>
                {/* Back Side */}
                <div className="flip-card-back rounded-3xl">
                    {backDescription}
                </div>
            </div>
        </div>
    );
};

export default function ITConsulting() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // initial check

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const jobListings = [
        {
            role: "DevOps Development",
            title: "DevOps Development",
            description:
                "We streamline delivery pipelines using CI/CD, container orchestration, and infrastructure as code to ensure reliable deployments.",
        },
        {
            role: "Splunk Development",
            title: "Splunk Development",
            description:
                "Gain real-time visibility with our Splunk integration for powerful data indexing, monitoring, and advanced analytics dashboards.",
        },
        {
            role: "FullStack Development",
            title: "FullStack Development",
            description:
                "We provide robust end-to-end solutions using modern frontend frameworks and scalable backend services to meet dynamic business needs.",
        },
        {
            role: "Web Development",
            title: "Web Development",
            description:
                "Crafting responsive, high-performance web applications tailored to your branding and optimized for all devices and browsers.",
        },
        {
            role: "ServiceNow Development",
            title: "ServiceNow Development",
            description:
                "Automate and manage IT workflows efficiently with ServiceNow customization, integrations, and platform upgrades.",
        },
        {
            role: "ChatBot Development",
            title: "ChatBot Development",
            description:
                "Create AI-driven chatbots to automate customer support, streamline workflows, and enhance user engagement across platforms.",
        },
        {
            role: "AWS Development",
            title: "AWS Development",
            description:
                "Leverage AWS infrastructure including Lambda, EC2, RDS, and more to build scalable, secure, and cost-effective cloud solutions.",
        },
        {
            role: "ECommerce Websites",
            title: "ECommerce Websites",
            description:
                "We build engaging online stores with secure checkout, intuitive navigation, and full integration of payment and inventory systems.",
        },
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 pb-12">
            <style>{styles}</style>

            <div className="max-w-7xl mx-auto px-4 pt-16">
                <nav
                    className="flex items-center text-sm text-gray-500 space-x-2 mb-8 mt-6"
                    aria-label="Breadcrumb"
                >
                    <FaHome className="text-red-500" />
                    <Link to="/" className="text-red-500 font-medium">
                        Home
                    </Link>
                    <span className="text-gray-400">›</span>
                    <FaBriefcase className="text-red-500" />
                    <span className="text-red-500 font-medium">Services</span>
                    <span className="text-gray-400">›</span>
                    <span className="text-gray-700">IT Consulting</span>
                </nav>

                <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
                    Driving Innovation through Expert IT Consulting
                </h1>
                <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
                    At GenexCorp, we specialize in delivering strategic IT consulting that empowers organizations to innovate, optimize operations, and achieve sustainable growth. Our expert guidance and tailored solutions help businesses harness technology’s full potential to stay competitive in a rapidly evolving digital landscape.
                </p>

                {/* 3D Flip Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
                    {jobListings.map((job, idx) => (
                        <FlipCard
                            key={idx}
                            frontTitle={job.title}
                            frontIcon={iconMap[job.role]}
                            backDescription={job.description}
                        />
                    ))}
                </div>

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
