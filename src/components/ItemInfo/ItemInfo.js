import React from "react";
import { CSSTransition } from "react-transition-group";
import "./ItemInfo.css";

const ItemInfo = props => {
    return (
      <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={{enter: 0, exit: 300}}
      >
        <div className="modal" onClick={props.onClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h4 className="modal-title">{props.title}</h4>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
              <button onClick={props.onSubmit} className="btn btn-light" >
                Confirm
              </button>
              <button onClick={props.delete} className="btn btn-light">
                Delete
              </button>
            </div>
          </div>
        </div>
      </CSSTransition>
      //document.getElementById("root")
    );
};

export default ItemInfo;
