
export default function postList(newTask, date) {

  fetch("http://localhost:3010/users/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"newTask": newTask, "date": date})
  });

}

