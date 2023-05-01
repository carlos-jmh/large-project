import React from "react";
import { CSSTransition } from "react-transition-group";
import "./ItemInfo.css";

const ItemInfo = props => {
  if(props.theme == "light") {
    return (
      <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={300}
      >
        <div className="modal">
          <div className="modal-content" >
            <div className="modal-header">
              <h4 className="modal-title">{props.title}</h4>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
              <button onClick={props.onClose} className="btn btn-light" >
                Confirm
              </button>
              <button onClick={props.delete} className="btn btn-light">
                Delete
              </button>
            </div>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button onClick={props.onSubmit} className="btn" >
              Confirm
            </button>
            <button onClick={props.delete} className="btn">
              Delete
            </button>
          </div>
        </div>
      </CSSTransition>
    );
    
  }
};

export default ItemInfo;
