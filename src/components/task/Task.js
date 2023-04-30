import React, {useState, useContext} from 'react'
import './task.css'
import * as Icon from 'react-bootstrap-icons'
import ItemInfo from '../ItemInfo/ItemInfo'
import { render } from '@testing-library/react'
import { deleteExistingTask, updateExistingTask, editEventHandler, generateEventHandler } from '../../api/mutating'
import { processTasks } from '../../containers/middle/Middle'
import { HouseHoldContext } from '../../pages/dashboard/HouseHoldContext'

const Task = ({task, taskIndex, handleCheck, type, handleDelete, theme, handleUpdate}) => {

  const [show, setShow] = useState(false);
  const [SDate, setSDate] = useState(task.sDate);
  const [EDate, setEDate] = useState(task.eDate);
  const [select, setSelect] = useState("ONCE");
  const [name, setName] = useState(task.title);
  const { houseHold } = useContext(HouseHoldContext);


  // Update database as well.
  const checkOff = () => {
    handleCheck(taskIndex, !task.complete); 
  }

  const deleteT = () => {
    handleDelete(task.id, taskIndex);
    deleteExistingTask(task.id);
    setShow(false);
  }

  const handleSelect = (e) => {
    let selectN = e.target.value
    setSelect(selectN)
  }

  const handleEditName = (e) => {
    let editName = e.target.value
    setName(editName);
  }

  const handleEditSDate = (e) => {
    let editsDate = e.target.value
    setSDate(new Date(editsDate));
  }

  const handleEditEDate = (e) => {
    let editeDate = e.target.value
    setEDate(new Date(editeDate));
  }

  const onClose = async() => {
    setShow(false);

    let eventHandlerID;
    if(SDate != null) {
      if(task.eventHandlerId == "" || !task.eventHandlerId) {
          eventHandlerID = await generateEventHandler(      
          houseHold.calendarId,
          task.id,
          select,
          SDate,
          EDate,
          "TASK",
          task.title)
      } else {
          eventHandlerID = await editEventHandler(
          task.eventHandlerId,
          task.eventHandler.calendarId,
          task.id,
          select,
          SDate,
          EDate,
          "TASK"
          )
      }
    }

    task.eventHandlerId = eventHandlerID
    task.title = name;
    let updatedTask = await processTasks([task])
    await updateExistingTask(updatedTask[0]);
    handleUpdate(updatedTask[0]);
  } 

  if(type === "Event") {
    return (
      <div className='eventItem' date={task.date} id={task.id} name="task" value={task.id}>
        <div className="info">
          <input className="check" type="checkbox" id={task.id} onChange={checkOff} checked = {task.complete ? true : false}/>
          <label className={task.complete ? "label strike" : "label"}>{" " + task.task}{" " + task.date}{" " + task.description}</label>
        </div>
                  
        <div className="icons">
        <Icon.ThreeDots size="24px" className='edit'onClick={() => setShow(true)}/>
        <ItemInfo delete={deleteT} title={task.title} onClose={onClose} show={show}>
          <div className="popup">
            {/* Start and End Date Required */}
            <div className="selections">
              <div className="childSelect">
                <label htmlFor="startDate">Start Date</label>
                <input onChange={handleEditSDate} defaultValue={task.sDate} type="date" className="form-control" id="startDate"/>
              </div>
              
              <div className="childSelect">
                <label htmlFor="endDate">End Date</label>
                <input onChange={handleEditEDate} defaultValue={task.eDate} type="date" className="form-control" id="endDate"/>
              </div>
            </div>
            
            {/* If List or Item Selected, option for complete source ? */}
            <div className="selections">
              {/* Frequency Type Options: Once, Daily, Weekly, Monthly, Yearly */}
              <select defaultValue="ONCE" id="taskType" className="form-control childSelect" onChange={handleSelect}>
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
          <ItemInfo delete={deleteT} title="Edit Task" onClose={onClose} show={show}>
            <div className="popup">
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
                <select defaultValue="ONCE" id="taskType" className="form-control childSelect" onChange={handleSelect}>
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
