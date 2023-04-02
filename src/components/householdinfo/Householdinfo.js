import React from 'react'
import './householdinfo.css';

// Pass props to this function, figure out the JSON later, but should store 
// Household Name, and the number for inbox, today and upcoming.
const Householdinfo = (props) => {
  return (
    <div className="hhinfo">
      <h2>{props.name}</h2>
      <div className="items">
        <ul>
          <li className="selector">
            <p>Inbox</p>
            <p>{props.inbox}</p>
          </li>
          <li className="selector">
            <p>Today</p>
            <p>{props.today}</p>
          </li>
          <li className="selector">
            <p>Upcoming</p>
            <p>{props.upcoming}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Householdinfo