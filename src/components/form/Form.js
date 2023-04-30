import React, {useRef, useState, useContext } from 'react'
import './form.css';
import data from '../../containers/middle/data.json';
import { getCognitoToken } from '../AuthUser';
import { API, graphqlOperation } from 'aws-amplify'
import { addUser } from '../../api/mutating';
import { HouseHoldContext } from '../../pages/dashboard/HouseHoldContext';

// This all-in-one form allows household creation, task creation, and list creation.
const Form = () => {
  // Set button to active class (background color more grey)
  // Pass value to dashboard that allows inbox value to be changed.
  const [ userDate, setDateInput ] = useState('');
  const [ userInput, setUserInput ] = useState('');
  const [listoritem, setListOrItem] = useState();
  const [ listConnect, setListConnect ] = useState('');
  const [ userDesc, setDescInput ] = useState('');
  const dateInputRef = useRef('');
  const title = useRef('');
  const desc = useRef('');
  const sDate = useRef('');
  const eDate = useRef('');
  const freq = useRef('');
  const listAttach = useRef('');
  const itemAttach = useRef('');
  const username = useRef('');
  const linkedTask = useRef('')

  const { houseHold } = useContext(HouseHoldContext);

  // Add event object:
  // Should include household id?
  let eObj = {title: title, sourceDate: sDate, endDate: eDate, freq: freq}

  // Add task object: 
  // Should include household id?
  let tObj = {title: title, sourceDate: sDate, endDate: eDate, freq: freq, List: listAttach, item: itemAttach}

  // Add user:
  // Add household id? Store it in local storage and pull it?
  let uObj = {cognitoUsername: username}

  // Add list: 
  let lObj = {title: title, description: desc, houseHoldId: 1, items: []}

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

  function openTab(tab)
  {
    // Get content and tabs.
    let content = document.querySelectorAll('div.tabcontent');
    let links = document.querySelectorAll('button.tablinks');
    
    for (let i = 0; i < content.length; i++)
    {
      content[i].style.display = "none";
      links[i].classList.remove('active');
    }

    if (tab === "l")
    {
      content[0].style.display = "block";
      links[0].classList.add("active");
    }
    else if (tab === "e")
    {
      content[1].style.display = "block";
      links[1].classList.add("active");
    }
    else if (tab === 't')
    {
      content[2].style.display = "block";
      links[2].classList.add("active");
    }
    else
    {
      content[3].style.display = "block";
      links[3].classList.add("active");
    }
  }

  function closeForm()
  {
    console.log(document.querySelectorAll('div.genform'));
    document.querySelectorAll('div.genform')[0].style.display = "none"
  }

  const add = async(e, tab) => {
    e.preventDefault();
    // Get household user is currently on. 
    // Can be local storage, or acces sidebar and check tab classes. 

    // Add list.
    if (tab === "l")
    {
      // Create objects.
      console.log("Not implemented yet");
    }
      
    // Add event.
    else if (tab === "e")
    {
      // Data: Name, Description, Date
    }
    // Add task.
    else if (tab === "t")
    {
      // Data: Name, Date
    }
    // Add member to household.
    else 
    {
      e.preventDefault();
      // Data: username to be added
      const user = await addUser(houseHold.id, username.current.value);
    }
  }

    return (
      <div className="genform">
        <div className="tabs">
          <button className="tablinks" id="l" onClick={() => openTab("l")}>List</button>
          <button className="tablinks" id="e" onClick={() => openTab("e")}>Event</button>
          <button className="tablinks active" id="t" onClick={() => openTab("t")}>Task</button>
          <button className="tablinks" id="m" onClick={() => openTab("m")}>Member</button>
        </div>

      {/* Create form for list */}
        <div className="tabcontent" style={{display: "none"}} id="list">
          <div className="form-group">
            <label htmlFor="listName">Enter your list name</label>
            <input type="text" className="form-control" id="listName" placeholder="Grocery List" required ref={title}></input>
          </div>

          <div className="form-group">
            <label htmlFor="listDesc">Enter your list description</label>
            <input type="text" className="form-control" id="listDisc" placeholder="List to track grocery items" required ref={desc}></input>
          </div>

          <div className="form-group">
            <label htmlFor="listTask">Link to a task?</label>
            <select id="listTask" className="form-control" ref={linkedTask}>
              <option value="none">None</option>
              <option value="Task1">Task1</option>
              <option value="Task2">Task2</option>
              <option value="Task3">Task3</option>
            </select>
          </div>

          <div className="formBtn">
            <button type="submit" className="btn btn-danger" onClick={() => closeForm()}>Close</button>
            <button type="submit" className="btn btn-purple" onClick={async (e) => await add(e, "l")}>Add List</button>
          </div>
          
        </div>

        {/* Create form for event */}
        <div className="tabcontent" style={{display: "none"}} id="event">
        
          <div className="form-group" style={{"display": "flex", "flexDirection":"column", "gap": "1rem"}}>
            <input required type="text" value={userInput} onChange={handleChange} className="form-control" id="eventName" placeholder="Event Name" ref={title}/>
            <input type="text" value={userDesc} onChange={handleChange3} className="form-control" id="name" placeholder="Event Description" ref={desc}/>
          </div>

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
          <div className="form-group selections" style={{"marginTop": "1rem"}}>
            <select id="taskType" className="form-control childSelect" ref={freq}>
              <option value="DAILY">Daily</option>
              <option value="WEEKLY">Weekly</option>
              <option value="MONTHLY">Monthly</option>
              <option value="YEARLY">Yearly</option>
            </select>
          </div>

          <div className="formBtn">
            <button type="submit" className="btn btn-danger" onClick={() => closeForm()}>Close</button>
            <button type="submit" className="btn btn-purple" onClick={async (e) => await add(e, "e")}>Add Event</button>
          </div>
        </div>

        {/* Create form for task */}
        <div className="tabcontent"  id="task">
          <div className="form-group">
            <label htmlFor="eventName">Enter your task name</label>
            <input type="text" className="form-control" id="taskName" placeholder="Task Name" required ref={title}></input>
          </div>

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
              <input type="checkbox" id="chooselist" name="chooselist" onClick={() => handleListOrItem('list')}></input>
            </div>

            <div className="childSelect" style={{"display": "flex", "gap": "1rem"}}>
              <label htmlFor="chooseitem">Attach to item</label>
              <input type="checkbox" id="chooseitem" name="chooseitem" onClick={() => handleListOrItem('item')}></input>
            </div>
          </div>

          <div className="selections vertical">
            {/* Frequency Type Options: Once, Daily, Weekly, Monthly, Yearly */}
            <select id="taskType" className="form-control childSelect" ref={freq}>
              <option value="DAILY">Daily</option>
              <option value="WEEKLY">Weekly</option>
              <option value="MONTHLY">Monthly</option>
              <option value="YEARLY">Yearly</option>
            </select>

            { listoritem === 'list' ? 
              <>
                <select required id="listList" onChange={handleChange4} className="form-control childSelect" ref={listAttach}>
                  {/*pulling from JSON file data.json, needs to be connected to list database to retrieve list names*/}
                  { data.map(d => {
                    return <option value={d.listName}>{d.listName}</option>
                  })}
                </select>
                <select id="taskType" className="form-control childSelect">
                  <option>Complete source on completion</option>
                  <option>Keep forever</option>
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
                  <option>Complete source on completion</option>
                  <option>Keep forever</option>
                </select>
              </>
              :
              <></>
            }
          </div>         

          <div className="formBtn">
            <button type="submit" className="btn btn-danger" onClick={() => closeForm()}>Close</button>
            <button type="submit" className="btn btn-purple" onClick={async (e) => await add(e, "t")}>Add Task</button>
          </div>
        </div>

        {/* Create form for adding a person */}
        <div className="tabcontent" style={{display: "none"}} id="event">
          <div className="form-group">
            <label htmlFor="eventName">Enter member</label>
            <input type="text" className="form-control" id="eventName" placeholder="username" required ref={username}></input>
          </div>

          <div className="formBtn">
            <button type="submit" className="btn btn-danger" onClick={() => closeForm()}>Close</button>
            <button type="submit" className="btn btn-purple" onClick={async (e) => await add(e, "m")}>Add Member</button>
          </div>
        </div>
      </div>
    )
}

export default Form;
