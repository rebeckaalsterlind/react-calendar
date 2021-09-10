import React, {useState, useEffect} from 'react';
import moment from 'moment';
import './showDay.css';

function ShowDay({value, toDo, check}) {
  const [input, setInput] = useState(null);
  // uppdatera inte efter checked utan stryk över? och uppdatera nästa gång?

  //const date = value.clone()._d.toString().slice(0, 10)
  const date = moment(value.clone()._d).format("YYYY-MM-DD")
  const title = new Date(date);

  const onChange = (evt) => {
    setInput({"task": evt.target.value, "id": evt.target.id})
    document.getElementById(evt.target.id).classList.add("strike");
  }

  useEffect(() => {
    
    if (input !== null) {
      setTimeout(function() {
        check(input)
      }, 1000);  
    }
    
  }, [input])
  
  return (
    <div className="ShowDay">
      <h2>{title.toString().slice(0,10)}</h2>
      {(toDo.length !== 0) &&
        <ul>
          {(toDo.find((item) => item.date === date) !== undefined) ? 
            toDo.map((item) => 
              (item.date === date) && item.item.map((item) => (
                <li key={item.id} id={item.id}>{item.task}
                  <input key={item.id} type="checkbox" id={item.id} value={item.task} onChange={(evt) => onChange(evt)}/>
                </li>
              ))) 
          : <li id="no-deadlines">No deadlines today!</li>}
        </ul>
      } 
    </div>
  )
}

export default ShowDay;
