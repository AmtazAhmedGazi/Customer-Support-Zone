import React from "react";
import xImg from "../../assets/X.png";
import linkedInImg from "../../assets/LinkedIn.png";
import facebookImg from "../../assets/Facebook.png";
import mailImg from "../../assets/Mail.png";

const Footer = () => {
  return (
    <div className=" bg-black text-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-5 py-20 gap-27">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">CS — Ticket System</h3>
          <p className="text-[#A1A1AA]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl">Company</h3>
          <h4 className="text-[#A1A1AA]">About Us</h4>
          <h4 className="text-[#A1A1AA]">Our Mission</h4>
          <h4 className="text-[#A1A1AA]">Contact Saled</h4>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Services</h3>
          <h4 className="text-[#A1A1AA]">Products & Services</h4>
          <h4 className="text-[#A1A1AA]">Customer Stories</h4>
          <h4 className="text-[#A1A1AA]">Download Apps</h4>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Information</h3>
          <h4 className="text-[#A1A1AA]">Privacy Policy</h4>
          <h4 className="text-[#A1A1AA]">Terms & Conditions</h4>
          <h4 className="text-[#A1A1AA]">Join Us</h4>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Social Links</h3>
          <h4 className="text-[#A1A1AA] flex gap-2">
            <img src={xImg} alt="" />
            @CS — Ticket System
          </h4>
          <h4 className="text-[#A1A1AA] flex gap-2">
            <img src={linkedInImg} alt="" />
            @CS — Ticket System
          </h4>
          <h4 className="text-[#A1A1AA] flex gap-2">
            <img src={facebookImg} alt="" />
            @CS — Ticket System
          </h4>
          <h4 className="text-[#A1A1AA] flex gap-2">
            <img src={mailImg} alt="" />
            support@cst.com
          </h4>
        </div>
      </div>

      <h4 className="max-w-[1440px] mx-auto py-12.5 text-center text-md text-[#FAFAFA] font-light border-t border-[#444444]">
        © 2025 CS — Ticket System. All rights reserved.
      </h4>
    </div>
  );
};

export default Footer;
