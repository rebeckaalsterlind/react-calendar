import React from 'react';
import './header.css';

export default function Header({value, setValue}) {

  const dayNames = ["M", "T", "W", "T", "F", "S", "S"];

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

  function thisMonth() {
    return value.isSame(new Date(), "month")
  }


  return (
    <header className="header">
      <section className="top">
        <div className="previous" onClick={() =>  !thisMonth() && setValue(prevMonth())}>
            {!thisMonth() ? String.fromCharCode(171) : null }
          </div>
          <div className="current">
            {currMonthName()} {currYear()}
          </div>
          <div className="next" onClick={() => setValue(nextMonth())}>
            {String.fromCharCode(187)}
          </div>
      </section>
      <section className="day-titles">
        {dayNames.map((day, index) => (<div className="weekday" key={index}>{day}</div>))}
      </section>
    </header>
  )


}