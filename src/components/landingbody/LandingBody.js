import React from 'react'
import './landingbody.css'
import Dinner from '../../images/dinner_party.jpeg';
import Cleaning from '../../images/cleaning.jpeg';
import Groceries from '../../images/grocery_store.jpeg';
import AboutWidget from '../../images/who_we_are.png';
import Houses from '../../images/houses.jpg';

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
    
        <div className = "wrapper2">
            <div className="whoarewe" id="whoarewe">
                <img src= {AboutWidget} alt = "Who Are We" />
            </div>
            
            <div className="houseswrapper" id ="houseswrapper">
                <div id= "houses">
                    <img src= {Houses} alt = "animation of houses" />
                </div>
                <div id="bodytext">
                    <span className="font-body">There's no place like home.</span>
                </div>
            </div>
            
        </div>
    </div>
)
}

export default LandingBody