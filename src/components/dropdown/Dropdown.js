import React, { useState, useEffect, useContext } from 'react';
import './dropdown.css';
import * as Icon from 'react-bootstrap-icons';
import { Auth as CognitoAuth } from 'aws-amplify';
import { editHouseHoldMember, removeUser } from '../../api/mutating';
import { fetchHouseHoldMembers } from '../../api/fetching';
import { HouseHoldContext } from '../../pages/dashboard/HouseHoldContext';

const Dropdown = () => {

    const [houseHoldMember, setHouseHoldMember] = useState({});
    const [nickname, setNickname] = useState("");
    const { houseHold } = useContext(HouseHoldContext);

    const signOutUser = async () => {
        try {
          await CognitoAuth.signOut();
          window.location.href = "/";
        } catch (error) {
          console.log(error);
        }
    }
    
    // Load on first render.
    useEffect(() => {        
        async function loadHouseholdMembers() {
            const members = await fetchHouseHoldMembers();

            console.log(members);
            console.log(houseHold.id);

            const member = members.find(element => element.houseHoldId === houseHold.id);

            if (!ignore) {
                if (member !== undefined)
                {
                    setHouseHoldMember(member);
                    setNickname(member.nickname);
                }
            }
        }

        let ignore = false;
        loadHouseholdMembers();
        return () => {
            ignore = true;
        };
    }, [houseHold])
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
    const submitUsername = async () => {        
        let paragraph = document.getElementById('username');
        
        const member = houseHoldMember;

        member.nickname = paragraph.textContent;

        editHouseHoldMember(member);
        
        paragraph.contentEditable = true;
        paragraph.style.border = "none";

        // Show edit button.
        let done = document.getElementById("done-button");
        let edit = document.getElementById('edit-button');

        done.style.display = "none";
        edit.style.display = "block";
    }

    // Function to leave the specific houseHold. Should leave, than refresh.
    const leaveHousehold = async () => {
        
        // Check if user truly wants to leave. 
        if (window.confirm("Are you sure you want to leave the current household?"))
        {  
            // Remove: houseHoldId, houseHoldMemberId 
            removeUser(houseHold.id, houseHoldMember.id);         
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
                        <p id="username">{nickname}</p>
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
