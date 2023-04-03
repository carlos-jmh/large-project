import React from 'react'
import './task.css'

// Take in props:
// Task Name, Event Info

// Use map to create Itasks passing in value of task
const Task = (props) => {
  return (
    <div className="task">
        <div className="iTask">
          {/* onClick change database data to complete and refresh*/}
          <input type="checkbox" id="task1" value="task1"/>
          <div class="taskInfo">
            <label htmlFor="task1">Place task name here</label>
            <p>Place event date, blank if no event</p>
          </div>
        </div>
        <hr></hr>
    </div>
  )
}

export default Task