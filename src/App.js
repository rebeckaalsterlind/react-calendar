import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './App.css';
import Calendar from './calendar/calendar/Calendar';
import Add from './add/Add';
import ShowAll from './showAll/ShowAll';
import ShowDay from './showDay/ShowDay';

const arr = []








function App() {

  const [value, setValue] = useState(moment());
  const [toDo, SetToDo] = useState(arr);

  const pushToDo = (obj) => {
    for(let i in obj)  arr.push(obj[i])
    SetToDo(arr);
  }

  useEffect(() => {
  
    fetch(`http://localhost:3010/users/json`)
    .then(res => res.json())
    .then(data =>  {
      pushToDo(data);

    })

  });


  return (
    <div className="App">
      <ShowAll toDo={toDo} />
      <Calendar value={value} onChange={setValue} toDo={toDo}/>
      <aside className="App aside">
        <Add value={value} toDo={toDo}/>
        <ShowDay value={value} toDo={toDo}/>
      </aside>
    </div>
  );
}

export default App;
