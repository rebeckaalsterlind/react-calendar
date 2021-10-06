import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './App.css';

import Calendar from './calendar/calendar/Calendar';
import Add from './add/Add';
import ShowAll from './showAll/ShowAll';
import ShowDay from './showDay/ShowDay';
import getList, {fetchAPI, postList} from './fetch';

interface State {
  value: any,
  toDo: Object[],
  newTask: null | string,
  checked: null | Object,
  api: Object,
  apiDate: Object,
}

function App(state: State) {

  const [value, setValue] = useState(moment());
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState(null);
  const [checked, setChecked] = useState(null);
  const [api, setApi] = useState();
  const [apiDate, setApiDate] = useState(
    {"MM": value.clone().format("MM"), 
    "YYYY": value.clone().format("YYYY")
  });
  

  //get dates for fetching api
  let month: string;

  useEffect(() => {
    month = value.clone().format("MM");

    if(month !== apiDate.MM) setApiDate({
      "MM": value.clone().format("MM"), 
      "YYYY": value.clone().format("YYYY") 
    })

  }, [value])

  //fetch API
  useEffect(() => {
    fetchAPI((data:any):any => setApi(data), apiDate);
  }, [apiDate]) 

  //fetch toDo funktion 
  function fetch(state:any, endpoint:string) {  

    const date:string = value.format("YYYY-MM-DD");

    if(state !== null) postList(state, date, endpoint);
    getList((data:any) => setToDo(data));

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
      <main>
        <Calendar value={value} onChange={setValue} toDo={toDo} api={api}/>
      </main>
      <aside className="right-aside">
        <Add value={value} add={item => setNewTask(item)} />
        <ShowDay value={value} toDo={toDo} check={done => setChecked(done)} />
      </aside>
    </div>
  );
}

export default App;
