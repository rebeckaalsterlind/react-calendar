import React from 'react';
import './showAll.css';

interface Props {
  toDo: Object[]
}

function ShowAll({toDo}:Props) {
  
  return (
    <aside className="ShowAll" >
      <h2>TO DO:</h2>
        {(toDo.length !== 0) ? 
        toDo.map((group:any, index:number) => 
        <div key={index}>
          {(group.item.length > 0) && <h5 key={group.date}>{group.date}</h5>}
          <ul>
          { 
            group.item.map((single:any) =>
            <li key={single.id}>{single.task}</li>)
          }
          </ul>
        </div>
        ) :
      <p>You have no deadlines at all!</p>}
    </aside>
  );
}   

export default ShowAll;
