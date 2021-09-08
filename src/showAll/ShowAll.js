import React, { useEffect } from 'react';
import './showAll.css';

function ShowAll({toDo}) {
  
// uppdatera inte efter checked utan stryk över? och uppdatera nästa gång?

  useEffect(() => {

    for (let i in toDo) new Date (Date.parse(toDo[i].date))
    toDo.sort((a,b) => new Date(a.date) - new Date(b.date));

  }, [toDo])
 
  return (
    <div id="allToDo" className="ShowAll" >
      <h2>All To Do</h2>
        {(toDo.length !== 0) ? 
        toDo.map((group,index) => 
          <div key={index}>
            <h5 key={group.date}>{group.date}</h5>
            <ul>
            { 
              group.item.map((single) =>
              <li key={single.id}>{single.task}</li>)
            }
            </ul>
          </div>
        ) :
      <p>You have no deadlines at all!</p>}
    </div>
  );
}   

export default ShowAll;
