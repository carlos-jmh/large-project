import React, {useState, useRef} from 'react'
import ListItem from '../listItem/ListItem';
import * as Icon from 'react-bootstrap-icons';
import './list.css'
import { deleteExistingList, editExistingList } from '../../api/mutating';


const List = ({list, name, setState, listItems, listIndex, handleToggle}) => {
  const [open, setOpen] = useState(false);
  
  const newName = useRef('');
  // console.log(listItems);

  const showOrHide = () => {
    setOpen(!open);
  }

  // Function to open editList.
  function showList() {

    // Show edit form.
    document.getElementById(list.id).style.display = "block";
  }

  const deleteList = async(e) => {
    console.log(list);
    // Call API to delete list. Requires listId. 
    
    // Refresh the page.
    document.getElementById(list.id).style.display = "none";

    const deleteList = await deleteExistingList(list.id);

    if (deleteList !== null)
    {
      setState(prevState => {
        const newListData = [...prevState];
        const newListy = newListData.filter(element => element.id !== list.id);
        return newListy;
      });
    }
    
  }

  const doneList = async(e) => {

    // If the name was changed.
    if (list.title !== newName.current.value)
    {
      // Create new list object. 
      let copyList = list;
      copyList.title = newName.current.value;
      console.log(copyList);

      document.getElementById(list.id).style.display = "none";

      // Call API to updateList
      const updatedList = await editExistingList(copyList);

      // Confirm no error. 
      if (updatedList !== null)
      {
        setState(prevState => {
          const newListData = [...prevState];
          let newListy = newListData.filter(element => element.id !== list.id);
          newListy = [...newListy, {...updatedList, listItems: []}]
          return newListy;
        })
      }
    }
    document.getElementById(list.id).style.display = "none";   

    // After done, refresh page?, set display to none.    
  }

  return (
    <div className="arrayList">
      <div className="section">
          <h6 className="sectionHeader">
            <div>
              {open ? <Icon.CaretDown onClick={showOrHide}/> : <Icon.CaretRight onClick={showOrHide}/>}
              {name}
            </div>
            <Icon.ThreeDots onClick={showList}/>
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
          <div id={list.id} className="editList" style={{"display":"none"}}>
            <label htmlFor="listName">List Name:</label>
            <input type="text" className="form-control" id="listName" value={name} placeholder={name} ref={newName}></input>
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


