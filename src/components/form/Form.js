import React, {useState, useEffect} from 'react'
import './form.css';

// This all-in-one form allows household creation, task creation, and list creation.
const Form = () => {
  let create;

  const [state, setState] = useState("household");

  if (state === "household")
    return (
      <div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="household" value="household"/>
          <label class="form-check-label" for="household">Household</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="list" value="list" ref={(c) => create = c}/>
          <label class="form-check-label" for="list">List</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="item" value="item" ref={(c) => create = c}/>
          <label class="form-check-label" for="item">Item</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="task" value="task" ref={(c) => create = c}/>
          <label class="form-check-label" for="task">Task</label>
        </div>
        household
      </div>
    )
  else if (state === "task")
    return (
      <div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="household" value="household" ref={(c) => create = c}/>
          <label class="form-check-label" for="household">Household</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="list" value="list" ref={(c) => create = c}/>
          <label class="form-check-label" for="list">List</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="item" value="item" ref={(c) => create = c}/>
          <label class="form-check-label" for="item">Item</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="task" value="task" ref={(c) => create = c}/>
          <label class="form-check-label" for="task">Task</label>
        </div>
        task
      </div>
    )
  else if (state === "item")
    return (
      <div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="household" value="household" ref={(c) => create = c}/>
          <label class="form-check-label" for="household">Household</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="list" value="list" ref={(c) => create = c}/>
          <label class="form-check-label" for="list">List</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="item" value="item" ref={(c) => create = c}/>
          <label class="form-check-label" for="item">Item</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="task" value="task" ref={(c) => create = c}/>
          <label class="form-check-label" for="task">Task</label>
        </div>
        item
      </div>
    )
  else if (state === "list")
      return (
        <div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="household" value="household" ref={(c) => create = c}/>
            <label class="form-check-label" for="household">Household</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="list" value="list" ref={(c) => create = c}/>
            <label class="form-check-label" for="list">List</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="item" value="item" ref={(c) => create = c}/>
            <label class="form-check-label" for="item">Item</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="task" value="task" ref={(c) => create = c}/>
            <label class="form-check-label" for="task">Task</label>
          </div>
          list
        </div>
      )

}

export default Form