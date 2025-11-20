import React from "react";

const ResolvedTask = ({ task }) => {
  return (
    <div>
      <div
        key={task.id}
        className="bg-[#E0E7FF] p-4 mb-4 rounded shadow-sm w-97 md:w-full"
      >
        <h2 className="font-semibold text-xl">{task.title}</h2>
      </div>
    </div>
  );
};

export default ResolvedTask;
