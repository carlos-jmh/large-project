import React, {useState, useRef} from 'react'
import ListItem from '../listItem/ListItem';
import * as Icon from 'react-bootstrap-icons';
import './list.css'
import { deleteExistingList, editExistingList } from '../../api/mutating';


const List = ({
  list,
  setState,
  listItems,
  listIndex,
  handleListItemUpdate,
  handleListItemDelete
}) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  
  const newName = useRef('');
  // console.log(listItems);

  const showOrHide = () => {
    setOpen(!open);
  }

  // Function to open editList.
  function showList() {
    // Show edit form.
    setEdit(true);
  }

  const deleteList = async(e) => {
    console.log(list);
    // Call API to delete list. Requires listId. 
    
    // Refresh the page.
    setEdit(false);

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
    // console.log(newName.current.value);

    // If the name was changed.
    if (list.title !== newName.current.value)
    {
      // Create new list object. 
      const listToUpdate = {
        ...list,
        title: newName.current.value,
      }

      // Call API to updateList
      const updatedList = await editExistingList(listToUpdate);

      // Confirm no error. 
      if (updatedList !== null)
      {
        setState(prevState => {
          const newListData = [...prevState];
          const changedList = newListData.find(element => element.id === list.id);
          changedList.title = newName.current.value;
          return newListData;
        })
      }

      setEdit(false);
    }
    
    setEdit(false); 
  }

  return (
    <>
    {
      !edit ? 
      (
        <div className="arrayList">
          <div className="section">
            <h6 className="sectionHeader">
              <div>
                {open ? <Icon.CaretDown onClick={showOrHide}/> : <Icon.CaretRight onClick={showOrHide}/>}
                {list.title}
              </div>
              <Icon.ThreeDots onClick={showList}/>
            </h6>
            <hr className="listLine"></hr>
              
            <div className="items">
              {/* Place map of listitems after ? */}
              {/* Items: title, id, houseHoldId, description, completed */}
              {open ? 
                listItems.map((item, index) => {
                  return (
                    <ListItem
                      key={index}
                      item={item}
                      listIndex={listIndex}
                      itemIndex={index}
                      handleListItemUpdate={handleListItemUpdate}
                      handleListItemDelete={handleListItemDelete}
                    />
                  )
                })
              : 
                <></>
              }
            </div>
          </div>
        </div>
      )
      :
      (
        <div id={list.id} className="editList">
          <label htmlFor="listName">List Name:</label>
          <input type="text" className="form-control" id="listName" placeholder={list.title} ref={newName}></input>
          <div className="editListBut">
            <button onClick={deleteList}>Delete</button>
            <button onClick={doneList}>Done</button>
          </div>
        </div>
      )
    }
    </>
  );
};

export default List;


