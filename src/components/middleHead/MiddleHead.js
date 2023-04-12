import React, { useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import './middleHead.css';

const MiddleHead = () => {
    function loadInbox() {
        document.querySelectorAll('div.midContent')[0].style.display = "none";
        document.querySelectorAll('div.lists')[0].style.display = "none";
        document.querySelectorAll('div.inbox')[0].style.display = "block";

        document.getElementsByClassName("loadUpcoming")[0].classList.remove('active');
        document.getElementsByClassName("loadLists")[0].classList.remove('active');
        document.getElementsByClassName("loadInbox")[0].classList.add('active');
    }
    
    function loadUpcoming() {
        document.querySelectorAll('div.inbox')[0].style.display = "none";
        document.querySelectorAll('div.lists')[0].style.display = "none";
        document.querySelectorAll('div.midContent')[0].style.display = "";

        document.getElementsByClassName("loadLists")[0].classList.remove('active');
        document.getElementsByClassName("loadInbox")[0].classList.remove('active');
        document.getElementsByClassName("loadUpcoming")[0].classList.add('active');
    }

    function loadLists() {
        document.querySelectorAll('div.inbox')[0].style.display = "none";
        document.querySelectorAll('div.midContent')[0].style.display = "none";
        document.querySelectorAll('div.lists')[0].style.display = "block";

        document.getElementsByClassName("loadLists")[0].classList.remove('active');
        document.getElementsByClassName("loadUpcoming")[0].classList.remove('active');
        document.getElementsByClassName("loadLists")[0].classList.add('active');
    }

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
}

export default MiddleHead