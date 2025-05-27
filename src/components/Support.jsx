import React, { useState } from "react";
import { FaHome, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Move the component definition outside the main function
const ProfessionalFeatureCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center mb-4">
      <div className="p-3 bg-red-50 rounded-full mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default function Support() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    companyName: "",
    industryVertical: "",
    mobile: "",
    email: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState({});
  // Success message state
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation patterns
  const patterns = {
    name: /^[a-zA-Z\s]{2,50}$/,
    mobile: /^[0-9]{10}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (!patterns.name.test(formData.name)) {
      tempErrors.name = "Please enter a valid name (2-50 characters, letters only)";
      isValid = false;
    }

    // Designation validation
    if (!formData.designation.trim()) {
      tempErrors.designation = "Designation is required";
      isValid = false;
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      tempErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!patterns.mobile.test(formData.mobile)) {
      tempErrors.mobile = "Please enter a valid 10-digit mobile number";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!patterns.email.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false);

    if (validateForm()) {
      try {
        // Add your API call here
        console.log("Form submitted:", formData);
        
        // Reset form after successful submission
        setFormData({
          name: "",
          designation: "",
          companyName: "",
          industryVertical: "",
          mobile: "",
          email: "",
          message: "",
        });
        setSubmitSuccess(true);
      } catch (error) {
        console.error("Submission error:", error);
        setErrors((prev) => ({
          ...prev,
          submit: "Failed to submit form. Please try again.",
        }));
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 pb-16">
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
          <span className="text-gray-700">Support</span>
        </nav>

        {/* Updated Header */}
        <h1 className="text-center text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Our Premium Support Features
        </h1>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          Contact our support team for prompt assistance and solutions tailored
          for you.
        </p>

        {/* Add the new featured component section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-10">
          <ProfessionalFeatureCard 
            icon={<FaPhone className="text-red-600" />}
            title="24/7 Priority Support"
            description="Dedicated support team available round the clock for urgent matters"
          />
          <ProfessionalFeatureCard 
            icon={<FaEnvelope className="text-red-600" />}
            title="Guaranteed Response"
            description="We respond to all inquiries within 2 business hours"
          />
          <ProfessionalFeatureCard 
            icon={<FaMapMarkerAlt className="text-red-600" />}
            title="Global Coverage"
            description="Support services available worldwide in multiple languages"
          />
        </div>
        

        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Animated Form - Takes 2 columns */}
          <motion.form
            onSubmit={handleSubmit}
            className="md:col-span-2 bg-white rounded-md p-8 shadow-md border border-gray-200"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {submitSuccess && (
              <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md">
                Form submitted successfully!
              </div>
            )}
            
            {errors.submit && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
                {errors.submit}
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-800 font-semibold mb-1">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className={`w-full rounded-md px-3 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-transparent transition`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-800 font-semibold mb-1">
                Designation <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
                placeholder="Your Designation"
                className={`w-full rounded-md px-3 py-2 border ${
                  errors.designation ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-transparent transition`}
              />
              {errors.designation && (
                <p className="mt-1 text-sm text-red-500">{errors.designation}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-800 font-semibold mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  className="w-full rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-transparent transition"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-800 font-semibold mb-1">
                  Industry Vertical
                </label>
                <input
                  type="text"
                  name="industryVertical"
                  value={formData.industryVertical}
                  onChange={handleChange}
                  placeholder="Your Industry Vertical"
                  className="w-full rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-800 font-semibold mb-1">
                  Mobile No. <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  placeholder="Your Mobile Number"
                  className={`w-full rounded-md px-3 py-2 border ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-transparent transition`}
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-800 font-semibold mb-1">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className={`w-full rounded-md px-3 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-transparent transition`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-800 font-semibold mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Your Message"
                className="w-full rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-transparent transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 rounded-md shadow-sm transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </motion.form>

          {/* Compact Corporate Office Information */}
          <motion.div
            className="bg-white rounded-md p-6 shadow-md border border-gray-200 h-fit"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              Corporate Office
            </h2>
            <div className="space-y-6 text-gray-800">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-600 text-xl mt-1 flex-shrink-0" />
                <address className="not-italic text-sm leading-relaxed">
                  VT Plaza, 4th Floor, KPHB Colony,
                  <br />
                  Kukatpally, Road # 1,
                  <br />
                  Hyderabad - 500085, Telangana, India
                </address>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-red-600 text-xl flex-shrink-0" />
                <a href="tel:+919920779995" className="text-sm hover:text-red-600 transition-colors">
                  +91-9920779995
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-red-600 text-xl flex-shrink-0" />
                <a
                  href="mailto:hr@genexcorp.com"
                  className="text-sm hover:text-red-600 transition-colors"
                >
                  hr@genexcorp.com
                </a>
              </div>  
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}