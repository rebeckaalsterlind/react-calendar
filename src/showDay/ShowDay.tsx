import React, {useState, useEffect} from 'react';
import moment from 'moment';
import './showDay.css';

interface Props {
  value: any,
  toDo: any,
  check(input: any): void
}

interface State {
  input: Object,
}

function ShowDay({value, toDo, check}:Props, state: State) {
  const [input, setInput] = useState({});
  const date: string = moment(value.clone()._d).format("YYYY-MM-DD");
  const title: Date = new Date(date);


  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInput({"task": evt.target.value, "id": evt.target.id})
    const done: HTMLElement | null = document.getElementById("evt.target.id"); 
    if(done !== null) done.classList.add("strike");
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
          {(toDo.find((item:any) => item.date === date) !== undefined) ? 
            toDo.map((item:any) => 
              (item.date === date) && item.item.map((item:any) => (
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
