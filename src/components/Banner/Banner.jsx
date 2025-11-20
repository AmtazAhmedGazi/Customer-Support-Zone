import React from "react";
import vectorImg from "../../assets/vector1.png";

const Banner = ({ tasks, resolvedTask }) => {
  return (
    <div className="flex gap-2 sm:flex-col md:flex-row md:flex-1 md:gap-6 md:max-w-[1440px] mx-auto justify-center md:mb-20">
      <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] flex flex-col md:flex-row rounded-xl w-[708px] ml-5 my-5 md:m-0 p-5 md:p-0">
        <img
          src={vectorImg}
          alt=""
          className="w-50 md:w-full  hidden lg:block"
        />
        <div className="text-white flex flex-col justify-center items-center md:w-10/12">
          <h2 className=" text-lg ">In-Progress</h2>
          <h3 className=" text-5xl font-semibold">{tasks.length}</h3>
        </div>
        <img
          src={vectorImg}
          alt=""
          className="w-50 md:w-full scale-x-[-1] hidden lg:block"
        />
      </div>
      <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] flex flex-col md:flex-row rounded-xl w-[708px] mr-5 my-5 md:m-0  p-5 md:p-0">
        <img
          src={vectorImg}
          alt=""
          className="w-50 md:w-full hidden lg:block"
        />
        <div className="text-white flex flex-col justify-center items-center md:w-10/12">
          <h2 className=" text-lg">Resolved</h2>
          <h3 className=" text-5xl font-semibold">{resolvedTask.length}</h3>
        </div>
        <img
          src={vectorImg}
          alt=""
          className="w-50 md:w-full scale-x-[-1] hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Banner;
