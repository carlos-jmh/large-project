import React, { useState } from 'react'
import './middle.css'

import Task from '../../components/task/Task'
import List from '../../components/list/List'
import Form from '../../components/form/Form'
import Add from '../../components/add/Add'
import Cal from '../../components/cal/Cal';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Get array of the households and their tasks
// Map to tasks the name of household and array of each households tasks
const Middle = () => {
  let inbox = false;

  const [selectedDate, setSelecteddDate] = useState(new Date())

  if (!inbox)
  {
    return (
      <div className="midContent">
        <div className="calendar">
          {/* <label>Selected Date</label>
          <DatePicker
            wrapperclassName="datePicker" 
            selected={selectedDate} 
            onChange={date => setSelecteddDate(date)}
            minDate={new Date()}
          /> */}
          <Cal/>
        </div>
        <div class="display">
          <div className="taskevent">
          <div className="section1">
              <h5 className="sectionHeader">Tasks</h5>
              <div className="task">
                <Task/>
                <Task/>
                <Add/>
              </div>
            </div>
            <div className="section1">
              <h5 className="sectionHeader">Events</h5>
              <div className="event">
                <Task/>
                <Task/>
                <Add/>
              </div>
            </div>
          </div>
          <div className="section2">
            <h5 className="sectionHeader">Lists</h5>
            <div className="list">
              <List name="Grocery List"/>
            </div>
          </div>
        </div>
        <Form/>
      </div>
    );
  }
  else {
    return (
      <div className="inbox">
        <div className="section1">
            <h5 className="sectionHeader">Tasks</h5>
            <div className="task">
              <Task/>
              <Task/>
              <Add/>
            </div>
          </div>
          <div className="section1">
            <h5 className="sectionHeader">Events</h5>
            <div className="event">
              <Task/>
              <Task/>
              <Add/>
            </div>
          </div>
          <div className="section1">
            <h5 className="sectionHeader">Lists</h5>
            <div className="list">
              <List name="Grocery List"/>
            </div>
          </div>
      </div>
    )
  }
  
}

export default Middle