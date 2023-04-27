import React, { useState, useEffect, useContext } from 'react'
import Householdinfo from '../../components/householdinfo/Householdinfo'
import './sidebar.css'
import AddHousehold from '../../components/addHousehold/AddHousehold'
import { HouseHoldContext } from '../../pages/dashboard/HouseHoldContext'
import { fetchHouseHoldMembersByHouseHoldId, fetchHouseHolds } from '../../api/fetching'
import { addUser, removeUser } from '../../api/mutating'

// Vertically list component of householdInfo
const Sidebar = ({theme}) => {
  const [houseHolds, setHouseHolds] = useState([])
  // const [houseHoldMembers, setHouseHoldMembers] = useState([])
  
  const { setHouseHold } = useContext(HouseHoldContext);

  // Set button to active class (background color more grey)
  // Pass value to dashboard that allows inbox value to be changed.
  
  const addNewHousehold = (houseHold) => {
    setHouseHolds([...houseHolds, houseHold]);
  }

  const updateHouseHold = (event, houseHold) => {
    event.preventDefault();
    setHouseHold(houseHold);
  }

  useEffect(() => {
    async function fetchData() {
      const houseHolds = await fetchHouseHolds();
      if (!ignore) setHouseHolds(houseHolds);

      // ** EXAMPLE of fetching and editing a HouseHoldMember
      // const houseHoldMembers = await fetchHouseHoldMembers();
      // if (!ignore) setHouseHoldMembers(houseHoldMembers);
      // console.log("HOUSEHOLDER MEMBERS: ", houseHoldMembers);

      // const chickenHouseHoldMember = houseHoldMembers.find((member) => member.houseHoldId === "39e8cb0c-fdb2-4cd2-8587-572ea02635cc");
      // const copyChickenHouseHoldMember = {...chickenHouseHoldMember, nickname: "pepa pig"};
      // const editedChickenHouseHoldMember = await editHouseHoldMember(copyChickenHouseHoldMember);
      // console.log("EDITED CHICKEN HOUSEHOLD MEMBER: ", editedChickenHouseHoldMember);

      // ** EXAMPLE of fetching HouseHoldMembers of this HouseHold
      // const houseHoldId = houseHolds[2].id;
      // const houseHoldMembersOfThisHouseHold = await fetchHouseHoldMembersByHouseHoldId(houseHoldId);
      // console.log("HOUSEHOLD MEMBERS OF THIS HOUSEHOLD: ", houseHoldMembersOfThisHouseHold);

      // ** EXAMPLE of adding a HouseHoldMember
      // const usernameOfNewMember = "mobiletest";
      // const addedMember = await addUser(houseHoldId, usernameOfNewMember);
      // console.log("ADDED MEMBER: ", addedMember);

      // ** EXAMPLE of deleting a HouseHoldMember
      // const houseHoldId = houseHolds[2].id;
      // const houseHoldMemberIdOfMemberToDelete = "9f3e2f25-699e-412d-a733-5dab731f4b8c";
      // const deletedMember = await removeUser(houseHoldId, houseHoldMemberIdOfMemberToDelete);
      // console.log("DELETED MEMBER: ", deletedMember);
    }

    let ignore = false;
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className={theme === 'light' ? 'container' : 'container-dark'}>
        <div className={theme === 'light' ? 'households' : 'households-dark'}>
          <h4>Households</h4>
          <hr></hr>
        </div>

        <div className={theme === 'light' ? 'houses' : 'houses-dark'}>
          {/* Pass house.id as well */}
          {houseHolds?.map((house, index) => {
              return (
                <div key={index}>
                  <Householdinfo houseHold={house} houseHoldClickHandler={updateHouseHold} theme={theme}/>
                </div>
              )
          })}
        </div>
      
        <div id = "addNewHousehold">
          <AddHousehold addNewHousehold={addNewHousehold} theme={theme}/>
        </div>

        <div id = "joinHousehold">
          
        </div>
    </div>
  );
}

export default Sidebar
