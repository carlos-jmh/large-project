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

import {
  fetchEventHandlerById,
  fetchItemsByListId,
  getExistingEvent,
} from '../../api/fetching';
import { updateExistingItem, deleteExistingItem } from '../../api/mutating'
import { HouseHoldContext } from '../../pages/dashboard/HouseHoldContext';
import { useEventData, useEventHandlerData, useListsData, useTasksData, refreshCalendarData } from '../../api/hooks'

const processLists = async (lists) => {
  const processedLists = await Promise.all(lists.map(async (list) => {
    const listItems = await fetchItemsByListId(list.id);
    const processedListItems = listItems.filter(listItem => listItem._deleted !== true);

    return {
      ...list,
      listItems: processedListItems,
    };
  }));

  return processedLists;
};


export const processTasks = async (tasks) => {
  const processedTasks = await Promise.all(tasks.map(async (task) => {
    if (!task.eventHandlerId || task.eventHandlerId === '') {
      return task;
    }

    const eventHandler = await fetchEventHandlerById(task.eventHandlerId);

    let upcomingEvent = null;

    if (eventHandler.upcomingEventId !== null && eventHandler.upcomingEventId !== '')
      upcomingEvent = await getExistingEvent(eventHandler.upcomingEventId);

    return {
      ...task,
      eventHandler,
      upcomingEvent
    };
  }));

  return processedTasks;
};

const Middle = ({theme}) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [toDoList, setToDoList] = useState([]);
  const [events, setEvents] = useState([]);

  const { houseHold } = useContext(HouseHoldContext);

  const [taskData, setTaskData] = useTasksData({
    houseHoldId: houseHold.id,
    processDataCallback: processTasks,
  });
  
  const [eventData, setEventData] = useEventData({
    calendarId: houseHold.calendarId,
  });

  const [eventHandlerData, setEventHandlerData] = useEventHandlerData({
    calendarId: houseHold.calendarId,
  });

  const updateTaskHandler = (task) => {
    console.log("UPDATE TASK", task);
    setTaskData(prevState => {
      const newTaskData = [...prevState];
      let update = newTaskData.findIndex(elem => elem.id === task.id);
      newTaskData[update] = task;
      return newTaskData;
    });
  }

  const taskDeleteHandler = (id, index) => {
    let removed = taskData.filter((current) => current.id !== id)
    setTaskData(removed);
  ;}

  const eventDeleteHandler = (id, index) => {
    let removed = eventHandlerData.filter((current) => current.id !== id)
    setEventHandlerData(removed);
  }

  const updateEventHandler = () => {
    // Find old event handler and replace with new one (in eventHandlerData).
    // Refresh the calendar.

    refreshCalendarData(
      houseHold.calendarId,
      setEventHandlerData,
      setEventData,
    );
  }

  const onListItemCreated = (item, listIndex, setListData) => {
    console.log("SUBSCRIPTION CREATE ITEM", item);

    // check if new item is already in list
    const itemAlreadyInList = listData[listIndex].listItems.some(listItem => listItem.id === item.id);
    if (itemAlreadyInList) {
      return;
    }

    setListData(prevState => {
      const newListData = [...prevState];
      newListData[listIndex].listItems.push(item);
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
        title: item.title,
        completed: item.completed,
        _version: item._version,
      };
      return newListData;
    });
  };

  const onListItemDeleted = (item, listIndex, setListData) => {
    console.log("SUBSCRIPTION DELETE ITEM", item);
    
    const currentItemIndex = listData[listIndex].listItems.findIndex(listItem => listItem.id === item.id);
    if (currentItemIndex === -1) {
      return;
    }

    setListData(prevState => {
      const newListData = [...prevState];
      newListData[listIndex].listItems.splice(currentItemIndex, 1);
      return newListData;
    });
  };

  const [listData, setListData] = useListsData({
    houseHoldId: houseHold.id,
    processDataCallback: processLists,
    onListItemCreated,
    onListItemUpdated,
    onListItemDeleted,
  });

  /*
  For API Implementation all we have to do is connect 3 variables to the backend:
  - data
  - taskData
  - eventData
  from the 3 useStates above. That is where I am loading all the info from the JSON files for the entire application - Gabe
  */

  //Handles list ITEM edition
  const handleListItemUpdate = (item, listIndex, itemIndex) => {
    setListData(prevState => {
      const newListData = [...prevState];
      newListData[listIndex].listItems[itemIndex] = item;
      return newListData;
    });
    updateExistingItem(item);
  }

  // Handles list ITEM deletion
  const handleListItemDelete = (item, listIndex, itemIndex) => {
    setListData(prevState => {
      const newListData = [...prevState];
      newListData[listIndex].listItems.splice(itemIndex, 1);
      return newListData;
    });
    const deletedItem = deleteExistingItem(item);
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
  const addListItem = (userInput, name, list, userDate) => {
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
  const addTask = async(task) => {
    const processedTask = await processTasks([task]);
    setTaskData(prevState => {
      const newTasks = [...prevState];
      newTasks.push(processedTask[0]);
      return newTasks;
    })
  }

  //This is for adding events
  const addEvent = (newTask) => {
    let copy = [...events];
    copy = [...copy, { newTask}];
    setEvents(copy);
  }

  return (
    eventHandlerData !== [] ? 
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
              <Upcoming tasks={eventData} eventHandlerData={eventHandlerData} handleCheck={handleTaskCheck} selectedDate={selectedDate} name = "Task"/>
              <Upcoming tasks={eventData} eventHandlerData={eventHandlerData}handleCheck={handleEventCheck} selectedDate={selectedDate} name = "Event"/>
            </div>
          </div>
        </div>
      </div>


      <div className="inbox">
        <div className="section1">
            <h5 className="sectionHeader">Tasks</h5>
            <div>
              <TaskList tasks={taskData} eventHandlerData={eventHandlerData} handleCheck={handleTaskCheck} handleDelete={taskDeleteHandler} handleUpdate={updateTaskHandler} theme={theme} handleEventUpdate={updateEventHandler}/>
              <Add setEventHandlerData={setEventHandlerData} handleEventUpdate={updateEventHandler} addTask={addTask} useState={false} name={"Task"} list={[]} theme={theme}/>
              <br/>
            </div>
          <div className="section1">
            <h5 className="sectionHeader">Events</h5>
            <div>
              <Events events={eventHandlerData} handleCheck={handleEventCheck} handleDelete={eventDeleteHandler} handleEventUpdate={updateEventHandler}/>
              <Add setEventHandlerData={setEventHandlerData} handleEventUpdate={updateEventHandler} addTask={addEvent} useState={false} name={"Event"} list={[]} theme={theme}/>
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
                <List
                  list={currList}
                  name={currList.title}
                  setState={setListData}
                  listItems={currList.listItems}
                  listIndex={index}
                  handleListItemDelete={handleListItemDelete}
                  handleListItemUpdate={handleListItemUpdate}
                />
                <Add addTask={addListItem} handleEventUpdate={updateEventHandler} useState={false} name={"to " + currList.title} list={currList} theme={theme} setState={setListData} index={index}/>
                <br/>
              </div>
            )
          })}
          <hr className="taskLine"></hr>
          <Add useState={false} handleEventUpdate={updateEventHandler} name={"List"} theme={theme} setState={setListData} handle={handleListItemUpdate}/>
        </div>
      </div>
    </>
    :
    <></>
  )
} 

export default Middle;
