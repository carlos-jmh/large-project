import React from 'react'
import './middle.css'

import Task from '../../components/task/Task'
import List from '../../components/list/List'

// Get array of the households and their tasks
// Map to tasks the name of household and array of each households tasks
const Middle = () => {
  return (
    <div>
      <div className="tasks">
        <Task name="Dorm"/>
        <Task name="Dorm"/>
      </div>

      <div className="lists">
        <h2>Lists</h2>
        <List name="Grocery List"/>
      </div>
    </div>
  )
}

export default Middle