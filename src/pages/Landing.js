import React from 'react'
import Navbar from '../components/navbar/Navbar';
import LandingBody from '../components/landingbody/LandingBody'
import LandingAbout from '../components/landingabout/LandingAbout'
import Footer from '../components/footer/Footer';

function Landing() {
  return (
    <div>
        <Navbar/>
        <LandingBody/>
        <LandingAbout/>
        <Footer />
    </div>
  )
}

export default Landing