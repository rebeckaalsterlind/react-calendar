import React, {useState, useEffect} from 'react';

function ShowDay({value, toDo, check}) {
  const [input, setInput] = useState(null);

  const date = value.clone()._d.toString().slice(0, 10)


  const onChange = (evt) => {
    setInput({"task": evt.target.value, "id": evt.target.id})
  }

  useEffect(() => {
    if (input !== null) {
      check(input)
    }
  }, [input])

  return (
    <div className="ShowDay">
      <h2>{date}</h2>
      {(toDo.length !== 0) &&
        <ul>
          {(toDo.find((item) => item.date === date) !== undefined) ? 
            toDo.map((item) => 
              (item.date === date) && item.item.map((item) => (
                <li key={item.id}>{item.task}
                  <input key={item.id} type="checkbox" id={item.id} value={item.task} onChange={(evt) => onChange(evt)}/>
                </li>
              ))) 
          : <li>No deadlines today!</li>}
        </ul>
      } 
    </div>
  )
}

export default ShowDay;
