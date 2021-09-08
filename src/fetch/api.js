
export default function fetchAPI(cb) {

  fetch(`http://sholiday.faboul.se/dagar/v2.1/2015/02`)
    .then(res => res.json())
    .then(data => {
      console.log('api', data.dagar);
    }
  )

}
