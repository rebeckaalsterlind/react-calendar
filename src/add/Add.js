import React, {useState} from 'react';
import './add.css';


function Add({add}) {

  const [item, setItem] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    add(
      item.charAt(0).toUpperCase() + 
      item.slice(1)
    );
    setItem("");
  }

  return (
    <div className="Add">
      <h2>Add To Do:</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" required value={item} onChange={(evt) => setItem(evt.target.value)}/>
        <button id="save" type="submit" >Save</button>
      </form>
    </div>
  );
}

export default Add;

