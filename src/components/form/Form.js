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
          <p>household</p>
        </div>

        <div class="tabcontent" style={{display: "none"}} id="list" ref={(c) => l = c}>
          <p>list</p>
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