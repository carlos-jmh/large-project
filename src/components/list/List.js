import React, {useState} from 'react'
import ListItem from '../listItem/ListItem';
import * as Icon from 'react-bootstrap-icons';
import './list.css'

function List() {
  const [open, setOpen] = useState(false);

  const showOrHide = () => {
    setOpen(!open);
  }

  return (
    <div className="arrayList">
        <div className="section">
          <h6 className="sectionHeader">
            {open ? <Icon.CaretRight onClick={showOrHide}/> : <Icon.CaretDown onClick={showOrHide}/>}
            Grocery List
          </h6>
          <hr className="listLine"></hr>
          <div className="items">
            {/* Place map of listitems after ? */}
            { open ? <><ListItem/><ListItem/> </>: <></> }
          </div>
        </div>
    </div>
  );
}

export default List

// // Understand how this list can be altered/deleted
// const List = (props) => {
//   return (
//     <div>
//         <div className="heading">
//             <p>List Name</p>
//             <p>Num Items</p>
//         </div>

//         {/* Understand what actions are allowed on these items*/}
//         {/* Make this collapsible */}
//         <div className="itemList">
//             <p>Bannana</p>
//             <p>Strawberry</p>
//             <p>Watermelon</p>
//         </div>
//     </div>
//   )
// }

// export default List