import React from 'react'
import './dashboard.css'
import Usernav from "../../components/usernav/Usernav"
import Sidebar from "../../containers/sidebar/Sidebar"
import Middle from "../../containers/middle/Middle"
import MiddleHead from '../../components/middleHead/MiddleHead'

const Dashboard = () => {
  return (
    <div>
        <Usernav/>
        <div className="content">
            <div className="sidebar">
              <Sidebar/>
            </div>
            <div className="middle">
              <MiddleHead/>
              <Middle/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard