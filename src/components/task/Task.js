import React from 'react'
import './task.css'

import Itask from '../../components/itask/Itask';

// Take in props:
// Household name, array of tasks [task1, task2, task3]

// Use map to create Itasks passing in value of task
const Task = (props) => {
  return (
    <div className="task">
        <h2>Household Name</h2>
        <div className="taskList">
            <Itask/>
            <Itask/>
            <Itask/>
        </div>
    </div>
  )
}

export default Task