import React, { useState, useEffect } from 'react'
import Householdinfo from '../../components/householdinfo/Householdinfo'
import './sidebar.css'
import * as Icon from 'react-bootstrap-icons'
import AddHousehold from '../../components/addHousehold/AddHousehold'
import { getCognitoToken, getCognitoUser } from '../../components/AuthUser'
import { API, graphqlOperation } from 'aws-amplify'

// Vertically list component of householdInfo
const Sidebar = () => {
  const [houseHolds, setHouseHolds] = useState([])

  // Set button to active class (background color more grey)
  // Pass value to dashboard that allows inbox value to be changed.
  
  const addNewHousehold = (houseHold) => {
    setHouseHolds([...houseHolds, houseHold]);
  }

  const getUserProfile = async () => {
    try {
      const user = await getCognitoUser();
      const token = await getCognitoToken();

      const userProfile = await API.graphql(
        graphqlOperation(
          `query GetUserProfileByOwner($owner: String!) {
            userProfileByOwner(owner: $owner) {
              items {
                id
              }
            }
          }`,
          { owner: user.attributes.sub }
        ),
        { Authorization: token }
      );

      return userProfile.data.userProfileByOwner.items[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getUsersHouseHolds = async (userProfileId) => {
    try {
      const token = await getCognitoToken();

      const houseHolds = await API.graphql(
        graphqlOperation(
          `query GetHouseHoldMembersByUserProfileId($userProfileId: ID!) {
            houseHoldMembersByUserProfileId(userProfileId: $userProfileId) {
              items {
                HouseHold {
                  id
                  name
                }
              }
            }
          }`,
          { userProfileId: userProfileId }
        ),
        { Authorization: token }
      );

      return houseHolds.data.houseHoldMembersByUserProfileId.items.map(
        (houseHoldMember) => houseHoldMember.HouseHold
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  // get the user's households
  const fetchHouseHolds = async () => {
    const userProfile = await getUserProfile();

    if (userProfile) {
      const houseHolds = await getUsersHouseHolds(userProfile.id);
      setHouseHolds(houseHolds);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        //const user = await getCognitoUser();
        //setUsername(user.username);
  
        await fetchHouseHolds();
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div class = "container">
        <div class="households">
          <h3>Households</h3>
          <hr></hr>
        </div>

        <div className="houses">
          {houseHolds?.map(house => {
              return (
                  <Householdinfo name={house.name}/>
              )
          })}
        </div>
      
        <div id = "addNewHousehold">
          <AddHousehold addNewHousehold={addNewHousehold}/>
        </div>

        <div id = "joinHousehold">
          
        </div>
    </div>
  )
}

export default Sidebar