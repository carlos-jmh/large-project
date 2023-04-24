import React from 'react'
 
const ListItem = ({item, listIndex, itemIndex, handleToggle, lname}) => {
  const handleClick = (e) => {
      e.preventDefault();
      // handleToggle(listIndex, itemIndex, !todo.complete);

      item.complete = !item.complete;
      handleToggle(item, listIndex, itemIndex);
  }
   return (
      <div value={item.id} onClick={handleClick} className={item.complete ? "todo strike" : "todo"}>
        {item.task}
      </div>
   );
};

export default ListItem
