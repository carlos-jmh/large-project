import React from 'react'
import './task.css'

const Task = () => {
  return (
    <div className="task">
        <h2>Household Name</h2>
        <div className="taskList">
            {/* Could make iTask a component and when we map, pass task info as prop */}
            <div className="iTask">
                <input type="checkbox" id="task1" value="task1"/>
                <label for="task1">Take out garbage</label>
            </div>
            <div className="iTask">
                <input type="checkbox" id="task1" value="task1"/>
                <label for="task1">Buy Cleaning Supplies</label>
            </div>
            <div className="iTask">
                <input type="checkbox" id="task1" value="task1"/>
                <label for="task1">Vacuum</label>
            </div>
        </div>
    </div>
  )
}

export default Task