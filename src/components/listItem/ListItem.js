import React, { useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import { deleteExistingItem } from '../../api/mutating';
import './ListItem.css';
 
const ListItem = ({item, listIndex, itemIndex, handleListItemUpdate, handleListItemDelete}) => {
  
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    item.completed = !item.completed;
    handleListItemUpdate(item, listIndex, itemIndex);
  }

  const editListItem = async () => {
    setActive(true);    
  }

  const doneListItem = (e) => {
    e.preventDefault();
    item.title = document.getElementsByClassName('editableP')[0].textContent;
    setActive(false);
    handleListItemUpdate(item, listIndex, itemIndex);
  }

  const deleteListItem = (e) => {
    e.preventDefault();
    setActive(false);
    handleListItemDelete(item, listIndex, itemIndex);
  }

   return ( 
    <>
    {
      !active ? 
      (<div id={item.id} value={item.id}  
        className={item.completed ? "todo strike" : "todo"}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}>
          <p id={item.title} onClick={!active ? handleClick : () => {}}>{item.title}</p>
          { shown && (<Icon.ThreeDots className="threedots" onClick={editListItem}/>) }
          </div>
      )
      :
      (
        <div className="todo">
          <p contentEditable="true" className="editableP">{item.title}</p>
          <div style={{"display": "flex", "gap": "1rem"}}>
            <button style={{"color": "white"}} onClick={deleteListItem}>delete</button>
            <button style={{"color": "white"}} onClick={doneListItem}>done</button>
          </div>
        </div>
      )
    }
    </>
   );
};

export default ListItem;
