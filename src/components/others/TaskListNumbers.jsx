import React from "react";

const TaskListNumber = () => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 py-4 px-6">
      <div className="bg-blue-400 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-md text-blue-900 font-semibold">New Tasks</h3>
        <p className="text-3xl  font-bold">x{/*{taskStats.newTasks}*/}</p>
      </div>
      <div className="bg-green-400 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-md text-green-900 font-semibold">Completed Tasks</h3>
        <p className="text-3xl  font-bold">x{/*{taskStats.newTasks}*/}</p>
      </div>
      <div className="bg-red-400 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-md text-red-900 font-semibold">Failed Tasks</h3>
        <p className="text-3xl font-bold">x{/*{taskStats.newTasks}*/}</p>
      </div>
      <div className="bg-yellow-400 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-md text-yellow-900 font-semibold">Accepted Tasks</h3>
        <p className="text-3xl  font-bold">x{/*{taskStats.newTasks}*/}</p>
      </div>
    </div>
  );
};

export default TaskListNumber;
