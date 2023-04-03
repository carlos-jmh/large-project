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
          </div>
      </div>
  </div>
  );
}

export default List
