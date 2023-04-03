import React from 'react'
import Householdinfo from '../../components/householdinfo/Householdinfo'

// Vertically list component of householdInfo
const Sidebar = () => {
  return (
    <div>
        Sidebar
        {/* Get list of all households, as well as pertinent information regarding them.
            Create map of all the information.
            Goes in component householdInfo pass household name, tasks due today"
        */}
        <Householdinfo name="Dorm" inbox="7" today="4" upcoming="2"/>
    </div>
  )
}

export default Sidebar