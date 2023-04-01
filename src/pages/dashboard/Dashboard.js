import React from 'react'
import './dashboard.css'
import Usernav from "../../components/usernav/Usernav"
import Sidebar from "../../containers/sidebar/Sidebar"
import Middle from "../../containers/middle/Middle"
import Right from "../../containers/right/Right"

const Dashboard = () => {
  return (
    <div>
        <Usernav/>
        <div className="content">
            <div className="sidebar">
              <Sidebar/>
            </div>
            <div className="middle">
              <Middle/>
            </div>
            <div className="right">
              <Right/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard