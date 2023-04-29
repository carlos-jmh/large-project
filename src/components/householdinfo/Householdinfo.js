import React, { useContext } from 'react'
import './householdinfo.css';
import { HouseHoldContext } from '../../pages/dashboard/HouseHoldContext';

// Pass props to this function, figure out the JSON later, but should store 
// Household Name
const Householdinfo = ({houseHold, houseHoldClickHandler, theme}) => {

    // Do something with household ID to load its info.
    function display()
    {
      let tabs;

      if (theme === "light")
        tabs = document.querySelectorAll('button.round-button');
      else
        tabs = document.querySelectorAll('button.round-button-dark');
      // console.log(tabs);

      for (const element of tabs)
      {
        if (theme === "light")
        {
          element.classList.remove('active2');
          element.classList.add('inactive');
        }
        else 
        {
          element.classList.remove("active2-dark");
          element.classList.add("inactive-dark");
        }
      }

      // Add active to current.
      if (theme === "light")
      {
        document.getElementById(houseHold.id).classList.remove('inactive');
        document.getElementById(houseHold.id).classList.add('active2');
      }
      else
      {                                                                           
        document.getElementById(houseHold.id).classList.remove('inactive-dark');
        document.getElementById(houseHold.id).classList.add('active2-dark');
      }  
    }

    function updateHouse()
    {
      display();
    }

    return (
      <div>
        <button
          onClick={(event) => {
            houseHoldClickHandler(event, houseHold);
            updateHouse();
          }}
          className={theme === 'light' ? "round-button bg2" : "round-button-dark bg2-dark"}
          id={houseHold.id}
        >
          <span
            className={theme === 'light' ? "round-button" : "round-button-dark"}
          >
            {houseHold.name}
          </span>
        </button>
      </div>
    )
}

export default Householdinfo
