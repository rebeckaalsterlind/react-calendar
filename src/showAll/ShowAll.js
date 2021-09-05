import './showAll.css';

function ShowAll({toDo}) {

  
  for (let i in toDo) {
    new Date (Date.parse(toDo[i].date))
  }

  toDo.sort((a,b) => new Date(a.date) - new Date(b.date));

 
  return (
    <div id="allToDo" className="ShowAll">
      <h2>All To Do</h2>
        {toDo.map((item,index) => 
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
