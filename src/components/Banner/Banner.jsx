import React from "react";
import vectorImg from "../../assets/vector1.png";

const Banner = () => {
  return (
    <div className="flex gap-6 max-w-[1600px] mx-auto justify-center">
      <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] flex max-w-[708px]  rounded-xl">
        <img src={vectorImg} alt="" className="" />
        <div className="text-white flex flex-col justify-center items-center">
          <h2 className=" text-sm">In-Progress</h2>
          <h3 className=" text-3xl">0</h3>
        </div>
        <img src={vectorImg} alt="" className="scale-x-[-1]" />
      </div>
      <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] flex max-w-[708px]  rounded-xl">
        <img src={vectorImg} alt="" className="" />
        <div className="text-white flex flex-col justify-center items-center">
          <h2 className=" text-sm">Resolved</h2>
          <h3 className=" text-3xl">0</h3>
        </div>
        <img src={vectorImg} alt="" className="scale-x-[-1]" />
      </div>
    </div>
  );
};

export default Banner;
