import React, { useState, useEffect } from 'react';
import moment from 'moment';

function ShowDay({value, toDo}) {

  const date = value.clone()._d.toString().slice(0, 10)

  return (
    <div className="ShowDay">
      <h2>{date}</h2>
      <ul>
        {toDo.map((item) => 
          (item.date === date) && item.task.map((task, index) => 
          <li key={index}>{task}</li>))}
      </ul>
    </div>
  );
}

export default ShowDay;
