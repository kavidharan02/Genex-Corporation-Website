import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  FireIcon, 
  ChartBarIcon, 
  UsersIcon, 
  ShieldCheckIcon, 
  BoltIcon,                // <-- use BoltIcon
  CogIcon,  
  DevicePhoneMobileIcon,   // <-- use DevicePhoneMobileIcon
  GlobeAltIcon, 
  SparklesIcon,
  ArrowTrendingUpIcon // <-- use this instead of TrendingUpIcon
} from '@heroicons/react/24/outline';


const features = [
  {
    title: "Services",
    desc: "Your participants will be ready to take any challenge in Analytics within a few days after training, with our tailored curriculum.",
    icon: <BriefcaseIcon className="w-7 h-7 text-red-500 mb-1" aria-hidden="true" />,
  },
  {
    title: "Trainings / Internships",
    desc: "Looking to take your career into BI and Analytics? This is the right place to get adopted with foundational understanding.",
    icon: <AcademicCapIcon className="w-7 h-7 text-red-500 mb-1" aria-hidden="true" />,
  },
  {
    title: "Consulting",
    desc: "We change the way organizations look at their business. Our expertise in Business Intelligence is cost-effective and impactful.",
    icon: <UserGroupIcon className="w-7 h-7 text-red-500 mb-1" aria-hidden="true" />,
  },
  {
    title: "Product Development",
    desc: "Stay ahead with our agile approach to BI and product development. Walk-in to see how we can help your business grow.",
    icon: <FireIcon className="w-7 h-7 text-red-500 mb-1" aria-hidden="true" />,
  },
];

