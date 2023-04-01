import React from 'react'
 
const ListItem = ({todo, handleToggle, lname}) => {
  const handleClick = (e) => {
      e.preventDefault()
      handleToggle(e.currentTarget.id, lname) 
  }
   return (
      
      <div id={todo.id} key={todo.id + todo.task} value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
        {todo.task}
      </div>
   );
};

export default ListItem
