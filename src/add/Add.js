import React, {useState} from 'react';


function Add({add}) {

  const [item, setItem] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    add(item);
  }

  return (
    <div className="Add">
      <h2>Add To Do:</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" onChange={(evt) => setItem(evt.target.value)}/>
        <button type="submit" >Save</button>
      </form>
    </div>
  );
}

export default Add;

