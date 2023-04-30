import React, {useRef, useState, useEffect, useContext } from 'react'
import './add.css'
import * as Icon from 'react-bootstrap-icons'
import { createNewItem, createNewList, createNewTask, generateEventHandler, updateExistingTask } from '../../api/mutating';
import { HouseHoldContext } from '../../pages/dashboard/HouseHoldContext';

const Add = ({addTask, name, list, theme, setState, handle, index}) => {
  // console.log(list);
  const [add, setAdd] = useState(false);
  const [listoritem, setListOrItem] = useState();
  const [ userInput, setUserInput ] = useState('');
  const [ userSDate, setSDateInput ] = useState('');
  const [ userEDate, setEDateInput ] = useState('');
  const [ userDesc, setDescInput ] = useState('');
  const [ listConnect, setListConnect ] = useState('');
  const title = useRef(null);
  const desc = useRef(null);
  const sDate = useRef(null);
  const eDate = useRef(null);
  const freq = useRef(null);
  const listAttach = useRef(null);
  const itemAttach = useRef(null);

  const { houseHold } = useContext(HouseHoldContext);

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
    //let date = (e.target.value).split('-')
    //let dateInput = date[1] + 
    setSDateInput(e.target.value);
  }

  const handleChange5 = (e) => {
    //let date = (e.target.value).split('-')
    //let dateInput = date[1] + 
    setEDateInput(e.target.value);
  }

  const handleChange3 = (e) => {
    setDescInput(e.target.value);
  }

  const handleChange4 = (e) => {
    setListConnect(e.target.options[e.target.selectedIndex].text);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTaskDatabase()
    setUserInput("");
    setSDateInput("");
    setEDateInput("");
    setListConnect("")
  }

  const addItem = async(e) => {
    e.preventDefault();

    changeAdd();

    // Pass correct values here. 
    const newItem = await createNewItem(list.id, title.current.value);

    // Display's blank, why? 
    setState(prevState => {
      const newListData = [...prevState];
      newListData[index].listItems.push(newItem);
      return newListData;
    });
  }
  
  const handleNewList = async(e) => {
    // Refresh forced.
    e.preventDefault();

    // Call that should create a new list.
    const newList = await createNewList(houseHold.id, title.current.value);

    if (newList !== null)
    {
      // Update setListsData
      setState(prevState => {
        const newListData = [...prevState, {...newList, listItems: []}];
        return newListData;
      });
    }
  }

  const addTaskDatabase = async(e) => {
    alert("Creating New Task!");

    const newTask = await createNewTask(
      false,
      false,
      false, //forever task
      houseHold.id,
      "",
      "",
      "",
      userInput
    );

    const newHandlerId = await generateEventHandler(
      houseHold.calendarId,
      newTask.id,
      freq.current.value,
      new Date(userSDate),
      new Date (userEDate),
      "TASK",
      userInput
    )

    newTask.eventHandlerId = newHandlerId;
    addTask(newTask);
    await updateExistingTask(newTask);
  }

  // Function to add an Event.
  const addEventDatabase = async(e) => {
    alert("Creating new event");

    // Generate eventHandler
    const newHandlerId = await generateEventHandler(
      houseHold.calendarId,
      "",
      freq.current.value,
      new Date(userSDate),
      new Date(userEDate),
      "EVENT",
      title.current.value
    )
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
              <input required type="datetime-local" value={userSDate} onChange={handleChange2} className="form-control" id="startDate" ref={sDate}/>
            </div>
            
            <div className="childSelect">
              <label htmlFor="endDate">End Date</label>
              <input required type="datetime-local" value={userEDate} onChange={handleChange5} className="form-control" id="endDate" ref={eDate}/>
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
            <button type="submit" className="btn" id="purple" onClick={async (e) => await addEventDatabase(e)}>add</button>
          </div>
        </form>
      )
    } else if (name === "Task") {
      return (
        <form className="addingTask" action="page_submission_URL" method="POST">
          <input required type="text" value={userInput} onChange={handleChange} className="form-control" id="name" placeholder="Task Name" ref={title}/>
          
          {/* Start and End Date Required */}
          <div className="selections">
            <div className="childSelect">
              <label htmlFor="startDate">Start Date</label>
              <input type="datetime-local" value={userSDate} onChange={handleChange2} className="form-control" id="startDate" ref={sDate}/>
            </div>
            
            <div className="childSelect">
              <label htmlFor="endDate">End Date</label>
              <input type="datetime-local" value={userEDate} onChange={handleChange5} className="form-control" id="endDate" ref={eDate}/>
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
                    return <option value={d.id}>{d.title}</option>
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
                  { list.map(d => {
                    return d.listItems.map(item => {
                      return <option value={item.title}>{item.title}</option>
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
            <button type="submit" className="btn" id="purple" onClick={handleSubmit}>add</button>
          </div>
        </form>
      )
    }
    else if (name === "List") {
      return (
        <form className="addingTask">
          <input required type="text" value={userInput} onChange={handleChange} className="form-control" id="name" placeholder="List Name" ref={title}/>
          <hr></hr>
          <div className="buttons">
            <button className="btn btn-danger" onClick={changeAdd}>close</button>
            <button className="btn" id="purple" onClick={async (e) => await handleNewList(e)}>add</button>
          </div>
        </form>
      )
    } else {
      return (
        <form className="addingTask">
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

export default Add;
