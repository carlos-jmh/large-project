import React from 'react'
 
const ListItem = ({item, listIndex, itemIndex, handleToggle, lname}) => {
  console.log(item);
  const handleClick = (e) => {
      e.preventDefault();
      handleToggle(listIndex, itemIndex, !item.complete);
  }
   return (
      <div value={item.id} onClick={handleClick} className={item.completed ? "todo strike" : "todo"}>
        {item.title}
      </div>
   );
};

export default ListItem
