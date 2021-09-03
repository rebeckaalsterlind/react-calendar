import React, { useState } from 'react';
import moment from 'moment';
import "./calendar.css"

function Calendar() {
  const [calendar, setCalendar] = useState([])
  const [value, setValue] = useState(moment());
  const startDay = value.clone().startOf('month').startOf('isoWeek');
  const endDay =  value.clone().endOf('month').endOf('isoWeek');
  const day = startDay.clone().subtract(1, "day");
 

  while(day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
      .fill(0)
      .map(() => day.add(1, "day").clone())
    );
  };

  return (
    <div className="calendar">
      {calendar.map((week) => (
      <div className="day">      
        {week.map((day) => (
        <div>{day.format("D").toString()}</div>
        ))}
       </div>))}
    </div>
  );
}

export default Calendar;
