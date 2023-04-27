import React, { useContext } from 'react'
import './householdinfo.css';
import { HouseHoldContext } from '../../pages/dashboard/HouseHoldContext';

// Pass props to this function, figure out the JSON later, but should store 
// Household Name
const Householdinfo = ({houseHold, houseHoldClickHandler, theme}) => {

    // // Do something with household ID to load its info.
    // function display()
    // {



    //   let tabs = document.querySelectorAll('button.round-button');
    //   // console.log(tabs);

    //   for (const element of tabs)
    //   {
    //     element.classList.remove('active2');
    //     element.classList.add('inactive');
    //   }

    //   // Add active to current.
    //   document.getElementById(name).classList.remove('inactive');
    //   document.getElementById(name).classList.add('active2');
    // }

    // function updateHouse()
    // {
    //   display();
    // }

  return (
    <div>
      <button
        onClick={(event) => houseHoldClickHandler(event, houseHold)}
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
