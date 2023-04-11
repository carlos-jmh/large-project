import React, { useState } from 'react'
import Householdinfo from '../../components/householdinfo/Householdinfo'
import './sidebar.css'
import * as Icon from 'react-bootstrap-icons'
import AddHousehold from '../../components/addHousehold/AddHousehold'
import householdData from "./households.json";

// Vertically list component of householdInfo
const Sidebar = () => {
  const [households, setHouseholds] = useState(householdData)

  // Set button to active class (background color more grey)
  // Pass value to dashboard that allows inbox value to be changed.
  function loadInbox() {
    document.querySelectorAll('div.midContent')[0].style.display = "none";
    document.querySelectorAll('div.inbox')[0].style.display = "block";
  }

  function loadUpcoming() {
    document.querySelectorAll('div.inbox')[0].style.display = "none";
    document.querySelectorAll('div.midContent')[0].style.display = "";
  }

  const addNewHousehold = (userInput) => {
    let copy = [...households];
    copy = [...copy, { id: households.length + 1, name: userInput}];
    setHouseholds(copy);
  }


  return (
    <div class = "container">
      {/* Get list of all households, as well as pertinent information regarding them.
        Create map of all the information.
        Goes in component householdInfo pass household name, tasks due today"
      */}
      <div class="views">
        <button onClick={loadInbox}>
          <Icon.InboxFill/>
          <h6>Inbox</h6>
        </button>
        <button onClick={loadUpcoming}>
          <Icon.Calendar3/>
          <h6>Upcoming</h6>
        </button>
      </div>
        <div class="households">
          <h3>Households</h3>
          <Householdinfo name="Dorm"/>
          <Householdinfo name="Apartment"/>
        </div>

        {households?.map(house => {
              return (
                  <Householdinfo name={house.name}/>
              )
          })}

        <div id = "addNewHousehold">
          <AddHousehold addNewHousehold={addNewHousehold}/>
        </div>

        <div id = "joinHousehold">
          
        </div>
    </div>
  )
}

export default Sidebar