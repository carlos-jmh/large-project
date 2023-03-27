import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark justify-content-between">
      <a className="navbar-brand" href="/">EventAt<span></span></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/">Home</a>
          <a className="nav-item nav-link" href='/universities'>Universities</a>
          <a className="nav-item nav-link" href="/signup">Sign Up</a>
          <a className="nav-item nav-link" href="/login">Login</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
