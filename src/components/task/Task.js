import React from 'react'
import './task.css'

// Take in props:
// Household name, array of tasks [task1, task2, task3]

// Use map to create Itasks passing in value of task
const Task = (props) => {
  return (
    <div className="task">
        <div className="iTask">
          <input type="checkbox" id="task1" value="task1"/>
          <label htmlFor="task1">Place prop here</label>
        </div>
    </div>
  )
}

export default Task