import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './App.css';

import Calendar from './calendar/calendar/Calendar';
import Add from './add/Add';
import ShowAll from './showAll/ShowAll';
import ShowDay from './showDay/ShowDay';
import postList from './fetch/post';
import getList from './fetch/get';
// fetch failing (get) everynow and then
// ISSUE:    not updating komponents on change of props/state. unreliable with fetch working? 
//next: print api
//next: fixa databas?
//next: deploya
//pimpa med css och funktioner
function App() {

  const [value, setValue] = useState(moment());
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState(null);
  const [checked, setChecked] = useState(null);
  
  function postUpdate(state, route) {

    if(state !== null) {
      
      const d = value.clone()._d.toString().slice(0, 10)
      postList(state, d, route);
    
    }
    
    getList((data) => setToDo(data));

  } 

  useEffect(() => {
   
    postUpdate(newTask, "add");
    setNewTask(null);

  }, [newTask])

  useEffect(() => {
  
    postUpdate(checked, "checked");
    setChecked(null)

  }, [checked])


  return (
    <div className="App">
      <ShowAll toDo={toDo} />
      <Calendar value={value} onChange={setValue} toDo={toDo} />
      <aside className="App aside">
        <Add add={item => setNewTask(item)} />
        <ShowDay value={value} toDo={toDo} check={done => setChecked(done)} />
      </aside>
    </div>
  );
}

export default App;
