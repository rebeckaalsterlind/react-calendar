import React, { useState, useEffect } from 'react';
import moment from 'moment';
import buildCalendar from "../build";
import dayStyles, {beforeToday} from '../style';
import Header from '../header/Header';
import "./calendar.css";

function Calendar({value, onChange, toDo, api}) {
  const dayNames = ["M", "T", "W", "T", "F", "S", "S"];

  const [calendar, setCalendar] = useState([])

  useEffect(() => {

    setCalendar(buildCalendar(value))

  }, [value])

let bankHoliday = [];
for (let i in api) {

  if(api[i]["röd dag"] === "Ja") bankHoliday.push({red: api[i]["datum"]})
}


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
                  {bankHoliday.map((item) => (item.red == moment(day._d).format("YYYY-MM-DD").toString()) && <p>Bank holiday!</p>)}
                   {toDo.map((item, index) => 
                    (item.date === moment(day._d).format("YYYY-MM-DD"))
                    && <li key={index}>{(item.item.length > 0) && item.item.length}</li>)}
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
