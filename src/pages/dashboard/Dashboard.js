import React from 'react'
import './dashboard.css'
import Usernav from "../../components/usernav/Usernav"
import Sidebar from "../../containers/sidebar/Sidebar"
import Middle from "../../containers/middle/Middle"

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
        </div>
    </div>
  )
}

export default Dashboard