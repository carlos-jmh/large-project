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
    else if (tab === "m")
    {
      e.preventDefault();
      // Data: username to be added
      closeForm();
      const user = await addUser(houseHold.id, username.current.value);
      console.log(user);
    }
  }

    return (
      <div className="genform">
        <div className="tabs">
          <button className="tablinks" id="m">Member</button>
        </div>

        {/* Create form for adding a person */}
        <div className="tabcontent" style={{display: "block"}} id="event">
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
