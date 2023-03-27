import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from '../components/auth/Auth'
import Navbar from '../components/navbar/Navbar'

const LoginSignup = (props) => {
  return (
    <div className='wrapper'>
        <Navbar/>
        <Auth auth={props.auth}/>
    </div>
  );
}

export default LoginSignup