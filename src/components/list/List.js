import React, {useState, useRef} from 'react'
import ListItem from '../listItem/ListItem';
import * as Icon from 'react-bootstrap-icons';
import './list.css'


const List = ({name, listItems, listIndex, handleToggle}) => {
  const [open, setOpen] = useState(false);
  
  const newName = useRef('');
  // console.log(listItems);

  const showOrHide = () => {
    setOpen(!open);
  }

  // Function to open editList.
  function showList() {

    // Show edit form.
    document.getElementById("editList").style.display = "block";
  }

  function deleteList() {
    // Call API to delete list.
    // Refresh the page.
    document.getElementById("editList").style.display = "none";
  }

  function doneList() {
    // Call API to updateList

    // After done, refresh page?, set display to none.
    document.getElementById("editList").style.display = "none";
  }

  return (
    <div className="arrayList">
      <div className="section">
          <h6 className="sectionHeader">
            <Icon.InfoCircle onClick={showList}/>
            {name}
            {open ? <Icon.CaretDown onClick={showOrHide}/> : <Icon.CaretRight onClick={showOrHide}/>}
          </h6>
          <hr className="listLine"></hr>
          
          <div className="items">
            {/* Place map of listitems after ? */}
            {/* Items: title, id, houseHoldId, description, completed */}
            {open ? listItems.map((item, index) => {
                return <ListItem key={index} item={item} listIndex={listIndex} itemIndex={index} handleToggle={handleToggle} lname={name}/>
            }) : <></>}
          </div>

          {/* Contain list name, available for edit, delete and done button */}
          <div id="editList" style={{"display":"none"}}>
            <label htmlFor="listName">List Name:</label>
            <input type="text" className="form-control" id="listName" placeHolder={name} ref={newName}></input>

            <div className="editListBut">
              <button onClick={deleteList}>Delete</button>
              <button onClick={doneList}>Done</button>
            </div>
          </div>
      </div>
    </div>
    );
};

export default List;


