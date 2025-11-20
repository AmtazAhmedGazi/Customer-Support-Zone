import React from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({ tickets, tasks, setTasks }) => {
  return (
    <div className="grid md:col-span-3 mb-20 mx-5 md:mx-0">
      <h2 className="text-[#34485A] font-bold text-3xl mb-4 pl-3 md:p-0">
        Customer Tickets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
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
