import React from 'react'
import './task.css'
import * as Icon from 'react-bootstrap-icons'

const Task = ({task, handleCheck, type}) => {
  const checkOff = (e) => {
    handleCheck(e.currentTarget.id) 
}
  if(type === "Event") {
    return (
        <div className='eventItem' date={task.date} id={task.id} name="task" value={task.id}>
          <div className="info">
            <input className="check" type="checkbox" id={task.id} onChange={checkOff} checked = {task.complete ? true : false}/>
            <label className={task.complete ? "label strike" : "label"}>{" " + task.task}{" " + task.date}{" " + task.description}</label>
          </div>
                   
          <div className="icons">
            <Icon.Trash size="24px" className='delete'/>
            <Icon.Pencil size="24px" className='edit'/>
            <Icon.InfoCircle size="24px"className='info'/>
          </div>
        </div>
    ) 
  } else {
    return (
            <div id={task.id} name="task" value={task.id} className='taskItem'>
              <div className="info">
                <input className="check" type="checkbox" id={task.id} onChange={checkOff} checked = {task.complete ? true : false}/>
                <label className={task.complete ? "label strike" : "label"}>{" " + task.task}{" " + task.date}{" " + task.list}</label>
              </div>
              
              <div className="icons">
                <Icon.Trash size="24px" className='delete'/>
                <Icon.Pencil size="24px" className='edit'/>
                <Icon.InfoCircle size="24px"className='info'/>
            </div>
            </div>
    )
  }
}

export default Task
