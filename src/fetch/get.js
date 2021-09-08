
export default function getList(cb) {

  fetch(`http://localhost:3010/users/`)
    .then(res => res.json())
    .then(data => cb(data) 
  )

}



