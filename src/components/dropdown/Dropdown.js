import React from 'react';
import './dropdown.css';
import * as Icon from 'react-bootstrap-icons';

import { Auth as CognitoAuth } from 'aws-amplify';

const Dropdown = () => {

    const signOutUser = async () => {
        try {
          await CognitoAuth.signOut();
          window.location.href = "/";
        } catch (error) {
          console.log(error);
        }
    }
    
    // Function to edit a user's username.
    // Idea: Bring up popup to edit it? Or edit inhouse and change button to done?
    function editUsername() {
        
        // Make username p tag be editable.
        let paragraph = document.getElementById('username');

        paragraph.contentEditable = true;
        paragraph.style.border = "solid";
        paragraph.style.borderWidth = "1px";
        paragraph.style.borderColor = "#007bff";

        // Show done button.
        let done = document.getElementById("done-button");
        let edit = document.getElementById('edit-button');

        edit.style.display = "none";
        done.style.display = "block";
    }

    // Function to update username.
    function submitUsername() {
        // Make API call to update. If this goes through submit.


        // Remove editing status for paragraph.
        let paragraph = document.getElementById('username');
        paragraph.contentEditable = true;
        paragraph.style.border = "none";

        // Show edit button.
        let done = document.getElementById("done-button");
        let edit = document.getElementById('edit-button');

        done.style.display = "none";
        edit.style.display = "block";
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
                        <button id="edit-button" onClick={editUsername}>edit</button>
                        <button id="done-button" onClick={submitUsername} style={{"display": "none"}}>done</button>
                    </div>
                </div>
                <hr/>
                <div className="child-group">
                    <p>Logout</p>
                    <button onClick={signOutUser}>logout</button>
                </div>
            </div>
        </div>
    )
}

export default Dropdown