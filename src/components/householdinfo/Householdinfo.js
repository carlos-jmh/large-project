import React from 'react'
import './householdinfo.css';

// Pass props to this function, figure out the JSON later, but should store 
// Household Name
const Householdinfo = ({name}) => {
  return (
    <div>
      <button class="round-button">
          <span class="round-button">{name}</span>
      </button>
    </div>
  )
}

export default Householdinfo