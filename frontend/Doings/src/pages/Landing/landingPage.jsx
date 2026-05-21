import React from "react";
import Nav from "./Nav/Nav";
import HeroSection from "./home/hero-section";
import Features from "./home/features";
import HowItWorks from "./home/HowItWorks";
import Boost from "./home/boost";
import Footer from "./Nav/footer";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Boost />
      <Footer />
    </div>
  );
};

export default LandingPage;
