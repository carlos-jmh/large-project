import React from 'react'
import Task from '../task/Task';

const TaskList = ({tasks, handleCheck}) => {
return (
  <div className="section">
      <hr className="taskLine"></hr>
      <div className="tasks">
        {tasks?.map(task => {
            return (
              <div key={task.id}>
                <Task task={task} handleCheck={handleCheck} type = "Task"/>
              </div>
            )
        })}
        <hr></hr>
      </div>
  </div>
  );
};

export default TaskList;


