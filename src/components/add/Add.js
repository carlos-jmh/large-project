import React from 'react'
import './add.css'
import * as Icon from 'react-bootstrap-icons'

const Add = () => {
  return (
    <div className="task">
        <div className="addTask">
          {/* onClick change database data to complete and refresh*/}
          <Icon.PlusLg color="purple"/>
          <p>Add task/item</p>
        </div>

        {/* When add task is clicked, open form for adding */}
    </div>
  )
}

export default Add