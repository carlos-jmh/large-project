import React from 'react'
import './middle.css'

import Task from '../../components/task/Task'

const Middle = () => {
  return (
    <div>
      Middle
      {/* This should host components.
          Possible components:
            Tasks for specific household
            Lists for specific household
      */}
      <Task/>
    </div>
  )
}

export default Middle