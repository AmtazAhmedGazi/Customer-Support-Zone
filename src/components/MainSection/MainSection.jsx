import React from "react";
import Tickets from "../Tickets/Tickets";
import Task from "../Task/Task";

const MainSection = ({
  tickets,
  setTickets,
  tasks,
  setTasks,
  resolvedTask,
  setResolvedTask,
}) => {
  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-4 gap-8">
      <Tickets
        tickets={tickets}
        setTickets={setTickets}
        tasks={tasks}
        setTasks={setTasks}
      />

      <div>
        <div className="mb-10">
          <h2 className="text-[#34485A] font-bold text-3xl mb-4">
            Task Status
          </h2>
          <div>
            {tasks.length === 0 ? (
              <h2 className="text-[#627382]">
                Select a ticket to add to Task Status
              </h2>
            ) : (
              tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  tasks={tasks}
                  setTasks={setTasks}
                  resolvedTask={resolvedTask}
                  setResolvedTask={setResolvedTask}
                  tickets={tickets}
                  setTickets={setTickets}
                />
              ))
            )}
          </div>
        </div>

        <div>
          <h2 className="text-[#34485A] font-bold text-3xl mb-4">
            Resolved Task
          </h2>
          <div>
            {resolvedTask.length === 0 ? (
              <h2 className="text-[#627382]">No resolved tasks yet</h2>
            ) : (
              resolvedTask.map((task) => (
                <div
                  key={task.id}
                  className="bg-green-100 p-4 mb-4 rounded shadow-sm"
                >
                  <h2 className="font-semibold text-xl">{task.title}</h2>
                  <p className="text-[#627382]">✔ Completed</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
