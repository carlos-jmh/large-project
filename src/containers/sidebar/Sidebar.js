import React from 'react'
import Householdinfo from '../../components/householdinfo/Householdinfo'
import './sidebar.css'

import * as Icon from 'react-bootstrap-icons';

// Vertically list component of householdInfo
const Sidebar = () => {

  // Set button to active class (background color more grey)
  // Pass value to dashboard that allows inbox value to be changed.
  function loadInbox() {

  }

  function loadUpcoming() {

  }

  return (
    <div class="sidebarButtons">
        {/* Get list of all households, as well as pertinent information regarding them.
            Create map of all the information.
            Goes in component householdInfo pass household name, tasks due today"
        */}
        <div class="views">
          <button className="in" onClick={loadInbox()}>
            <Icon.InboxFill/>
            <h6>Inbox</h6>
          </button>
          <button className="upcoming" onClick={loadUpcoming()}>
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