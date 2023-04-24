import React, {useState} from 'react'
import ListItem from '../listItem/ListItem';
import * as Icon from 'react-bootstrap-icons';
import './list.css'


const List = ({name, list, listIndex, handleToggle}) => {
  const [open, setOpen] = useState(false);
  console.log(list);

  const showOrHide = () => {
    setOpen(!open);
  }

return (
  <div className="arrayList">
    <div className="section">
        <h6 className="sectionHeader">
          {name}
          {open ? <Icon.CaretDown onClick={showOrHide}/> : <Icon.CaretRight onClick={showOrHide}/>}
        </h6>
        <hr className="listLine"></hr>
        
        <div className="items">
          {/* Place map of listitems after ? */}
          {/* Items: title, id, houseHoldId, description, completed */}
          {open ? list.map((item, index) => {
              return <ListItem key={index} item={item} listIndex={listIndex} itemIndex={index} handleToggle={handleToggle} lname={name}/>
          }) : <></>}
        </div>
    </div>
  </div>
  );
};

export default List;


