import React, {useRef, useState, useEffect } from 'react'
import './add.css'
import * as Icon from 'react-bootstrap-icons'
import data from '../../containers/middle/data.json';
import { createNewItem, createNewTask } from '../../api/mutating';
import { TEST_HOUSEHOLDID } from '../../containers/middle/Middle';

const Add = ({addTask, name, list, theme}) => {
  console.log(list);
  const [add, setAdd] = useState(false);
  const [listoritem, setListOrItem] = useState();
  const [ userInput, setUserInput ] = useState('');
  const [ userDate, setDateInput ] = useState('');
  const [ userDesc, setDescInput ] = useState('');
  const [ listConnect, setListConnect ] = useState('');
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

  const handleClick = (event) => {
    if (event.target.name === "chooselist")
    {
      if (!event.target.checked)
        setListOrItem("none")
      else
        setListOrItem("list");
    }
    else
    {
      if (!event.target.checked)
        setListOrItem("none")
      else
        setListOrItem("item");
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

  const addItem = async(e) => {
    e.preventDefault();

    // Pass correct values here. 
    const newItem = await createNewItem("220eeb18-3bd8-46a5-9d0e-04227ef374e4", "get some bananas");
  }

  const addtask = async(e) => {
    e.preventDefault();

    console.log("creating new Task!");

    // if start/endDate + recurrence (recurrence = ONCE)
      // create EventHandler -> startDate, endDate, recurrence
      // const eventHandler = await createEventHandler(sDate, eDate, freq);
    
    // create Task -> with EventHandlerId
    // Pass correct values here. 
    const newTask = await createNewTask(
      false,
      false,
      false,
      TEST_HOUSEHOLDID,
      "",
      "",
      "",
      "throw out the trash"
    );

    console.log("new Task: ", newTask);

    // updateEventHandler -> add TaskId to itself
  }

  const addEvent = async(e) => {
    e.preventDefault();

    // const newEvent = await createEventHandler("asd", "asda");
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
          <input required type="text" value={userInput} onChange={handleChange} className="form-control" id="name" placeholder="Event Name" ref={title}/>
          <input type="text" value={userDesc} onChange={handleChange3} className="form-control" id="name" placeholder="Event Description" ref={desc}/>

          <div className="selections">
            <div className="childSelect">
              <label htmlFor="startDate">Start Date</label>
              <input required type="date" value={userDate} onChange={handleChange2} className="form-control" id="startDate" ref={sDate}/>
            </div>
            
            <div className="childSelect">
              <label htmlFor="endDate">End Date</label>
              <input required type="date" value={userDate} onChange={handleChange2} className="form-control" id="endDate" ref={eDate}/>
            </div>
          </div>
          
          {/* Repetition: start and end date */}
          <div className="selections">
            <select id="taskType" className="form-control childSelect" ref={freq}>
              <option value="ONCE">Once</option>
              <option value="DAILY">Daily</option>
              <option value="WEEKLY">Weekly</option>
              <option value="MONTHLY">Monthly</option>
              <option value="YEARLY">Yearly</option>
            </select>
          </div>

          {/* Cannot connect to a list. */}
          <div className="buttons">
            <button className="btn btn-danger" onClick={changeAdd}>close</button>
            <button className="btn" id="purple" onClick={async (e) => await addEvent(e)}>add</button>
          </div>
        </form>
      )
    } else if (name === "Task") {
      return (
        <form onSubmit={handleSubmit} className="addingTask">
          <input required type="text" value={userInput} onChange={handleChange} className="form-control" id="name" placeholder="Task Name" ref={title}/>
          
          {/* Start and End Date Required */}
          <div className="selections">
            <div className="childSelect">
              <label htmlFor="startDate">Start Date</label>
              <input required type="date" value={userDate} onChange={handleChange2} className="form-control" id="startDate" ref={sDate}/>
            </div>
            
            <div className="childSelect">
              <label htmlFor="endDate">End Date</label>
              <input required type="date" value={userDate} onChange={handleChange2} className="form-control" id="endDate" ref={eDate}/>
            </div>
          </div>

          {/* Choose to attach to a list or item */}
          <div className="selections">
            <div className="childSelect" style={{"display": "flex", "gap": "1rem"}}>
              <label htmlFor="chooselist">Attach to list</label>
              <input type="checkbox" id="chooselist" name="chooselist" onClick={handleClick}></input>
            </div>

            <div className="childSelect" style={{"display": "flex", "gap": "1rem"}}>
              <label htmlFor="chooseitem">Attach to item</label>
              <input type="checkbox" id="chooseitem" name="chooseitem" onClick={handleClick}></input>
            </div>
          </div>
          
          {/* If List or Item Selected, option for complete source ? */}
          <div className="selections">
            {/* Frequency Type Options: Once, Daily, Weekly, Monthly, Yearly */}
            <select id="taskType" className="form-control childSelect" ref={freq}>
              <option value="ONCE">Once</option>
              <option value="DAILY">Daily</option>
              <option value="WEEKLY">Weekly</option>
              <option value="MONTHLY">Monthly</option>
              <option value="YEARLY">Yearly</option>
            </select>

            { listoritem === 'list' ? 
              <>
                <select required id="listList" onChange={handleChange4} className="form-control childSelect" ref={listAttach}>
                  {/*pulling from JSON file data.json, needs to be connected to list database to retrieve list names*/}
                  { list.map(d => {
                    return <option value={d.listId}>{d.listName}</option>
                  })}
                </select>
                <select id="taskType" className="form-control childSelect">
                  <option value="true">Complete source on completion</option>
                  <option value="false">Keep forever</option>
                </select>
              </>
              : <></>
            }

            { listoritem === "item" ? 
              <>
                <select required id="itemList" className="form-control childSelect" ref={itemAttach}>
                  { data.map(d => {
                    return d.listItems.map(item => {
                      return <option value={item.task}>{item.task}</option>
                    })
                  })}
                </select>
                <select id="taskType" className="form-control childSelect">
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
            <button className="btn btn-danger" onClick={changeAdd}>close</button>
            <button className="btn" id="purple" onClick={async (e) => await addtask(e)}>add</button>
          </div>
        </form>
      )
    }
    else {
      return (
        <form onSubmit={handleSubmit} className="addingTask">
          <input required type="text" value={userInput} onChange={handleChange} className="form-control" id="name" placeholder="Item Name" ref={title}/>
          <hr></hr>
          <div className="buttons">
            <button className="btn btn-danger" onClick={changeAdd}>close</button>
            <button className="btn" id="purple" onClick={async (e) => await addItem(e)}>add</button>
          </div>
        </form>
      )
    }
  }
}

export default Add
