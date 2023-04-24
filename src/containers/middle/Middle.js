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
import { getCognitoToken } from '../../components/AuthUser';
import { API, graphqlOperation } from 'aws-amplify'

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
  
  /*
  For API Implementation all we have to do is connect 3 variables to the backend:
  - data
  - taskData
  - eventData
  from the 3 useStates above. That is where I am loading all the info from the JSON files for the entire application - Gabe
  */

  
  const TEST_HOUSEHOLDID = "ee1afec5-f8b1-4dd9-b907-fac07b638107";

  const getLists = async (houseHoldId) => {
    try {
      const token = await getCognitoToken();

      const lists = await API.graphql(
        graphqlOperation(
          `query ListsByHouseHoldId($houseHoldId: ID!) {
            listsByHouseHoldId(houseHoldId: $houseHoldId) {
              items {
                title
                id
                houseHoldId
                description
                completed
                Items {
                  items {
                    title
                    listId
                    id
                    description
                    completed
                  }
                }
                Task {
                  id
                  title
                  foreverTask
                  eventHandlerId
                  completed
                  completeSourceOnComplete
                }
              }
            }
          }`,
          { houseHoldId: houseHoldId }
        ),
        { Authorization: `Banana ${token}` }
      );

      // process into object that you want

      return lists.data.listsByHouseHoldId.items;

    } catch (error) {
      console.log("ERROR fetching Lists ", error)
      return [];
    }
  }

  const getTasks = async (houseHoldId) => {
    try {
      const token = await getCognitoToken();

      const lists = await API.graphql(
        graphqlOperation(
          `query GetTasks($houseHoldId: ID = "") {
            tasksByHouseHoldId(houseHoldId: $houseHoldId) {
              items {
                completeSourceOnComplete
                completed
                eventHandlerId
                foreverTask
                houseHoldId
                id
                itemId
                listId
                title
              }
            }
          }`,
          { houseHoldId: houseHoldId }
        ),
        { Authorization: `Banana ${token}` }
      );

      // process into object that you want

      return lists.data.tasksByHouseHoldId.items;

    } catch (error) {
      console.log("ERROR fetching Lists ", error)
      return [];
    }
  }

  // TODO (carlos): Implement
  const getEvents = async (houseHoldId) => {
    // try {
    //   const token = await getCognitoToken();

    //   const lists = await API.graphql(
    //     graphqlOperation(
    //       `query GetTasks($houseHoldId: ID = "") {
    //         tasksByHouseHoldId(houseHoldId: $houseHoldId) {
    //           items {
    //             completeSourceOnComplete
    //             completed
    //             eventHandlerId
    //             foreverTask
    //             houseHoldId
    //             id
    //             itemId
    //             listId
    //             title
    //           }
    //         }
    //       }`,
    //       { houseHoldId: houseHoldId }
    //     ),
    //     { Authorization: `Banana ${token}` }
    //   );

    //   // process into object that you want

    //   return lists.data.tasksByHouseHoldId.items;

    // } catch (error) {
    //   console.log("ERROR fetching Lists ", error)
    //   return [];
    // }
  }

  useEffect(() => {
    async function fetchLists() {
      const lists = await getLists(TEST_HOUSEHOLDID);
      console.log(lists);
    };

    async function fetchTasks() {
      const tasks = await getTasks(TEST_HOUSEHOLDID);
      console.log(tasks);
    }

    async function fetchEvents() {
      const events = await getEvents(TEST_HOUSEHOLDID);
      console.log(events);
    }
    
    fetchLists();
    fetchTasks();
    fetchEvents();
  }, []);

  // Load in households and their respective info.


  //Handles list ITEM completions
  const handleToggle = (id, name) => {
    let temp = [];
    let mapped = toDoList.map(list => {
      list.listItems.map(item => { 
        if((item.id === id) && (list.listName === name)) { 
          temp.push({...item , complete: !item.complete})
        } else {
          temp.push(item)
        }

      });
        list.listItems = temp
        temp = []
        return ({...list})
      });
    setToDoList(mapped);
  }

  //Handles task completion
  const handleCheck = (id) => {
    let mapped = tasks.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    });
    setTasks(mapped);
  }

  //Handles event completion
  const handleCheck2 = (id) => {
    let mapped = events.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    });
    setEvents(mapped);
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
              <Upcoming tasks = {tasks} handleCheck={handleCheck} selectedDate={selectedDate} name = "Task"/>
              <Upcoming tasks = {events} handleCheck={handleCheck2} selectedDate={selectedDate} name = "Event"/>
            </div>
          </div>
        </div>
      </div>


      <div className="inbox">
        <div className="section1">
            <h5 className="sectionHeader">Tasks</h5>
            <div>
              <TaskList tasks = {tasks} handleCheck={handleCheck}/>
              <Add addTask={addTask2} name="Task" theme={theme}/>
              <br/>
            </div>
          </div>
          <div className="section1">
            <h5 className="sectionHeader">Events</h5>
            <div>
              <Events events = {events} handleCheck={handleCheck2}/>
              <Add addTask={addTask3} name="Event" theme={theme}/>
            </div>
          </div>
        </div>


      <div className="lists">
        <div className="section1">
          <h5 className="sectionHeader">Lists</h5>
          {toDoList.map(current => {
            return (
              <div key = {current.listName} className='list'>
                <hr className="taskLine"></hr>
              <List name = {current.listName} list = {current.listItems} handleToggle={handleToggle}/>
              <Add addTask={addTask} useState={false} name={current.listName} list = {current} theme={theme}/>
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
