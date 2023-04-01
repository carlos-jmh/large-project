import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import * as Icon from "react-bootstrap-icons";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginSignup from './pages/LoginSignup'
import Landing from './pages/Landing'
import Dashboard from './pages/dashboard/Dashboard'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from './components/GlobalStyles/GlobalStyles';
import { lightTheme, darkTheme } from './components/Theme/Theme';

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<LoginSignup auth="signIn"/>}/>
        <Route path="/signup" element={<LoginSignup auth="signUp"/>}/>
        <Route path="/dashboard" element={<Dashboard theme = {themeToggler} icon = {theme}/>}/>
      </Routes>
    </BrowserRouter>
    </>
    </ThemeProvider>
  )
}

export default App
