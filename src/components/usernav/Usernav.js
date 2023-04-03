import React from 'react'
import * as Icon from 'react-bootstrap-icons'

const Usernav = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark justify-content-between">
            {/* Replace with image logo once we have that downloaded and ready*/}
            {/* Place other icons here */}
            <div className="navbar-nav">
                <a className="nav-item nav-link active " href="/"><Icon.House/></a>
                <a className="nav-item nav-link active" href="/"><Icon.ThreeDotsVertical/></a>
            </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/"><Icon.PlusLg/></a>
              <a className="nav-item nav-link active" href="/"><Icon.PersonCircle/></a>
            </div>
          </div>
        </nav>
      )
}

export default Usernav
