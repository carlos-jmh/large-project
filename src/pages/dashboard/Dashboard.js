import React, { useState, createContext } from 'react'
import './dashboard.css'
import Usernav from "../../components/usernav/Usernav"
import Sidebar from "../../containers/sidebar/Sidebar"
import Middle from "../../containers/middle/Middle"
import MiddleHead from '../../components/middleHead/MiddleHead'

// Use context: houseHoldId, therefore userNav and middle can update.
const Dashboard = ({theme, icon}) => {
  // Setup state and context. 
  const [houseHoldId, sethouseHoldId] = useState(null)
  const houseHoldContext = createContext(null);

  return (
    <div>
        <Usernav theme = {theme} icon = {icon}/>
        <div className="content">
            <div className="sidebar">
              <Sidebar theme = {icon}/>
            </div>
            <div className="middle">
              <MiddleHead theme = {icon}/>
              <Middle theme = {icon}/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard