import React from 'react'
import Auth from '../components/auth/Auth'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer';


const LoginSignup = (props) => {
  return (
    <div className='wrapper'>
        <Navbar/>
        <Auth auth={props.auth}/>
        <Footer/>
    </div>
  );
}

export default LoginSignup
