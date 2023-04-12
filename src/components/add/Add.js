import React, {useState} from 'react'
import './add.css'
import * as Icon from 'react-bootstrap-icons'

const Add = ({addTask}) => {
  const [add, setAdd] = useState(false);
  const [ userInput, setUserInput ] = useState('');
  const [ userDate, setDateInput ] = useState('');


  function changeAdd() {
    setAdd(!add);
  }

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput, userDate);
    setUserInput("");
    setDateInput("");
  }

  if (!add)
    return (
      <div className="task">
          <div className="addTask">
            {/* onClick change database data to complete and refresh*/}
            <Icon.PlusLg color="purple" onClick={changeAdd}/>
            <p onClick={changeAdd}>Add task/item</p>
          </div>

          {/* When add task is clicked, open form for adding */}
      </div>
    )
  else 
    return (
      <form onSubmit={handleSubmit} className="addingTask">
        <input type="text" value={userInput} onChange={handleChange} class="form-control" id="name" placeholder="Task/Item Name"/>
        <input type="datetime-local" value={userDate} class="form-control" id="date"/>
        <hr></hr>
        <div className="buttons">
          <button class="btn btn-danger" onClick={changeAdd}>close</button>
          <button class="btn" id="purple">add</button>
        </div>
      </form>
    )
}

export default Add