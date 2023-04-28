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

    // Function to leave the specific houseHold. Should leave, than refresh.
    function leaveHousehold() {
        
        // Check if user truly wants to leave. 
        if (window.confirm("Are you sure you want to leave the current household?"))
        {

        }
        else
        {

        }
    }
    
    return (
        <div className="dropdown-menu">
            <div className="user-info">
                <Icon.PersonCircle/>
                {/* Get's the locally stored username of the last authorized user. */}
                <p>{localStorage.getItem('CognitoIdentityServiceProvider.1ncc815mbno6k3oeg06ga39jbe.LastAuthUser')}</p>
            </div>
            <hr/>
            <div className="edit-info">
                <div className="grouping">
                    <label htmlFor="username">HOUSEHOLD USERENAME</label>
                    <div className="child-group">
                        {/* Change to be household specific user information: should default to locally stored username */}
                        <p id="username">{localStorage.getItem('CognitoIdentityServiceProvider.1ncc815mbno6k3oeg06ga39jbe.LastAuthUser')}</p>
                        <button id="edit-button" onClick={editUsername}><Icon.GearFill/></button>
                        <button id="done-button" onClick={submitUsername} style={{"display": "none"}}>done</button>
                    </div>
                </div>
                <hr/>
                <div className="grouping">
                    <div className="child-group leave-house">
                        <p>Leave Household</p>
                        <button id="leave-button" onClick={leaveHousehold}><Icon.ArrowLeftCircle/></button>
                    </div>
                </div>
                <hr/>
                <div className="grouping">
                    <div className="child-group">
                        <p>Logout</p>
                        <button id="logout-button" onClick={signOutUser}><Icon.DoorClosedFill/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown