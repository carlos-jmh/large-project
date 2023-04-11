import React from 'react'
import './task.css'

// Take in props:
// Task Name, Event Info

// Use map to create Itasks passing in value of task
const Task = ({task}) => {
  return (
          <div id={task.id} key={task.id + task.task} name="task" value={task.id} className={task.complete}>
            <input type="checkbox" id={task.id}/>
            {" " + task.task}
          </div>
  )
}

export default Task