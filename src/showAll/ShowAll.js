import React, { useState, useEffect } from 'react';
import './showAll.css';

function ShowAll({toDo}) {
  
  const [list, setList] = useState(...toDo);

useEffect(() => {
  console.log('in ue in show all', toDo);
  for (let i in toDo) new Date (Date.parse(toDo[i].date))
  toDo.sort((a,b) => new Date(a.date) - new Date(b.date));

}, [list])


 
  return (
    <div id="allToDo" className="ShowAll" >
      <h2>All To Do</h2>
        {(toDo.length !== 0) ? 
        toDo.map((item,index) => 
          <div key={index}>
            <h3 key={index}>{item.date}</h3>
            { 
              item.item.map((sub, subindex) =>
              <p key={subindex}>{sub.task}</p>)
            }
          </div>
        ) :
      <p>You have no deadlines at all!</p>}
    </div>
  );
}   

export default ShowAll;
