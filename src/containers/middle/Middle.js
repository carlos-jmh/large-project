import React, { useState } from 'react'
import './middle.css'

import Task from '../../components/task/Task'
import List from '../../components/list/List'
import Form from '../../components/form/Form'
import Add from '../../components/add/Add'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Get array of the households and their tasks
// Map to tasks the name of household and array of each households tasks
const Middle = () => {
  
  const [selectedDate, setSelecteddDate] = useState(new Date())
  return (
    <div className="midContent">
      <div className="calendar">
        <label>Selected Date</label>
        <DatePicker
          wrapperclassName="datePicker" 
          selected={selectedDate} 
          onChange={date => setSelecteddDate(date)}
          minDate={new Date()}
        />
      </div>
      <div className="section">
        <h5 className="sectionHeader">Tasks</h5>
        <div className="tasks">
          <Task/>
          <Task/>
          <Add/>
        </div>
      </div>
      <div className="section">
        <h5 className="sectionHeader">Lists</h5>
        <div className="lists">
          <List name="Grocery List"/>
        </div>
      </div>
      <Form/>
    </div>
  );
}

export default Middle