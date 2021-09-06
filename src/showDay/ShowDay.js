import React, { useState, useEffect } from 'react';

// send checked state up together with id. 
// make new post
// in post, find item through date and id and change checked state. remve/update state and send back


function ShowDay({value, toDo, check}) {

  const date = value.clone()._d.toString().slice(0, 10)
  let result = toDo.find((item) => item.date === date);

  const handleOnChange = (evt) => {
    if (evt.target.checked) check(evt.target.value)
  }


  return (
    <div className="ShowDay">
      <h2>{date}</h2>
      <ul>
        {(result !== undefined) ? 
          toDo.map((item) => 
            (item.date === date) && item.item.map((item) => 
            ((item.checked === false) && 
              <li key={item.id}>{item.task}
                <input key={item.id} type="checkbox" value={item.id} onChange={handleOnChange}/>
              </li>)              
            )) 
          : <li>No deadlines today!</li>} 
      </ul>
    </div>
  )
}

export default ShowDay;
