import React from 'react'
import TaskList from '../TaskList/TaskList'
import TaskListNumbers from '../others/TaskListNumbers'
import Header from '../others/Header'

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
        <Header/>
        <TaskListNumbers />
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
