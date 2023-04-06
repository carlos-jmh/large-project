import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './cal.css'

const Cal = () => {

  const [date, setDate] = useState(new Date());

  return (
    <div className="cal">
      <div className='calendar-container'>
        <Calendar defaultValue={new Date()} minDate={new Date()} onChange={date => setDate(date)} value={date}/>
      </div>
    </div>
  )
}

export default Cal