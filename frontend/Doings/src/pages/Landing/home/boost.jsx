import React from "react";
import { Link } from "react-router-dom";

const Boost = () => {
  return (
    <div className="bg-[#1368ec] min-h-1/2 py-24 px-6 md:px-8 lg:px-12  ">
      <div className="flex flex-col justify-center items-center text-white text-center">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold max-w-lg ">
            Ready to boost your team's productivity?
          </h2>
          <p>
            Join thousands of teams that use Doings to get more done, together.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to={"/signup"}>
              <button className="bg-gray-100 p-2 text-black rounded-lg hover:bg-gray-200 hover:shadow-md transition duration-300 cursor-pointer">
                Get started for free
              </button>
            </Link>
            <Link to={"/login"}>
              <button className="border border-white p-2 cursor-pointer rounded-lg px-6 text-white hover:bg-white hover:text-black transition duration-300">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boost;
