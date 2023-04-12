import React from 'react'
import './householdinfo.css';

// Pass props to this function, figure out the JSON later, but should store 
// Household Name
const Householdinfo = ({name}) => {

  function display()
  {
    let tabs = document.querySelectorAll('button.round-button');
    console.log(tabs);

    for (let i = 0; i < tabs.length; i++)
    {
      tabs[i].classList.remove('active2');
    }

    // Add active to current.
    document.getElementById(name).classList.add('active2');
  }

  function updateHouse()
  {
    display();
  }
  return (
    <div>
      <button class="round-button bg2" id={name}>
          <span class="round-button" onClick={updateHouse}>{name}</span>
      </button>
    </div>
  )
}

export default Householdinfo