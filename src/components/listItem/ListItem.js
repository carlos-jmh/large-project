import React from 'react'

function strike() {
    document.getElementById("item1").innerHTML = <s>Apple</s>
}
function ListItem() {
return (
  <div>
    <p id = "item1" onClick = {() => strike()}>Apple</p>
  </div>
  );
}

export default ListItem
