import React from 'react'
import './landingabout.css'
import AboutWidget from '../../images/who_we_are.png';


function LandingAbout()
{
    return(
        <div className = "wrapper2">
            <div id="whoarewe">
                <img src= {AboutWidget} alt = "Who Are We" />
            </div>
        </div>
        
    )
}

export default LandingAbout