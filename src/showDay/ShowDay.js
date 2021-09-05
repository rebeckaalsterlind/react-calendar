import React, { useState, useEffect } from 'react';


function ShowDay({value, toDo}) {

  const date = value.clone()._d.toString().slice(0, 10)
  let result = toDo.find((items) => items.date === date);
  console.log('result', result);

  return (
    <div className="ShowDay">
      <h2>{date}</h2>
      <ul>
        {(result !== undefined) ? 
          toDo.map((item) => 
            (item.date === date) && item.task.map((task, index) => 
              <li key={index}>{task}</li> )) 
              : <li>No deadlines today!</li>}
      </ul>
    </div>
  );
}

export default ShowDay;
