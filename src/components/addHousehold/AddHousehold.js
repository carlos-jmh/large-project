import React, {useState, useRef } from 'react'
import './addHousehold.css'
import * as Icon from 'react-bootstrap-icons'
import { createHouseHold } from '../../api/mutating'
import { fetchHouseHold } from '../../api/fetching'

const AddHousehold = ({addNewHousehold, theme}) => {
  const [add, setAdd] = useState();
  const [ userInput, setUserInput ] = useState('');
  const hhName = useRef("");

  // Object to create household
  // let hhObj = {houseHoldName: hhName};

  function changeAdd() {
    setAdd(!add);
  }

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newHouseHoldId = await createHouseHold(hhName.current.value);
    if (!newHouseHoldId || newHouseHoldId === "") {
      return;
    }

    const newHouseHold = await fetchHouseHold(newHouseHoldId);
    if (!newHouseHold) {
      return;
    }

    addNewHousehold(newHouseHold)
    setUserInput("");
  }

  if(theme === 'light') {
    if (!add) {
      return (
          <div className="addTask">
            <button className= "addbutton"><Icon.HouseAdd className="addHouse" size="30px" onClick={changeAdd} /></button>
          </div>
      )
    }
    else {
      return (
        <form onSubmit={handleSubmit} className="addingTask addHouse">
          <input type="text" value={userInput} onChange={handleChange} className="form-control" id="name" placeholder="Household Name" ref={hhName}/>
          <hr></hr>
          <div className="buttons">
            <button className="btn btn-danger" onClick={changeAdd}>close</button>
            <button className="btn" id="purple" onClick={handleSubmit}>add</button>
          </div>
        </form>
      )
    }
  } else {
    if (!add) {
      return (
          <div className="addTask-dark">
            <button className= "addbutton-dark"><Icon.HouseAdd className="addHouse-dark" size="30px" onClick={changeAdd} /></button>
          </div>
      )
    }
    else {
      return (
        <form onSubmit={handleSubmit} className="addingTask-dark addHouse">
          <input type="text" value={userInput} onChange={handleChange} className="form-control" id="name" placeholder="Household Name" ref={hhName}/>
          <hr></hr>
          <div className="buttons-dark">
            <button className="btn btn-danger" onClick={changeAdd}>close</button>
            <button className="btn" id="purple" onClick={handleSubmit}>add</button>
          </div>
        </form>
      )
    }
  }
}

export default AddHousehold
