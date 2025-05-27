import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Trainings from "./components/Trainings";
import Jobs from "./components/Jobs";
import ProductDevelopment from "./components/Services/ProductDevelopment";
import OurObjective from "./components/OurObjective";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Support from "./components/Support"; 
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/product-development" element={<ProductDevelopment />} />
        <Route path="/our-objective" element={<OurObjective />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/support" element={<Support />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
