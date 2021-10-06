export function fetchAPI(cb:any, apiDate:any):void {

  fetch(`https://sholiday.faboul.se/dagar/v2.1/${apiDate.YYYY}/${apiDate.MM}`)
    .then(res => res.json())
    .catch(error => {
      throw new Error("Ooops..  failed to fetch!")
    })
    .then(data => cb(data.dagar))
}

//POST
export function postList(item:any, date:any, endpoint:any) {
  
  fetch(`https://to-do-calendar-react.herokuapp.com/toDo/${endpoint}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"item": item, "date": date})
  });

}

//GET
export default function getList(cb:any) {

  fetch(`https://to-do-calendar-react.herokuapp.com/toDo`)
    .then(res => res.json())
    .then(data => cb(data) 
  )

}

