import React, { useState, useEffect } from 'react';
import moment from 'moment';
import buildCalendar from "../build";
import dayStyles, {beforeToday, isRed} from '../style';

import './body.css'

function Body({value, onChange, toDo, api}) {

  const [calendar, setCalendar] = useState([])

  useEffect(() => {
    setCalendar(buildCalendar(value))
  }, [value])


  return (
      <main className="body">
        {calendar.map((week, subIndex) => (
          <section className="week" key={subIndex}> 
            {week.map((day, dayIndex) => (
              <div className="day" key={dayIndex} onClick={() => !beforeToday(day) && onChange(day)}>   
                <div className={dayStyles(day, value)}>
                  {isRed(day, api)}
                  {toDo.map((item, index) => 
                    (item.date === moment(day._d).format("YYYY-MM-DD") && item.item.length > 0)
                    && <li className="length" key={index}> Deadlines: {item.item.length}</li>)}
                </div>
              </div>
            ))}
          </section>
        ))}
      </main>
  );
  
}

 export default Body;
