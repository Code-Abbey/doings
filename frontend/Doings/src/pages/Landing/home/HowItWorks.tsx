import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { CgLock } from "react-icons/cg";
import { TbSend } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";

const HowItWorks = () => {
  const works = [
    {
      icon: <CgLock size={36} color="#1368ec" />,
      title: "Team Collaboration",
      subtitle:
        "Work together seamlessly with your team in shared workspaces with real-time updates.",
    },
    {
      icon: <LuUsers size={36} color="#1368ec" />,
      title: "Task Management",
      subtitle:
        "Organize tasks with priorities, due dates, comments, and track progress visually.",
    },
    {
      icon: <TbSend size={36} color="#1368ec" />,
      title: "Progress Tracking",
      subtitle:
        "Visualize project progress with beautiful charts and get insights into team productivity.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center space-y-14 min-h-screen bg-gray-100 px-6 md:px-8 lg:px-12  text-center py-14">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="bg-gray-200 px-4 rounded-md text-center w-32 text-nowrap p-1">
          How it works
        </p>

        <h2 className="text-2xl md:text-4xl font-bold">
          Simple process, powerful results
        </h2>
        <p className="md:text-lg">
          Get started in minutes and see improved team productivity
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {works.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center gap-y-2"
          >
            <div className="bg-[#1368ec]/10 p-3 rounded-full">
              {feature.icon}
            </div>
            <p className="font-semibold text-xl">{feature.title}</p>
            <p className="max-w-[20rem] text-lg">{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
