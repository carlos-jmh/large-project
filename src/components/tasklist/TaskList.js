import React from 'react'
import Task from '../task/Task';
import * as Icon from 'react-bootstrap-icons';


const TaskList = ({tasks}) => {
return (
  <div className="section">
      <hr className="taskLine"></hr>
      <div className="tasks">
        {tasks?.map(task => {
            return (
              <div>
                <Task task={task} />
              </div>
            )
        })}
        <hr></hr>
      </div>
  </div>
  );
};

export default TaskList;


