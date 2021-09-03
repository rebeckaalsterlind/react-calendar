import React, { useState } from 'react';
import moment from 'moment';
import './App.css';
import Calendar from './Calendar'


function App() {
  const [value, setValue] = useState(moment());

  return (
    <div className="App">
      <Calendar value={value} onChange={setValue} />
    </div>
  );
}

export default App;
