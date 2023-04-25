import React, { useEffect } from 'react'
import * as Icon from 'react-bootstrap-icons';
import './middleHead.css';

const MiddleHead = ({theme}) => {
    useEffect(() => {
      loadInbox();
    });
    
    function loadInbox() {
        document.querySelectorAll('div.midContent')[0].style.display = "none";
        document.querySelectorAll('div.lists')[0].style.display = "none";
        document.querySelectorAll('div.inbox')[0].style.display = "block";

        if(theme === 'light') {
          document.getElementsByClassName("loadUpcoming")[0].classList.remove('active');
          document.getElementsByClassName("loadLists")[0].classList.remove('active');
          document.getElementsByClassName("loadInbox")[0].classList.add('active');
        } else {
          document.getElementsByClassName("loadUpcoming-dark")[0].classList.remove('active-dark');
          document.getElementsByClassName("loadLists-dark")[0].classList.remove('active-dark');
          document.getElementsByClassName("loadInbox-dark")[0].classList.add('active-dark');
        }
    }
    
    function loadUpcoming() {
        document.querySelectorAll('div.inbox')[0].style.display = "none";
        document.querySelectorAll('div.lists')[0].style.display = "none";
        document.querySelectorAll('div.midContent')[0].style.display = "";

        if(theme === 'light') {
          document.getElementsByClassName("loadLists")[0].classList.remove('active');
          document.getElementsByClassName("loadInbox")[0].classList.remove('active');
          document.getElementsByClassName("loadUpcoming")[0].classList.add('active');
        } else {
          document.getElementsByClassName("loadLists-dark")[0].classList.remove('active-dark');
          document.getElementsByClassName("loadInbox-dark")[0].classList.remove('active-dark');
          document.getElementsByClassName("loadUpcoming-dark")[0].classList.add('active-dark');
        }
    }

    function loadLists() {
        document.querySelectorAll('div.inbox')[0].style.display = "none";
        document.querySelectorAll('div.midContent')[0].style.display = "none";
        document.querySelectorAll('div.lists')[0].style.display = "block";

        if(theme === 'light') {
          document.getElementsByClassName("loadInbox")[0].classList.remove('active');
          document.getElementsByClassName("loadUpcoming")[0].classList.remove('active');
          document.getElementsByClassName("loadLists")[0].classList.add('active');
        } else {
          document.getElementsByClassName("loadLists-dark")[0].classList.remove('active-dark');
          document.getElementsByClassName("loadUpcoming-dark")[0].classList.remove('active-dark');
          document.getElementsByClassName("loadLists-dark")[0].classList.add('active-dark');
        }
    }
  
  if(theme === 'light') {
    return (
      <div className="views">
          <button className="loadInbox" onClick={loadInbox}>
            <Icon.InboxFill/>
            <h6>Inbox</h6>
          </button>
          <button className="loadUpcoming" onClick={loadUpcoming}>
            <Icon.Calendar3/>
            <h6>Upcoming</h6>
          </button>
          <button className="loadLists" onClick={loadLists}>
            <Icon.List/>
            <h6>Lists</h6>
          </button>
      </div>
    )
  } else {
    return (
      <div className="views-dark">
          <button className="loadInbox-dark" onClick={loadInbox}>
            <Icon.InboxFill/>
            <h6>Inbox</h6>
          </button>
          <button className="loadUpcoming-dark" onClick={loadUpcoming}>
            <Icon.Calendar3/>
            <h6>Upcoming</h6>
          </button>
          <button className="loadLists-dark" onClick={loadLists}>
            <Icon.List/>
            <h6>Lists</h6>
          </button>
      </div>
    )
  }
}

export default MiddleHead