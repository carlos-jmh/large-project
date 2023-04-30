import React from 'react'
import Task from '../task/Task';

const TaskList = ({tasks, handleCheck, handleDelete, theme, handleUpdate}) => {
return (
  <div className="section">
      <hr className="taskLine"></hr>
      <div className="tasks">
        {tasks?.map((task, index) => {
            return (
                <Task 
                key={index} task={task} taskIndex={index} handleCheck={handleCheck} handleDelete={handleDelete} handleUpdate={handleUpdate} theme={theme}
                type="Task"/>
            )
        })}
        <hr></hr>
      </div>
  </div>
  );
};

export default TaskList;


