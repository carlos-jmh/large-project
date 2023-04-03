import React from 'react'

function strike() {
    document.getElementById("item1").innerHTML = <s>Apple</s>
}

// function ListItem() {
// return (
//   <div>
//     <p id = "item1" onClick = {() => strike()}>Apple</p>
//   </div>
//   );
// }

function ListItem() {
  return (
    <div className="task">
        <div className="iTask">
          {/* onClick change database data to complete and refresh*/}
          <input type="checkbox" id="task1" value="task1"/>
          <div class="taskInfo">
            <label htmlFor="task1">Place task name here</label>
            <p>Place event date, blank if no event</p>
          </div>
        </div>
        <hr></hr>
    </div>
  );
}

export default ListItem
