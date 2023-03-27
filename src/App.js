import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginSignup from './pages/LoginSignup'
import Landing from './pages/Landing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="register" element={<LoginSignup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
