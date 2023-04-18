import React, {useState, useEffect} from 'react'
import Add from '../add/Add';
import './form.css';

// This all-in-one form allows household creation, task creation, and list creation.
const Form = () => {

  // Set button to active class (background color more grey)
  // Pass value to dashboard that allows inbox value to be changed.
  
  function openTab(tab)
  {
    // Get content and tabs.
    let content = document.querySelectorAll('div.tabcontent');
    let links = document.querySelectorAll('button.tablinks');
    
    for (let i = 0; i < content.length; i++)
    {
      content[i].style.display = "none";
      links[i].classList.remove('active');
    }

    if (tab === "l")
    {
      content[0].style.display = "block";
      links[0].classList.add("active");
    }
    else if (tab === "e")
    {
      content[1].style.display = "block";
      links[1].classList.add("active");
    }
    else
    {
      content[2].style.display = "block";
      links[2].classList.add("active");
    }
  }

  function closeForm()
  {
    console.log(document.querySelectorAll('div.genform'));
    document.querySelectorAll('div.genform')[0].style.display = "none"
  }

    return (
      <div class="genform">
        <div className="tabs">
          <button class="tablinks" id="l" onClick={() => openTab("l")}>List</button>
          <button class="tablinks" id="e" onClick={() => openTab("e")}>Event</button>
          <button class="tablinks active" id="t" onClick={() => openTab("t")}>Task</button>
          <button type="submit" onClick={() => closeForm()}>X</button>
        </div>

      {/* Create form for list */}
        <div class="tabcontent" style={{display: "none"}} id="list">
          <div class="form-group">
            <label htmlFor="listName">Enter your list name</label>
            <input type="text" class="form-control" id="listName" placeholder="Grocery List" required></input>
          </div>

          <div class="form-group">
            <label htmlFor="listDesc">Enter your list description</label>
            <input type="text" class="form-control" id="listDisc" placeholder="List to track grocery items" required></input>
          </div>

          <div class="form-group">
            <label htmlFor="listTask">Link to a task?</label>
            <select id="listTask" class="form-control">
              <option>Task1</option>
              <option>Task2</option>
              <option>Task3</option>
            </select>
          </div>

          <div className="formBtn">
            <button type="submit" class="btn btn-danger" onClick={() => closeForm()}>Close</button>
            <button type="submit" class="btn btn-success">Add List</button>
          </div>
          
        </div>

        {/* Create form for event */}
        <div class="tabcontent" style={{display: "none"}} id="event">
          <div class="form-group">
            <label htmlFor="eventName">Enter your event name</label>
            <input type="text" class="form-control" id="eventName" placeholder="Class" required></input>
          </div>

          <div class="form-group">
            <label htmlFor="eventDesc">Enter your event description</label>
            <input type="text" class="form-control" id="eventDesc" placeholder="COP4331" required></input>
          </div>

          <div class="form-group">
            <label htmlFor="event">Enter event date</label>
            <input type="datetime-local" class="form-control" id="event"></input>
          </div>

          <div className="formBtn">
            <button type="submit" class="btn btn-danger" onClick={() => closeForm()}>Close</button>
            <button type="submit" class="btn btn-success">Add Item</button>
          </div>
        </div>

        {/* Create form for task */}
        <div class="tabcontent"  id="task">
          <div class="form-group">
            <label for="taskName">Enter your task name</label>
            <input type="text" class="form-control" id="taskName" placeholder="Walk dog" required></input>
          </div>

          <div class="form-group">
            <label for="taskType">Task type</label>
              <select id="taskType" class="form-control">
                <option>Delete on completion</option>
                <option>Forever</option>
              </select>
          </div>

          <div class="form-group">
            <label for="itemList">Link to a list</label>
              <select id="itemList" class="form-control">
                <option>List1</option>
                <option>List2</option>
                <option>List3</option>
              </select>
          </div>

          <div className="formBtn">
            <button type="submit" class="btn btn-danger" onClick={() => closeForm()}>Close</button>
            <button type="submit" class="btn btn-success">Add Task</button>
          </div>
          
        </div>
      </div>
    )
}

export default Form