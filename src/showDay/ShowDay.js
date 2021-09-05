import React, { useState } from 'react';
import moment from 'moment';

function ShowDay({value, toDo}) {
  const date = value.clone()._d.toString().slice(0, 10)
  const result = toDo.find((day) => day.date === date)

  return (
    <div className="ShowDay">
      <h2>{date}</h2>
      <ul>
          {(result !== undefined) ? result.task.map((item, index) => <li key={index}>{item}</li>) : <p>No deadlines today</p>}
      </ul>
    </div>
  );
}

export default ShowDay;
