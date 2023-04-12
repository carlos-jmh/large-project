import React from 'react'
import Task from '../task/Task';
import * as Icon from 'react-bootstrap-icons';


const TaskList = ({tasks, handleCheck}) => {
return (
  <div className="section">
      <hr className="taskLine"></hr>
      <div className="tasks">
        {tasks?.map(task => {
            return (
              <div>
                <Task task={task} handleCheck={handleCheck} />
              </div>
            )
        })}
        <hr></hr>
      </div>
  </div>
  );
};

export default TaskList;


