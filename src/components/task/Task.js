import React from 'react'
import './task.css'

// Take in props:
// Task Name, Event Info

// Use map to create Itasks passing in value of task
const Task = ({task, handleCheck}) => {
  const checkOff = (e) => {
    handleCheck(e.currentTarget.id) 
}

  if(task.date) {
    return (
      <div date={task.date} id={task.id} key={task.id + task.task} name="task" value={task.id} className={task.complete}>
        <input type="checkbox" id={task.id} onChange={checkOff}/>
        {" " + task.task}
      </div>
    ) 
  } else {
    return (
            <div id={task.id} key={task.id + task.task} name="task" value={task.id} className={task.complete}>
              <input type="checkbox" id={task.id} onChange={checkOff}/>
              {" " + task.task}
            </div>
    )
  }
}

export default Task