import React from "react";

const Task = ({ task, tasks, setTasks, resolvedTask, setResolvedTask }) => {
  const handleResolve = (presentTask) => {
    setTasks(tasks.filter((t) => t.id !== presentTask.id));
    setResolvedTask([...resolvedTask, presentTask]);
  };

  return (
    <div className="bg-base-100 p-4 mb-4 shadow-sm">
      <h2 className="font-semibold text-xl mb-4">{task.title}</h2>
      <button
        onClick={() => handleResolve(task)}
        className="w-full py-3 bg-[#02A53B] text-white rounded"
      >
        Complete
      </button>
    </div>
  );
};

export default Task;
