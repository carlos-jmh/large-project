import React, { useState } from 'react'
import * as ReactDOM from 'react-dom';
import './usernav.css'
import * as Icon from 'react-bootstrap-icons'

import Form from '../../components/form/Form';

const Usernav = () => {

  const [hide, setHide] = useState(false);

  function showGenForm()
  {
    document.querySelectorAll('div.genform')[0].style.display = "block";
  }

  function toggleSide()
  {
    setHide(!hide);

    if (!hide)
      document.querySelectorAll('div.sidebar')[0].style.display = "none";
    else 
      document.querySelectorAll('div.sidebar')[0].style.display = "block";
  }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark justify-content-between">
            {/* Replace with image logo once we have that downloaded and ready*/}
            {/* Place other icons here */}
            <div className="navbar-nav">
                <a className="nav-item nav-link size" href="/"><Icon.House size="27px"/></a>
                <a className="nav-item nav-link size" onClick={toggleSide}><Icon.ThreeDotsVertical size="27px"/></a>
            </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* OnClick call form component */}
              <a className="nav-item nav-link" onClick={() => showGenForm()}><Icon.PlusLg size="27px"/></a>
              <a className="nav-item nav-link" href="/"><Icon.PersonCircle size="27px"/></a>
            </div>
          </div>
        </nav>
      )
}

export default Usernav
