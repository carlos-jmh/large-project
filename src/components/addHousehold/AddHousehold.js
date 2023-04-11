import React, {useState} from 'react'
import './addHousehold.css'
import * as Icon from 'react-bootstrap-icons'

const AddHousehold = ({addNewHousehold}) => {
  const [add, setAdd] = useState(false);
  const [ userInput, setUserInput ] = useState('');


  function changeAdd() {
    setAdd(!add);
  }

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewHousehold(userInput)
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
        <input type="text" value={userInput} onChange={handleChange} class="form-control" id="name" placeholder="Task/Item Name"/>
        <hr></hr>
        <div className="buttons">
          <button class="btn btn-danger" onClick={changeAdd}>close</button>
          <button class="btn" id="purple">add</button>
        </div>
      </form>
    )
}

export default AddHousehold