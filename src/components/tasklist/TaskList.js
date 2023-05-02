import React from 'react'
import Task from '../task/Task';

const TaskList = ({tasks, eventHandlerData, handleDelete, theme, handleUpdate, handleEventUpdate}) => {
return (
  <div className="section">
      <hr className="taskLine"></hr>
      <div className="tasks">
        {tasks?.sort(
          (a, b) => {
            if (a.completed === b.completed) {
              if (a.title > b.title) {
                return 1;
              }
              return -1;
            }
            if (a.completed === true) {
              return 1;
            }
            return -1;
          }
        ).map((task, index) => {
            return (
                <Task 
                  key={index}
                  task={task}
                  eventHandlerData={eventHandlerData}
                  taskIndex={index}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                  theme={theme}
                  handleEventUpdate={handleEventUpdate}
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


