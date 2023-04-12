import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import * as Icon from "react-bootstrap-icons";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginSignup from './pages/LoginSignup'
import Landing from './pages/Landing'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<LoginSignup auth="signIn"/>}/>
        <Route path="/signup" element={<LoginSignup auth="signUp"/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
