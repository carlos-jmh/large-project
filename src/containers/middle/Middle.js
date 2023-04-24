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
  const [lists, setLists] = useState([]);
  const [id, sethouseHoldId] = useState('');
  const [loaded, setLoaded] = useState(false);


  async function fetchLists(hhId) {
    const l = await getLists(hhId);
    setLists(l);
  };

  async function fetchTasks(hhId) {
    const t = await getTasks(hhId);
    setTasks(t);
  }

  async function fetchEvents(hhId) {
    const e = await getEvents(hhId);
    setEvents(e);
  }

  useEffect(() => {
    console.log("Lists: " + JSON.stringify(lists));
    //console.log("Tasks: " + JSON.stringify(tasks));
    //console.log("Events: " + JSON.stringify(events));
    setLoaded(true);
  }, [lists, tasks, events]);

  // UseEffect on local storage to load houseHoldId
  useEffect(() => {

    function checkHouseHold() {
      const hhId = localStorage.getItem("houseHoldId");

      if (hhId)
      {
        sethouseHoldId(hhId);
        fetchLists(hhId);
        fetchTasks(hhId);
        //fetchEvents(hhId);
      }
      console.log(hhId);
    }
    
    window.addEventListener("storage", checkHouseHold);

    return () => {
      window.removeEventListener("storage", checkHouseHold);
    };
  }, [])
  
  // const TEST_HOUSEHOLDID = "ee1afec5-f8b1-4dd9-b907-fac07b638107";

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

  // Load in households and their respective info.


  //Handles list ITEM completions
  const handleListItemToggle = (listIndex, itemIndex, completed) => {
    setToDoList(prevState => {
      const newList = [...prevState];
      newList[listIndex].listItems[itemIndex].complete = completed;
      return newList;
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
          {lists.map((currList, index) => {
            return (
              <div key = {index} className='list'>
                <hr className="taskLine"></hr>
                <List name={currList.title} list={currList.Items.items} listIndex={index} handleToggle={handleListItemToggle}/>
                <Add addTask={addTask} useState={false} name={currList.title} list={currList} theme={theme}/>
                <br/>
              </div>
            )
          })}
        </div>
      </div>
    </>     
    :
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
              <Upcoming tasks = {[]} handleCheck={handleTaskCheck} selectedDate={selectedDate} name = "Task"/>
              <Upcoming tasks = {events} handleCheck={handleEventCheck} selectedDate={selectedDate} name = "Event"/>
            </div>
          </div>
        </div>
      </div>


      <div className="inbox">
        <div className="section1">
            <h5 className="sectionHeader">Tasks</h5>
            <div>
              <TaskList tasks = {[]} handleCheck={handleTaskCheck}/>
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
          {[].map((currList, index) => {
            return (
              <div key = {index} className='list'>
                <hr className="taskLine"></hr>
                <List name={currList.listName} list={currList.listItems} listIndex={index} handleToggle={handleListItemToggle}/>
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