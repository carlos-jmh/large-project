import React from 'react'
import './householdinfo.css';

// Pass props to this function, figure out the JSON later, but should store 
// Household Name, and the number for inbox, today and upcoming.
const Householdinfo = (props) => {
  return (
    <div class="constraint">
      <button class="round-button">
      <div class="round-button-circle">
        <span class="round-button">{props.name}</span>
      </div>
      </button>
    </div>
  )
}

export default Householdinfo