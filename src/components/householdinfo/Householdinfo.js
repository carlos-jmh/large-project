import React from 'react'
import './householdinfo.css';

// Pass props to this function, figure out the JSON later, but should store 
// Household Name, and the number for inbox, today and upcoming.
const Householdinfo = (props) => {
  return (
    <div>
      <button class="round-button">
          <span class="round-button">{props.name}</span>
      </button>
    </div>
  )
}

export default Householdinfo