import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 lg:px-12 py-4 shadow-lg backdrop-blur bg-white/70 transition-all duration-300">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="flex flex-nowrap items-center justify-center gap-2"
        >
          <h1 className="text-xl md:text-2xl font-semibold text-center ">
            Doings!
          </h1>
        </Link>

        <div className="flex gap-6 items-center">
          <Link to={"/login"}>
            <button className="cursor-pointer text-gray-700 hover:text-[#1368ec] transition duration-300">
              Log in
            </button>
          </Link>
          <Link to={"signup"}>
            <button className="bg-[#1368ec] p-2 rounded-md text-white cursor-pointer hover:bg-[#0e50bb] hover:shadow-md transition duration-300">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
