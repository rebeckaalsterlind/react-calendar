
export function fetchAPI(cb, apiDate) {

  fetch(`http://sholiday.faboul.se/dagar/v2.1/${apiDate.YYYY}/${apiDate.MM}`)
    .then(res => res.json())
    .then(data => cb(data.dagar) 
 )

}

export function postList(item, date, destination) {

  fetch(`http://localhost:3010/toDo/${destination}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"item": item, "date": date})
  });

}


export default function getList(cb) {

  fetch(`http://localhost:3010/toDo/`)
    .then(res => res.json())
    .then(data => {
      //sort after date
      for (let i in data) new Date (Date.parse(data[i].date))
      data.sort((a,b) => new Date(a.date) - new Date(b.date));

      cb(data) 
    }
  )

}