//API
export function fetchAPI(cb, apiDate) {

  fetch(`http://sholiday.faboul.se/dagar/v2.1/${apiDate.YYYY}/${apiDate.MM}`)
    .then(res => res.json())
    .then(data => cb(data.dagar) 
 )

}

//POST
export function postList(item, date, endpoint) {

  fetch(`http://localhost:3010/toDo/${endpoint}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"item": item, "date": date})
  });

}

//GET
export default function getList(cb) {

  fetch(`http://localhost:3010/toDo/`)
    .then(res => res.json())
    .then(data => cb(data) 
  )

}