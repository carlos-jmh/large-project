import React, {useState} from 'react'
import './task.css'
import * as Icon from 'react-bootstrap-icons'
import ItemInfo from '../ItemInfo/ItemInfo'
import { render } from '@testing-library/react'

const Task = ({task, taskIndex, handleCheck, type, handleDelete}) => {

  const [show, setShow] = useState(false);

  // Update database as well.
  const checkOff = () => {
    handleCheck(taskIndex, !task.complete); 
  }

  const deleteT = () => {
    handleDelete(task.id, taskIndex);
    setShow(false);
  }

  const handleEditName = (e) => {
    let editName = e.target.value
    task.title = editName;
  }

  const handleEditSDate = (e) => {
    let editsDate = e.target.value
    task.sDate = editsDate;
  }

  const handleEditEDate = (e) => {
    let editeDate = e.target.value
    task.eDate = editeDate;
  }

  if(type === "Event") {
    return (
        <div className='eventItem' date={task.date} id={task.id} name="task" value={task.id}>
          <div className="info">
            <input className="check" type="checkbox" id={task.id} onChange={checkOff} checked = {task.complete ? true : false}/>
            <label className={task.complete ? "label strike" : "label"}>{" " + task.task}{" " + task.date}{" " + task.description}</label>
          </div>
                   
          <div className="icons">
            <Icon.ThreeDots size="24px" className='edit' onClick={() => setShow(true)}/>
          </div>
        </div>
    ) 
  } else {
    return (
            <div id={task.id} name="task" value={task.id} className='taskItem'>
              <div className="info">
                <input className="check" type="checkbox" id={task.id} value = "" onChange={checkOff} checked = {task.complete ? true : false}/>
                {/* Place the date and any links here as well */}
                <label className={task.complete ? "label strike" : "label"}>{" " + task.title}</label>
              </div>
              
              <div className="icons">
                <Icon.ThreeDots size="24px" className='edit'onClick={() => setShow(true)}/>
                <ItemInfo delete={deleteT} title="Edit Task" onClose={() => setShow(false)} show={show}>
                  <div className="addingTask">
                    <input required onChange={handleEditName} type="text" className="form-control" id="name" defaultValue={task.title}/  >
                    {/* Start and End Date Required */}
                    <div className="selections">
                      <div className="childSelect">
                        <label htmlFor="startDate">Start Date</label>
                        <input onChange={handleEditSDate} value={task.sDate} type="date" className="form-control" id="startDate"/>
                      </div>
                      
                      <div className="childSelect">
                        <label htmlFor="endDate">End Date</label>
                        <input onChange={handleEditEDate} value={task.eDate} type="date" className="form-control" id="endDate"/>
                      </div>
                    </div>
                    
                    {/* If List or Item Selected, option for complete source ? */}
                    <div className="selections">
                      {/* Frequency Type Options: Once, Daily, Weekly, Monthly, Yearly */}
                      <select value={task.recurrence} id="taskType" className="form-control childSelect">
                        <option value="ONCE">Once</option>
                        <option value="DAILY">Daily</option>
                        <option value="WEEKLY">Weekly</option>
                        <option value="MONTHLY">Monthly</option>
                        <option value="YEARLY">Yearly</option>
                      </select>            
                    </div>
                  </div>
                </ItemInfo>
            </div>
            </div>
    )
  }
}

export default Task
