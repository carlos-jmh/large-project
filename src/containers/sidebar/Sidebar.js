import React, { useState } from 'react'
import Householdinfo from '../../components/householdinfo/Householdinfo'
import './sidebar.css'
import * as Icon from 'react-bootstrap-icons'


// Vertically list component of householdInfo
const Sidebar = () => {
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
    </div>
  )
}

export default Sidebar



/*

import React, { useState } from 'react'
import Householdinfo from '../../components/householdinfo/Householdinfo'
import './sidebar.css'
import * as Icon from 'react-bootstrap-icons'

// Vertically list component of householdInfo
const Sidebar = () => {
  const [style, setStyle] = useState("container");
  const [sidebar, setSidebar] = useState("sidebar");
  const [isOpen, setIsOpen] = useState(true);

  function toggle() {
    setIsOpen((isOpen) => !isOpen); 

    if(isOpen) {
      setStyle("container");
      setSidebar("sidebar");
    } else {
      setStyle("container-close");
      setSidebar("sidebar-close");
    }
    
  }

  
  return (
    <div class = {style}>
      <button class = "closeButton" onClick={() => toggle()}><Icon.ThreeDotsVertical size="27px" color = "rgb(150, 150, 150)"/></button>
      {isOpen && <div className= {sidebar}>
          {/* Get list of all households, as well as pertinent information regarding them.
              Create map of all the information.
              Goes in component householdInfo pass household name, tasks due today"
         
          <Householdinfo name="Dorm"/>
          <Householdinfo name="Apartment"/>
      </div>}
    </div>
  );
}

export default Sidebar*/