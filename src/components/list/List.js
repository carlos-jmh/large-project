import React from 'react'
import {useCollapse} from 'react-collapsed';
import ListItem from '../listItem/ListItem';

function List() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
  <div className="collapsible">
      <div className="header" {...getToggleProps()}>
          {isExpanded ? 'Grocery List' : '> Grocery List'}
      </div>
      <div {...getCollapseProps()}>
          <div className="content">
              <ListItem /> <br/><br/>
              Click again to hide...
          </div>
      </div>
  </div>
  );
}

export default List

// Understand how this list can be altered/deleted
/*const List = (props) => {
  return (
    <div>
        <div className="heading">
            <p>List Name</p>
            <p>Num Items</p>
        </div>

        Understand what actions are allowed on these items
        Make this collapsible
        <div className="itemList">
            <p>Bannana</p>
            <p>Strawberry</p>
            <p>Apple</p>
        </div>
    </div>
  )
}
*/