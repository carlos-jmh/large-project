import React from 'react'
import './landingbody.css'
import Dinner from '../../images/dinner_party.jpeg';
import Cleaning from '../../images/cleaning.jpeg';
import Groceries from '../../images/grocery_store.jpeg';

function LandingBody()
{
return(
    <div className = "center-text">
        <div className = "main-title">
            <span className = "font-bold">
                Welcome to HouseHold
            </span>
        </div>
        <div className = "main-body">
            <span className = "font-main">
                Keep your home clean, organized,<br /> and on the same page with the #1 house manager in the world!
            </span>
        </div>
        <br />
        <span className = "font-main">
            <a href="/signup" target="_blank">
                <button> Start now for free! </button>
            </a>
        </span>
        <br />
        <div className = "wrapper1">
            <div className="child">
                <p>Div 1</p>
            </div>
            <div className="child">
                <p>Div 2</p>
            </div>
            <div className="child">
                <p>Div 3</p>
            </div>
        </div>
    </div>
)
}

export default LandingBody