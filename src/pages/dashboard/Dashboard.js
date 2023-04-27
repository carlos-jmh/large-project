import React, { useState } from 'react'
import './dashboard.css'
import Usernav from "../../components/usernav/Usernav"
import Sidebar from "../../containers/sidebar/Sidebar"
import Middle from "../../containers/middle/Middle"
import MiddleHead from '../../components/middleHead/MiddleHead'
import { HouseHoldContext } from './HouseHoldContext';

// Use context: houseHoldId, therefore userNav and middle can update.
const Dashboard = ({theme, icon}) => {
  // Setup state and context. 
  const [houseHold, setHouseHold] = useState({});

  return (
    <HouseHoldContext.Provider value={{houseHold, setHouseHold}}>
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
    </HouseHoldContext.Provider>
  )
}

export default Dashboard
