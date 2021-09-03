import React, { useState, useEffect } from 'react';
import buildCalendar from "./build";
import style from "./style";
import "./calendar.css"
import dayStyles, {beforeToday} from './style';
import Header from './Header';

function Calendar({value, onChange}) {

  const [calendar, setCalendar] = useState([])


  useEffect(() => {

    setCalendar(buildCalendar(value))

  }, [value])

  const dayNames = ["M", "T", "W", "T", "F", "L", "S"];


  return (
    <div className="calendar">
      <Header value={value} setValue={onChange}/>
      <div className="body">
        <div className="day-names">
          {dayNames.map((day) => (<div className="weekday">{day}</div>))}
        </div>
        {calendar.map((week) => (
          <div className="week"> 
            {week.map((day) => (
              <div className="day" onClick={() => !beforeToday(day) && onChange(day)}>   
                <div 
                  className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Calendar;
