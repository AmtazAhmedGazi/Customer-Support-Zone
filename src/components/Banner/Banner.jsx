import React from "react";
import vectorImg from "../../assets/vector1.png";

const Banner = ({ tasks, resolvedTask }) => {
  return (
    <div className="flex flex-1 gap-6 max-w-[1440px] mx-auto justify-center mb-20">
      <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] flex rounded-xl w-[708px]">
        <img src={vectorImg} alt="" className="" />
        <div className="text-white flex flex-col justify-center items-center">
          <h2 className=" text-lg">In-Progress</h2>
          <h3 className=" text-5xl font-semibold">{tasks.length}</h3>
        </div>
        <img src={vectorImg} alt="" className="scale-x-[-1]" />
      </div>
      <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] flex  rounded-xl w-[708px]">
        <img src={vectorImg} alt="" className="" />
        <div className="text-white flex flex-col justify-center items-center">
          <h2 className=" text-lg">Resolved</h2>
          <h3 className=" text-5xl font-semibold">{resolvedTask.length}</h3>
        </div>
        <img src={vectorImg} alt="" className="scale-x-[-1]" />
      </div>
    </div>
  );
};

export default Banner;
