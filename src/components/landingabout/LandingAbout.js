import React from 'react'
import './landingabout.css'
import AboutWidget from '../../images/who_we_are.png';
import Houses from '../../images/houses.jpg';


function LandingAbout()
{
    return(
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
        
    )
}

export default LandingAbout
