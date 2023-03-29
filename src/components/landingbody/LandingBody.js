import React from 'react'
import './landingbody.css'

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
    </div>
)
}

export default LandingBody