import React, {useRef, useState, useEffect } from 'react'
import './add.css'
import * as Icon from 'react-bootstrap-icons'
import data from '../../containers/middle/data.json';
import { API, graphqlOperation } from 'aws-amplify'
import { getCognitoToken }from "../AuthUser"

<<<<<<< HEAD
const Add = ({addTask, name}) => {
  const [add, setAdd] = useState(name);
=======
const Add = ({addTask, name, list, theme}) => {
  const [add, setAdd] = useState(false);
<<<<<<< HEAD
>>>>>>> fc839c7 (minor dark mode changes)
=======
  const [listoritem, setListOrItem] = useState();
>>>>>>> c8407dc (Update general form to match other forms.)
  const [ userInput, setUserInput ] = useState('');
  const [ userDate, setDateInput ] = useState('');
  const [ userDesc, setDescInput ] = useState('');
  const [ listConnect, setListConnect ] = useState('');
  const dateInputRef = useRef(null);
  const title = useRef(null);
  const desc = useRef(null);
  const sDate = useRef(null);
  const eDate = useRef(null);
  const freq = useRef(null);
  const listAttach = useRef(null);
  const itemAttach = useRef(null);

  // Add event object:
  let eObj = {title: title, sourceDate: sDate, endDate: eDate, freq: freq}

  // Add task object: 
  let tObj = {title: title, sourceDate: sDate, endDate: eDate, freq: freq, List: listAttach, item: itemAttach}

  // Add item:
  // Get id of list, can get from its parent?
  let iObj = {title: title, description: desc, listId: 1};

  useEffect(() => {
    setListOrItem('none');
  }, [])

  function changeAdd() {
    setAdd(!add);
  }

  function handleListOrItem(string) {
    if (listoritem === 'none')
    setListOrItem(string);

    if (listoritem === string)
      setListOrItem('none');
    
    // Check if they are not the same. 
    if (listoritem !== string)
    {
      // Uncheck id=chooseItem
      if (string === 'list')
        document.getElementById('chooseitem').checked = false;
      else
        document.getElementById('chooselist').checked = false;

      setListOrItem(string)
    }
  }

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleChange2 = (e) => {
    setDateInput(e.target.value);
  }

  const handleChange3 = (e) => {
    setDescInput(e.target.value);
  }

  const handleChange4 = (e) => {
    setListConnect(e.target.options[e.target.selectedIndex].text);
  }

  const handleSubmit = (e) => {
    //code to add task when pressing enter

    /*
    // Get the input field
    let input = document.getElementById("myInput");

    // Execute a function when the user presses a key on the keyboard
    input.addEventListener("keypress", function(event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("myBtn").click();
      }
    });
    */
    let date = userDate.split("-");
    e.preventDefault();
    addTask(userInput, name, list, date[1] + "-" + date[2] + "-" + date[0], listConnect);
    setUserInput("");
    setDateInput("");
    setListConnect("")
  }

  const createItem = async (listId, title) => {
    try {
      const token = await getCognitoToken();

      const newItem = await API.graphql(
        graphqlOperation(
          `mutation CreateItem($completed: Boolean = false, $listId: ID = "", $title: String = "") {
            createItem(input: {completed: $completed, listId: $listId, title: $title}) {
              id
              listId
              title
              completed
            }
          }`,
          { listId: "b7fcc866-79f7-446e-9e5f-4aa58cf0dcf4", title: "Millenium Falcon" }
        ),
        { Authorization: `Banana ${token}` }
      )

      console.log("new Item: ", newItem.data.createItem);
      return newItem.data.createItem;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const addItem = async(e) => {
    e.preventDefault();

    // Pass correct values here. 
    const newItem = await createItem("asdsa", "sdas");
  }

  const createTask = async (completeSourceOnComplete, completed, foreverTask, houseHoldId, itemId, listId, title) => {
    try {
      const token = await getCognitoToken();

      const newTask = await API.graphql(
        graphqlOperation(
          `mutation CreateTask($completeSourceOnComplete: Boolean = false, $completed: Boolean = false, $eventHandlerId: ID = "", $foreverTask: Boolean = false, $houseHoldId: ID = "", $itemId: ID = "", $listId: ID = "", $title: String = "") {
            createTask(input: {completeSourceOnComplete: $completeSourceOnComplete, completed: $completed, eventHandlerId: $eventHandlerId, foreverTask: $foreverTask, houseHoldId: $houseHoldId, itemId: $itemId, listId: $listId, title: $title}) {
              id
              itemId
              listId
              title
              houseHoldId
              foreverTask
              eventHandlerId
              completed
              completeSourceOnComplete
            }
          }`,
          {
            completeSourceOnComplete: false,
            completed: false,
            eventHandlerId: "",
            foreverTask: false,
            houseHoldId: "ee1afec5-f8b1-4dd9-b907-fac07b638107",
            title: "throw out the trash",
            listId: "",
            itemId: ""
          }
        ),
        { Authorization: `Banana ${token}` }
      )

      console.log("new Task: ", newTask.data.createTask);
      return newTask.data.createTask;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const addtask = async(e) => {
    e.preventDefault();

    // if start/endDate + recurrence (recurrence = ONCE)
      // create EventHandler -> startDate, endDate, recurrence
      // const eventHandler = await createEventHandler(sDate, eDate, freq);
    
    // create Task -> with EventHandlerId
    // Pass correct values here. 
    const newTask = await createTask("asdsa", "sdas");

    // updateEventHandler -> add TaskId to itself
  }

  const addEvent = async(e) => {
    e.preventDefault();

    // const newEvent = await createEvent("asd", "asda");
  }

  if (!add)
    if(theme === "light") {
      return (
        <div className="task">
            <div className="addTask">
              {/* onClick change database data to complete and refresh*/}
              <Icon.PlusLg color="purple" onClick={changeAdd}/>
              <p onClick={changeAdd}>Add {name}</p>
            </div>

            {/* When add task is clicked, open form for adding */}
        </div>
      );
    } else {
      return (
      <div className="task">
          <div className="addTask-dark">
            {/* onClick change database data to complete and refresh*/}
            <Icon.PlusLg color="white" onClick={changeAdd}/>
            <p onClick={changeAdd}>Add {name}</p>
          </div>

          {/* When add task is clicked, open form for adding */}
      </div>  
      );
    }
  else {
    if(name === "Event") {
      return (
        <form onSubmit={handleSubmit} className="addingTask">
          <input required type="text" value={userInput} onChange={handleChange} class="form-control" id="name" placeholder="Event Name" ref={title}/>
          <input type="text" value={userDesc} onChange={handleChange3} class="form-control" id="name" placeholder="Event Description" ref={desc}/>

          <div className="selections">
            <div className="childSelect">
              <label for="startDate">Start Date</label>
              <input required type="date" value={userDate} onChange={handleChange2} class="form-control" id="startDate" ref={sDate}/>
            </div>
            
            <div className="childSelect">
              <label for="endDate">End Date</label>
              <input required type="date" value={userDate} onChange={handleChange2} class="form-control" id="endDate" ref={eDate}/>
            </div>
          </div>
          
          {/* Repetition: start and end date */}
          <div className="selections">
            <select id="taskType" class="form-control childSelect" ref={freq}>
              <option value="ONCE">Once</option>
              <option value="DAILY">Daily</option>
              <option value="WEEKLY">Weekly</option>
              <option value="MONTHLY">Monthly</option>
              <option value="YEARLY">Yearly</option>
            </select>
          </div>

          {/* Cannot connect to a list. */}
          <div className="buttons">
            <button class="btn btn-danger" onClick={changeAdd}>close</button>
            <button class="btn" id="purple" onClick={async (e) => await addEvent(e)}>add</button>
          </div>
        </form>
      )
    } else if (name === "Task") {
      return (
        <form onSubmit={handleSubmit} className="addingTask">
          <input required type="text" value={userInput} onChange={handleChange} class="form-control" id="name" placeholder="Task Name" ref={title}/>
          
          {/* Start and End Date Required */}
          <div className="selections">
            <div className="childSelect">
              <label for="startDate">Start Date</label>
              <input required type="date" value={userDate} onChange={handleChange2} class="form-control" id="startDate" ref={sDate}/>
            </div>
            
            <div className="childSelect">
              <label for="endDate">End Date</label>
              <input required type="date" value={userDate} onChange={handleChange2} class="form-control" id="endDate" ref={eDate}/>
            </div>
          </div>

          {/* Choose to attach to a list or item */}
          <div className="selections">
            <div className="childSelect" style={{"display": "flex", "gap": "1rem"}}>
              <label for="chooselist">Attach to list</label>
              <input type="checkbox" id="chooselist" name="chooselist" onClick={() => handleListOrItem('list')}></input>
            </div>

            <div className="childSelect" style={{"display": "flex", "gap": "1rem"}}>
              <label for="chooseitem">Attach to item</label>
              <input type="checkbox" id="chooseitem" name="chooseitem" onClick={() => handleListOrItem('item')}></input>
            </div>
          </div>
          
          {/* If List or Item Selected, option for complete source ? */}
          <div className="selections">
            {/* Frequency Type Options: Once, Daily, Weekly, Monthly, Yearly */}
            <select id="taskType" class="form-control childSelect" ref={freq}>
              <option value="ONCE">Once</option>
              <option value="DAILY">Daily</option>
              <option value="WEEKLY">Weekly</option>
              <option value="MONTHLY">Monthly</option>
              <option value="YEARLY">Yearly</option>
            </select>

            { listoritem === 'list' ? 
              <>
                <select required id="listList" onChange={handleChange4} class="form-control childSelect" ref={listAttach}>
                  {/*pulling from JSON file data.json, needs to be connected to list database to retrieve list names*/}
                  { data.map(d => {
                    return <option value={d.listName}>{d.listName}</option>
                  })}
                </select>
                <select id="taskType" class="form-control childSelect">
                  <option value="true">Complete source on completion</option>
                  <option value="false">Keep forever</option>
                </select>
              </>
              : <></>
            }

            { listoritem === "item" ? 
              <>
                <select required id="itemList" class="form-control childSelect" ref={itemAttach}>
                  { data.map(d => {
                    return d.listItems.map(item => {
                      return <option value={item.task}>{item.task}</option>
                    })
                  })}
                </select>
                <select id="taskType" class="form-control childSelect">
                  <option value="true">Complete source on completion</option>
                  <option value="false">Keep forever</option>
                </select>
              </>
              :
              <></>
            }
          </div>
          
          <hr></hr>
          <div className="buttons">
            <button class="btn btn-danger" onClick={changeAdd}>close</button>
            <button class="btn" id="purple" onClick={async (e) => await addtask(e)}>add</button>
          </div>
        </form>
      )
    }
    else {
      return (
        <form onSubmit={handleSubmit} className="addingTask">
          <input required type="text" value={userInput} onChange={handleChange} class="form-control" id="name" placeholder="Item Name" ref={title}/>
          <hr></hr>
          <div className="buttons">
            <button class="btn btn-danger" onClick={changeAdd}>close</button>
            <button class="btn" id="purple" onClick={async (e) => await addItem(e)}>add</button>
          </div>
        </form>
      )
    }
  }
}

export default Add
