import React from "react";

const AllTask = () => {
    const tasks = [
        {
          heading: "Complete React Project",
          description: "Build a full-stack application with React.",
          priority: "high",
          date: "2024-12-08",
          assignTo: "John Doe",
        },
        {
          heading: "Update Resume",
          description: "Make necessary updates to my resume.",
          priority: "low",
          date: "2024-12-10",
          assignTo: "Jane Smith",
        },
      ];
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-center mb-6">All Assigned Tasks</h2>
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

              {/* Task Assign */}
              <p className="text-sm text-gray-400">Assigned to: {task.assignTo}</p>

              {/* Priority Badge */}
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

export default AllTask;
