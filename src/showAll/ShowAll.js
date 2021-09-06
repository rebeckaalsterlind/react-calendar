import React, { useState, useEffect } from 'react';
import './showAll.css';

function ShowAll({toDo}) {
  
  const [list, setList] = useState(toDo);

  useEffect(() => {
    setList(toDo);
  }, [toDo]);

  for (let i in list) new Date (Date.parse(list[i].date))
  list.sort((a,b) => new Date(a.date) - new Date(b.date));
 
  return (
    <div id="allToDo" className="ShowAll">
      <h2>All To Do</h2>
        {list.map((item,index) => 
          <div key={index}>
            <h3 key={index}>{item.date}</h3>
            { 
              item.item.map((sub, subindex) =>
              <p key={subindex}>{sub.task}</p>)
            }
          </div>
        )}
    </div>
  );
}   

export default ShowAll;
