import React, {useState} from 'react'
import './add.css'
import * as Icon from 'react-bootstrap-icons'

const Add = () => {
  let taskName;
  const [add, setAdd] = useState(false);

  function changeAdd() {
    setAdd(!add);
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
      <div className="addingTask">
        <input type="text" class="form-control" id="name" placeholder="Task/Item Name"/>
        <input type="datetime-local" class="form-control" id="date"/>
        <hr></hr>
        <div className="buttons">
          <button class="btn btn-danger" onClick={changeAdd}>close</button>
          <button class="btn" id="purple">add</button>
        </div>
      </div>
    )
}

export default Add