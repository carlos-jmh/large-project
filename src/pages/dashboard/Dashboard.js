import React from 'react'
import './dashboard.css'
import Usernav from "../../components/usernav/Usernav"
import Sidebar from "../../containers/sidebar/Sidebar"

const Dashboard = () => {
  return (
    <div>
        <Usernav/>
        <div className="content">
            <div className="sidebar">
              <Sidebar/>
            </div>
            <div className="middle">

            </div>
            <div className="right">
              
            </div>
        </div>
    </div>
  )
}

export default Dashboard