import React from 'react'
import Task from '../task/Task';
import './events.css'


const Events = ({events, handleCheck, handleDelete, theme, handleUpdate}) => {
  
  // Filter out events of taskId !== null, meaning they are tasks.
  events = events.filter(element => element.taskId === null);
  console.log(events);

  return (
    <div className="section">
        <hr className="taskLine"></hr>
        <div className="tasks">
          {events?.map((event, index) => {
              return (
                <div key={index}>
                  <Task task={event} taskIndex={index} handleCheck={handleCheck} handleDelete={handleDelete} handleUpdate={handleUpdate} type="Event" />
                </div>
              )
          })}
          <hr></hr>
        </div>
    </div>
    );
  };

export default Events;



