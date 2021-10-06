import React from 'react';
import Header from '../header/Header';
import Body from '../body/Body';
import "./calendar.css";

interface Props {
  value: any, 
  onChange(para:any): void,
  toDo: Object,
  api: any
}
function Calendar({value, onChange, toDo, api}:Props) {

  return (
    <main className="calendar">
      <Header value={value} setValue={onChange}/>
      <Body value={value} onChange={onChange} toDo={toDo} api={api}/>
    </main>
  );
  
}

 export default Calendar;
