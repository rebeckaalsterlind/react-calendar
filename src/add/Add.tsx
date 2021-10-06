import React, {useState} from 'react';
import './add.css';

interface Props {
  add(item:any): void,
  value: any
}

interface State {
  item: string
}

function Add({add, value}: Props, state:State) {
  const date: string = value._d.toString().slice(0, 10);
  const [item, setItem] = useState("");

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
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
        <input type="text" placeholder={date} required value={item} onChange={(evt) => setItem(evt.target.value)}/>
        <button id="save" type="submit" >Save</button>
      </form>
    </div>
  );
}

export default Add;

