import React from 'react';

function ShowDay({value, toDo, check}) {

  const date = value.clone()._d.toString().slice(0, 10)

  const handleOnChange = (evt) => {
    if (evt.target.checked) check(evt.target.value)
  }

  return (
    <div className="ShowDay">
      <h2>{date}</h2>
      <ul>
        {(toDo.find((item) => item.date === date) !== undefined) ? 
          toDo.map((item) => 
            (item.date === date) && item.item.map((item) => (
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
