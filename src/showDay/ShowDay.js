import React, { useState } from 'react';
import moment from 'moment';

function ShowDay({value}) {
  const date = value.clone()._d.toString().slice(0, 10)
  return (
    <div className="ShowDay">
      <h2>{date}</h2>
  
     from ShowDay
    </div>
  );
}

export default ShowDay;
