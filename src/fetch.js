//API
export function fetchAPI(cb, apiDate) {

  fetch(`http://sholiday.faboul.se/dagar/v2.1/${apiDate.YYYY}/${apiDate.MM}`)
    .then(res => res.json())
    .then(data => cb(data.dagar) 
 )

}

//POST
export function postList(item, date, endpoint) {

  fetch(`https://to-do-calendar-react.herokuapp.com/toDo/${endpoint}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"item": item, "date": date})
  });

}

//GET
export default function getList(cb) {

  fetch(`https://to-do-calendar-react.herokuapp.com/toDo`)
    .then(res => res.json())
    .then(data => cb(data) 
  )

}