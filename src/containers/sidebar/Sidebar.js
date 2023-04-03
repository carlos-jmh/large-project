import React from 'react'
import Householdinfo from '../../components/householdinfo/Householdinfo'

// Vertically list component of householdInfo
const Sidebar = () => {
  return (
    <div>
        {/* Get list of all households, as well as pertinent information regarding them.
            Create map of all the information.
            Goes in component householdInfo pass household name, tasks due today"
        */}
        <Householdinfo name="Dorm"/>
        <Householdinfo name="Apartment"/>
    </div>
  )
}

export default Sidebar