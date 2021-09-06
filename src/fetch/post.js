
export default function postList(item, date, destination) {

  fetch(`http://localhost:3010/users/${destination}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"item": item, "date": date})
  });

}

