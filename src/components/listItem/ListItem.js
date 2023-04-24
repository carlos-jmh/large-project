import React from 'react'
 
const ListItem = ({todo, listIndex, itemIndex, handleToggle, lname}) => {
  const handleClick = (e) => {
      e.preventDefault();
      handleToggle(listIndex, itemIndex, !todo.complete);
  }
   return (
      <div value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
        {todo.task}
      </div>
   );
};

export default ListItem
