import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './App.css';

import Calendar from './calendar/calendar/Calendar';
import Add from './add/Add';
import ShowAll from './showAll/ShowAll';
import ShowDay from './showDay/ShowDay';
import getList, {fetchAPI, postList} from './fetch';


//*****************   ISSUES *****************
// fetch failing (get) everynow and then
//next: print names days? on showday
//next: deploya
//get font and choose colors
// check memo for the ifs in useeffect?

function App() {

  const [value, setValue] = useState(moment());
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState(null);
  const [checked, setChecked] = useState(null);
  const [api, setApi] = useState([]);
  const [apiDate, setApiDate] = useState(
    {"MM": value.clone().format("MM"), 
    "YYYY": value.clone().format("YYYY")
  })

  //get dates for fetching api
  let month;
  useEffect(() => {
    month = value.clone().format("MM");

    if(month !== apiDate.MM) setApiDate({
      "MM": value.clone().format("MM"), 
      "YYYY": value.clone().format("YYYY") 
    })

  }, [value])

  //fetch API
  useEffect(() => {
    fetchAPI((data) => setApi(data), apiDate);
  }, [apiDate]) 

  //fetch toDo funktion 
  function fetch(state, endpoint) {

    let date = moment(value.clone()._d).format("YYYY-MM-DD");

    if(state !== null) postList(state, date, endpoint);
    getList((data) => setToDo(data));

  } 

  //fetch when added
  useEffect(() => {
   
    fetch(newTask, "add");
    setNewTask(null);

  }, [newTask])

  //fetch when checked
  useEffect(() => {
  
    fetch(checked, "checked");
    setChecked(null)

  }, [checked])


  return (
    <div className="App">
      <ShowAll toDo={toDo} />
      <Calendar value={value} onChange={setValue} toDo={toDo} api={api}/>
      <aside className="App right-aside">
        <Add add={item => setNewTask(item)} />
        <ShowDay value={value} toDo={toDo} check={done => setChecked(done)} />
      </aside>
    </div>
  );
}

export default App;
