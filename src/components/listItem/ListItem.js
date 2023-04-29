import React from 'react'
 
const ListItem = ({item, listIndex, itemIndex, handleToggle, lname}) => {
  const handleClick = (e) => {
      e.preventDefault();
      item.completed = !item.completed;
      handleToggle(item, listIndex, itemIndex);
  }

   return (
      <div value={item.id} onClick={handleClick} className={item.completed ? "todo strike" : "todo"}>
        {item.title}
      </div>
   );
};

export default ListItem;
