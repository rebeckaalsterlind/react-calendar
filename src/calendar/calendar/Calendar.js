import React, { useState, useEffect } from 'react';
import buildCalendar from "../build";
import "./calendar.css"
import dayStyles, {beforeToday} from '../style';
import Header from '../header/Header';

function Calendar({value, onChange, toDo}) {

  const [calendar, setCalendar] = useState([])

  useEffect(() => {

    setCalendar(buildCalendar(value))

  }, [value])

  const dayNames = ["M", "T", "W", "T", "F", "S", "S"];


  return (
    <div className="calendar">
      <Header value={value} setValue={onChange}/>
      <div className="body">
        <div className="day-titles">
          {dayNames.map((day, index) => (<div className="weekday" key={index}>{day}</div>))}
        </div>
        {calendar.map((week, subIndex) => (
          <div className="week" key={subIndex}> 
            {week.map((day, dayIndex) => (
              <div className="day" key={dayIndex} onClick={() => !beforeToday(day) && onChange(day)}>   
                <div className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                   {toDo.map((item, index) => 
                    (item.date === day._d.toString().slice(0, 10))
                    && <li key={index}>{item.item.length} deadlines</li>)}
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
