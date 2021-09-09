import React from 'react';

import Header from '../header/Header';
import Body from '../body/Body';
import "./calendar.css";


function Calendar({value, onChange, toDo, api}) {

  return (
    <main className="calendar">
      <Header value={value} setValue={onChange}/>
      <Body value={value} onChange={onChange} toDo={toDo} api={api}/>
    </main>
  );
  
}

 export default Calendar;
