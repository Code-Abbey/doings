import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import AuthImage from "../../../assets/images/auth-img.png";

const HeroSection = () => {
  const requires = [
    "No credit card required",
    "Free plan available",
    "Cancel anytime",
  ];
  return (
    <div className="bg-gray-100 px-6 md:px-8 lg:px-12 h-screen py-24 md:py-0 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Text Section */}
      <div className="flex-1 space-y-8 max-w-2xl">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            Get more done with <span className="text-[#1368ec]">Doings!</span>
          </h2>
          <p className="max-w-xl md:text-lg">
            The modern task management platform that helps teams organize,
            track, and complete work efficiently.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="bg-[#1368ec] px-6 py-2 rounded-md text-white transition-all duration-300 hover:bg-[#0e50bb] hover:shadow-lg cursor-pointer">
            free trial
          </button>
          <a href="#features">
            <button className="px-6 py-2 shadow rounded-md transition-all duration-300 hover:bg-gray-100 hover:shadow-md cursor-pointer">
              See features
            </button>
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {requires.map((req, index) => (
            <div key={index} className="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline size={18} />
              <p className="text-gray-500 md:text-lg">{req}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={AuthImage}
          alt="Auth"
          className="w-64 h-64 sm:w-96 sm:h-96 lg:w-[38rem] lg:h-[34rem] object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
