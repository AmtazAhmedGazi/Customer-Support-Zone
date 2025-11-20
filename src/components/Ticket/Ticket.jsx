import React, { useState } from "react";
import calanderImg from "../../assets/calander.jpg";
import { toast } from "react-toastify";

const Ticket = ({ ticket, tasks, setTasks }) => {
  const [inProgress, setInProgress] = useState(false);

  const handleOpen = () => {
    setInProgress(true);
    const newTask = [...tasks, ticket];
    setTasks(newTask);
    toast("Ticket: " + ticket.title + " Opened");
  };

  return (
    <div className="max-w-[513px] p-4 shadow-sm rounded bg-base-100 mb-4">
      <div className="flex justify-between mb-2">
        <h2 className="font-semibold md:text-xl">{ticket.title}</h2>
        <button
          disabled={inProgress}
          onClick={handleOpen}
          className={`px-2 md:px-3 py-1 rounded-3xl font-semibold flex items-center md:text-xl ${
            inProgress
              ? "bg-[#F8F3B9] text-[#9C7700]"
              : "bg-[#B9F8CF] text-[#0B5E06]"
          }`}
        >
          <div
            className={`p-2 md:p-2.5 rounded-4xl md:h-3 md:w-3 mr-1.5 ${
              inProgress ? "bg-[#FEBB0C]" : "bg-[#02A53B]"
            }`}
          ></div>
          {inProgress ? "In-Progress" : "Open"}
        </button>
      </div>
      <p className="text-[#627382] mb-4 text-sm md:text-md">
        {ticket.description}
      </p>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <h3 className="text-[#627382] text-sm md:text-md">#00{ticket.id}</h3>
          <h3
            className={`text-sm md:text-md ${
              ticket.priority === "Low"
                ? "text-[#02A53B]"
                : ticket.priority === "Medium"
                ? "text-[#FEBB0C]"
                : "text-[#F83044]"
            }`}
          >
            {ticket.priority.toUpperCase()} PRIORITY
          </h3>
        </div>
        <div className="flex">
          <h3 className="pr-4 text-[#627382] text-sm md:text-md  md:w-full">
            {ticket.customer}
          </h3>
          <img
            className="pr-2 w-5 h-5 md:w-10 md:h-full"
            src={calanderImg}
            alt=""
          />
          <h3 className="text-[#627382] text-sm md:text-md">
            {ticket.createdAt}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
