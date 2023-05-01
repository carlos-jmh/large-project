import React from 'react'
import Task from '../task/Task';

const TaskList = ({tasks, eventHandlerData, handleCheck, handleDelete, theme, handleUpdate, handler}) => {
  // console.log(eventHandlerData);
return (
  <div className="section">
      <hr className="taskLine"></hr>
      <div className="tasks">
        {tasks?.map((task, index) => {
            return (
                <Task 
                  key={index}
                  task={task}
                  eventHandlerData={eventHandlerData}
                  taskIndex={index}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                  theme={theme}
                  handlerData={handler}
                  type="Task"
                />
            )
        })}
        <hr></hr>
      </div>
  </div>
  );
};

export default TaskList;


