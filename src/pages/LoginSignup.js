import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from '../components/Auth'
import Navbar from '../components/navbar/Navbar'

function LoginSignup() {
  return (
    <div className='wrapper'>
        <Navbar/>
        <Auth/>
    </div>
  );
}

export default LoginSignup