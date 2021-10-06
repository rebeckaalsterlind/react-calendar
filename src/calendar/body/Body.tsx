import React, { useState, useEffect } from 'react';
import moment from 'moment';
import buildCalendar from "../build";
import dayStyles, {beforeToday, isRed} from '../style';
import './body.css';

interface Props {
  value: any,
  onChange: any,
  toDo: any,
  api: Object
}

interface State {
  calendar: Object[]
}

function Body({value, onChange, toDo, api}:Props, state: State) {

  const [calendar, setCalendar] = useState([])

  useEffect(() => {

    setCalendar(buildCalendar(value)) 
  }, [value])


  return (
      <main className="body">
        {calendar.map((week:any, subIndex:number) => (
          <section className="week" key={subIndex}> 
            {week.map((day:any, dayIndex:number) => (
              <div className="day" key={dayIndex} onClick={() => !beforeToday(day) && onChange(day)}>   
                <div className={dayStyles(day, value)}>
                  {isRed(day, api)}
                  {toDo.map((item:any, index:number) => 
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
