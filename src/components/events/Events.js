import React from 'react'
import Task from '../task/Task';
import './events.css'


const Events = ({events, handleCheck, handleDelete}) => {
  return (
    <div className="section">
        <hr className="taskLine"></hr>
        <div className="tasks">
          {events?.map((event, index) => {
              return (
                <div key={index}>
                  <Task task={event} taskIndex={index} handleCheck={handleCheck} handleDelete={handleDelete} type="Event" />
                </div>
              )
          })}
          <hr></hr>
        </div>
    </div>
    );
  };

export default Events;



