import React from "react";
import plusImg from "../../assets/plus.png";

const Navbar = () => {
  return (
    <div className="max-w-[1600px] mx-auto navbar bg-base-100 shadow-sm px-20 mb-20">
      <div className="navbar-start">
        <a className="text-xl font-bold">CS — Ticket System</a>
      </div>

      <div className="navbar-end flex gap-8">
        <div className="flex gap-8">
          <p>Home</p>
          <p>FAQ</p>
          <p>Changelog</p>
          <p>Blog</p>
          <p>Download</p>
          <p>Contact</p>
        </div>
        <div className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white flex justify-center items-center">
          <img src={plusImg} alt="" className="pr-2.5" />
          <span>New Ticket</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
