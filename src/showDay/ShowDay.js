import React, { useState, useEffect } from 'react';


function ShowDay({value, toDo}) {

  const date = value.clone()._d.toString().slice(0, 10)
  let result = toDo.find((item) => item.date === date);

  const handleOnChange = (evt) => {

    if (evt.target.checked) {
      console.log('true');
    }

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
                <input key={item.id} type="checkbox" onChange={handleOnChange}/>
              </li>)              
            )) 
          : <li>No deadlines today!</li>} 
      </ul>
    </div>
  )
}

export default ShowDay;
