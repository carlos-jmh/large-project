import React from 'react';
import './dropdown.css';
import * as Icon from 'react-bootstrap-icons';

const Dropdown = () => {

    // Call API to logout and redirect to landing page?
    function doLogout() {
        
    }
    
    // Function to edit a user's username.
    // Idea: Bring up popup to edit it? Or edit inhouse and change button to done?
    function editUsername() {

    }

    // Function to update username.
    function submitUsername() {

    }
    
    return (
        <div className="dropdown-menu">
            <div className="user-info">
                <Icon.PersonCircle/>
                <p>username here</p>
            </div>
            <hr/>
            <div className="edit-info">
                <div className="grouping">
                    <label htmlFor="username">HOUSEHOLD USERNAME</label>
                    <div className="child-group">
                        <p id="username">household username</p>
                        <button onClick={editUsername}>edit</button>
                        <button onClick={submitUsername} style={{"display": "none"}}>done</button>
                    </div>
                </div>
                <hr/>
                <div className="child-group">
                    <p>Logout</p>
                    <button onClick={doLogout}>logout</button>
                </div>
            </div>
        </div>
    )
}

export default Dropdown