// const temp = []

// const pushToDo = (obj) => {
//   for(let i in obj)  temp.push(obj[i])
//   return temp
// }


export default function getList(cb) {
  fetch(`http://localhost:3010/users/`)
    .then(res => res.json())
    .then(data =>  cb(data) 
    )
}



