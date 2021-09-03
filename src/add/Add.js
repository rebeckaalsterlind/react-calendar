import React, {useState} from 'react';


function Add({value, toDo}) {

  const date = value.clone()._d.toString().slice(0, 10)
  const [list, setList] = useState(toDo)
  const [item, setItem] = useState("")

  const arr = [...toDo]

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let result = arr.find((date) => date.date === "wed")

    if(result !== undefined) {
      result.task.push(item)
      setList(arr)
    } else {
      setList([
        ...arr,
        {"date": date, "task": [item]}
      ])
    }
  }

  return (
    <div className="Add">
      <h2>Add To Do:</h2>
 
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder={date} onChange={(evt) => setItem(evt.target.value)}/>
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