import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './cal.css'

const Cal = ({setSelectedDate}) => {

  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
    setSelectedDate(date);
  }

  return (
    <div className="cal">
      <div className='calendar-container'>
        <Calendar defaultValue={new Date()} minDate={new Date()} onChange={handleDateChange} value={date}/>
      </div>
    </div>
  )
}

export default Cal
