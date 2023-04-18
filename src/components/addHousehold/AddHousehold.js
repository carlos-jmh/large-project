import React, {useState} from 'react'
import './addHousehold.css'
import * as Icon from 'react-bootstrap-icons'
import { API, graphqlOperation } from 'aws-amplify'
import { getCognitoToken }from "../AuthUser"

const AddHousehold = ({addNewHousehold}) => {
  const [add, setAdd] = useState();
  const [ userInput, setUserInput ] = useState('');

  const createHouseHold = async (houseHoldName) => {
    try {
      const token = await getCognitoToken();

      const createNewHouseHoldResponse = await API.graphql(
        graphqlOperation(
          `mutation CreateNewHouseHold($houseHoldName: String!) {
            createNewHouseHold(houseHoldName: $houseHoldName)
          }`,
          { houseHoldName: houseHoldName }
        ),
        { Authorization: token }
      );
      const newHouseHoldId = createNewHouseHoldResponse.data.createNewHouseHold;

      const getHouseHoldResponse = await API.graphql(
        graphqlOperation(
          `query GetHouseHold($id: ID!) {
            getHouseHold(id: $id) {
              id
              name
            }
          }`,
          { id: newHouseHoldId }
        ),
        { Authorization: token }
      );
      const newHouseHold = getHouseHoldResponse.data.getHouseHold;

      return newHouseHold;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  function changeAdd() {
    setAdd(!add);
  }

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newHouseHold = await createHouseHold(userInput)
    addNewHousehold(newHouseHold)
    setUserInput("");
  }

  if (!add)
    return (
        <div className="addTask">
          <button class = "addbutton"><Icon.HouseAdd size="30px" onClick={changeAdd} /></button>
        </div>
    )
  else 
    return (
      <form onSubmit={handleSubmit} className="addingTask">
        <input type="text" value={userInput} onChange={handleChange} class="form-control" id="name" placeholder="Household Name"/>
        <hr></hr>
        <div className="buttons">
          <button class="btn btn-danger" onClick={changeAdd}>close</button>
          <button class="btn" id="purple">add</button>
        </div>
      </form>
    )
}

export default AddHousehold