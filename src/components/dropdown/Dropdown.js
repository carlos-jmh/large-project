import React, { useState, useEffect, useContext } from 'react';
import './dropdown.css';
import * as Icon from 'react-bootstrap-icons';
import { Auth as CognitoAuth } from 'aws-amplify';
import { editHouseHold, editHouseHoldMember, removeUser } from '../../api/mutating';
import { fetchHouseHoldMembers } from '../../api/fetching';
import { HouseHoldContext } from '../../pages/dashboard/HouseHoldContext';

const Dropdown = ({setHouseHolds, theme}) => {

    const [houseHoldMember, setHouseHoldMember] = useState({});
    const { houseHold } = useContext(HouseHoldContext);
    const [nickname, setNickname] = useState("");
    const [username, setUsername] = useState("");

    const signOutUser = async () => {
        try {
          await CognitoAuth.signOut();
          window.location.href = "/";
        } catch (error) {
          console.log(error);
        }
    }
    
    // Load when houseHold changes.
    useEffect(() => {        
        async function loadHouseholdMembers() {
            if (!houseHold.id || houseHold.id === "") {
                console.log("No houseHoldId defined to fetch members");
                return;
            }

            const members = await fetchHouseHoldMembers();
            console.log(members);

            const member = members.find(element => element.houseHoldId === houseHold.id);
            
            if (member !== undefined) {
                setHouseHoldMember(member);
                setNickname(member.nickname);
            }
        }

        loadHouseholdMembers();
    }, [houseHold])

    // Load on first render.
    useEffect(() => {
        async function loadUsername() {
            const user = await CognitoAuth.currentAuthenticatedUser();
            setUsername(user.username);
        }
        loadUsername();
    }, [])

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

        
        paragraph.contentEditable = true;
        paragraph.style.border = "none";

        // Show edit button.
        let done = document.getElementById("done-button");
        let edit = document.getElementById('edit-button');

        done.style.display = "none";
        edit.style.display = "block";
        await editHouseHoldMember(member);
    }

    function editHouseholdName() {
        
        let paragraph = document.getElementById('householdname');

        paragraph.contentEditable = true;
        paragraph.style.border = "solid";
        paragraph.style.borderWidth = "1px";
        paragraph.style.borderColor = "#007bff";

        // Show done button.
        let done = document.getElementById("done-button2");
        let edit = document.getElementById('edit-button2');

        edit.style.display = "none";
        done.style.display = "block";
    }

    // Function to update house name.
    const submitHouseholdName = async () => {        
        let paragraph = document.getElementById('householdname');
        
        const newHouse = {...houseHold};

        newHouse.name = paragraph.textContent;

        paragraph.contentEditable = false;
        paragraph.style.border = "none";

        // Show edit button.
        let done = document.getElementById("done-button2");
        let edit = document.getElementById('edit-button2');

        done.style.display = "none";
        edit.style.display = "block";
        setHouseHolds(prev => {
            const copy = [...prev];
            let current = copy.findIndex(element => element.id === newHouse.id)
            copy[current] = newHouse;
            return copy;
        });
        editHouseHold(newHouse);
    }


    // Function to leave the specific houseHold. Should leave, than refresh.
    const leaveHousehold = async () => {
        
        // Check if user truly wants to leave. 
        if (window.confirm("Are you sure you want to leave the current household?"))
        {  
            // Remove: houseHoldId, houseHoldMemberId 
            await removeUser(houseHold.id, houseHoldMember.id);       
            window.location.reload();
        }
    }
    
    if(theme === "light") {
        return (
            <div className="dropdown-menu">
                <div className="user-info">
                    <Icon.PersonCircle/>
                    {/* Get's the locally stored username of the last authorized user. */}
                    <p>{username}</p>
                </div>
                <hr/>
                <div className="edit-info">
                    <div className="grouping">
                        <label htmlFor="username">HOUSEHOLD USERNAME</label>
                        <div className="child-group">
                            {/* Change to be household specific user information: should default to locally stored username */}
                            <p id="username">{nickname}</p>
                            <button id="edit-button" onClick={editUsername}><Icon.GearFill/></button>
                            <button id="done-button" onClick={async () => await submitUsername()} style={{"display": "none"}}>done</button>
                        </div>
                    </div>
                    <div className="grouping">
                        <label htmlFor="username">HOUSEHOLD NAME</label>
                        <div className="child-group">
                            <p id="householdname">{houseHold.name}</p>
                            <button id="edit-button2" onClick={editHouseholdName}><Icon.Pencil/></button>
                            <button id="done-button2" onClick={async () => await submitHouseholdName()} style={{"display": "none"}}>done</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="grouping">
                        <div className="child-group leave-house">
                            <p>Leave Household</p>
                            <button id="leave-button" onClick={async () => await leaveHousehold()}><Icon.ArrowLeftCircle/></button>
                        </div>
                    </div>
                    <hr/>
                    <div className="grouping">
                        <div className="child-group">
                            <p>Logout</p>
                            <button id="logout-button" onClick={async () => await signOutUser()}><Icon.DoorClosedFill/></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div style={{backgroundColor:'darkslategray'}} className="dropdown-menu">
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
                            <button id="done-button" onClick={async () => await submitUsername()} style={{"display": "none"}}>done</button>
                        </div>
                    </div>
                    <div className="grouping">
                        <label htmlFor="username">HOUSEHOLD NAME</label>
                        <div className="child-group">
                            <p id="householdname">{houseHold.name}</p>
                            <button id="edit-button2" onClick={editHouseholdName}><Icon.Pencil/></button>
                            <button id="done-button2" onClick={async () => await submitHouseholdName()} style={{"display": "none"}}>done</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="grouping">
                        <div className="child-group leave-house">
                            <p>Leave Household</p>
                            <button id="leave-button" onClick={async () => await leaveHousehold()}><Icon.ArrowLeftCircle/></button>
                        </div>
                    </div>
                    <hr/>
                    <div className="grouping">
                        <div className="child-group">
                            <p>Logout</p>
                            <button id="logout-button" onClick={async () => await signOutUser()}><Icon.DoorClosedFill/></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dropdown
