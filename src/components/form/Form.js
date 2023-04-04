import React, {useState, useEffect} from 'react'
import './form.css';

// This all-in-one form allows household creation, task creation, and list creation.
const Form = () => {
  let create;
  let h, l, i, t;
  let tabh, tabl, tabi, tabt;

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

    return (
      <div>
        <div className="tabs">
          <button class="tablinks" id="h" onClick={() => openTab("h")} ref={(c) => tabh = c}>Household</button>
          <button class="tablinks" id="l" onClick={() => openTab("l")} ref={(c) => tabl = c}>List</button>
          <button class="tablinks" id="i" onClick={() => openTab("i")} ref={(c) => tabi = c}>Item</button>
          <button class="tablinks" id="t" onClick={() => openTab("t")} ref={(c) => tabt = c}>Task</button>
        </div>

        {/* Create form for household */}
        <div class="tabcontent" style={{display: "none"}} id="household" ref={(c) => h = c}>
          <div class="form-group">
            <label for="householdName">Enter your household name</label>
            <input type="text" class="form-control" id="householdName" placeholder="Uni Dorm" required></input>
          </div>

          <button type="submit" class="btn btn-success">Add Household</button>
        </div>

        <div class="tabcontent" style={{display: "none"}} id="list" ref={(c) => l = c}>
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

          <button type="submit" class="btn btn-success">Add List</button>
        </div>

        <div class="tabcontent" style={{display: "none"}} id="item" ref={(c) => i = c}>
          <p>item</p>
        </div>

        <div class="tabcontent" style={{display: "none"}} id="task" ref={(c) => t = c}>
          <p>task</p>
        </div>
      </div>
    )
}

export default Form