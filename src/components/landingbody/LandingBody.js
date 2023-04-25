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
        <br />
        <div className = "wrapper1">
            <div className="child">
                <img src={Dinner} 
            alt="Group of friends eating dinner"/>
            </div>
            <div className="child">
                <img src={Cleaning} 
                alt="Roommates cleaning together"/>
            </div>
            <div className="child">
                <img src={Groceries} 
                    alt="Couple buying groceries together"/>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className = "wrapper2">
            <div id="whoarewe">
                <img src= {AboutWidget} alt = "Who Are We" />
            </div>
            <div id ="houseswrapper">
                <div id= "houses">
                    <img src= {Houses} alt = "animation of houses" />
                </div>
                <div id="bodytext">
                    <span className="font-bold">There is no place like home.</span>
                </div>
            </div>
            
        </div>
    </div>
)
}

export default LandingBody