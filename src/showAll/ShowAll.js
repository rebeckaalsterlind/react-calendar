import React, { useEffect } from 'react';
import './showAll.css';

function ShowAll({toDo}) {
  
  return (
    <div id="allToDo" className="ShowAll" >
      <h2>All To Do</h2>
        {(toDo.length !== 0) ? 
        toDo.map((group,index) => 
          <div key={index}>
            {(group.item.length > 0) && <h5 key={group.date}>{group.date}</h5>}
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
