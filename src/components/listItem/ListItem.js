import React, { useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
 
const ListItem = ({item, listIndex, itemIndex, handleToggle, lname}) => {
  
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState(false);


  const handleClick = (e) => {
      e.preventDefault();
      item.completed = !item.completed;
      handleToggle(item, listIndex, itemIndex);
  }

  const editListItem = async () => {
    setActive(true);
    let p = document.getElementById(item.title);
    console.log(p);
    p.contentEditable = !p.contentEditable;
    setActive(false);
  }

   return (
      <div id={item.id} value={item.id}  
      className={item.completed ? "todo strike" : "todo"}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}>
        <p id={item.title} onClick={!active ? handleClick : () => {}}>{item.title}</p>
        { shown && (<Icon.ThreeDots className="threedots" onClick={editListItem}/>) }
        
      </div>
   );
};

export default ListItem;