const highlights = [
  {
    title: "Growth Analytics",
    desc: "Accelerate business growth with actionable analytics and real-time insights.",
    icon: <ArrowTrendingUpIcon className="w-6 h-6 text-red-500 mr-2" />
  },
  {
    title: "Empowered Teams",
    desc: "Empower teams with intuitive dashboards and self-service BI tools.",
    icon: <UsersIcon className="w-6 h-6 text-red-500 mr-2" />
  },
  {
    title: "Seamless Integration",
    desc: "Seamlessly integrate data from all your business platforms.",
    icon: <CogIcon className="w-6 h-6 text-red-500 mr-2" />
  },
  {
    title: "Smart Visualization",
    desc: "Drive smarter decisions with advanced data visualization.",
    icon: <ChartBarIcon className="w-6 h-6 text-red-500 mr-2" />
  },
  {
    title: "Collaboration",
    desc: "Enhance collaboration and knowledge sharing across your organization.",
    icon: <AcademicCapIcon className="w-6 h-6 text-red-500 mr-2" />
  },
  {
    title: "Enterprise Security",
    desc: "Ensure data security with enterprise-grade protection and compliance.",
    icon: <ShieldCheckIcon className="w-6 h-6 text-red-500 mr-2" />
  },
  {
    title: "Automated Reporting",
    desc: "Automate reporting to save time and boost productivity.",
    icon: <BoltIcon className="w-6 h-6 text-red-500 mr-2" />
  },
  {
    title: "Expert Consulting",
    desc: "Leverage expert consulting for tailored business solutions.",
    icon: <SparklesIcon className="w-6 h-6 text-red-500 mr-2" />
  },
  {
    title: "Scalable Products",
    desc: "Unlock new opportunities with scalable product development.",
    icon: <DevicePhoneMobileIcon className="w-6 h-6 text-red-500 mr-2" />
  },
  {
    title: "Strategic Data",
    desc: "Transform your data into a strategic business asset.",
    icon: <GlobeAltIcon className="w-6 h-6 text-red-500 mr-2" />
  }
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen text-gray-100">
      {/* Hero Section */}
      <HeroSection />

      {/* Core Offerings Section */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-2">Our Core Offerings</h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Empowering your business with tailored analytics, training, consulting, and product development solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ title, desc, icon }) => (
            <article
              key={title}
              className="relative bg-white border border-gray-200 shadow-lg p-7 rounded-xl flex flex-col justify-between max-w-md mx-auto transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-red-50"
              tabIndex={0}
              aria-labelledby={`${title.toLowerCase()}-title`}
              aria-describedby={`${title.toLowerCase()}-desc`}
            >
              {/* Red Accent Bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-red-500 rounded-tl-xl rounded-bl-xl opacity-100"></div>

              <div>
                {icon}
                <h3 id={`${title.toLowerCase()}-title`} className="text-base font-semibold text-gray-900 mb-2 mt-2">{title}</h3>
                <p id={`${title.toLowerCase()}-desc`} className="text-gray-700 mb-6 text-sm leading-relaxed">{desc}</p>
              </div>

              <button
                type="button"
                className="mt-auto px-4 py-1.5 border border-red-500 text-red-500 bg-white rounded-full text-xs font-medium shadow-sm transition-all duration-200 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Read more
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-6">Highlights</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Transform your business with our cutting-edge features and solutions.
        </p>

        <div className="flex flex-wrap gap-6 mb-4 justify-center">
          {highlights.map((item, idx) => (
            <button
              key={idx}
              className={`flex items-center px-5 py-3 rounded-xl font-medium shadow transition-all duration-200 border
                ${activeIndex === idx
                  ? 'bg-red-500 text-white border-red-500 scale-105'
                  : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-red-50 hover:border-red-300'}
              `}
              style={{ minWidth: 170 }}
              onClick={() => setActiveIndex(idx)}
            >
              {/* Dynamically render the icon with the correct color */}
              <span className="mr-2">
                {React.cloneElement(item.icon, {
                  className: `w-6 h-6 ${
                    activeIndex === idx ? 'text-white' : 'text-red-500'
                  }`,
                })}
              </span>
              <span className="truncate">{item.title}</span>
            </button>
          ))}
        </div>
        <div
          key={activeIndex}
          className="p-6 bg-white rounded-xl shadow-md min-h-[80px] flex items-center justify-center text-center mx-auto max-w-3xl animate-fadein"
          style={{ animation: 'fadein 0.7s' }}
        >
          <span className="text-lg text-gray-700 leading-relaxed">{highlights[activeIndex].desc}</span>
        </div>
        {/* Animation keyframes */}
        <style>
          {`
            @keyframes fadein {
              from { opacity: 0; transform: translateY(20px);}
              to { opacity: 1; transform: translateY(0);}
            }
            .animate-fadein {
              animation: fadein 0.7s;
            }
          `}
        </style>
      </section>

      {/* Articles Section */}
      <section
        className="w-full py-12 mt-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50"
        aria-labelledby="articles-heading"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 id="articles-heading" className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8">
            The Genex Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article
              className="relative group rounded-2xl overflow-hidden bg-white border border-gray-200 p-6 md:p-8 flex flex-col justify-between transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              tabIndex={0}
            >
              <h3 id="article1-title" className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Be a pioneer by 2017
              </h3>
              <p className="text-gray-700 text-base mb-4 leading-relaxed">
                Over the past several years, the BI platform market has grown largely through companies investing in IT-led
                consolidation projects to standardize IT-centric BI platforms for large-scale systems of record. These have
                tended to be highly governed and centralized, where IT production reports were pushed out to managers and
                knowledge workers.
              </p>
              <p className="text-gray-500 text-xs mb-4">-Ref Gartner article dated December 16, 2013</p>
              <button className="mt-auto text-red-500 hover:text-red-700 text-sm font-medium">
                Read more »
              </button>
            </article>

            <article
              className="relative group rounded-2xl overflow-hidden bg-white border border-gray-200 p-6 md:p-8 flex flex-col justify-between transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              tabIndex={0}
            >
              <h3 id="article2-title" className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Data discovery is the new normal, but where do we go from here?
              </h3>
              <p className="text-gray-700 text-base mb-4 leading-relaxed">
                Smart data discovery has the potential to expand access to sophisticated interactive analysis and insights to
                business consumers and nontraditional BI users — the approximately 70 percent of users in organizations that
                currently do not use BI tools or have statistical backgrounds.
              </p>
              <p className="text-gray-500 text-xs mb-4">-Ref Gartner article dated January 27, 2015</p>
              <button className="mt-auto text-red-500 hover:text-red-700 text-sm font-medium">
                Read more »
              </button>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

