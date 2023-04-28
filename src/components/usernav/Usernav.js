import React, { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom';
import './usernav.css'
import * as Icon from 'react-bootstrap-icons'

const Usernav = ({theme, icon}) => {

  const [hide, setHide] = useState(false);
  const [user, setUser] = useState(false);

  function showGenForm()
  {
    document.querySelectorAll('div.genform')[0].style.display = "block";
  }

  function toggleSide()
  {
    setHide(!hide);

    if (!hide)
    {
      document.querySelectorAll('div.sidebar')[0].style.display = "none";
      document.querySelectorAll('div.middle')[0].classList.add("full");
    }
    else 
    {
      document.querySelectorAll('div.sidebar')[0].style.display = "block";
      document.querySelectorAll('div.middle')[0].classList.remove("full");
    }
  }

   // Function to hide or show the users drop down menu.
   function toggleUser()
   {
     setUser(!user);
     
     if(!user)
       document.getElementsByClassName('dropdown-menu')[0].style.display = "block";
     else
       document.getElementsByClassName('dropdown-menu')[0].style.display = "none";
   }

   return (
    <div className = "light">
      <nav className="navbar navbar-expand-sm navbar-dark justify-content-between">
          {/* Replace with image logo once we have that downloaded and ready*/}
          {/* Place other icons here */}
          <div className="navbar-nav">
              <a className="nav-item nav-link size" href="/"><Icon.House size="27px"/></a>
              <button className="nav-item nav-link size" style={{"backgroundColor": "transparent"}} onClick={toggleSide}><Icon.ThreeDotsVertical size="27px"/></button>
          </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* OnClick call form component */}
            <button className="nav-item nav-link" style={{"backgroundColor": "transparent"}} onClick={theme}>{icon === "light"? <Icon.SunFill/> : <Icon.MoonFill/>}</button>
            <button className="nav-item nav-link" style={{"backgroundColor": "transparent"}} onClick={() => showGenForm()}><Icon.PlusLg size="27px"/></button>
            <button className="nav-item nav-link" style={{"backgroundColor": "transparent"}} onClick={toggleUser}><Icon.PersonCircle size="27px"/></button>
          </div>
        </div>
      </nav>
    </div>
    )
}

export default Usernav
