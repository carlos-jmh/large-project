import React, {useState} from 'react'
import Task from '../task/Task';
import Add from '../add/Add';
import * as Icon from 'react-bootstrap-icons';
import './events.css'


const Events = ({events, handleCheck}) => {
  return (
    <div className="section">
        <hr className="taskLine"></hr>
        <div className="tasks">
          {events?.map(event => {
              return (
                <div>
                  <Task task={event} handleCheck={handleCheck} />
                </div>
              )
          })}
          <hr></hr>
        </div>
    </div>
    );
  };

export default Events;


