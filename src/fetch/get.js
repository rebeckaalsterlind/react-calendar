
export default function getList(cb) {

  fetch(`http://localhost:3010/users/`)
    .then(res => res.json())
    .then(data => {
      //sort after date
      for (let i in data) new Date (Date.parse(data[i].date))
      data.sort((a,b) => new Date(a.date) - new Date(b.date));

      cb(data) 
    }
  )

}



