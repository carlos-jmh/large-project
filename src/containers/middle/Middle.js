import React, { useState, useContext } from 'react'
import './middle.css'
import List from '../../components/list/List'
import Events from '../../components/events/Events'
import Form from '../../components/form/Form'
import Add from '../../components/add/Add'
import Cal from '../../components/cal/Cal';
import "react-datepicker/dist/react-datepicker.css";
import TaskList from '../../components/tasklist/TaskList';
import Upcoming from '../../components/usernav/Upcoming';
import Dropdown from '../../components/dropdown/Dropdown';

import {
  fetchItemsByListId,
} from '../../api/fetching';
import { updateExistingItem } from '../../api/mutating'
import { HouseHoldContext } from '../../pages/dashboard/HouseHoldContext';
import { useEventData, useEventHandlerData, useListsData, useTasksData } from '../../api/hooks'
import { useEffect } from 'react'

const processLists = async (lists) => {
  const processedLists = await Promise.all(lists.map(async (list) => {
    const listItems = await fetchItemsByListId(list.id);
    return {
      ...list,
      listItems,
    };
  }));

  return processedLists;
};

const Middle = ({theme}) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [toDoList, setToDoList] = useState([]);
  const [events, setEvents] = useState([]);

  const { houseHold } = useContext(HouseHoldContext);

  const [taskData, setTaskData] = useTasksData({
    houseHoldId: houseHold.id,
  });
  
  const [eventData, setEventData] = useEventData({
    calendarId: houseHold.houseHoldCalendarId,
  });

  const [eventHandlerData, setEventHandlerData] = useEventHandlerData({
    calendarId: houseHold.houseHoldCalendarId,
  });

  const taskDeleteHandler = (id, index) => {
    let removed = taskData.filter((current) => current.id != id)
    setTaskData(removed);
    console.log(removed);
  ;}

  const onListItemCreated = (item, index, setListData) => {
    console.log("SUBSCRIPTION CREATE ITEM", item);
    setListData(prevState => {
      const newListData = [...prevState];
      newListData[index].listItems.push({
        id: item.id,
        task: item.title,
        complete: item.completed,
        _version: item._version,
      });
      return newListData;
    });
  };

  const onListItemUpdated = (item, listIndex, setListData) => {
    console.log("SUBSCRIPTION UPDATE ITEM", item);

    // extract current item from list and its index
    const currentItemIndex = listData[listIndex].listItems.findIndex(listItem => listItem.id === item.id);
    const currentItem = listData[listIndex].listItems[currentItemIndex];
    
    // if the item is the same version, do nothing (we already have the latest version)
    if (currentItem._version === item._version) {
      return;
    }

    setListData(prevState => {
      const newListData = [...prevState];
      newListData[listIndex].listItems[currentItemIndex] = {
        id: item.id,
        task: item.title,
        complete: item.completed,
        _version: item._version,
      };
      return newListData;
    });
  };

  const [listData, setListData] = useListsData({
    houseHoldId: houseHold.id,
    processDataCallback: processLists,
    onListItemCreated,
    onListItemUpdated,
  });

  /*
  For API Implementation all we have to do is connect 3 variables to the backend:
  - data
  - taskData
  - eventData
  from the 3 useStates above. That is where I am loading all the info from the JSON files for the entire application - Gabe
  */

  //Handles list ITEM edition
  const handleListItemToggle = (item, listIndex, itemIndex) => {
    updateExistingItem(item);
    setListData(prevState => {
      const newListData = [...prevState];
      newListData[listIndex].listItems[itemIndex] = item;
      return newListData;
    });
  }

  //Handles list completions
  const handleTaskCheck = (taskIndex, complete) => {
    setTaskData(prevState => {
      const newTasks = [...prevState];
      newTasks[taskIndex].complete = complete;
      return newTasks;
    });
  }

  // TODO: Remove this --- Events are no longer "completable"
  //Handles event completion
  const handleEventCheck = (eventIndex, complete) => {
    setEvents(prevState => {
      const newEvents = [...prevState];
      newEvents[eventIndex].complete = complete;
      return newEvents;
    });
  }
  
  //This is for adding individual items in a given list
  const addTask = (userInput, name, list, userDate) => {
    let copy = toDoList.find(name => name.listName === list.listName);

    copy.listItems = [...copy.listItems, { id: list.listItems.length + 1, task: userInput, complete: false }];
  
    let mapped = toDoList.map(l => {
      if(l.listName === copy.listName)
        l = copy
      return(l)
    });

    setToDoList(mapped);
  }

  //This is for adding tasks
  const addTask2 = (userInput, name, list, userDate, connect) => {
    let copy = [...taskData];
    copy = [...copy, { id: taskData.length + 1, task: userInput, complete: false, date: userDate, list: connect }];

    setTaskData(copy);
  }

  //This is for adding events
  const addTask3 = (userInput, name, list, userDate, userDesc) => {
    let copy = [...events];
    copy = [...copy, { id: events.length + 1, task: userInput, complete: false, date: userDate, description: userDesc}];
    setEvents(copy);
  }

  return (
    loaded ? 
    <>
    {/*
    - In upcoming view list both tasks and events together in one column going in chronological order.
    - Also included undated events above with a separation 
    */}

      <Form/>
      <div className="midContent">
        <div className="calendar">
          <Cal setSelectedDate={setSelectedDate}/>
        </div>
        <div className="display">
          <div className="taskevent">
            <div className="section1">
              <h5 className="sectionHeader">Upcoming</h5>
              <Upcoming tasks={taskData} handleCheck={handleTaskCheck} selectedDate={selectedDate} name = "Task"/>
              <Upcoming tasks = {[]} handleCheck={handleEventCheck} selectedDate={selectedDate} name = "Event"/>
            </div>
          </div>
        </div>
      </div>


      <div className="inbox">
        <div className="section1">
            <h5 className="sectionHeader">Tasks</h5>
            <div>
              <TaskList tasks={taskData} handleCheck={handleTaskCheck} handleDelete={taskDeleteHandler}/>
              <Add addTask={addTask2} useState={false} name="Task" list={listData} theme={theme}/>
              <br/>
            </div>
          <div className="section1">
            <h5 className="sectionHeader">Events</h5>
            <div>
              <Events events = {[]} handleCheck={handleEventCheck} handleDelete={taskDeleteHandler}/>
              <Add addTask={addTask3} useState={false} name={"Event"} list={[]} theme={theme}/>
            </div>
          </div>
        </div>
      </div>


      <div className="lists">
        <div className="section1">
          <h5 className="sectionHeader">Lists</h5>
          {listData.map((currList, index) => {
            return (
              <div key = {index} className='list'>
                <hr className="taskLine"></hr>
                <List name={currList.title} listItems={currList.listItems} listIndex={index} handleToggle={handleListItemToggle}/>
                <Add addTask={addTask} useState={false} name={currList.title} list={currList} theme={theme}/>
                <br/>
              </div>
            )
          })}
        </div>
      </div>

      <Dropdown/>
    </>
  );  
} 

export default Middle;
