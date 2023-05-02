import React, {useState, useContext, useRef} from 'react'
import './task.css'
import * as Icon from 'react-bootstrap-icons'
import ItemInfo from '../ItemInfo/ItemInfo'
import { render } from '@testing-library/react'
import { deleteExistingTask, updateExistingTask, editEventHandler, generateEventHandler, removeEventHandler } from '../../api/mutating'
import { processTasks } from '../../containers/middle/Middle'
import { HouseHoldContext } from '../../pages/dashboard/HouseHoldContext'
import { fetchEventHandlerById, getExistingEvent } from '../../api/fetching'
import { useEffect } from 'react'

const Task = ({task, eventHandlerData, taskIndex, handleCheck, type, handleDelete, theme, handleUpdate, handleEventUpdate}) => {

  const [show, setShow] = useState(false);
  const [SDate, setSDate] = useState(task.sourceDate);
  const [EDate, setEDate] = useState(task.endDate);
  const [select, setSelect] = useState("ONCE");
  const [name, setName] = useState(task.title);
  const [date, setDate] = useState(false);
  const [eventTitle, setTitle] = useState('');
  const { houseHold } = useContext(HouseHoldContext);
  const title = useRef("");
  let startTime = "";
  let endTime = "";

  // Update database as well.
  const checkOff = () => {
    handleCheck(taskIndex, !task.complete); 
  }

  const deleteT = async() => {
    setShow(false);
    handleDelete(task.id, taskIndex);
    await deleteExistingTask(task.id);
    if(task.eventHandlerId !== "" && task.eventHandlerId != null) {
      await removeEventHandler(task.eventHandlerId)
    }
  }

  const deleteEventHandler = async() => {
    setShow(false);
    handleDelete(task.id, taskIndex);
    await removeEventHandler(task.id);
    handleEventUpdate();
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

  const getEventHandler = (eventHandlerData) => {
    const eventHandler = eventHandlerData.find(element => element.id === task.eventHandlerId);
    if (eventHandler !== undefined)
      setTitle(eventHandler.title);
  }

  const toISOStringWithTimezone = date => {
    date = new Date(date)
    const tzOffset = -date.getTimezoneOffset();
    const diff = tzOffset >= 0 ? '+' : '-';
    const pad = n => `${Math.floor(Math.abs(n))}`.padStart(2, '0');
    return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds()) +
      diff + pad(tzOffset / 60) +
      ':' + pad(tzOffset % 60);
  };

  const onItemInfoSubmit = async() => {
    setShow(false);

    let eventHandlerID;
    if(SDate != null) {
      if(task.eventHandlerId === "" || !task.eventHandlerId) {
          eventHandlerID = await generateEventHandler(      
            houseHold.calendarId,
            task.id,
            select,
            SDate,
            EDate,
            "TASK",
            task.title
          );
      } else {
          eventHandlerID = await editEventHandler(
            task.eventHandlerId,
            task.eventHandler.calendarId,
            task.id,
            select,
            SDate,
            EDate,
            "TASK"
          );
      }
    }

    task.eventHandlerId = eventHandlerID
    task.title = name;
    let updatedTask = await processTasks([task])
    await updateExistingTask(updatedTask[0]);
    handleUpdate(updatedTask[0]);
  } 

  const updateEventHandler = async() => {
    console.log("UPDATING EVENT HANDLER")
    setShow(false);
    console.log("necessary info", SDate, EDate);
    
    // if data is same, don't update.
    let update = await editEventHandler(
      task.id, 
      task.calendarId,
      task.taskId,
      select,
      SDate,
      EDate,
      "EVENT",
      title.current.value
    );

    let updated = await fetchEventHandlerById(update);

    handleEventUpdate();
  }

  function updateTime(startTime)
  {
    //console.log(startTime)
    let time1 = startTime.split(":");

    // fetch
    let hours1 = Number(time1[0]);
    let minutes1 = Number(time1[1]);
    let seconds1 = Number(time1[2]);

    // calculate
    let timeValue1;

    if (hours1 > 0 && hours1 <= 12) {
      timeValue1= "" + hours1;
    } else if (hours1 > 12) {
      timeValue1= "" + (hours1 - 12);
    } else if (hours1 === 0) {
      timeValue1= "12";
    }
    
    timeValue1 += (minutes1 < 10) ? ":0" + minutes1 : ":" + minutes1;  // get minutes
    timeValue1 += (seconds1 < 10) ? ":0" + seconds1 : ":" + seconds1;  // get seconds
    timeValue1 += (hours1 >= 12) ? " P.M." : " A.M.";  // get AM/PM
    return timeValue1;
  }

  useEffect(() => {
    if (eventHandlerData && eventHandlerData.length > 0) {
      getEventHandler(eventHandlerData);
    }
  }, [eventHandlerData]);

  if (type === "Event" || type === "EVENT") {    
    // Means it's an event not eventHandler
    if (task.eventType)
    {
      // Fetch the eventHandler.
      let time = updateTime(toISOStringWithTimezone(task.date).substring(11, 19));
      // getEventHandler();
      
      return (
        eventTitle ? 
        <div className='eventItem' date={toISOStringWithTimezone(task.date)} id={task.id} name="task" value={task.id}>
          <div className="eventInfo">
            <p>{eventTitle}</p>
            <p>Time: {time}</p>
            {/* <p>Starts: {(task.sourceDate).substring(0, 10)} @ {startTime}</p> */}
            {/* <p>Ends: {(task.endDate).substring(0, 10)} @ {endTime}</p> */}
            <p>Occurs: {task.frequency}</p>
          </div>
                    
          <div className="icons">
          {/* <Icon.ThreeDots size="24px" className='edit'onClick={() => setShow(true)}/> */}
          {/* <ItemInfo delete={deleteEventHandler} title={task.title} onClose={onClose} show={show}>
            <div className="popup">
              <div className="selections">
                <div className="childSelect">
                  <label htmlFor="startDate">Start Date</label>
                  <input onChange={handleEditSDate} defaultValue={task.sourceDate} type="datetime-local" className="form-control" id="startDate"/>
                </div>
                
                <div className="childSelect">
                  <label htmlFor="endDate">End Date</label>
                  <input onChange={handleEditEDate} type="datetime-local" className="form-control" id="endDate"/>
                </div>
              </div>
              <div className="selections">
                <select defaultValue="ONCE" id="taskType" className="form-control childSelect" onChange={handleSelect}>
                  <option value="ONCE">Once</option>
                  <option value="DAILY">Daily</option>
                  <option value="WEEKLY">Weekly</option>
                  <option value="MONTHLY">Monthly</option>
                  <option value="YEARLY">Yearly</option>
                </select>            
              </div>
            </div>
          </ItemInfo> */}
          </div>
        </div>
        :
        <>
        <p>{eventTitle}</p>
        </>
      );
    }
    else
    {
      
      let startTime = updateTime(toISOStringWithTimezone(task.sourceDate).substring(11, 19));
      let endTime = updateTime(toISOStringWithTimezone(task.endDate).substring(11, 19));
      
      return (
        <div className='eventItem' date={toISOStringWithTimezone(task.sourceDate)} id={task.id} name="task" value={task.id}>
          <div className="eventInfo">
            <p>{task.title}</p>
            <p>Starts: {(toISOStringWithTimezone(task.sourceDate)).substring(0, 10)} @ {startTime}</p>
            <p>Ends: {(toISOStringWithTimezone(task.endDate)).substring(0, 10)} @ {endTime}</p>
            <p>Occurs: {task.frequency}</p>
          </div>
                    
          <div className="icons">
          <Icon.ThreeDots size="24px" className='edit' onClick={() => {setShow(true)}}/>
          <ItemInfo delete={deleteEventHandler} title={task.title} onSubmit={updateEventHandler} onClose={updateEventHandler} show={show}>
            <div className="popup">
              {/* Start and End Date Required */}
              <input required={true} onChange={handleEditName} type="text" defaultValue={task.title} className="form-control" id="name" ref={title}/>
              <div className="selections">
                <div className="childSelect">
                  <label htmlFor="startDate">Start Date</label>
                  <input onChange={handleEditSDate} defaultValue={toISOStringWithTimezone(task.sourceDate).substring(0, 16)} type="datetime-local" className="form-control" id="startDate"/>
                </div>
                
                <div className="childSelect">
                  <label htmlFor="endDate">End Date</label>
                  <input onChange={handleEditEDate} defaultValue={toISOStringWithTimezone(task.endDate).substring(0, 16)} type="datetime-local" className="form-control" id="endDate"/>
                </div>
              </div>
              
              {/* If List or Item Selected, option for complete source ? */}
              <label>Frequency</label>
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
      );
      }
  } else {
    // Some tasks can have eventHandlers. 
    // task.eventHandler.upcomingEventId gets the ID for the next event. 
    // get event of upcomingEventId, get the date of it and display it as next recurrence. 

    if (task.eventType)
    {
      let time;
      
      time = updateTime((toISOStringWithTimezone(task.date)).substring(11, 19));

      // Get the event handler from handlerData.
      // getEventHandler();
        
      return (
        eventTitle ? 
        <div id={task.id} name="task" value={task.id} className='taskItem'>
          <div className="eventInfo">
              {/* Need to get the title given eventHandlerId */}
                <p>{eventTitle}</p>
                <p>Time: {time}</p>
          </div>
          
          <div className="icons">
            {/* <Icon.ThreeDots size="24px" className='edit'onClick={() => setShow(true)}/> */}
            {/* <ItemInfo delete={deleteT} title="Edit Task" onClose={onClose} show={show}>
              <div className="popup">
                <input required onChange={handleEditName} type="text" className="form-control" id="name" defaultValue={task.title}/  >
                <div className="selections">
                  <div className="childSelect">
                    <label htmlFor="startDate">Start Date</label>
                    <input onChange={handleEditSDate} value={task.sDate} type="datetime-local" className="form-control" id="startDate"/>
                  </div>
                  
                  <div className="childSelect">
                    <label htmlFor="endDate">End Date</label>
                    <input onChange={handleEditEDate} value={task.eDate} type="datetime-local" className="form-control" id="endDate"/>
                  </div>
                </div>
                <div className="selections">
                  <select defaultValue="ONCE" id="taskType" className="form-control childSelect" onChange={handleSelect}>
                    <option value="ONCE">Once</option>
                    <option value="DAILY">Daily</option>
                    <option value="WEEKLY">Weekly</option>
                    <option value="MONTHLY">Monthly</option>
                    <option value="YEARLY">Yearly</option>
                  </select>            
                </div>
              </div>
            </ItemInfo> */}
        </div>
        </div>
        :
        <>{eventTitle}</>
      )
    }
    else
    {
      let time;

      if (task.upcomingEvent) {
        time = updateTime((toISOStringWithTimezone(task.upcomingEvent.date)).substring(11, 19));
      }
        
      return (
        <div id={task.id} name="task" value={task.id} className='taskItem'>
          <div className="info">
            <input className="check" type="checkbox" id={task.id} value = "" onChange={checkOff} checked = {task.complete ? true : false}/>
            {/* Place the date and any links here as well */}
            {
              task.upcomingEvent ? 
              <label className={task.complete ? "label strike" : "label"}>
                <p style={{"margin": "0"}}>{task.title}</p>
                <p style={{"margin": "0"}}>Next occurence: {(toISOStringWithTimezone(task.upcomingEvent.date)).substring(0, 10)} @ {time}</p>
                <p style={{"margin": "0"}}>Ends on: {(toISOStringWithTimezone(task.eventHandler.endDate)).substring(0,10)}</p>
                <p style={{"margin": "0"}}>Occurrence: {task.eventHandler.frequency}</p>
              </label> : 
              <label className={task.complete ? "label strike" : "label"}>
                <p style={{"margin": "0"}}>{task.title}</p>
                <p style={{"margin": "0"}}>Ocurrence: Once</p>
              </label> 
            }
          </div>
          
          <div className="icons">
            <Icon.ThreeDots size="24px" className='edit'onClick={() => setShow(true)}/>
            <ItemInfo delete={deleteT} title="Edit Task" onClose={onItemInfoSubmit} onSubmit={onItemInfoSubmit} show={show}>
              <div className="popup">
                <input required={true} onChange={handleEditName} type="text" className="form-control" id="name" defaultValue={task.title}/>
                {/* Start and End Date Required */}
                <div className="selections">
                  <div className="childSelect">
                    <label htmlFor="startDate">Start Date</label>
                    <input onChange={handleEditSDate} defaultValue={task.eventHandlerId ? task.eventHandler.sourceDate.substring(0,16) : SDate} type="datetime-local" className="form-control" id="startDate"/>
                  </div>
                  
                  <div className="childSelect">
                    <label htmlFor="endDate">End Date</label>
                    <input onChange={handleEditEDate} defaultValue={task.eventHandler ? task.eventHandler.endDate.substring(0,16) : EDate} type="datetime-local" className="form-control" id="endDate"/>
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
}

export default Task
