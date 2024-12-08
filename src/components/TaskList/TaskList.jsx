import React from "react";

const TaskList = () => {
  const tasks = [
    {
      heading: "Complete React Project",
      description: "Build a full-stack application with React, Node.js, and MongoDB.",
      priority: "high",
      date: "2024-12-08",
    },
    {
      heading: "Update Resume",
      description: "Make necessary updates to my professional resume.",
      priority: "low",
      date: "2024-12-10",
    },
    {
      heading: "Team Meeting",
      description: "Attend the monthly team sync-up meeting at 3 PM.",
      priority: "low",
      date: "2024-12-09",
    },
    {
      heading: "Fix Bug in Project",
      description: "Resolve critical bug causing crash in the project.",
      priority: "high",
      date: "2024-12-08",
    },
  ];
  return (
    <div className="mt-8 py-4 px-6">
      {tasks && tasks.length > 0 ? (
        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-md relative"
            >
              {/* Date on Top Right */}
              <span className="absolute top-2 right-4 text-sm text-gray-400">
                {task.date}
              </span>
              
              {/* Task Heading */}
              <h3 className="text-xl font-semibold mb-2">{task.heading}</h3>
              
              {/* Task Description */}
              <p className="text-sm text-gray-300 mb-4">{task.description}</p>

              {/* Priority */}
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-lg ${
                  task.priority === "high" ? "bg-red-500 text-white" : "bg-yellow-500 text-black"
                }`}
              >
                {task.priority === "high" ? "High Priority" : "Low Priority"}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-400">No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;
