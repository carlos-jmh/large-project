import React from 'react'
import './middle.css'

import Task from '../../components/task/Task'
//import List from '../../components/list/List'
import List from '../../components/list/List'

// Get array of the households and their tasks
// Map to tasks the name of household and array of each households tasks
const Middle = () => {
  return (
    <div className="midContent">
      <div className="section">
        <h5 className="sectionHeader">Tasks</h5>
        <div className="tasks">
          <Task/>
          <Task/>
        </div>
      </div>
      <div className="section">
        <h5 className="sectionHeader">Lists</h5>
        <div className="lists">
          <List name="Grocery List"/>
        </div>
      </div>
    </div>
  );
}

export default Middle