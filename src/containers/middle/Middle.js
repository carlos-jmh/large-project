import React, { useState, useEffect } from 'react'
import './middle.css'
import List from '../../components/list/List'
import Events from '../../components/events/Events'
import Form from '../../components/form/Form'
import Add from '../../components/add/Add'
import Cal from '../../components/cal/Cal';
import data from "./data.json";
import taskData from "./taskData.json";
import eventData from "./eventData.json";
import "react-datepicker/dist/react-datepicker.css";
import TaskList from '../../components/tasklist/TaskList';
import Upcoming from '../../components/usernav/Upcoming';

import { fetchEventHandlersByCalendarId, fetchEventsByCalendarId, fetchItemsByListId, fetchLists, fetchTasksByHouseHoldId } from '../../api/fetching';
import { createSubListItems, updateSubListItems } from '../../api/subscribing'
import { updateExistingItem } from '../../api/mutating'

export const TEST_HOUSEHOLDID = "ee1afec5-f8b1-4dd9-b907-fac07b638107";
export const TEST_CALENDARID = "8140617b-65f6-4e8a-8aeb-f009606ae792";

const Middle = ({theme}) => {
  //THIS SORTS BOTH JSON FILES BEFORE THEY ARE LOADED IN
  taskData.sort((a,b) => {
    return new Date(a.date) - new Date(b.date)
  })

  eventData.sort((a,b) => {
    return new Date(a.date) - new Date(b.date)
  })

  const [selectedDate, setSelectedDate] = useState(new Date())
  const [toDoList, setToDoList] = useState(data);
  const [tasks, setTasks] = useState(taskData);
  const [events, setEvents] = useState(eventData);

  const [listData, setListData] = useState([]);
  
  /*
  For API Implementation all we have to do is connect 3 variables to the backend:
  - data
  - taskData
  - eventData
  from the 3 useStates above. That is where I am loading all the info from the JSON files for the entire application - Gabe
  */

  const processLists = async (lists) => {
    const processedLists = lists.map(async (list, listIndex) => {
      const listItems = await fetchItemsByListId(list.id);

      // TODO (carlos): Implement delete
      // Creating subscriptions for list item updates
      createSubListItems(list.id, listIndex, newListItemIsCreated);
      updateSubListItems(list.id, listIndex, existingListItemIsUpdated);

      const processedItems = listItems.map((item) => {
        return {
          id: item.id,
          task: item.title,
          complete: item.completed,
          _version: item._version,
        }
      });

      return {
        listId: list.id,
        listName: list.title,
        listItems: processedItems,
        _version: list._version,
      }
    });

    setListData(await Promise.all(processedLists));
  }

  const newListItemIsCreated = (item, index) => {
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
  }

  const existingListItemIsUpdated = (item, index) => {
    console.log("SUBSCRIPTION UPDATE ITEM", item);
    setListData(prevState => {
      const newListData = [...prevState];
      const itemIndex = newListData[index].listItems.findIndex(listItem => listItem.id === item.id);
      newListData[index].listItems[itemIndex] = {
        id: item.id,
        task: item.title,
        complete: item.completed,
        _version: item._version,
      };
      return newListData;
    });
  }

  useEffect(() => {
    async function loadListData() {
      const lists = await fetchLists(TEST_HOUSEHOLDID);
      await processLists(lists);
    };

    async function loadTaskData() {
      const tasks = await fetchTasksByHouseHoldId(TEST_HOUSEHOLDID);
      console.log(tasks);
    }

    async function loadEventData() {
      const events = await fetchEventsByCalendarId(TEST_CALENDARID);
      console.log(events);
    }

    async function loadEventHandlerData() {
      const events = await fetchEventHandlersByCalendarId(TEST_CALENDARID);
      console.log(events);
    }
    
    loadListData();
    loadTaskData();
    loadEventData();
    loadEventHandlerData();
  }, []);

  // Load in households and their respective info.

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
    setTasks(prevState => {
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
    let copy = [...tasks];
    copy = [...copy, { id: tasks.length + 1, task: userInput, complete: false, date: userDate, list: connect }];

    setTasks(copy);
  }

  //This is for adding events
  const addTask3 = (userInput, name, list, userDate, userDesc) => {
    let copy = [...events];
    copy = [...copy, { id: events.length + 1, task: userInput, complete: false, date: userDate, description: userDesc}];
    setEvents(copy);
  }

  // Break into seperate component.
  return (
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
              <Upcoming tasks = {tasks} handleCheck={handleTaskCheck} selectedDate={selectedDate} name = "Task"/>
              <Upcoming tasks = {[]} handleCheck={handleEventCheck} selectedDate={selectedDate} name = "Event"/>
            </div>
          </div>
        </div>
      </div>


      <div className="inbox">
        <div className="section1">
            <h5 className="sectionHeader">Tasks</h5>
            <div>
              <TaskList tasks = {tasks} handleCheck={handleTaskCheck}/>
              <Add addTask={addTask2} name="Task" theme={theme}/>
              <br/>
            </div>
          <div className="section1">
            <h5 className="sectionHeader">Events</h5>
            <div>
              <Events events = {[]} handleCheck={handleEventCheck}/>
              <Add addTask={addTask3} name="Event" theme={theme}/>
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
                <List name={currList.listName} listItems={currList.listItems} listIndex={index} handleToggle={handleListItemToggle}/>
                <Add addTask={addTask} useState={false} name={currList.listName} list={currList} theme={theme}/>
                <br/>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );  
} 

export default Middle;