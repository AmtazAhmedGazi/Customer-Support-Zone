import React, { useState } from "react";
import calanderImg from "../../assets/calander.jpg";
import { toast } from "react-toastify";

const Ticket = ({ ticket, tasks, setTasks }) => {
  const [inProgress, setInProgress] = useState(false);

  const handleOpen = () => {
    if (!inProgress) {
      setInProgress(true);

      if (!tasks.some((t) => t.id === ticket.id)) {
        setTasks([...tasks, ticket]);
      }
    }
    toast("Ticket: " + ticket.title + " Opened");
  };

  return (
    <div className="max-w-[513px] p-4 shadow-sm rounded bg-base-100 mb-4">
      <div className="flex justify-between mb-2">
        <h2 className="font-semibold text-xl">{ticket.title}</h2>
        <button
          onClick={handleOpen}
          className={`px-3 py-1 rounded-3xl font-semibold flex items-center text-xl ${
            inProgress
              ? "bg-[#F8F3B9] text-[#9C7700]"
              : "bg-[#B9F8CF] text-[#0B5E06]"
          }`}
        >
          <div
            className={`p-3 rounded-4xl h-3 w-3 mr-1.5 ${
              inProgress ? "bg-[#FEBB0C]" : "bg-[#02A53B]"
            }`}
          ></div>
          {inProgress ? "In-Progress" : "Open"}
        </button>
      </div>
      <p className="text-[#627382] mb-4">{ticket.description}</p>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <h3 className="text-[#627382]">#100{ticket.id}</h3>
          <h3
            className={
              ticket.priority === "Low"
                ? "text-green-300"
                : ticket.priority === "Medium"
                ? "text-yellow-300"
                : "text-red-500"
            }
          >
            {ticket.priority.toUpperCase()} PRIORITY
          </h3>
        </div>
        <div className="flex">
          <h3 className="pr-4 text-[#627382]">{ticket.customer}</h3>
          <img className="pr-2" src={calanderImg} alt="" />
          <h3 className="text-[#627382]">{ticket.createdAt}</h3>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
