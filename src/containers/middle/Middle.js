import React, { useState } from 'react'
import './middle.css'

import Task from '../../components/tasklist/TaskList'
import List from '../../components/list/List'
import Form from '../../components/form/Form'
import Add from '../../components/add/Add'
import Cal from '../../components/cal/Cal';
import data from "./data.json";
import taskData from "./taskData.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TaskList from '../../components/tasklist/TaskList'

// Get array of the households and their tasks
// Map to tasks the name of household and array of each households tasks
const Middle = () => {

  const [selectedDate, setSelecteddDate] = useState(new Date())
  const [toDoList, setToDoList] = useState(data);
  const [tasks, setTasks] = useState(taskData);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleCheck = (id) => {
    let mapped = tasks.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setTasks(mapped);
  }
  
  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  const addTask2 = (userInput ) => {
    let copy = [...tasks];
    copy = [...copy, { id: tasks.length + 1, task: userInput, complete: false }];
    setTasks(copy);
  }


    return (
      <>
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
                  <TaskList tasks = {tasks} handleCheck={handleCheck}/>
                  <Add addTask={addTask2} useState={false}/>
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
                <List name="Grocery List" toDoList = {toDoList} handleToggle={handleToggle}/>
                <Add addTask={addTask} useState={false}/>
              </div>
            </div>
          </div>
          <Form/>
        </div>
        <div className="inbox">
          <div className="section1">
              <h5 className="sectionHeader">Tasks</h5>
              <div className="task">
              <TaskList tasks = {tasks} handleCheck={handleCheck}/>
              <Add addTask={addTask2} useState={false}/>
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
                <List toDoList = {toDoList} handleToggle={handleToggle}/>
                <Add addTask={addTask} useState={false}/>
              </div>
            </div>
        </div>
      </>     
    );  
} 

export default Middle