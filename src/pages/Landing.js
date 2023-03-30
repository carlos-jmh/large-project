import React from 'react'
import Navbar from '../components/navbar/Navbar';
import LandingBody from '../components/landingbody/LandingBody'
import LandingAbout from '../components/landingabout/LandingAbout'

function Landing() {
  return (
    <div>
        <Navbar/>
        <LandingBody/>
        <LandingAbout/>
    </div>
  )
}

export default Landing