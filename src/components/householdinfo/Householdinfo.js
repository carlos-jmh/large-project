import React from 'react'
import './householdinfo.css';

// Pass props to this function, figure out the JSON later, but should store 
// Household Name
const Householdinfo = ({name, id, theme}) => {
  if(theme === 'light') {

    // Do something with household ID to load its info.
    function display()
    {
      let tabs = document.querySelectorAll('button.round-button');
      console.log(tabs);

      for (const element of tabs)
      {
        element.classList.remove('active2');
        element.classList.add('inactive');
      }

      // Add active to current.
      document.getElementById(name).classList.remove('inactive');
      document.getElementById(name).classList.add('active2');
    }

    function updateHouse()
    {
      display();
    }
    return (
      <div>
        <button onClick={updateHouse} className="round-button bg2" id={name}>
            <span className="round-button">{name}</span>
        </button>
      </div>
    )
  } 
  else {
    function display()
    {
      let tabs = document.querySelectorAll('button.round-button-dark');
      console.log(tabs);

      for (const element of tabs)
      {
        element.classList.remove('active2-dark');
        element.classList.add('inactive-dark');
      }

      // Add active to current.
      document.getElementById(name).classList.remove('inactive-dark');
      document.getElementById(name).classList.add('active2-dark');
    }

    function updateHouse()
    {
      display();
    }
    return (
      <div>
        <button onClick={updateHouse} className="round-button-dark bg2-dark" id={name}>
            <span className="round-button-dark">{name}</span>
        </button>
      </div>
    )
  }
}

export default Householdinfo
