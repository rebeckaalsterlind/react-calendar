import React, { useState } from 'react';
import moment from 'moment';
import './App.css';
import Calendar from './calendar/calendar/Calendar';
import Add from './add/Add';
import ShowAll from './showAll/ShowAll';
import ShowDay from './showDay/ShowDay';

const arr = []
fetch(`http://localhost:3010/users/json`)
.then(res => res.json())
.then(data =>  getToDo(data))

const getToDo = (obj) => {

  for(let i in obj)  arr.push(obj[i])


}



function App() {
  const [value, setValue] = useState(moment());
  const [toDo, SetToDo] = useState(arr);

  return (
    <div className="App">
      <ShowAll toDo={toDo}/>
      <Calendar value={value} onChange={setValue} toDo={toDo}/>
      <aside className="App aside">
        <Add value={value} toDo={toDo}/>
        <ShowDay value={value}/>
      </aside>
    </div>
  );
}

export default App;
