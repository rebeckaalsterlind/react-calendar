import './showAll.css';

function ShowAll({toDo}) {


  return (
    <div className="ShowAll">
      <h2>All To Do</h2>
 
            {toDo.map((item,index) => 
              <div>
                <h3 key={index}>{item.date}</h3>
                { 
                  item.task.map((sub, subindex) =>
                  <p key={subindex}>{sub}</p>)
                }
              </div>

            )}
  
    </div>
  );
}   

export default ShowAll;