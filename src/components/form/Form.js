import React, {useState, useEffect} from 'react'
import './form.css';

// This all-in-one form allows household creation, task creation, and list creation.
const Form = () => {
  let create;

  const [state, setState] = useState("household");
  
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

    if (tab === "h")
    {
      content[0].style.display = "block";
      links[0].classList.add("active");
    }
    else if (tab === "l")
    {
      content[1].style.display = "block";
      links[1].classList.add("active");
    }
    else if (tab === "i")
    {
      content[2].style.display = "block";
      links[2].classList.add("active");
    }
    else
    {
      content[3].style.display = "block";
      links[3].classList.add("active");
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
          <button class="tablinks" id="h" onClick={() => openTab("h")}>Household</button>
          <button class="tablinks" id="l" onClick={() => openTab("l")}>List</button>
          <button class="tablinks" id="i" onClick={() => openTab("i")}>Item</button>
          <button class="tablinks" id="t" onClick={() => openTab("t")}>Task</button>
        </div>

        {/* Create form for household */}
        <div class="tabcontent" style={{display: "none"}} id="household">
          <div class="form-group">
            <label for="householdName">Enter your household name</label>
            <input type="text" class="form-control" id="householdName" placeholder="Uni Dorm" required></input>
          </div>

          <div className="formBtn">
            <button type="submit" class="btn btn-danger" onClick={() => closeForm()}>Close</button>
            <button type="submit" class="btn btn-success">Add Household</button>
          </div>
        </div>

        <div class="tabcontent" style={{display: "none"}} id="list">
          <div class="form-group">
            <label for="listName">Enter your list name</label>
            <input type="text" class="form-control" id="listName" placeholder="Grocery List" required></input>
          </div>

          <div class="form-group">
            <label for="listDesc">Enter your list description</label>
            <input type="text" class="form-control" id="listDisc" placeholder="List to track grocery items" required></input>
          </div>

          <div class="form-group">
            <label for="listTask">Link to a task?</label>
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

        <div class="tabcontent" style={{display: "none"}} id="item">
          <div class="form-group">
            <label for="itemName">Enter your item name</label>
            <input type="text" class="form-control" id="itemName" placeholder="Bannanas" required></input>
          </div>

          <div class="form-group">
            <label for="itemDesc">Enter your item description</label>
            <input type="text" class="form-control" id="itemDesc" placeholder="Good source of carbs" required></input>
          </div>

          <div class="form-group">
            <label for="itemList">Link to a list</label>
              <select id="itemList" class="form-control">
                <option>List1</option>
                <option>List2</option>
                <option>List3</option>
              </select>
          </div>

          <div class="form-group">
            <label for="listTask">Link to a task?</label>
            <select id="listTask" class="form-control">
              <option>Task1</option>
              <option>Task2</option>
              <option>Task3</option>
            </select>
          </div>

          <div className="formBtn">
            <button type="submit" class="btn btn-danger" onClick={() => closeForm()}>Close</button>
            <button type="submit" class="btn btn-success">Add Item</button>
          </div>
        </div>

        <div class="tabcontent" style={{display: "none"}} id="task">
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
            <label for="event">Make an event?</label>
            <input type="datetime-local" class="form-control" id="event"></input>
          </div>

          <div class="form-group">
            <label for="itemList">Link to a list</label>
              <select id="itemList" class="form-control">
                <option>List1</option>
                <option>List2</option>
                <option>List3</option>
              </select>
          </div>

          <div class="form-group">
            <label for="listTask">Link to a item?</label>
            <select id="listTask" class="form-control">
              <option>Item1</option>
              <option>Item2</option>
              <option>Item3</option>
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