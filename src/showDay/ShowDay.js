import React, { useState, useEffect } from 'react';


function ShowDay({value, toDo}) {

  const date = value.clone()._d.toString().slice(0, 10)
  let result = toDo.find((item) => item.date === date);

  return (
    <div className="ShowDay">
      <h2>{date}</h2>
      <ul>
        {(result !== undefined) ? 
          toDo.map((item) => 
            (item.date === date) && item.item.map((item, index) => 
              <li key={index}>{item.task}<input type="checkbox" onChange={console.log('change to checked')}/></li> )) 
              : <li>No deadlines today!</li>}
      </ul>
    </div>
  )
}

export default ShowDay;
