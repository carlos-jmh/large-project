import React from 'react'
import './navbar.css'
import LogoSquare from '../../images/logo_square.png';
import LogoRound from '../../images/logo_round.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark justify-content-between">
        {/* Replace with image logo once we have that downloaded and ready*/}
        <a className="navbar-brand" href="/">
            <img src={LogoRound} 
            alt="household brand logo here, house held up by two hands"/>
            <span></span>
        </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/">Home</a>
          <a className="nav-item nav-link" href="/signup">Sign Up</a>
          <a className="nav-item nav-link" href="/login">Login</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
