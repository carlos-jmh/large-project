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
        </div>
      </CSSTransition>
    );
  } else {
    return (
      <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={300} 
      >
        <div className="Dmodal">
          <div className="Dmodal-content" >
            <div className="Dmodal-header">
              <h4 className="Dmodal-title">{props.title}</h4>
            </div>
            <div className="Dmodal-body">{props.children}</div>
            <div className="Dmodal-footer">
              <button onClick={props.onClose} className="btn btn-dark" >
                Confirm
              </button>
              <button onClick={props.delete} className="btn btn-dark">
                Delete
              </button>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
    
  }
};

export default ItemInfo;
