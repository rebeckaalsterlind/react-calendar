import React, {useState} from 'react';


function Add({value, toDo}) {

  const date = value.clone()._d.toString().slice(0, 10)
  const [list, setList] = useState({...toDo})
  const [item, setItem] = useState("")


  const handleSubmit = (evt) => {
    evt.preventDefault();

    let result = toDo.find((date) => date.date === "mon")
     
 console.log('result', result.task);
    //callback
  }

  return (
    <div className="Add">
      <h2>Add To Do:</h2>
    {date}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(evt) => setItem(evt.target.value)}/>
        <button type="submit" >Save</button>
      </form>
    </div>
  );
}

export default Add;

// [
//  {
//    "date": "mon",
//    "task": [
//      "clean",
//      "shop",
//      "pay bills"
//    ]
//  },
//  {
//   "date": "tue",
//   "task": [
//     "run",
//     "sleep",
//     "cook"
//   ]
// }
// ]