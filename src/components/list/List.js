import React from 'react'

// Understand how this list can be altered/deleted
const List = (props) => {
  return (
    <div>
        <div className="heading">
            <p>List Name</p>
            <p>Num Items</p>
        </div>

        {/* Understand what actions are allowed on these items*/}
        {/* Make this collapsible */}
        <div className="itemList">
            <p>Bannana</p>
            <p>Strawberry</p>
            <p>Watermelon</p>
        </div>
    </div>
  )
}

export default List