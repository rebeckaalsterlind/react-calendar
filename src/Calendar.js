import React, { useState, useEffect } from 'react';
import moment from 'moment';
import buildCalendar from "./build";
import style from "./style";
import "./calendar.css"
import dayStyles from './style';

function Calendar() {

  const [calendar, setCalendar] = useState([])
  const [value, setValue] = useState(moment());

  useEffect(() => {

    setCalendar(buildCalendar(value))

  }, [value])

  function currMonthName() {
    return value.format("MMMM")
  }

  function currYear() {
    return value.format("YYYY")
  }
  
  function prevMonth() {
    return value.clone().subtract(1, "month")
  }

  function nextMonth() {
    return value.clone().add(1, "month")
  }


  return (
    <div className="calendar">
      <div className="header">
        <div className="previous" onClick={() =>  setValue(prevMonth())}>
          {String.fromCharCode(171)}
        </div>
        <div className="current">
          {currMonthName()} {currYear()}
        </div>
        <div className="next" onClick={() => setValue(nextMonth())}>
          {String.fromCharCode(187)}
        </div>
      </div>
      <div className="body">
        {calendar.map((week) => (
          <div className="week"> 
            {week.map((day) => (
              <div className="day" onClick={() => setValue(day)}>   
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
