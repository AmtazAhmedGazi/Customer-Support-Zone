import React from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({ tickets, tasks, setTasks }) => {
  return (
    <div className="grid col-span-3 mb-20">
      <h2 className="text-[#34485A] font-bold text-3xl mb-4">
        Customer Tickets
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {tickets.length === 0 ? (
          <h2 className="text-[#627382]">No tickets available</h2>
        ) : (
          tickets.map((ticket) => (
            <Ticket
              key={ticket.id}
              ticket={ticket}
              tasks={tasks}
              setTasks={setTasks}
            ></Ticket>
          ))
        )}
      </div>
    </div>
  );
};

export default Tickets;
