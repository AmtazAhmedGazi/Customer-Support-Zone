import React from "react";
import calanderImg from "../../assets/calander.jpg";

const Ticket = ({ ticket, tickets, setTickets, tasks, setTasks }) => {
  const handleOpen = () => {
    setTasks([...tasks, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
  };

  return (
    <div className="max-w-[513px] p-4 shadow-sm rounded bg-base-100 mb-4">
      <div className="flex justify-between mb-2">
        <h2 className="font-semibold text-xl">{ticket.title}</h2>
        <button
          onClick={handleOpen}
          className="px-3 py-1 rounded-3xl font-semibold flex items-center text-xl bg-[#B9F8CF] text-[#0B5E06]"
        >
          <div className="p-3 rounded-4xl h-3 w-3 mr-1.5 bg-[#02A53B]"></div>
          Open
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
