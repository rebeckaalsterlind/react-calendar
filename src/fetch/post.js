
export default function postList(item, date, destination) {
console.log('item in post', item);
  fetch(`http://localhost:3010/users/${destination}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"item": item, "date": date})
  });

}

