import React, { useState } from 'react';
import moment from 'moment';

function ShowDay({value, toDo}) {
  const result = toDo.find((day) => day.date === "mon")
  console.log('s', result.task);
  const date = value.clone()._d.toString().slice(0, 10)
  return (
    <div className="ShowDay">
      <h2>{date}</h2>
      <ul>
          {result.task.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default ShowDay;
